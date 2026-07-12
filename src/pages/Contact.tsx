import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, ArrowRight, Terminal } from "lucide-react";
import Seo from "@/components/Seo";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid work email." }),
  company: z.string().min(2, { message: "Company name is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`Enterprise Inquiry: ${values.company}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\n` +
      `Email: ${values.email}\n` +
      `Company: ${values.company}\n\n` +
      `Message:\n${values.message}`
    );

    const mailtoLink = `mailto:careers@lifeboxnetgen.co.site?subject=${subject}&body=${body}`;
    const link = document.createElement('a');
    link.href = mailtoLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Opening Email Client",
      description: "Drafting your request...",
    });

    form.reset();
  }

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center relative overflow-hidden">
      <Seo
        title="Contact Sales - LifeBox NextGen"
        description="Get in touch with LifeBox NextGen enterprise AI team."
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="w-full max-w-5xl px-6 flex flex-col z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#ff00ff]/30 bg-[#ff00ff]/5 text-[#ff00ff] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 bg-[#ff00ff] shadow-[0_0_8px_#ff00ff]"></span>
            Initialize Connection
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk'] tracking-wide text-white uppercase">
            Partner with <span className="neon-text-cyan">LifeBox</span>
          </h1>
          <p className="text-slate-400 font-['Inter'] text-lg">
            Ready to upgrade your infrastructure with state-of-the-art AI?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Info Side */}
          <div className="space-y-6 tech-card tech-border-glow p-8 bg-black">
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] text-white uppercase tracking-wider mb-8 flex items-center gap-3">
              <Terminal className="w-6 h-6 text-cyan-400" /> System Params
            </h2>
            
            <div className="space-y-8 font-['Inter']">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-cyan-400/50 bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-['Space_Grotesk'] font-bold">Secure Protocol</div>
                  <a href="mailto:careers@lifeboxnetgen.co.site" className="text-white hover:text-cyan-400 transition-colors break-all text-lg">careers@lifeboxnetgen.co.site</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#ff00ff]/50 bg-[#ff00ff]/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-[#ff00ff]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-['Space_Grotesk'] font-bold">Physical Node</div>
                  <a href="https://maps.app.goo.gl/asDaoeCWMkFf2Sjo9" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff00ff] transition-colors leading-relaxed">
                    LifeBox NextGen Pvt. Ltd.<br/>
                    Narasaraopet, AP 522615
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="tech-card tech-border-glow p-8 bg-black">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Operator Name</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none h-12 font-['Inter']" placeholder="Enter name" />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Organization ID</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none h-12 font-['Inter']" placeholder="Enter company" />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Return Address</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none h-12 font-['Inter']" placeholder="Enter work email" />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-400 font-['Space_Grotesk'] uppercase tracking-wider text-xs">Encrypted Payload</FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-transparent border-white/20 text-white focus-visible:ring-cyan-400 focus-visible:border-cyan-400 rounded-none min-h-[150px] resize-none font-['Inter']"
                          placeholder="Describe your requirements..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <div className="pt-4 flex gap-4">
                  <Button type="button" onClick={() => form.reset()} variant="outline" className="h-12 px-6 rounded-none font-['Space_Grotesk'] tracking-wider uppercase border-white/20 text-slate-300 hover:text-white hover:bg-white/10 w-full sm:w-auto">
                    Abort
                  </Button>
                  <Button type="submit" className="btn-tech h-12 px-8 rounded-none w-full sm:w-auto">
                    Transmit <ArrowRight className="ml-2 w-4 h-4 inline" />
                  </Button>
                </div>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
