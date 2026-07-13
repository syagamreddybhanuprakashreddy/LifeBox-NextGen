import { useState, useEffect } from "react";
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
import { Loader2, Trash2, Edit2, QrCode, RefreshCcw } from "lucide-react";
import Seo from "@/components/Seo";

const formSchema = z.object({
  certificate_id: z.string().min(2, "Certificate ID is required"),
  candidate_name: z.string().min(2, "Candidate name is required"),
  college_name: z.string().min(2, "College name is required"),
  workshop_name: z.string().min(2, "Workshop name is required"),
  department_name: z.string().min(2, "Department name is required"),
  start_date: z.string().min(1, "Start date is required"),
  end_date: z.string().min(1, "End date is required"),
});

type Certificate = z.infer<typeof formSchema> & { id: string; created_at: string };

const AdminCertificates = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [generatedId, setGeneratedId] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      certificate_id: "",
      candidate_name: "",
      college_name: "",
      workshop_name: "",
      department_name: "",
      start_date: "",
      end_date: "",
    },
  });

  // Fetch History
  const { data: certificates, isLoading: isFetching } = useQuery({
    queryKey: ['certificates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Certificate[];
    }
  });

  // Create or Update Mutation
  const saveMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      if (editingId) {
        const { data, error } = await supabase
          .from('certificates')
          .update(values)
          .eq('id', editingId)
          .select()
          .single();
        if (error) throw error;
        return data;
      } else {
        const { data, error } = await supabase
          .from('certificates')
          .insert([values])
          .select()
          .single();
        if (error) throw error;
        return data;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['certificates'] });
      setGeneratedId(data.id);
      setEditingId(null);
      form.reset();
      toast({
        title: editingId ? "Certificate Updated" : "Certificate Generated",
        description: "QR Code is ready to be downloaded.",
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
      if (generatedId === deletedId) setGeneratedId(null);
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
    setGeneratedId(cert.id);
    form.reset({
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
    setGeneratedId(null);
    form.reset();
  };

  const verificationUrl = generatedId ? `${window.location.origin}/verify/${generatedId}` : "";

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-start relative overflow-hidden bg-black text-white px-6">
      <Seo title="Admin - Issue Certificates" description="Admin dashboard to issue physical workshop certificates." />
      
      <div className="w-full max-w-6xl z-10 space-y-8">
        
        {/* Top Section: Form and QR Code */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Side */}
          <div className="tech-card tech-border-glow p-8 bg-black/80">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold font-['Space_Grotesk'] uppercase tracking-wider text-cyan-400">
                {editingId ? "Edit Certificate" : "Issue Certificate"}
              </h2>
              {editingId && (
                <Button variant="ghost" onClick={handleCancelEdit} className="text-slate-400 hover:text-white">
                  Cancel Edit
                </Button>
              )}
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="certificate_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Certificate ID / Number</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. LBX-2024-001" className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="candidate_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Candidate Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="college_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">College Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="workshop_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Workshop Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="department_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Department Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="start_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Start Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" />
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
                        <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">End Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none font-['Inter']" />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" disabled={saveMutation.isPending} className="w-full btn-tech h-12 rounded-none mt-4">
                  {saveMutation.isPending ? <Loader2 className="animate-spin w-5 h-5" /> : (editingId ? "Update Certificate" : "Generate QR Code")}
                </Button>
              </form>
            </Form>
          </div>

          {/* QR Code Side */}
          <div className="tech-card tech-border-glow p-8 bg-black/80 flex flex-col items-center justify-center min-h-[400px]">
            {generatedId ? (
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-white rounded-lg relative group">
                  <QRCodeCanvas value={verificationUrl} size={220} level="H" />
                </div>
                <div>
                  <p className="text-cyan-400 font-['Space_Grotesk'] font-bold mb-2 uppercase tracking-widest">Active QR Code</p>
                  <p className="text-xs text-slate-400 font-['Inter'] break-all px-4">{verificationUrl}</p>
                </div>
                <Button 
                  onClick={() => {
                    const canvas = document.querySelector('canvas');
                    if (canvas) {
                      const url = canvas.toDataURL('image/png');
                      const link = document.createElement('a');
                      link.download = `certificate-qr-${generatedId}.png`;
                      link.href = url;
                      link.click();
                    }
                  }}
                  variant="outline" 
                  className="rounded-none border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                >
                  Download QR Image
                </Button>
              </div>
            ) : (
              <div className="text-slate-500 font-['Space_Grotesk'] text-center uppercase tracking-widest border border-dashed border-slate-700 w-full h-full flex flex-col items-center justify-center gap-4">
                <QrCode className="w-16 h-16 opacity-20" />
                <span>Awaiting Data Input</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section: History Table */}
        <div className="tech-card tech-border-glow p-8 bg-black/80">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold font-['Space_Grotesk'] uppercase tracking-wider text-white">
              Generation History
            </h2>
            <Button variant="outline" size="sm" onClick={() => queryClient.invalidateQueries({ queryKey: ['certificates'] })} className="rounded-none border-white/20 text-white hover:bg-white/10">
              <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
            </Button>
          </div>

          {isFetching ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
            </div>
          ) : certificates && certificates.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left font-['Inter'] text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider font-['Space_Grotesk'] text-xs">
                    <th className="pb-3 pr-4">ID</th>
                    <th className="pb-3 pr-4">Candidate</th>
                    <th className="pb-3 pr-4">Workshop</th>
                    <th className="pb-3 pr-4">College</th>
                    <th className="pb-3 pr-4">Dates</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {certificates.map((cert) => (
                    <tr key={cert.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4 font-mono text-cyan-400 text-xs">{cert.certificate_id}</td>
                      <td className="py-4 pr-4 font-medium text-white">{cert.candidate_name}</td>
                      <td className="py-4 pr-4 text-cyan-400">{cert.workshop_name}</td>
                      <td className="py-4 pr-4 text-slate-300">{cert.college_name}</td>
                      <td className="py-4 pr-4 text-slate-400">
                        {cert.start_date} <br/>to {cert.end_date}
                      </td>
                      <td className="py-4 text-right space-x-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => setGeneratedId(cert.id)}
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 h-8 w-8"
                          title="Show QR Code"
                        >
                          <QrCode className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleEdit(cert)}
                          className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 h-8 w-8"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this certificate? This action cannot be undone.')) {
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
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 font-['Inter']">
              No certificates generated yet.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminCertificates;
