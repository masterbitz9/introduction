import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const courses = [
  "Machine Learning",
  "Distributed Systems",
  "Cryptography",
  "Data Structures",
  "Algorithms",
  "Operating Systems",
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative bg-muted/20">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">05. Education</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Academic <span className="text-gradient">foundation.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300 group"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold text-foreground">B.S. Computer Science</h3>
                <span className="flex items-center gap-1.5 font-mono text-sm text-primary">
                  <Calendar className="h-3.5 w-3.5" />
                  2011 – 2015
                </span>
              </div>

              <p className="text-muted-foreground font-medium mb-6">
                Midwest Institute of Technology
              </p>

              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-lg border border-border/60 bg-muted/60 text-xs font-mono font-medium text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/8 transition-all cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
