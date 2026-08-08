import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Dog Boarding",
    price: "$40 per dog",
    details: [
      "$30 for each additional dog in the same kennel",
      "Holiday rate: $45 for the first dog, $30 for each additional dog in the same kennel",
      "Daily enrichment included with every stay",
    ],
  },
  {
    title: "In-Home Care",
    price: "$50 for 2 visits a day",
    details: [
      "Consistent home routines while you are away",
      "Ideal for pets who are more comfortable in their own space",
      "Visits more than 10 miles away include added gas mileage",
    ],
  },
  {
    title: "Overnight Care",
    price: "$80 per night",
    details: [
      "5pm to 9am overnight care",
      "Steady evening and morning support",
      "Great for pets who need companionship through the night",
    ],
  },
  {
    title: "Enrichment Visits",
    price: "$30 per 30 minute visit",
    details: [
      "Mental and physical enrichment tailored to your pet",
      "A useful reset during long work days or busy weeks",
      "Visits more than 10 miles away include added gas mileage",
    ],
  },
];

const values = [
  {
    title: "Enrichment is a Basic Need",
    text: "Providing enrichment is not an option. We include it for every pet that stays with us as part of their daily care.",
  },
  {
    title: "Open Communication",
    text: "We keep pet parents informed with daily updates and photos so you never have to wonder how your companion is doing.",
  },
  {
    title: "Species-Specific Expertise",
    text: "We invest in ongoing education so our staff can meet the unique physiological and behavioral needs of diverse species.",
  },
  {
    title: "Safety First",
    text: "Secure enclosures, strict hygiene protocols, and a 24/7 emergency plan ensure your pet is always in good hands.",
  },
];

const highlights = [
  "Insured",
  "Daily Enrichment",
  "24/7 Supervision",
  "Photo Updates",
];

