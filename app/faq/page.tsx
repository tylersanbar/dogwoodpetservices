import Link from "next/link";

const faqs = [
  {
    question: "What services does Tails & Scales offer?",
    answer:
      "We offer dog boarding, in-home care, overnight care, and enrichment visits for pets who need extra support, structure, and attention.",
  },
  {
    question: "How much is dog boarding?",
    answer:
      "Dog boarding is $40 per dog. Each additional dog sharing the same kennel is $30. Holiday stays are $45 for the first dog and $30 for each additional dog in the same kennel.",
  },
  {
    question: "Are enrichment activities included?",
    answer:
      "Yes. Enrichment is included as part of daily care because pets need mental stimulation, decompression, and species-aware routines to do well.",
  },
  {
    question: "How does booking work?",
    answer:
      "Start with the contact form or a phone call. Erica replies with availability and sends a booking email with the required pet information form, payment, and liability form with digital signature.",
  },
  {
    question: "Do you send updates?",
    answer:
      "Yes. We provide daily updates and photos so you can see how your pet is doing while you are away.",
  },
  {
    question: "Are there mileage fees for in-home visits?",
    answer:
      "Visits more than 10 miles from Tails & Scales include added gas mileage.",
  },
  {
    question: "Where are you located?",
    answer:
      "Tails & Scales Pet Services LLC is located at 31921 Whippoorwill Drive, Norman, OK 73072.",
  },
  {
    question: "Do holidays cost more?",
    answer:
      "Yes. Holiday boarding is $45 for the first dog and $30 for each additional dog sharing the same kennel.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="faq-hero">
        <nav className="site-nav" aria-label="FAQ navigation">
          <Link className="brand-mark" href="/" aria-label="Tails and Scales home">
            T&S
          </Link>
          <div className="nav-links">
            <Link href="/#services">Services</Link>
            <Link href="/#booking">Booking</Link>
            <Link href="/#crew">Crew</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </nav>
        <div className="faq-heading">
          <p className="eyebrow">Common questions</p>
          <h1>FAQ</h1>
          <p>
            Quick answers about pricing, booking, updates, holiday fees, and in-home care mileage.
          </p>
        </div>
      </section>

      <section className="section faq-list">
        {faqs.map((faq) => (
          <article className="faq-item" key={faq.question}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </article>
        ))}
      </section>

      <section className="section faq-cta">
        <h2>Still have a question?</h2>
        <p>Call 405-830-5877 or send a booking request with your dates and pet care needs.</p>
        <Link className="button primary" href="/#contact">
          Contact Tails &amp; Scales
        </Link>
      </section>
    </main>
  );
}
