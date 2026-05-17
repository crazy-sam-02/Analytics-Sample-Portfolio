import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const images = [
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80", h: "row-span-2", alt: "Team collaboration" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80", h: "", alt: "Workshop" },
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80", h: "", alt: "Group discussion" },
  { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80", h: "row-span-2", alt: "Coding session" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80", h: "", alt: "Mentoring" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80", h: "", alt: "Project demo" },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80", h: "", alt: "Placement drive" },
  { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80", h: "", alt: "Hackathon" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Gallery" title={<>Inside the <span className="text-gradient">Analytics experience</span></>} />
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 0.05}>
              <button
                onClick={() => setOpen(img.src)}
                className={`group relative h-full w-full overflow-hidden rounded-2xl ${img.h}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 translate-y-2 text-left text-xs font-semibold text-primary-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/80 p-4 backdrop-blur-xl"
            onClick={() => setOpen(null)}
          >
            <motion.img
              src={open} alt="Preview"
              initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }}
              className="max-h-[85vh] max-w-5xl rounded-2xl shadow-glow"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={() => setOpen(null)} className="absolute right-6 top-6 rounded-full bg-white/15 p-3 text-primary-foreground backdrop-blur">
              <X />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
