import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, ArrowRight } from "lucide-react";
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
    <div className="bg-black text-white font-sans min-h-screen">
      <Seo
        title="Contact Sales"
        description="Get in touch with LifeBox NextGen enterprise team."
      />

      <section className="pt-32 pb-20 border-b border-white/10 bg-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-4">Contact us</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Partner with LifeBox.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to upgrade your infrastructure? Our engineering team is here to help you architect the perfect solution.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
              <p className="text-gray-400 mb-12 leading-relaxed">
                Whether you have a technical question or need a custom enterprise quote, our team is ready to assist.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-md bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-sm text-gray-400 mb-1">For all inquiries</p>
                    <a href="mailto:careers@lifeboxnetgen.co.site" className="text-blue-500 font-medium hover:text-blue-400">careers@lifeboxnetgen.co.site</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-md bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">HQ</h3>
                    <p className="text-sm text-gray-400">
                      <a
                        href="https://maps.app.goo.gl/asDaoeCWMkFf2Sjo9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                      >
                        LifeBox NextGen Pvt. Ltd.<br />
                        Narasaraopet, Andhra Pradesh 522615
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 rounded-xl p-8 lg:p-10 border border-white/10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" {...field} className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@acme.com" {...field} className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">How can we help?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your infrastructure needs..."
                            className="resize-none min-h-[120px] bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 bg-white text-black hover:bg-gray-200 font-medium text-base rounded-md">
                    Send Request <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
