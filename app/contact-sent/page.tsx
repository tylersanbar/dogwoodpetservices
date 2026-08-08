import Link from "next/link";

export default function ContactSentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section confirmation-section">
        <p className="section-kicker">Request sent</p>
        <h1>Thanks for reaching out.</h1>
        <p>
          Your message was sent to Dogwood Pet Services. We will reply with availability, next
          steps, and the booking form link.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/">
            Back Home
          </Link>
          <a className="button secondary" href="mailto:contact@dogwoodpet.services">
            Email Directly
          </a>
        </div>
      </section>
    </main>
  );
}
