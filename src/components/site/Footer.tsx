import { Instagram, Linkedin, Youtube, Facebook, ArrowRight } from "lucide-react";
import logo from "@/assets/analytics-logo.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-12 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_50%_at_50%_0%,oklch(0.55_0.22_270),transparent)]" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex rounded-xl bg-white p-3">
              <img src={logo} alt="Analytics" className="h-8 w-auto" />
            </div>
            <p className="mt-5 max-w-xs text-sm text-primary-foreground/75">
              Premium training & skill development for India's most ambitious college students.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Linkedin, Youtube, Facebook].map((I, k) => (
                <a key={k} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-primary-foreground transition-all hover:-translate-y-1 hover:bg-white hover:text-primary">
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Quick Links</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[["Home","#home"],["About","#about"],["Programs","#programs"],["Success","#success"],["Contact","#contact"]].map(([l,h]) => (
                <li key={l}><a href={h} className="text-primary-foreground/75 transition hover:text-primary-foreground hover:underline underline-offset-4">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Programs</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {["Aptitude Training","Coding & DSA","Placement Prep","Mock Interviews"].map((l) => (
                <li key={l}><a href="#programs" className="text-primary-foreground/75 transition hover:text-primary-foreground hover:underline underline-offset-4">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Newsletter</div>
            <p className="mt-4 text-sm text-primary-foreground/75">Tips, openings & resources — once a week, no spam.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center rounded-full bg-white/10 p-1.5 backdrop-blur">
              <input type="email" required placeholder="you@email.com" className="w-full bg-transparent px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none" />
              <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-primary transition hover:scale-105" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <div>© {year} Analytics™. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary-foreground">Privacy</a>
            <a href="#" className="hover:text-primary-foreground">Terms</a>
            <a href="#contact" className="hover:text-primary-foreground">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
