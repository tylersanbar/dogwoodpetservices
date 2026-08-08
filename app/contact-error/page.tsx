import Link from "next/link";

export default function ContactErrorPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="section confirmation-section">
        <p className="section-kicker">Message not sent</p>
        <h1>Please contact us directly.</h1>
        <p>
          The website form could not send your message. Email contact@dogwoodpet.services or call
          405-830-5877 with your dates and pet care needs.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="mailto:contact@dogwoodpet.services">
            Email Dogwood
          </a>
          <Link className="button secondary" href="/#contact">
            Back to Form
          </Link>
        </div>
      </section>
    </main>
  );
}
