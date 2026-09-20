import { useState } from "react";
import { EMAIL } from "@/lib/assets";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Recovery request: ${data.get("service") || "assistance"}`;
    const body = `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nLocation: ${data.get("location")}\nDetails: ${data.get("message")}`;
    window.open(`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
    setSent(true);
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-border bg-card/60 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      <div className="grid gap-4 md:grid-cols-2">
        <input required name="name" placeholder="Your name" className="rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none focus:border-primary" />
        <input required name="phone" placeholder="Phone number" className="rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none focus:border-primary" />
      </div>
      <input name="location" placeholder="Your location" className="rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none focus:border-primary" />
      <input name="service" defaultValue={defaultService} placeholder="Service required" className="rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none focus:border-primary" />
      <textarea name="message" rows={4} placeholder="Describe your situation" className="rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none focus:border-primary" />
      <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:opacity-95">
        {sent ? "Opening email…" : "Send Request via Email"}
      </button>
      <p className="text-xs text-muted-foreground">For immediate help, call us 24/7. We respond within minutes.</p>
    </form>
  );
}