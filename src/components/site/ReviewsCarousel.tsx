import { Star } from "lucide-react";

const reviews = [
  {
    name: "Tauheed Hussain",
    time: "2 months ago",
    text: "Had my car towed from Birmingham to Leicester & the service provided was amazing. From their attention to detail & care into responding to me to loading my car & taking it to my drop off location. 100% recommend & will definitely use again.",
  },
  {
    name: "Romal Himat",
    time: "a month ago",
    text: "Excellent service. Arrived within 20 minutes, very professional and the price was very reasonable.",
  },
  {
    name: "Alessandro Cesarini",
    time: "a month ago",
    text: "Great service, very quick response and professional throughout. Arrived on time and got everything sorted without any issues. Highly recommended.",
  },
  {
    name: "Chad Newell",
    time: "a month ago",
    text: "Good customer service — was with me within 15 minutes and at a fantastic price. I would recommend and will use again.",
  },
  {
    name: "Mohammed Rashid",
    time: "a month ago",
    text: "Absolutely lovely recovery — arrived within 20 minutes and got me and my car home safe and sound all the way to Nottingham.",
  },
  {
    name: "Younis Miah",
    time: "2 months ago",
    text: "Fast, reliable and the best prices around. He came through when most companies were busy or charging too much. Kind and respectful — definitely recommend and will use again.",
  },
  {
    name: "Dan Dan",
    time: "2 weeks ago",
    text: "Very good service and fair prices. Always gives accurate timing and helps as much as he can when you get stuck. Friendly — would highly recommend.",
  },
  {
    name: "Ava Lek",
    time: "2 weeks ago",
    text: "⭐️⭐️⭐️⭐️⭐️ 10/10 Service! Absolutely brilliant service from start to finish. Worked incredibly hard and went above and beyond.",
  },
  {
    name: "Lisa Baqoshi",
    time: "6 days ago",
    text: "Absolutely outstanding service! My car was stuck in an underground car park and they came and sorted everything professionally. Five stars without hesitation.",
  },
  {
    name: "Emilio Daka",
    time: "a week ago",
    text: "Excellent service! Fast response, arrived on time, and took great care of my car. Very professional, friendly, and reasonably priced. I highly recommend to anyone needing vehicle recovery or transport. ⭐⭐⭐⭐⭐",
  },
  {
    name: "Ronaldo Vasili",
    time: "4 months ago",
    text: "Recovery is an excellent place with very professional service. The staff are extremely friendly, welcoming, and always ready to help. From the moment you arrive, you feel comfortable and well taken care of.",
  },
  {
    name: "Tony Wang",
    time: "2 months ago",
    text: "Very good people, very efficient and patient. Will definitely use this company's service next time.",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <a
      href="https://maps.app.goo.gl/MDLU6T1BtEgiLj8Q8"
      target="_blank"
      rel="noopener noreferrer"
      className="w-72 flex-shrink-0 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl hover:border-primary/50 transition block"
    >
      <StarRow />
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{review.text}"</p>
      <div className="mt-5 text-sm font-semibold">
        {review.name}
        <span className="font-normal text-muted-foreground"> · {review.time}</span>
      </div>
    </a>
  );
}

export function ReviewsCarousel() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center">What Our Customers Say</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Real reviews from Birmingham & West Midlands drivers on Google.
        </p>
      </div>

      <div className="mt-12 relative">
        <div
          className="flex gap-5"
          style={{
            width: "max-content",
            animation: "reviews-scroll 60s linear infinite",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")}
        >
          {doubled.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.google.com/maps/place/Birmingham+Recovery+%26+Towing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
        >
          <Star className="h-4 w-4 fill-primary text-primary" /> Read all Google Reviews
        </a>
      </div>

      <style>{`
        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
