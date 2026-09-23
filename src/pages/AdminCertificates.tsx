import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { QRCodeCanvas } from "qrcode.react";
import { supabase } from "@/lib/supabase";
import { 
  Loader2, 
  Trash2, 
  Edit2, 
  QrCode, 
  RefreshCcw, 
  ExternalLink, 
  Copy, 
  Check, 
  Briefcase, 
  Award, 
  Search, 
  Sparkles,
  Download,
  Code
} from "lucide-react";
import Seo from "@/components/Seo";

const POPULAR_DOMAINS = [
  "Full Stack Web Development",
  "Artificial Intelligence & ML",
  "Data Science & Analytics",
  "Python Development",
  "Cloud Computing & DevOps",
  "Cybersecurity",
  "IoT & Embedded Systems",
  "Mobile App Development",
  "UI/UX Design"
];

const formSchema = z.object({
  certificate_type: z.enum(["internship", "workshop"]),
  certificate_id: z.string().min(2, "Certificate ID is required"),
  candidate_name: z.string().min(2, "Candidate name is required"),
  college_name: z.string().min(2, "College name is required"),
  workshop_name: z.string().min(2, "Domain or workshop topic is required"),
  department_name: z.string().min(2, "Department name is required"),
  start_date: z.string().min(1, "Start date is required"),
  end_date: z.string().min(1, "End date is required"),
});

type Certificate = z.infer<typeof formSchema> & { id: string; created_at: string };

