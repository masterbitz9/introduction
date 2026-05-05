import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "NorthBay Digital",
    role: "Senior Software Engineer",
    subtitle: "Full Stack & AI/ML",
    location: "San Francisco, CA",
    period: "2021 – Present",
    current: true,
    bullets: [
      "Architected full-stack applications with Next.js, NestJS, and cloud-native services.",
      "Designed and deployed LLM-powered RAG pipelines, semantic search, and intelligent assistants.",
      "Built scalable data pipelines integrating vector databases for real-time inference.",
      "Led migration to microservices and event-driven architecture using Kafka.",
      "Optimized infrastructure with Kubernetes and Terraform, improving scalability and cost efficiency.",
    ],
  },
  {
    company: "Arcules",
    role: "Backend Engineer",
    subtitle: "Data & AI Systems",
    location: "Remote",
    period: "2018 – 2021",
    current: false,
    bullets: [
      "Developed high-performance backend systems supporting large-scale ML workflows.",
      "Built APIs with Node.js and FastAPI for real-time and asynchronous processing.",
      "Implemented robust data pipelines for training and serving ML models.",
      "Improved observability through centralized logging and comprehensive monitoring.",
      "Architected distributed systems handling high-throughput data streams.",
    ],
  },
  {
    company: "Altran (Capgemini)",
    role: "Software Engineer",
    subtitle: "Backend & Distributed Systems",
    location: "Mountain View, CA",
    period: "2015 – 2018",
    current: false,
    bullets: [
      "Engineered backend services and robust APIs for distributed, scalable applications.",
      "Built real-time processing systems and optimized latency and throughput.",
      "Designed and optimized relational databases and sophisticated caching layers.",
      "Contributed to system architecture decisions and cloud migration initiatives.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">03. Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Where I've <span className="text-gradient">worked.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-6 top-6 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background z-10 flex items-center justify-center">
                  {exp.current && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  )}
                </div>

                <div className="p-7 rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <span className="hidden md:inline px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs font-mono">
                          {exp.subtitle}
                        </span>
                      </div>
                      <p className="text-primary font-semibold font-mono text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-xs font-mono text-muted-foreground flex-shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
