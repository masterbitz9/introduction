import { motion } from "framer-motion";
import { Terminal, Database, Cloud, Zap } from "lucide-react";

const highlights = [
  {
    icon: Terminal,
    title: "Full-Stack Systems",
    desc: "End-to-end applications with modern web stacks — from pixel-perfect UIs to high-throughput APIs.",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary/15",
  },
  {
    icon: Zap,
    title: "AI / ML Engineering",
    desc: "Production LLMs, RAG pipelines, vector search, and intelligent inference at scale.",
    color: "text-accent",
    bg: "bg-accent/10 group-hover:bg-accent/15",
  },
  {
    icon: Cloud,
    title: "Cloud-Native",
    desc: "Resilient microservices on AWS & Kubernetes, automated with Terraform and CI/CD.",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary/15",
  },
  {
    icon: Database,
    title: "Distributed Data",
    desc: "High-throughput data pipelines, event-driven architectures, and low-latency storage layers.",
    color: "text-accent",
    bg: "bg-accent/10 group-hover:bg-accent/15",
  },
];

const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "3", label: "Companies" },
  { value: "20+", label: "Projects shipped" },
  { value: "∞", label: "Coffee consumed" },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">01. About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 max-w-xl leading-tight">
            Crafting systems that{" "}
            <span className="text-gradient">endure.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I build systems that scale. With over 8 years of engineering experience, I've navigated the
            complexity of distributed architectures, optimized data pipelines, and integrated cutting-edge
            machine learning models into production environments. I don't just write code — I engineer
            resilient solutions to hard problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`mb-5 p-3 rounded-xl ${item.bg} inline-flex transition-colors duration-300`}>
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-border/60 bg-card/50"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-gradient mb-1">{s.value}</p>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