const AdminCertificates = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeCert, setActiveCert] = useState<{ id: string; certificate_id: string; type: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "internship" | "workshop">("all");
  const [searchFilter, setSearchFilter] = useState("");
  const [showSqlGuide, setShowSqlGuide] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      certificate_type: "internship",
      certificate_id: "",
      candidate_name: "",
      college_name: "",
      workshop_name: "",
      department_name: "",
      start_date: "",
      end_date: "",
    },
  });

  const selectedType = form.watch("certificate_type");

  // Fetch Certificates History
  const { data: certificates, isLoading: isFetching } = useQuery({
    queryKey: ['certificates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return (data || []).map((item: any) => {
        // Normalize type
        const isIntern = item.certificate_type === 'internship' ||
          item.workshop_name?.toLowerCase().includes('intern') ||
          item.certificate_id?.toLowerCase().includes('int');
        return {
          ...item,
          certificate_type: isIntern ? 'internship' : (item.certificate_type || 'workshop')
        } as Certificate;
      });
    }
  });

  // Suggest Next Certificate ID based on type and existing records
  const suggestNextId = (type: "internship" | "workshop") => {
    const year = new Date().getFullYear();
    const prefix = type === "internship" ? `LBX-INT-${year}-` : `LBX-WS-${year}-`;
    const count = (certificates || []).filter(c => c.certificate_type === type).length + 1;
    const formatted = `${prefix}${String(count).padStart(3, '0')}`;
    form.setValue("certificate_id", formatted);
  };

  // Create or Update Mutation with graceful backward-compatibility
  const saveMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      if (editingId) {
        // Try update with certificate_type
        let res = await supabase
          .from('certificates')
          .update(values)
          .eq('id', editingId)
          .select()
          .single();

        // If error due to missing certificate_type column in Postgres, fallback without it
        if (res.error && res.error.message?.includes('certificate_type')) {
          const { certificate_type, ...fallbackVals } = values;
          res = await supabase
            .from('certificates')
            .update(fallbackVals)
            .eq('id', editingId)
            .select()
            .single();
        }

        if (res.error) throw res.error;
        return res.data;
      } else {
        // Try insert with certificate_type
        let res = await supabase
          .from('certificates')
          .insert([values])
          .select()
          .single();

        // If error due to missing certificate_type column, fallback
        if (res.error && res.error.message?.includes('certificate_type')) {
          const { certificate_type, ...fallbackVals } = values;
          res = await supabase
            .from('certificates')
            .insert([fallbackVals])
            .select()
            .single();
        }

        if (res.error) throw res.error;
        return res.data;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['certificates'] });
      setActiveCert({
        id: data.id,
        certificate_id: data.certificate_id || form.getValues("certificate_id"),
        type: selectedType
      });
      setEditingId(null);
      form.reset({
        certificate_type: selectedType,
        certificate_id: "",
        candidate_name: "",
        college_name: "",
        workshop_name: "",
        department_name: "",
        start_date: "",
        end_date: "",
      });
      toast({
        title: editingId ? "Certificate Updated" : "Certificate Generated Successfully",
        description: `QR Code is ready for ${data.candidate_name}. You can download the QR image.`,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to save certificate.",
        variant: "destructive",
      });
    }
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('certificates').delete().eq('id', id);
      if (error) throw error;
      return id;
    },
    onSuccess: (deletedId) => {
      queryClient.invalidateQueries({ queryKey: ['certificates'] });
      if (activeCert?.id === deletedId) setActiveCert(null);
      if (editingId === deletedId) {
        setEditingId(null);
        form.reset();
      }
      toast({ title: "Certificate Deleted" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete certificate.",
        variant: "destructive",
      });
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    saveMutation.mutate(values);
  }

  const handleEdit = (cert: Certificate) => {
    setEditingId(cert.id);
    setActiveCert({
      id: cert.id,
      certificate_id: cert.certificate_id,
      type: cert.certificate_type || "internship"
    });
    form.reset({
      certificate_type: (cert.certificate_type as "internship" | "workshop") || "internship",
      certificate_id: cert.certificate_id,
      candidate_name: cert.candidate_name,
      college_name: cert.college_name,
      workshop_name: cert.workshop_name,
      department_name: cert.department_name,
      start_date: cert.start_date,
      end_date: cert.end_date,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setActiveCert(null);
    form.reset({
      certificate_type: "internship",
      certificate_id: "",
      candidate_name: "",
      college_name: "",
      workshop_name: "",
      department_name: "",
      start_date: "",
      end_date: "",
    });
  };

  // Base canonical domain for QR Codes
  const canonicalDomain = window.location.origin.includes("localhost")
    ? window.location.origin
    : "https://www.lifeboxnextgen.com";

  const verificationUrl = activeCert
    ? `${canonicalDomain}/verify/${activeCert.certificate_id || activeCert.id}`
    : "";

  const handleCopyLink = () => {
    if (!verificationUrl) return;
    navigator.clipboard.writeText(verificationUrl);
    setCopied(true);
    toast({ title: "Verification URL Copied" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQr = () => {
    const canvas = document.getElementById('certificate-qr-canvas') as HTMLCanvasElement;
    if (canvas && activeCert) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${activeCert.type}-qr-${activeCert.certificate_id || activeCert.id}.png`;
      link.href = url;
      link.click();
      toast({
        title: "QR Code Downloaded",
        description: "High-resolution QR code PNG ready to place on certificate design.",
      });
    }
  };

  // Filtered certificates list
  const filteredCertificates = (certificates || []).filter(cert => {
    const matchesType = filterType === "all" || cert.certificate_type === filterType;
    const matchesSearch = searchFilter === "" || 
      cert.candidate_name?.toLowerCase().includes(searchFilter.toLowerCase()) ||
      cert.certificate_id?.toLowerCase().includes(searchFilter.toLowerCase()) ||
      cert.workshop_name?.toLowerCase().includes(searchFilter.toLowerCase()) ||
      cert.college_name?.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-start relative overflow-hidden bg-black text-white px-4 sm:px-6">
      <Seo 
        title="Admin - Issue Certificates & QR Generator | LifeBox NextGen" 
        description="Admin dashboard to issue verified Internship and Workshop physical & digital certificates with QR codes and LinkedIn verification." 
      />

      {/* Cyber Ambient Background Glows */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-6xl z-10 space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-bold font-['Space_Grotesk'] uppercase tracking-wider text-white flex items-center gap-3">
              Certificate <span className="neon-text-cyan">Issuance Hub</span>
            </h1>
            <p className="text-slate-400 font-['Inter'] text-sm mt-1">
              Issue accredited Internship & Workshop certificates with verified QR codes and 1-click LinkedIn credentials.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSqlGuide(!showSqlGuide)}
            className="rounded-none border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-['Space_Grotesk'] text-xs uppercase"
          >
            <Code className="w-4 h-4 mr-2" />
            {showSqlGuide ? "Hide Supabase Info" : "Supabase Schema Note"}
          </Button>
        </div>

        {/* Supabase Schema Helper Notice (Collapsible) */}
        {showSqlGuide && (
          <div className="bg-cyan-950/30 border border-cyan-500/30 p-5 rounded-none font-mono text-xs text-cyan-300 space-y-2">
            <p className="font-bold uppercase tracking-wider text-white">Database Compatibility</p>
            <p className="text-slate-300">
              The application automatically works with your existing certificates table. To enable the optional dedicated certificate type column in Supabase, execute in your SQL Editor:
            </p>
            <div className="bg-black/80 p-3 border border-cyan-500/20 text-cyan-400 rounded select-all">
              ALTER TABLE certificates ADD COLUMN IF NOT EXISTS certificate_type text DEFAULT 'internship';
            </div>
          </div>
        )}

        {/* Top Section: Form and QR Code side-by-side */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Side (7 Cols) */}
          <div className="lg:col-span-7 tech-card tech-border-glow p-6 sm:p-8 bg-black/80 space-y-6">
            
            {/* Header & Type Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  {editingId ? (
                    <>Edit Certificate</>
                  ) : selectedType === "internship" ? (
                    <><Briefcase className="w-6 h-6 text-cyan-400" /> Issue Internship Certificate</>
                  ) : (
                    <><Award className="w-6 h-6 text-cyan-400" /> Issue Workshop Certificate</>
                  )}
                </h2>
                {editingId && (
                  <Button variant="ghost" onClick={handleCancelEdit} className="text-slate-400 hover:text-white text-xs">
                    Cancel Edit
                  </Button>
                )}
              </div>

              {/* Certificate Type Segmented Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 border border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    form.setValue("certificate_type", "internship");
                    if (!form.getValues("certificate_id")) suggestNextId("internship");
                  }}
                  className={`flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-['Space_Grotesk'] uppercase tracking-wider transition-all ${
                    selectedType === "internship"
                      ? "bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  Internship
                </button>
                <button
                  type="button"
                  onClick={() => {
                    form.setValue("certificate_type", "workshop");
                    if (!form.getValues("certificate_id")) suggestNextId("workshop");
                  }}
                  className={`flex items-center justify-center gap-2 py-2.5 text-xs sm:text-sm font-['Space_Grotesk'] uppercase tracking-wider transition-all ${
                    selectedType === "workshop"
                      ? "bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Award className="w-4 h-4" />
                  Workshop
                </button>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                
                {/* Certificate ID */}
                <FormField
                  control={form.control}
                  name="certificate_id"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">
                          Certificate ID / Number
                        </FormLabel>
                        <button
                          type="button"
                          onClick={() => suggestNextId(selectedType)}
                          className="text-[11px] text-cyan-400 hover:underline font-mono"
                        >
                          Auto-suggest ID
                        </button>
                      </div>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder={selectedType === "internship" ? "e.g. LBX-INT-2025-001" : "e.g. LBX-WS-2025-001"} 
                          className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-mono text-sm" 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Candidate Name */}
                <FormField
                  control={form.control}
                  name="candidate_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">
                        Candidate Full Name
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="e.g. John Doe"
                          className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Domain / Role / Workshop Name */}
                <FormField
                  control={form.control}
                  name="workshop_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">
                        {selectedType === "internship" ? "Internship Domain / Role" : "Workshop Name / Title"}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder={selectedType === "internship" ? "e.g. Full Stack Web Development" : "e.g. Next-Gen AI & Robotics"}
                          className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />

                      {/* Quick Domain Suggestion Chips for Internship */}
                      {selectedType === "internship" && (
                        <div className="pt-2">
                          <p className="text-[11px] text-slate-500 font-['Space_Grotesk'] uppercase mb-1.5">
                            Quick-select popular internship domains:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {POPULAR_DOMAINS.map((domain) => (
                              <button
                                key={domain}
                                type="button"
                                onClick={() => form.setValue("workshop_name", domain)}
                                className={`text-[11px] px-2 py-0.5 border rounded-none font-['Inter'] transition-colors ${
                                  form.watch("workshop_name") === domain
                                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                                    : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/30"
                                }`}
                              >
                                {domain}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </FormItem>
                  )}
                />

                {/* College / Institution Name */}
                <FormField
                  control={form.control}
                  name="college_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">
                        College / University Name
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="e.g. Stanford Institute of Technology"
                          className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Department / Branch */}
                <FormField
                  control={form.control}
                  name="department_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">
                        Department / Branch
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="e.g. Computer Science and Engineering"
                          className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Dates Duration */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="start_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">
                          Start Date
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            {...field} 
                            className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="end_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">
                          End Date
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            {...field} 
                            className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={saveMutation.isPending} 
                  className="w-full btn-tech h-12 rounded-none mt-6 font-['Space_Grotesk'] tracking-wider uppercase"
                >
                  {saveMutation.isPending ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : editingId ? (
                    "Update Certificate"
                  ) : (
                    `Generate ${selectedType === "internship" ? "Internship" : "Workshop"} Certificate QR`
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* QR Code Side (5 Cols) */}
          <div className="lg:col-span-5 tech-card tech-border-glow p-6 sm:p-8 bg-black/80 flex flex-col items-center justify-center min-h-[460px] space-y-6">
            {activeCert ? (
              <div className="flex flex-col items-center text-center space-y-5 w-full">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-['Space_Grotesk'] uppercase tracking-wider font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  {activeCert.type === "internship" ? "Internship QR Code" : "Workshop QR Code"}
                </div>

                {/* QR Code Canvas */}
                <div className="p-4 bg-white rounded-lg shadow-[0_0_40px_rgba(0,255,255,0.25)] border border-white/20">
                  <QRCodeCanvas 
                    id="certificate-qr-canvas"
                    value={verificationUrl} 
                    size={220} 
                    level="H" 
                    includeMargin={true}
                  />
                </div>

                <div className="space-y-1 w-full px-2">
                  <p className="text-cyan-400 font-mono font-bold tracking-widest text-sm">
                    {activeCert.certificate_id}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono break-all px-2 bg-black/60 py-1.5 border border-white/10 select-all">
                    {verificationUrl}
                  </p>
                </div>

                {/* Download and Action Buttons */}
                <div className="flex flex-col gap-2 w-full pt-1">
                  <Button 
                    onClick={handleDownloadQr}
                    className="w-full btn-tech h-11 rounded-none flex items-center justify-center gap-2 font-['Space_Grotesk'] uppercase tracking-wider text-xs"
                  >
                    <Download className="w-4 h-4" />
                    Download High-Res QR Image (PNG)
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      onClick={handleCopyLink}
                      variant="outline"
                      className="rounded-none border-white/20 text-white hover:bg-white/10 h-10 text-xs font-['Space_Grotesk'] uppercase"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1.5 text-green-400" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                          Copy Link
                        </>
                      )}
                    </Button>

                    <Button 
                      onClick={() => window.open(verificationUrl, "_blank")}
                      variant="outline"
                      className="rounded-none border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 h-10 text-xs font-['Space_Grotesk'] uppercase flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Test Page
                    </Button>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 font-['Inter']">
                  Place this QR code on the certificate. When scanned by any camera, it will redirect directly to the verified page with the "Add to LinkedIn" button.
                </p>
              </div>
            ) : (
              <div className="text-slate-500 font-['Space_Grotesk'] text-center uppercase tracking-widest border border-dashed border-slate-800 w-full h-full min-h-[380px] flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-16 h-16 rounded-full bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center">
                  <QrCode className="w-8 h-8 opacity-40 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-wider">Awaiting Certificate Generation</p>
                  <p className="text-xs text-slate-500 lowercase mt-1 font-['Inter']">
                    fill out the form or click "Show QR Code" in the table below to generate or download the verification QR
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section: History Table */}
        <div className="tech-card tech-border-glow p-6 sm:p-8 bg-black/80 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold font-['Space_Grotesk'] uppercase tracking-wider text-white">
                Issued Certificates Registry
              </h2>
              <p className="text-xs text-slate-400 font-['Inter'] mt-0.5">
                Total Issued: {certificates?.length || 0} credentials
              </p>
            </div>

            {/* Filter Tabs & Refresh */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <div className="flex border border-white/10 p-0.5 bg-black">
                <button
                  onClick={() => setFilterType("all")}
                  className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] uppercase transition-colors ${
                    filterType === "all" ? "bg-cyan-500 text-black font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  All ({certificates?.length || 0})
                </button>
                <button
                  onClick={() => setFilterType("internship")}
                  className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] uppercase transition-colors ${
                    filterType === "internship" ? "bg-cyan-500 text-black font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Internships ({certificates?.filter(c => c.certificate_type === "internship").length || 0})
                </button>
                <button
                  onClick={() => setFilterType("workshop")}
                  className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] uppercase transition-colors ${
                    filterType === "workshop" ? "bg-cyan-500 text-black font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Workshops ({certificates?.filter(c => c.certificate_type === "workshop").length || 0})
                </button>
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => queryClient.invalidateQueries({ queryKey: ['certificates'] })} 
                className="rounded-none border-white/20 text-white hover:bg-white/10 h-8"
              >
                <RefreshCcw className="w-3.5 h-3.5 mr-1.5" /> Refresh
              </Button>
            </div>
          </div>

          {/* Search Filter Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search by candidate name, certificate ID, domain, or college..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="bg-black/60 border-white/15 pl-10 rounded-none text-white text-xs h-10 font-['Inter']"
            />
          </div>

          {isFetching ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
            </div>
          ) : filteredCertificates.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left font-['Inter'] text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider font-['Space_Grotesk'] text-xs">
                    <th className="pb-3 pr-3">Type</th>
                    <th className="pb-3 pr-4">Certificate ID</th>
                    <th className="pb-3 pr-4">Candidate</th>
                    <th className="pb-3 pr-4">Domain / Workshop</th>
                    <th className="pb-3 pr-4">College / Dept</th>
                    <th className="pb-3 pr-4">Duration</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCertificates.map((cert) => {
                    const isCertInternship = cert.certificate_type === "internship";
                    return (
                      <tr key={cert.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 pr-3">
                          <span className={`inline-flex items-center gap-1 text-[11px] font-['Space_Grotesk'] uppercase px-2 py-0.5 rounded font-medium ${
                            isCertInternship 
                              ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-300" 
                              : "bg-purple-500/10 border border-purple-500/30 text-purple-300"
                          }`}>
                            {isCertInternship ? <Briefcase className="w-3 h-3" /> : <Award className="w-3 h-3" />}
                            {isCertInternship ? "Intern" : "Workshop"}
                          </span>
                        </td>
                        <td className="py-4 pr-4 font-mono text-cyan-400 text-xs font-semibold">
                          {cert.certificate_id}
                        </td>
                        <td className="py-4 pr-4 font-medium text-white">
                          {cert.candidate_name}
                        </td>
                        <td className="py-4 pr-4 text-slate-200">
                          {cert.workshop_name}
                        </td>
                        <td className="py-4 pr-4 text-slate-400 text-xs">
                          <div>{cert.college_name}</div>
                          <div className="text-slate-500">{cert.department_name}</div>
                        </td>
                        <td className="py-4 pr-4 text-slate-400 text-xs font-mono">
                          {cert.start_date} <br/>to {cert.end_date}
                        </td>
                        <td className="py-4 text-right space-x-1 whitespace-nowrap">
                          {/* Show QR */}
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => {
                              setActiveCert({
                                id: cert.id,
                                certificate_id: cert.certificate_id,
                                type: cert.certificate_type || "internship"
                              });
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 h-8 w-8"
                            title="Show and Download QR Code"
                          >
                            <QrCode className="w-4 h-4" />
                          </Button>

                          {/* Open Verification */}
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => window.open(`${canonicalDomain}/verify/${cert.certificate_id || cert.id}`, "_blank")}
                            className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 h-8 w-8"
                            title="Open Public Verification Link"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>

                          {/* Edit */}
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleEdit(cert)}
                            className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 h-8 w-8"
                            title="Edit Certificate"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>

                          {/* Delete */}
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => {
                              if (window.confirm(`Are you sure you want to delete certificate ${cert.certificate_id}? This action cannot be undone.`)) {
                                deleteMutation.mutate(cert.id);
                              }
                            }}
                            className="text-red-400 hover:text-red-300 hover:bg-red-400/10 h-8 w-8"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 font-['Inter']">
              {searchFilter ? "No certificates found matching your search." : "No certificates issued yet."}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminCertificates;
