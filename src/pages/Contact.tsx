import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, ArrowRight, MessageSquare } from "lucide-react";
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
    console.log(values);

    // Construct mailto link
    const subject = encodeURIComponent(`New Enterprise Inquiry: ${values.company}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\n` +
      `Email: ${values.email}\n` +
      `Company: ${values.company}\n\n` +
      `Message:\n${values.message}`
    );

    const mailtoLink = `mailto:careers@lifeboxnetgen.co.site?subject=${subject}&body=${body}`;

    // Create a temporary link to trigger the mail client
    // This is often more reliable than window.location.href
    const link = document.createElement('a');
    link.href = mailtoLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Opening Email Client",
      description: "Drafting your request in your default mail app...",
    });

    form.reset();
  }

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen">
      <Seo
        title="Contact Sales"
        description="Get in touch with LifeBox NextGen enterprise team."
      />

      <section className="pt-32 pb-20 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">Contact us</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Partner with LifeBox.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Ready to upgrade your infrastructure? Our engineering team is here to help you architect the perfect solution.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
              <p className="text-gray-500 mb-12 leading-relaxed">
                Whether you have a technical question or need a custom enterprise quote, our team is ready to assist.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-sm text-gray-500 mb-1">For all inquiries</p>
                    <a href="mailto:careers@lifeboxnetgen.co.site" className="text-blue-600 font-medium hover:underline">careers@lifeboxnetgen.co.site</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">HQ</h3>
                    <p className="text-sm text-gray-500">
                      <a
                        href="https://maps.app.goo.gl/asDaoeCWMkFf2Sjo9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        LifeBox NextGen Pvt. Ltd.<br />
                        8-252, Dasaripalem village, post, Rompicherlla Mandal<br />
                        Vipperla, Narasaraopet, Andhra Pradesh 522615
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} className="bg-white border-gray-300 focus:border-blue-500" />
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
                          <FormLabel className="text-gray-700">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" {...field} className="bg-white border-gray-300 focus:border-blue-500" />
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
                        <FormLabel className="text-gray-700">Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@acme.com" {...field} className="bg-white border-gray-300 focus:border-blue-500" />
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
                        <FormLabel className="text-gray-700">How can we help?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your infrastructure needs..."
                            className="resize-none min-h-[120px] bg-white border-gray-300 focus:border-blue-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base">
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
