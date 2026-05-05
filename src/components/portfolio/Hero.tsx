import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "/logo.png";

const LINE1 = "Jeremy";
const LINE2 = "McKinney.";

type Phase =
  | "type1"
  | "pause1"
  | "type2"
  | "pauseEnd"
  | "erase2"
  | "pause2"
  | "erase1"
  | "pauseStart";

function useLoopingTypewriter() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [phase, setPhase] = useState<Phase>("pauseStart");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const schedule = (fn: () => void, delay: number) => {
      timeoutRef.current = setTimeout(fn, delay);
    };

    const tick = (currentPhase: Phase, line1Val: string, line2Val: string) => {
      switch (currentPhase) {
        case "pauseStart":
          schedule(() => {
            setPhase("type1");
            tick("type1", line1Val, line2Val);
          }, 600);
          break;

        case "type1": {
          const next = LINE1.slice(0, line1Val.length + 1);
          setLine1(next);
          if (next.length < LINE1.length) {
            schedule(() => tick("type1", next, line2Val), 90);
          } else {
            schedule(() => {
              setPhase("pause1");
              tick("pause1", next, line2Val);
            }, 300);
          }
          break;
        }

        case "pause1":
          schedule(() => {
            setPhase("type2");
            tick("type2", line1Val, line2Val);
          }, 200);
          break;

        case "type2": {
          const next = LINE2.slice(0, line2Val.length + 1);
          setLine2(next);
          if (next.length < LINE2.length) {
            schedule(() => tick("type2", line1Val, next), 90);
          } else {
            schedule(() => {
              setPhase("pauseEnd");
              tick("pauseEnd", line1Val, next);
            }, 1800);
          }
          break;
        }

        case "pauseEnd":
          schedule(() => {
            setPhase("erase2");
            tick("erase2", line1Val, line2Val);
          }, 0);
          break;

        case "erase2": {
          const next = line2Val.slice(0, -1);
          setLine2(next);
          if (next.length > 0) {
            schedule(() => tick("erase2", line1Val, next), 55);
          } else {
            schedule(() => {
              setPhase("pause2");
              tick("pause2", line1Val, next);
            }, 200);
          }
          break;
        }

        case "pause2":
          schedule(() => {
            setPhase("erase1");
            tick("erase1", line1Val, line2Val);
          }, 0);
          break;

        case "erase1": {
          const next = line1Val.slice(0, -1);
          setLine1(next);
          if (next.length > 0) {
            schedule(() => tick("erase1", next, line2Val), 55);
          } else {
            schedule(() => {
              setPhase("pauseStart");
              tick("pauseStart", next, line2Val);
            }, 500);
          }
          break;
        }
      }
    };

    tick(phase, line1, line2);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { line1, line2 };
}

function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ repeat: Infinity, duration: 0.85, ease: "linear" }}
      className="inline-block w-[3px] h-[0.82em] bg-primary ml-1 align-middle rounded-sm"
    />
  );
}

export default function Hero() {
  const { line1, line2 } = useLoopingTypewriter();

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center pt-20 pb-10 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] rounded-full pointer-events-none" aria-hidden>
        <div className="w-full h-full rounded-full bg-primary/10 blur-[110px]" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 w-[380px] h-[380px] rounded-full pointer-events-none" aria-hidden>
        <div className="w-full h-full rounded-full bg-accent/8 blur-[130px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-mono tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92] mb-8"
            >
              <span className="block text-foreground min-h-[1.1em]">
                {line1}
                {line2.length === 0 && <Cursor />}
              </span>
              <span className="block text-gradient min-h-[1.1em]">
                {line2}
                {line2.length > 0 && <Cursor />}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-8 bg-primary/50" />
              <span className="text-primary font-mono text-sm tracking-widest uppercase font-medium">
                Senior Software Engineer · 8+ Years
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed"
            >
              Full-stack architect specializing in distributed systems, cloud-native infrastructure,
              and production-grade AI/ML pipelines. I build things that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 h-12 text-sm font-medium gold-glow"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted hover:border-primary/40 rounded-xl px-8 h-12 text-sm font-medium"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-[60px] scale-125" />
              <img
                src={logo}
                alt="Jeremy McKinney — logo"
                width={512}
                height={512}
                decoding="async"
                fetchPriority="high"
                className="relative w-auto max-w-xs sm:max-w-sm h-auto object-contain drop-shadow-[0_0_50px_rgba(212,160,23,0.32)]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/35"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
