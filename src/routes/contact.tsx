import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { IMG, PHONE, PHONE_DISPLAY, WHATSAPP, EMAIL, ADDRESS } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({ title: "Contact Us — Birmingham Recovery & Towing | 24/7 Car Recovery Birmingham", description: "Call or WhatsApp Birmingham Recovery & Towing 24/7 for emergency car recovery, breakdown recovery and roadside assistance across Birmingham & the West Midlands.", path: "/contact", image: IMG.roadsideAssistance }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Get help, 24/7" subtitle="Pick up the phone or message us — we'll dispatch the closest truck immediately." image={IMG.roadsideAssistance} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="grid gap-4">
            {[
              { i: Phone, t: "Phone (24/7)", v: PHONE_DISPLAY, href: `tel:${PHONE}` },
              { i: MessageCircle, t: "WhatsApp", v: "Message us instantly", href: WHATSAPP },
              { i: Mail, t: "Email", v: EMAIL, href: `mailto:${EMAIL}` },
              { i: MapPin, t: "Address", v: ADDRESS, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}` },
            ].map((c) => (
              <a key={c.t} href={c.href} className="flex items-start gap-4 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl hover:border-primary/50 transition">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary shrink-0"><c.i className="h-6 w-6" /></span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.t}</span>
                  <span className="mt-1 block text-lg font-bold">{c.v}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border aspect-[4/3]">
            <iframe
              title="Birmingham Recovery & Towing Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645131.5942716541!2d-2.602306876475857!3d52.174881679598826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd3b44a51e71%3A0x34d24ee56e000d72!2sBirmingham%20Recovery%20%26%20Towing!5e1!3m2!1sen!2s!4v1786126694835!5m2!1sen!2s"
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
        <ContactForm />
      </section>
    </SiteLayout>
  );
}