import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { ContactForm } from "@/components/site/ContactForm";
import { AreasCovered } from "@/components/site/AreasCovered";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { SERVICES } from "@/lib/services";
import { IMG, PHONE, PHONE_DISPLAY } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { Phone, Clock, Zap, Users, Banknote, ShieldCheck, Star, PhoneCall, Truck, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Birmingham Recovery & Towing — 24/7 Car Recovery Birmingham | Breakdown Recovery Near Me",
      description: "Birmingham's trusted 24/7 car recovery, breakdown recovery, accident recovery & vehicle transport. Fast response across West Midlands & nationwide UK. Call now.",
      path: "/",
      image: IMG.hero,
    }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Birmingham Recovery & Towing — tow truck recovering a vehicle in Birmingham" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Available 24/7 · Birmingham & Nationwide
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
            24/7 Car Recovery<br />
            <span className="bg-gradient-to-r from-primary to-yellow-200 bg-clip-text text-transparent">Birmingham</span><br />
            & West Midlands
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Broken down in Birmingham? Birmingham Recovery & Towing is your go-to team for fast, professional car recovery, breakdown recovery and vehicle transport — anywhere, anytime.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/40 hover:scale-[1.02] transition">
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { k: "24/7", v: "Always Open" },
              { k: "Fast", v: "Response Time" },
              { k: "Trusted", v: "Google Reviews" },
              { k: "Top", v: "Rated Service" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card/60 px-4 py-3 backdrop-blur-xl">
                <div className="text-2xl font-black text-primary">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">Our Services</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">View all services →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} to={s.slug} image={s.image} title={s.title} desc={s.desc} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">Why Choose Us</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Premium service, transparent pricing and a team that genuinely cares.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { i: Clock, t: "Available 24/7", d: "Day or night, weekend or holiday — we're always one call away." },
            { i: Zap, t: "Fast Response", d: "We aim to reach you as quickly as possible across Birmingham and the West Midlands — day or night." },
            { i: Users, t: "Experienced Team", d: "Trained operators who handle your vehicle with the utmost care." },
            { i: Banknote, t: "Affordable Prices", d: "Fair, transparent pricing with no hidden fees — ever." },
            { i: ShieldCheck, t: "Fully Insured", d: "Fully insured recovery fleet with a trusted track record across the UK." },
            { i: Star, t: "Highly Rated", d: "Glowing Google reviews from real customers across Birmingham and West Midlands." },
          ].map((w) => (
            <div key={w.t} className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-xl transition hover:border-primary/50">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary"><w.i className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-bold">{w.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">How It Works</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", i: PhoneCall, t: "Call or WhatsApp", d: "Phone or WhatsApp our 24/7 Birmingham line and tell us your location." },
            { n: "02", i: Truck, t: "We Dispatch Fast", d: "The nearest available truck is dispatched immediately to reach you as fast as possible." },
            { n: "03", i: CheckCircle2, t: "Problem Solved", d: "We recover your vehicle or transport it safely to any UK destination." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl">
              <div className="absolute -top-4 right-6 text-5xl font-black text-primary/30">{s.n}</div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><s.i className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <EmergencyCTA />

      <ReviewsCarousel />

      <AreasCovered />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">Our Gallery</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[IMG.gallery1, IMG.gallery2, IMG.gallery3, IMG.gallery4, IMG.gallery5, IMG.gallery6].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border aspect-square">
              <img src={src} alt={`Birmingham Recovery & Towing fleet photo ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition hover:scale-105 duration-700" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/gallery" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary">View full gallery</Link>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-8 md:py-20 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black">Need help right now?</h2>
          <p className="mt-4 text-muted-foreground">Send us a message or call directly. Our Birmingham dispatchers are standing by 24/7.</p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border aspect-[4/3]">
            <iframe
              title="Birmingham Recovery & Towing — Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645131.5942716541!2d-2.602306876475857!3d52.174881679598826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd3b44a51e71%3A0x34d24ee56e000d72!2sBirmingham%20Recovery%20%26%20Towing!5e1!3m2!1sen!2s!4v1786383356464!5m2!1sen!2s"
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