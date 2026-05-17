import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Analytics%2C%20I%27d%20love%20to%20know%20more%20about%20your%20programs"
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[oklch(0.65_0.18_150)] px-4 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[oklch(0.65_0.18_150)] opacity-60 blur-md animate-pulse" />
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
