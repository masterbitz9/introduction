import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { SiDiscord } from "react-icons/si";

const CONTACT_EMAIL = "mdsahab3124@gmail.com";

function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const name = String(fd.get("name") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const subject = String(fd.get("subject") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();
  const body = [`From: ${name || "(no name)"} <${email || "(no email)"}>`, "", message].join("\n");
  const qs = new URLSearchParams({
    subject: subject || "Portfolio contact",
    body,
  });
  window.location.href = `mailto:${CONTACT_EMAIL}?${qs.toString()}`;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    isSi: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 571 390 4056",
    href: "tel:+15713904056",
    isSi: false,
  },
  {
    icon: SiDiscord,
    label: "Discord",
    value: "lattice.x3",
    href: "https://discord.com/users/1368761687930568724",
    isSi: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Springfield, Ohio, USA",
    href: null,
    isSi: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container px-4 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">06. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Let's <span className="text-gradient">connect.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Open to new opportunities in distributed systems, AI engineering, or architectural
            leadership. Drop a message and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.isSi ? "_blank" : undefined}
                      rel={item.isSi ? "noreferrer" : undefined}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
                {item.href && (
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-primary flex-shrink-0 transition-colors" />
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 p-8 rounded-2xl border border-border/60 bg-card"
          >
            <form className="space-y-5" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="John Doe"
                    className="bg-muted/40 border-border/60 font-mono text-sm rounded-xl focus-visible:ring-primary focus-visible:border-primary/50 h-11"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@company.com"
                    className="bg-muted/40 border-border/60 font-mono text-sm rounded-xl focus-visible:ring-primary focus-visible:border-primary/50 h-11"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Opportunity / Collaboration"
                  className="bg-muted/40 border-border/60 font-mono text-sm rounded-xl focus-visible:ring-primary focus-visible:border-primary/50 h-11"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Hello Jeremy..."
                  className="min-h-[130px] bg-muted/40 border-border/60 font-mono text-sm rounded-xl focus-visible:ring-primary focus-visible:border-primary/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-11 text-sm font-medium gold-glow"
              >
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
