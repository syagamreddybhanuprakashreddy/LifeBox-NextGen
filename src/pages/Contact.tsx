import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, ArrowRight, Sparkles } from "lucide-react";
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
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      <Seo
        title="Contact Sales - LifeBox 95"
        description="Get in touch with LifeBox NextGen enterprise team."
      />

      <div className="win95-window w-full max-w-4xl flex flex-col">
        {/* Title Bar */}
        <div className="win95-header flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Contact_LifeBox.exe</span>
          </div>
          <div className="flex gap-1">
            <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold pb-1">_</button>
            <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">□</button>
            <button className="win95-btn w-5 h-5 flex items-center justify-center text-[12px] font-bold">X</button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 grid lg:grid-cols-2 gap-6 text-black bg-[#c0c0c0]">
          
          {/* Info Side */}
          <div className="space-y-4 min-w-0">
            <div className="border-2 border-[#808080] border-r-white border-b-white p-4">
              <h1 className="text-2xl font-bold mb-4 font-['Courier_New'] text-[#000080]">
                Partner with LifeBox
              </h1>
              <div className="w-full overflow-hidden bg-black text-[#00ff00] font-['Courier_New'] p-1 mb-4 border-2 border-[#808080] border-r-white border-b-white">
                <span className="animate-marquee block">Ready to upgrade your infrastructure?</span>
              </div>
              
              <div className="space-y-4 font-['Courier_New'] font-bold">
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-[#000080]" />
                  <div>
                    <div className="uppercase">Email Us</div>
                    <a href="mailto:careers@lifeboxnetgen.co.site" className="text-[#0000ee] hover:text-[#551a8b] underline break-all">careers@lifeboxnetgen.co.site</a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-[#000080]" />
                  <div>
                    <div className="uppercase">HQ Location</div>
                    <a href="https://maps.app.goo.gl/asDaoeCWMkFf2Sjo9" target="_blank" rel="noopener noreferrer" className="text-[#0000ee] hover:text-[#551a8b] underline">
                      LifeBox NextGen Pvt. Ltd.<br/>
                      Narasaraopet, AP 522615
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center border-2 border-[#808080] border-r-white border-b-white p-2 bg-white">
               <img src="https://media.giphy.com/media/26FPCXdkvDbKBbgOI/giphy.gif" alt="Under Construction" className="h-16" />
            </div>
          </div>

          {/* Form Side */}
          <div className="border-2 border-[#808080] border-r-white border-b-white p-4 min-w-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-black font-['Courier_New']">Full Name:</FormLabel>
                        <FormControl>
                          <Input {...field} className="win95-input h-8 rounded-none border-0" />
                        </FormControl>
                        <FormMessage className="text-[#ff0000]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold text-black font-['Courier_New']">Company:</FormLabel>
                        <FormControl>
                          <Input {...field} className="win95-input h-8 rounded-none border-0" />
                        </FormControl>
                        <FormMessage className="text-[#ff0000]" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-black font-['Courier_New']">Work Email:</FormLabel>
                      <FormControl>
                        <Input {...field} className="win95-input h-8 rounded-none border-0" />
                      </FormControl>
                      <FormMessage className="text-[#ff0000]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-black font-['Courier_New']">Message:</FormLabel>
                      <FormControl>
                        <Textarea
                          className="win95-input min-h-[100px] resize-none rounded-none border-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-[#ff0000]" />
                    </FormItem>
                  )}
                />

                <div className="pt-4 flex justify-end gap-2">
                  <Button type="button" onClick={() => form.reset()} className="win95-btn h-8 px-4 rounded-none font-bold">
                    Cancel
                  </Button>
                  <Button type="submit" className="win95-btn h-8 px-4 rounded-none font-bold">
                    OK <ArrowRight className="ml-2 w-3 h-3 inline" />
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
