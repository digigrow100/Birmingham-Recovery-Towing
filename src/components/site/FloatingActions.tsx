import { Phone } from "lucide-react";
import { PHONE } from "@/lib/assets";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href={`tel:${PHONE}`} aria-label="Call now" className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/40 hover:scale-105 transition animate-pulse">
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}