import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand text-primary-foreground shadow-glow transition-all duration-500 ${show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"}`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
