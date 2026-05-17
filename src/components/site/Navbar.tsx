import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/analytics-logo.png";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "features", label: "Features" },
  { id: "success", label: "Success" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex w-full justify-center overflow-hidden transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500",
          scrolled ? "opacity-0" : "opacity-100",
        )}
      >
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -top-12 right-0 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.92_0.015_255/0.5)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.92_0.015_255/0.5)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>
      <div
        className={cn(
          "flex w-full max-w-7xl items-center justify-between rounded-2xl px-5 transition-all duration-500",
          scrolled ? "glass shadow-soft py-2.5" : "bg-transparent py-3",
        )}
      >
        <button onClick={() => go("home")} className="flex items-center gap-2" aria-label="Analytics home">
          <img src={logo} alt="Analytics logo" className="h-8 w-auto md:h-9" />
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={cn(
                "group relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                active === l.id && "text-primary",
              )}
            >
              {l.label}
              <span
                className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100",
                  active === l.id && "scale-x-100",
                )}
              />
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => go("contact")}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            <span className="relative z-10">Enroll Now</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl glass p-4 shadow-soft lg:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-primary",
                  active === l.id && "bg-secondary text-primary",
                )}
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="mt-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
