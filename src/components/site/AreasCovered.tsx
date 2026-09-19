import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

const areas = [
  "Birmingham City Centre",
  "Edgbaston",
  "Erdington",
  "Sutton Coldfield",
  "Solihull",
  "Coventry",
  "Wolverhampton",
  "West Bromwich",
  "Walsall",
  "Dudley",
  "Stourbridge",
  "Bromsgrove",
  "Redditch",
  "Tamworth",
  "Lichfield",
  "Stafford",
];

export function AreasCovered() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center">Areas We Cover</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Based in Birmingham, covering the West Midlands with nationwide recovery and transport available 24/7 across the UK.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {areas.map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl transition hover:border-primary/50">
              <MapPin className="h-5 w-5 shrink-0 text-primary" /> <span className="font-semibold">{a}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/service-areas"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
          >
            <MapPin className="h-4 w-4 text-primary" /> View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
