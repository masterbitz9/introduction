import { motion } from "framer-motion";
import {
  SiTypescript, SiPython, SiGo,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiFastapi, SiGraphql,
  SiPostgresql, SiRedis, SiMongodb,
  SiDocker, SiKubernetes, SiTerraform,
  SiHuggingface, SiPytorch,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType | null;
}

interface Category {
  title: string;
  color: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Languages",
    color: "primary",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "Go", icon: SiGo },
    ],
  },
  {
    title: "Frontend",
    color: "accent",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Zustand", icon: null },
    ],
  },
  {
    title: "Backend",
    color: "primary",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "GraphQL", icon: SiGraphql },
      { name: "gRPC", icon: null },
    ],
  },
  {
    title: "AI / ML & Data",
    color: "accent",
    skills: [
      { name: "LLM & RAG", icon: null },
      { name: "Vector DB", icon: null },
      { name: "LangChain", icon: null },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Fine-Tuning", icon: null },
    ],
  },
  {
    title: "Database",
    color: "primary",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "accent",
    skills: [
      { name: "AWS", icon: null },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
      { name: "CI/CD", icon: null },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-muted/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">02. Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-2 h-2 rounded-full ${category.color === "primary" ? "bg-primary" : "bg-accent"}`} />
                <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-200 cursor-default
                      border-border/50 bg-muted/60 text-muted-foreground
                      hover:border-primary/40 hover:bg-primary/8 hover:text-primary`}
                  >
                    {skill.icon && <skill.icon className="h-3.5 w-3.5 flex-shrink-0" />}
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
