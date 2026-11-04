import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/vehicle-transport")({
  head: () => ({
    meta: pageMeta({ title: "Vehicle Transport Birmingham | Car & Vehicle Transport West Midlands", description: "Safe vehicle transport in Birmingham, West Midlands and nationwide UK. Flatbed transport for all vehicles — fixed-fee quotes. Birmingham Recovery & Towing.", path: "/vehicle-transport", image: IMG.vehicleTowingService }),
    links: [{ rel: "canonical", href: "https://247recoverybirmingham.co.uk/vehicle-transport" }],
  }),
  component: VehicleTransport,
});

function VehicleTransport() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Vehicle Transport Birmingham" hero={IMG.vehicleTowingService}
        description="From local vehicle transport around Birmingham to long-distance UK delivery, Birmingham Recovery & Towing moves your vehicle safely using the right equipment for the job."
        benefits={["Cars, vans and light commercial vehicles transported safely", "Flatbed and wheel-lift transport options", "Careful handling to avoid any damage", "Local Birmingham transport and nationwide UK delivery", "Fully insured drivers and modern equipment", "Fixed-fee quotes with no hidden costs"]}
        why={[
          { title: "Right Equipment", desc: "We match the transport method to your vehicle type and needs." },
          { title: "Careful Handling", desc: "Trained operators secure your vehicle properly every time." },
          { title: "Nationwide Delivery", desc: "We transport vehicles from Birmingham to anywhere in the UK." },
        ]}
        faqs={[
          { q: "Can you transport my car from Birmingham to London?", a: "Yes — we offer nationwide vehicle transport from Birmingham to anywhere in the UK." },
          { q: "Can you transport automatic transmission cars?", a: "Yes — we use flatbed transport methods that are safe for all transmissions." },
          { q: "How do I get a quote for vehicle transport?", a: "Call us with your collection and delivery locations for an instant fixed-fee quote." },
        ]}
      />
    </SiteLayout>
  );
}
