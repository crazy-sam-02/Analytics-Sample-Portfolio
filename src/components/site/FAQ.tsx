import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  { q: "Who are these programs designed for?", a: "College students from 1st year through final year, as well as recent graduates preparing for placements and tech careers." },
  { q: "Are the courses online or offline?", a: "We offer both. Most cohorts are live and interactive online, with on-campus workshops at partner colleges." },
  { q: "Do you guarantee placements?", a: "We offer dedicated placement assistance with mock drives, referrals and recruiter connects. Your performance + our process drives outcomes." },
  { q: "What is the duration of a typical program?", a: "Programs range from 4-week intensive bootcamps to 6-month industry tracks depending on the specialization." },
  { q: "Will I get a certificate?", a: "Yes, every program comes with an industry-recognized certificate of completion you can showcase on LinkedIn and resumes." },
  { q: "Is there any scholarship or EMI option?", a: "Absolutely. We offer merit scholarships and flexible EMI plans to keep learning accessible." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="FAQ" title={<>Frequently asked <span className="text-gradient">questions</span></>} />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/30">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold text-primary md:text-lg">{f.q}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-primary-foreground transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
                    <Plus size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
