import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { Loader2, Trash2, Edit2, Copy, RefreshCcw, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import Seo from "@/components/Seo";
import * as OTPAuth from "otpauth";
import { QRCodeCanvas } from "qrcode.react";

// Set your admin passcode in .env or fallback to a default for testing
const ADMIN_PASSCODE = import.meta.env.VITE_ADMIN_PASSCODE || "ASAG3010";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  username: z.string().optional(),
  password: z.string().min(1, "Password is required"),
  url: z.string().optional(),
  notes: z.string().optional(),
});

type PasswordEntry = z.infer<typeof formSchema> & { id: string; created_at: string };

const AdminPasswords = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [loginStep, setLoginStep] = useState<"passcode" | "totp-setup" | "totp-verify">("passcode");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingDb, setIsCheckingDb] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [totpCode, setTotpCode] = useState("");
  const [totpSecret, setTotpSecret] = useState<string | null>(null);
  const [totpUri, setTotpUri] = useState<string | null>(null);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Generator states
  const [genLength, setGenLength] = useState(16);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  
  // Visibility toggles for the list
  const [visiblePasswords, setVisiblePasswords] = useState<Record<string, boolean>>({});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      username: "",
      password: "",
      url: "",
      notes: "",
    },
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      setIsCheckingDb(true);
      try {
        const { data, error } = await supabase
          .from('admin_settings')
          .select('totp_secret')
          .eq('id', 1)
          .single();

        if (data && data.totp_secret) {
          setTotpSecret(data.totp_secret);
          setLoginStep("totp-verify");
        } else {
          // Generate new if not in DB
          const secret = new OTPAuth.Secret({ size: 20 });
          const secretBase32 = secret.base32;
          setTotpSecret(secretBase32);
          
          const totp = new OTPAuth.TOTP({
            issuer: "LifeBox NextGen",
            label: "Admin Vault",
            algorithm: "SHA1",
            digits: 6,
            period: 30,
            secret: secret
          });
          
          setTotpUri(totp.toString());
          setLoginStep("totp-setup");
        }
      } catch (err) {
        console.error("DB Fetch Error (Assuming table doesn't exist or is empty)", err);
        // Fallback to setup if error occurs
        const secret = new OTPAuth.Secret({ size: 20 });
        const secretBase32 = secret.base32;
        setTotpSecret(secretBase32);
        
        const totp = new OTPAuth.TOTP({
          issuer: "LifeBox NextGen",
          label: "Admin Vault",
          algorithm: "SHA1",
          digits: 6,
          period: 30,
          secret: secret
        });
        
        setTotpUri(totp.toString());
        setLoginStep("totp-setup");
      }
      setIsCheckingDb(false);
    } else {
      toast({ title: "Access Denied", description: "Incorrect passcode.", variant: "destructive" });
    }
  };

  const handleTotpVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!totpSecret) return;

    const totp = new OTPAuth.TOTP({
      issuer: "LifeBox NextGen",
      label: "Admin Vault",
      algorithm: "SHA1",
      digits: 6,
      period: 30,
      secret: OTPAuth.Secret.fromBase32(totpSecret)
    });

    const delta = totp.validate({ token: totpCode, window: 1 });
    
    if (delta !== null) {
      if (loginStep === "totp-setup") {
        // Save to Supabase instead of localStorage
        const { error } = await supabase
          .from('admin_settings')
          .upsert({ id: 1, totp_secret: totpSecret });

        if (error) {
          toast({ title: "Database Error", description: "Could not save 2FA setup to database. Have you created the admin_settings table?", variant: "destructive" });
          return;
        }
      }
      setIsAuthenticated(true);
      toast({ title: "Access Granted" });
    } else {
      toast({ title: "Invalid Code", description: "The authenticator code is incorrect.", variant: "destructive" });
    }
  };

  const generatePassword = () => {
    let charset = "";
    if (includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    if (charset === "") {
      toast({ title: "Error", description: "Select at least one character type.", variant: "destructive" });
      return;
    }

    let result = "";
    for (let i = 0, n = charset.length; i < genLength; ++i) {
      result += charset.charAt(Math.floor(Math.random() * n));
    }
    form.setValue("password", result);
  };

  // Fetch Passwords
  const { data: passwords, isLoading: isFetching } = useQuery({
    queryKey: ['passwords'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('passwords')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as PasswordEntry[];
    },
    enabled: isAuthenticated, // Only fetch when authenticated
  });

  // Create or Update Mutation
  const saveMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      if (editingId) {
        const { data, error } = await supabase
          .from('passwords')
          .update(values)
          .eq('id', editingId)
          .select()
          .single();
        if (error) throw error;
        return data;
      } else {
        const { data, error } = await supabase
          .from('passwords')
          .insert([values])
          .select()
          .single();
        if (error) throw error;
        return data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['passwords'] });
      setEditingId(null);
      form.reset();
      toast({
        title: editingId ? "Password Updated" : "Password Saved",
        description: "Successfully stored in database.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to save password.",
        variant: "destructive",
      });
    }
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('passwords').delete().eq('id', id);
      if (error) throw error;
      return id;
    },
    onSuccess: (deletedId) => {
      queryClient.invalidateQueries({ queryKey: ['passwords'] });
      if (editingId === deletedId) {
        setEditingId(null);
        form.reset();
      }
      toast({ title: "Entry Deleted" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete entry.",
        variant: "destructive",
      });
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    saveMutation.mutate(values);
  }

  const handleEdit = (entry: PasswordEntry) => {
    setEditingId(entry.id);
    form.reset({
      title: entry.title,
      username: entry.username || "",
      password: entry.password,
      url: entry.url || "",
      notes: entry.notes || "",
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied to clipboard" });
  };

  const toggleVisibility = (id: string) => {
    setVisiblePasswords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center bg-black text-white px-6">
        <Seo title="Admin - Vault Access" description="Secure access to the password vault." />
        <div className="tech-card tech-border-glow p-8 bg-black/80 max-w-md w-full">
          <div className="flex flex-col items-center mb-6">
            {loginStep === "passcode" ? (
              <Lock className="w-12 h-12 text-cyan-400 mb-4" />
            ) : (
              <ShieldCheck className="w-12 h-12 text-cyan-400 mb-4" />
            )}
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] uppercase tracking-wider text-white">
              {loginStep === "passcode" ? "Restricted Vault" : "Two-Factor Auth"}
            </h2>
            <p className="text-slate-400 text-sm mt-2 text-center">
              {loginStep === "passcode" 
                ? "Enter passcode to access the password generator and manager."
                : loginStep === "totp-setup"
                ? "Scan the QR code with your Authenticator App (Google, Authy), then enter the 6-digit code below."
                : "Enter the 6-digit code from your Authenticator App."}
            </p>
          </div>
          
          {loginStep === "passcode" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <Input 
                type="password" 
                placeholder="Enter passcode" 
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-mono text-center"
                autoFocus
              />
              <Button type="submit" disabled={isCheckingDb} className="w-full btn-tech h-12 rounded-none">
                {isCheckingDb ? <Loader2 className="animate-spin w-5 h-5" /> : "Verify Passcode"}
              </Button>
            </form>
          )}

          {(loginStep === "totp-setup" || loginStep === "totp-verify") && (
            <form onSubmit={handleTotpVerify} className="space-y-6">
              {loginStep === "totp-setup" && totpUri && (
                <div className="flex justify-center bg-white p-4 rounded-lg w-fit mx-auto">
                  <QRCodeCanvas value={totpUri} size={200} level="M" />
                </div>
              )}
              
              <Input 
                type="text" 
                placeholder="Enter 6-digit code" 
                value={totpCode}
                onChange={(e) => setTotpCode(e.target.value)}
                className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-mono text-center text-lg tracking-[0.2em]"
                maxLength={6}
                autoFocus
              />
              <Button type="submit" className="w-full btn-tech h-12 rounded-none">
                {loginStep === "totp-setup" ? "Verify & Save Setup" : "Unlock Vault"}
              </Button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-start relative overflow-hidden bg-black text-white px-6">
      <Seo title="Admin - Password Manager" description="Highly confidential password generator and manager." />
      
      <div className="w-full max-w-6xl z-10 space-y-8">
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Generator Side */}
          <div className="tech-card tech-border-glow p-8 bg-black/80">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold font-['Space_Grotesk'] uppercase tracking-wider text-cyan-400">
                Password Generator
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs block mb-2">Length: {genLength}</label>
                <input 
                  type="range" 
                  min="8" max="64" 
                  value={genLength} 
                  onChange={(e) => setGenLength(parseInt(e.target.value))}
                  className="w-full accent-cyan-400"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2 text-sm text-slate-300">
                  <input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} className="accent-cyan-400" />
                  <span>Uppercase (A-Z)</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-slate-300">
                  <input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} className="accent-cyan-400" />
                  <span>Lowercase (a-z)</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-slate-300">
                  <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="accent-cyan-400" />
                  <span>Numbers (0-9)</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-slate-300">
                  <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="accent-cyan-400" />
                  <span>Symbols (!@#$)</span>
                </label>
              </div>

              <Button onClick={generatePassword} className="w-full bg-slate-800 hover:bg-slate-700 text-white h-12 rounded-none border border-slate-600">
                Generate Secure Password
              </Button>
            </div>
          </div>

          {/* Form Side */}
          <div className="tech-card tech-border-glow p-8 bg-black/80">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold font-['Space_Grotesk'] uppercase tracking-wider text-cyan-400">
                {editingId ? "Edit Entry" : "Save Entry"}
              </h2>
              {editingId && (
                <Button variant="ghost" onClick={() => { setEditingId(null); form.reset(); }} className="text-slate-400 hover:text-white">
                  Cancel Edit
                </Button>
              )}
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Title (App/Site)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. Gmail" className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 rounded-none font-['Inter']" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Username/Email</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 rounded-none font-['Inter']" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Website URL</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 rounded-none font-['Inter']" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Password</FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 rounded-none font-mono" />
                          <Button type="button" variant="outline" onClick={() => copyToClipboard(field.value)} className="rounded-none border-white/20 px-3">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Notes</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 rounded-none font-['Inter']" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={saveMutation.isPending} className="w-full btn-tech h-12 rounded-none mt-4">
                  {saveMutation.isPending ? <Loader2 className="animate-spin w-5 h-5" /> : (editingId ? "Update Entry" : "Save to Vault")}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Vault Table */}
        <div className="tech-card tech-border-glow p-8 bg-black/80">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold font-['Space_Grotesk'] uppercase tracking-wider text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-cyan-400" /> Secure Vault
            </h2>
            <Button variant="outline" size="sm" onClick={() => queryClient.invalidateQueries({ queryKey: ['passwords'] })} className="rounded-none border-white/20 text-white hover:bg-white/10">
              <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
            </Button>
          </div>

          <div className="bg-blue-950/30 border border-blue-500/20 p-4 rounded-md mb-6 font-mono text-sm text-blue-300">
            <p>Ensure you have created BOTH tables in Supabase SQL Editor:</p>
            <code className="block mt-2 opacity-80 whitespace-pre-wrap">
              -- For storing passwords
              CREATE TABLE IF NOT EXISTS passwords (
                id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
                title text NOT NULL,
                username text,
                password text NOT NULL,
                url text,
                notes text,
                created_at timestamp with time zone DEFAULT now() NOT NULL
              );

              -- For storing 2FA authenticator secret
              CREATE TABLE IF NOT EXISTS admin_settings (
                id integer PRIMARY KEY DEFAULT 1,
                totp_secret text NOT NULL
              );
            </code>
          </div>

          {isFetching ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
            </div>
          ) : passwords && passwords.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left font-['Inter'] text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider font-['Space_Grotesk'] text-xs">
                    <th className="pb-3 pr-4">Title</th>
                    <th className="pb-3 pr-4">Username/Email</th>
                    <th className="pb-3 pr-4">Password</th>
                    <th className="pb-3 pr-4">URL</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {passwords.map((entry) => (
                    <tr key={entry.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                      <td className="py-4 pr-4 font-medium text-white">{entry.title}</td>
                      <td className="py-4 pr-4 text-slate-300">{entry.username || '-'}</td>
                      <td className="py-4 pr-4 font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-cyan-400">
                            {visiblePasswords[entry.id] ? entry.password : '••••••••••••••••'}
                          </span>
                          <button onClick={() => toggleVisibility(entry.id)} className="text-slate-500 hover:text-white transition-colors">
                            {visiblePasswords[entry.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </td>
                      <td className="py-4 pr-4 text-slate-400">
                        {entry.url ? (
                          <a href={entry.url.startsWith('http') ? entry.url : `https://${entry.url}`} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 hover:underline">
                            {entry.url}
                          </a>
                        ) : '-'}
                      </td>
                      <td className="py-4 text-right space-x-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => copyToClipboard(entry.password)}
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 h-8 w-8"
                          title="Copy Password"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleEdit(entry)}
                          className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 h-8 w-8"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this entry? This action cannot be undone.')) {
                              deleteMutation.mutate(entry.id);
                            }
                          }}
                          className="text-red-400 hover:text-red-300 hover:bg-red-400/10 h-8 w-8"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 font-['Inter']">
              Vault is empty. Generate and save a password to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPasswords;