const galleryItems = [
  "Calm kennels",
  "Homestead setting",
  "Daily enrichment",
  "Happy companions",
  "Outdoor decompression",
  "Species-aware care",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section id="home" className="hero-section">
        <nav className="site-nav" aria-label="Main navigation">
          <Link className="brand-mark" href="/#home" aria-label="Dogwood Pet Services home">
            DW
          </Link>
          <div className="nav-links">
            <Link href="/#services">Services</Link>
            <Link href="/#booking">Booking</Link>
            <Link href="/#crew">Crew</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Peaceful and professional pet care for all kinds</p>
            <h1>Dogwood Pet Services LLC</h1>
            <p className="hero-subtitle">
              Professional, loving dog boarding and in-home care for every kind of companion - furry,
              feathered, or scaly.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/#contact">
                Request Booking
              </Link>
              <a className="button secondary" href="tel:4058305877">
                Call 405-830-5877
              </a>
            </div>
          </div>

          <div className="hero-image-wrap" aria-label="Dogwood Pet Services brand card">
            <Image
              src="/dogwood_brochure.png"
              alt="Dogwood Pet Services illustrated contact card"
              width={990}
              height={559}
              priority
              className="hero-image"
            />
          </div>
        </div>

        <div className="trust-ribbon" aria-label="Service highlights">
          {highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section intro-section">
        <div>
          <p className="section-kicker">South Norman pet care</p>
          <h2>A homestead boarding experience built around calm, enrichment, and safety.</h2>
        </div>
        <p>
          Welcome to Dogwood Pet Services. Our facility is located on our homestead in south Norman,
          away from the hustle and bustle, and nestled right next to our little alpaca farm. We
          create a safe place for pets to peacefully relax and flourish with enrichment-focused,
          small-scale boarding that helps every pet thrive, not just get through the stay.
        </p>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <p className="section-kicker">Our services</p>
          <h2>Dog Boarding, In-Home Care, Overnight Care, and Enrichment Visits.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p className="service-price">{service.price}</p>
              <ul>
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="fine-print">
          Holiday fees apply during peak travel dates. Mileage fees apply to visits more than 10
          miles from Dogwood Pet Services.
        </p>
      </section>

      <section className="section why-section">
        <div className="why-copy">
          <p className="section-kicker">Why Choose Dogwood Pet Services?</p>
          <h2>Care from people who understand that every animal has unique needs.</h2>
          <p>
            We are not just a boarding facility. We are pet lovers with years of experience caring
            for diverse species, from golden retrievers to bearded dragons. We provide tailored care
            that keeps your pets happy, healthy, and understood.
          </p>
        </div>
        <div className="proof-grid">
          <div>
            <strong>200+</strong>
            <span>clients</span>
          </div>
          <div>
            <strong>13</strong>
            <span>years experience</span>
          </div>
        </div>
        <ul className="check-list">
          <li>Experienced, trained animal care staff</li>
          <li>Climate-controlled environments</li>
          <li>24/7 supervision and emergency protocols</li>
          <li>Daily photo updates for peace of mind</li>
          <li>Flexible drop-off and pick-up times</li>
        </ul>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-kicker">Our values</p>
          <h2>Purposeful care in every routine.</h2>
        </div>
        <div className="value-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-heading">
          <p className="section-kicker">Gallery</p>
          <h2>A look at the kind of calm, hands-on care families can expect.</h2>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-tile" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="section booking-section">
        <div className="section-heading">
          <p className="section-kicker">Booking process</p>
          <h2>Simple first contact, then a complete intake and payment form.</h2>
        </div>
        <div className="process-list">
          <article>
            <span>01</span>
            <h3>Send a request</h3>
            <p>Use the contact form or call with your dates, service type, and pet care needs.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Erica replies</h3>
            <p>Erica confirms availability and sends the booking email with the intake form link.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Complete forms</h3>
            <p>
              The booking form collects required pet information, payment, and a liability form with
              digital signature.
            </p>
          </article>
        </div>
      </section>

      <section id="crew" className="section crew-section">
        <div className="section-heading">
          <p className="section-kicker">Meet the crew</p>
          <h2>Owner-operated care from Erica and Brian.</h2>
        </div>
        <div className="crew-intro">
          <p>
            We are Erica and Brian, owners and staff for Dogwood Pet Services. Together we bring a
            lifetime of animal care experience across pets, veterinary care, exotics, wildlife
            rehabilitation, animal care, and conservation.
          </p>
        </div>
        <div className="crew-grid">
          <article className="crew-card">
            <div className="portrait-placeholder">Erica</div>
            <h3>Erica</h3>
            <p>
              Dogwood Pet Services started as a pet sitting business when Erica was 18. Since then, she
              has worked as an exotic animal educator, an office manager at an animal ER, and an
              enrichment coordinator for a raptor rehabilitation center. She is passionate about
              animal welfare, animal rescue, community, education, and sustainability.
            </p>
          </article>
          <article className="crew-card">
            <div className="portrait-placeholder">Brian</div>
            <h3>Brian</h3>
            <p>
              Brian has spent years working across public lands, restoration ecology, forestry, and
              wildlife conservation projects in Montana, Oregon, and Oklahoma. He recently joined
              Erica full-time in the pet care business after work as an archaeologist for a
              consulting firm out of OKC.
            </p>
          </article>
        </div>
      </section>

      <section className="section review-section">
        <div>
          <p className="section-kicker">Facebook and reviews</p>
          <h2>Follow Dogwood Pet Services on Facebook.</h2>
          <p>
            See recent updates, community posts, and Facebook reviews from families who trust us
            with their companions.
          </p>
          <a
            className="facebook-link"
            href="https://www.facebook.com/Dogwoodpetservices"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Facebook page
          </a>
        </div>
        <div className="facebook-widget" aria-label="Dogwood Pet Services Facebook page widget">
          <iframe
            title="Dogwood Pet Services Facebook page"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDogwoodpetservices&tabs=timeline%2Creviews&width=500&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
            width="500"
            height="520"
            style={{ border: "none", overflow: "hidden" }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>Ready to talk dates and care needs?</h2>
          <p>
            Tell us what you need and we will reply with availability, next steps, and the booking
            form link.
          </p>
          <address>
            <a href="tel:4058305877">405-830-5877</a>
            <span>31921 Whippoorwill Drive, Norman, OK 73072</span>
          </address>
        </div>
        <form className="contact-form">
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            Service
            <select name="service" defaultValue="Dog Boarding">
              <option>Dog Boarding</option>
              <option>In-Home Care</option>
              <option>Overnight Care</option>
              <option>Enrichment Visits</option>
            </select>
          </label>
          <label className="full-span">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Dates, number of pets, and anything we should know."
              required
            />
          </label>
          <button className="button primary full-span" type="submit">
            Send Request
          </button>
          <p className="form-note full-span">
            Email delivery needs an Erica email address and form provider before this can send live
            messages.
          </p>
        </form>
      </section>
    </main>
  );
}
