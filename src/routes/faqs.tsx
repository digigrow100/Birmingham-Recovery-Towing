import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

const faqs = [
  { q: "Are you really available 24 hours a day, 7 days a week?", a: "Yes — our phone line is answered day or night, including weekends, bank holidays and Christmas Day." },
  { q: "How quickly can you reach me in Birmingham?", a: "Response times vary by location and traffic — we dispatch the nearest available truck immediately and keep you updated on arrival time." },
  { q: "How much does car recovery cost in Birmingham?", a: "Call us with your location and situation and we'll give you an upfront fixed price — no hidden fees, ever." },
  { q: "Do you cover long-distance and nationwide vehicle transport?", a: "Yes, we offer nationwide vehicle recovery and transport across the entire UK — from Birmingham to Scotland, London or anywhere else." },
  { q: "Do you recover vans and large vehicles?", a: "Yes — we recover cars, vans, LWB vans and other light commercial vehicles. Call us to discuss larger vehicles." },
  { q: "What is wrong fuel recovery?", a: "If you've put the wrong fuel in your vehicle, do not start the engine. Call us immediately and we'll drain and flush the fuel system on-site." },
  { q: "Do you collect auction vehicles?", a: "Yes — we collect vehicles from auctions across the UK including BCA, Manheim and online platforms, and deliver safely to your location." },
  { q: "Are you fully insured?", a: "Yes, Birmingham Recovery & Towing is fully insured for vehicle recovery and transport operations across the UK." },
  { q: "Do you accept card payments?", a: "Yes — we accept cash, card and bank transfer." },
];

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: pageMeta({ title: "FAQs — Birmingham Recovery & Towing | Breakdown Recovery Birmingham", description: "Frequently asked questions about our 24/7 car recovery, breakdown recovery, vehicle transport and roadside assistance services across Birmingham.", path: "/faqs", image: IMG.roadsideAssistance }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/faqs" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="FAQs" title="Frequently Asked Questions" image={IMG.roadsideAssistance} />
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16"><FAQ items={faqs} /></section>
      <EmergencyCTA />
    </SiteLayout>
  );
}