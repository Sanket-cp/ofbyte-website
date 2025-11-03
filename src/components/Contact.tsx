import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Instagram, Send, MessageCircle, Facebook } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "Ofbyteind@gmail.com", href: "mailto:Ofbyteind@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 91532 55101", href: "tel:+919153255101" },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 8101862947", href: "https://wa.me/918101862947" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/ofbyte-india", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ofbyte_india?igsh=MXFxcXE4eHY5MXRoYw==", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/1CojfDcR9x/", label: "Facebook" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Let's Build <span className="bg-gradient-accent bg-clip-text text-transparent">Something Amazing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 md:px-0">
            Have a project in mind? Get in touch and let's discuss how we can bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-card/50 border-accent/20 focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="bg-card/50 border-accent/20 focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Discussion"
                  className="bg-card/50 border-accent/20 focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="bg-card/50 border-accent/20 focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow-cyan"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="p-8 rounded-3xl bg-gradient-card backdrop-blur-sm border border-accent/20 shadow-glow-blue">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-card backdrop-blur-sm border border-accent/20">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow-cyan group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
