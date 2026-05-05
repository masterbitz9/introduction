import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "LLM-Powered Full-Stack Platform",
    description:
      "AI-driven platform leveraging RAG architecture for intelligent data retrieval. Integrated OpenAI and Hugging Face models with vector databases for semantic search at scale.",
    tech: ["Next.js", "NestJS", "FastAPI", "Vector DB", "Kubernetes"],
    featured: true,
    image: "/projects/llm-platform.png",
  },
  {
    title: "Real-Time ML Pipeline System",
    description:
      "Event-driven pipelines with Kafka for streaming and processing large datasets. Includes ML workflows for preprocessing, training, and inference with Redis caching.",
    tech: ["Python", "Kafka", "Redis", "PyTorch", "Async Queues"],
    featured: true,
    image: "/projects/ml-pipeline.png",
  },
  {
    title: "Cloud-Native Microservices Platform",
    description:
      "Highly available microservices on AWS using ECS and Lambda. Infrastructure managed with Terraform and Docker, reducing deployment time by 60%.",
    tech: ["AWS", "Terraform", "Docker", "Node.js"],
    featured: true,
    image: "/projects/microservices.png",
  },
  {
    title: "Distributed Vector Search Engine",
    description:
      "Custom-built, highly scalable vector search engine optimized for low-latency similarity queries. Implemented with Go and gRPC for fast inter-service communication.",
    tech: ["Go", "gRPC", "Distributed Systems"],
    featured: false,
    image: "/projects/vector-search.png",
  },
  {
    title: "Real-Time Collaborative Editor",
    description:
      "Collaborative text editor using CRDTs for conflict-free synchronization. Backend powered by NestJS and WebSockets for live multi-user editing.",
    tech: ["TypeScript", "React", "NestJS", "WebSockets", "CRDT"],
    featured: false,
    image: "/projects/collab-editor.png",
  },
  {
    title: "GraphQL API Gateway",
    description:
      "Robust API gateway unifying multiple microservices into a single GraphQL schema. Includes rate limiting, intelligent caching, and token-based auth.",
    tech: ["GraphQL", "Node.js", "Redis", "OAuth2"],
    featured: false,
    image: "/projects/graphql-gateway.png",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative bg-muted/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">04. Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Selected <span className="text-gradient">work.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="h-full"
            >
              <TiltCard>
                <div className="flex flex-col h-full rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                  
                  {/* Preview image */}
                  <div className="relative w-full h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/90" />
                    {project.featured && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-primary/20 border border-primary/35 text-primary text-xs font-mono backdrop-blur-sm">
                        Featured
                      </span>
                    )}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-background/70 backdrop-blur-sm border border-border/60 flex items-center justify-center">
                      <span className="text-primary font-mono text-xs font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="mb-3">
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm mb-5 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="font-mono text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
