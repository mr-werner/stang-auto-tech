import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Bus, Car, CheckCircle2, Clock, Cog, Disc3, Facebook, Gauge, HandHeart, Instagram,
  KeyRound, LifeBuoy, MapPin, Menu, Phone, Settings, ShieldCheck, Sparkles, Thermometer, Truck, Wind, Wrench, X, Zap,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";

// -----------------------------------------------------------------------------
// CONTENT. Facts come from Stang Auto Tech's current site (stangautotech.com,
// which redirects to broomfieldautorepair.com), checked 2026-10-17.
// -----------------------------------------------------------------------------

const COMPANY = "Stang Auto Tech";
const ABBR = "sat";
const PHONE = "3034043813";
const PHONE_DISPLAY = "(303) 404-3813";
const ADDRESS = "7202 W 116th Ave";
const CITY = "Broomfield, CO 80020";
const MAPS_QUERY = "Stang Auto Tech, 7202 W 116th Ave, Broomfield, CO 80020";
const END_DATE = "2026-11-24T23:59:59-07:00";
const GOOGLE_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

// The shop's own images, hotlinked from its current site for the concept. Host copies (with permission) before launch.
const IMG = "https://irp.cdn-website.com/a6341a53/dms3rep/multi/opt";
const PHOTOS = {
  logo: `${IMG}/logo+%2810%29-1920w.png`,
  owner: `${IMG}/Hero-Stang-Auto-Tech-1920w.png`,
  kyle: `${IMG}/kyle-isolated-Stang-Auto-Tech-860h.png`,
  team: `${IMG}/Team_group_Stang_Autotech-2304w.png`,
  snow: `${IMG}/Team_snow_Stang_AutoTech-2304w.png`,
  interior: `${IMG}/Welcome-1-Stang-Auto-Tech-927w.png`,
  tire: `${IMG}/Welcome-2-Stang-Auto-Tech-445h.png`,
  mentor: `${IMG}/Welcome-3-Stang-Auto-Tech-445h.png`,
  mustang: `${IMG}/FORD-Mustang-GT-Stang-Auto-Tech-895h.png`,
};

const HOURS = [
  ["Mon – Thu", "7:00 am – 5:00 pm"],
  ["Friday", "7:00 am – 2:00 pm"],
  ["Sat – Sun", "Closed"],
];

const AWARDS = [
  { src: `${IMG}/AAA-topshop-Stang-Auto-Tech-640w.png`, alt: "AAA Top Shop winner", label: "AAA Top Shop", sub: "AAA Approved Auto Repair" },
  { src: `${IMG}/caefax-center-2024-Stang-Auto-Tech-640w.png`, alt: "CARFAX Top-Rated Service Center 2024", label: "CARFAX Top-Rated", sub: "Service Center 2024" },
  { src: `${IMG}/caefax-center-2025-Stang-Auto-Tech-9284edaf-640w.png`, alt: "CARFAX Top-Rated Service Center 2025", label: "CARFAX Top-Rated", sub: "Service Center 2025" },
  { src: "https://irp.cdn-website.com/a6341a53/dms3rep/multi/ASA-logo-3Dt-Stang-Auto-Tech.svg", alt: "Automotive Service Association member", label: "ASA Member", sub: "Automotive Service Association" },
];

const PERKS = [
  ["Free", "Shuttle service", "A ride to work or home while we fix it."],
  ["$15", "Valet service", "We pick up your car and bring it back."],
  ["$25", "Per-day rental", "Keep moving with a rental car."],
  ["5th", "Oil change free", "A thank-you to returning customers."],
];

// Their 10 service menus, kept whole so nothing the current site teaches is lost.
const SERVICES = [
  { title: "General Repair", icon: Wrench, lead: "Domestic and import cars, fleet vehicles and off-road rigs.", items: ["Domestic general repair", "Import general repair", "Fleet repairs", "Off-road vehicle repairs"] },
  { title: "Electrical", icon: Zap, lead: "From dead batteries to the computers that run your engine.", items: ["Batteries", "Starters & alternators", "Computer controls & systems", "Diagnostic testing & inspection", "Drivability", "Engine controls"] },
  { title: "Engine", icon: Cog, lead: "Timing work through full engine replacement.", items: ["Cylinder heads", "Timing components", "Engine replacement"] },
  { title: "Car Care", icon: Sparkles, lead: "The maintenance that keeps everything else from breaking.", items: ["Oil, lube & filter", "Fluid services", "Spark plugs", "Fuel injection", "Ignition systems & components", "Hybrid & electric car repair"] },
  { title: "Heating & A/C", icon: Thermometer, lead: "Comfortable cabins in January and July.", items: ["Air conditioning", "Radiators", "Thermostats", "Belts & hoses", "Coolant exchange", "Temperature controls"] },
  { title: "Transmission", icon: Settings, lead: "Automatic, manual, CVT and everything that turns the wheels.", items: ["Automatic transmissions", "Manual transmissions", "Clutches", "CVT", "4-wheel & front-wheel drive", "Transfer case", "Differential", "Drive & propeller shafts", "Fluid exchange"] },
  { title: "Steering & Suspension", icon: Gauge, lead: "A straight, quiet, planted ride.", items: ["Shocks & struts", "Ball joints", "Control arms & bushings", "Tie rod ends & linkage", "Rack & pinion, steering gears", "Power steering pumps & hoses", "Stabilizer bars", "Alignment"] },
  { title: "Brakes", icon: Disc3, lead: "Stopping power you never have to think about.", items: ["Pads & shoes", "Rotors", "Calipers", "Hoses & master cylinders", "ABS & traction control", "Brake fluid exchange"] },
  { title: "Exhaust", icon: Wind, lead: "Quiet, clean and emissions-ready.", items: ["Mufflers", "Catalytic converters", "Exhaust manifolds", "EGR valve", "Pipes, hangers & tips"] },
  { title: "Tires", icon: Car, lead: "New rubber and the service that makes it last.", items: ["New tires", "Mounting & balancing", "Mileage rotations", "Maintenance balancing"] },
];

const VEHICLES = [
  { icon: Car, title: "Cars & SUVs", text: "Domestic and import daily drivers." },
  { icon: Zap, title: "Hybrid & Electric", text: "Today's battery and hybrid systems." },
  { icon: Truck, title: "Trucks & Off-Road", text: "4x4, transfer cases and lifted rigs." },
  { icon: Bus, title: "Fleet", text: "Work vehicles that can't sit idle." },
];

const VALUES = [
  { icon: ShieldCheck, title: "Ethics & Integrity", text: "Act with honesty and ethics in everything we do." },
  { icon: Gauge, title: "Continuous Improvement", text: "Strive for perfection, even if we will never be." },
  { icon: HandHeart, title: "Servant Attitude", text: "Foster communication and teamwork." },
  { icon: Sparkles, title: "Stay Gold", text: "“Be who you are intended to be, don't let others make you into anything else.”", gold: true },
];

const SOCIAL = [
  { name: "Facebook", url: "https://facebook.com/stangautotech", icon: Facebook },
  { name: "Instagram", url: "https://instagram.com/stangautotech/", icon: Instagram },
];

const SERVICE_OPTIONS = ["Not sure / diagnosis", ...SERVICES.map((s) => s.title), "Towing / Rescue Me"];

// -----------------------------------------------------------------------------
// MOTIFS
// -----------------------------------------------------------------------------

function Stripes({ className = "" }) {
  return <span className={`stripes ${className}`} aria-hidden="true"><i /><i /></span>;
}

function Plate() {
  return (
    <div className="plate" aria-label="Family-run since 1980">
      <span className="plate-top">COLORADO</span>
      <strong>SINCE 80</strong>
      <span className="plate-bottom">FAMILY RUN · BROOMFIELD</span>
    </div>
  );
}

function Odometer({ value }) {
  return (
    <div className="odometer" aria-label={`${Number(value).toLocaleString()} miles`}>
      {value.split("").map((digit, i) => <span key={i}>{digit}</span>)}
      <small>MI</small>
    </div>
  );
}

// -----------------------------------------------------------------------------
// HEADER
// -----------------------------------------------------------------------------

const NAV = [["#services", "Services"], ["#perks", "Perks"], ["#warranty", "Warranty"], ["#crew", "Our Crew"], ["#visit", "Visit"]];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="sticky">
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span><ShieldCheck size={14} /> AAA Top Shop · CARFAX Top-Rated 2024 &amp; 2025</span>
          <span className="topbar-right">
            <span><Clock size={14} /> Mon–Thu 7–5 · Fri 7–2</span>
            {SOCIAL.map(({ name, url, icon: Icon }) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${COMPANY} on ${name}`}><Icon size={14} /></a>)}
          </span>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-inner">
          <a className="logo" href="#home" onClick={close} aria-label={`${COMPANY} home`}>
            <img src={PHOTOS.logo} alt={COMPANY} width="229" height="66" />
          </a>
          <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
            {NAV.map(([href, label]) => <a key={href} href={href} onClick={close}>{label}</a>)}
            <a className="nav-book" href="#book" onClick={close}>Schedule Service</a>
          </nav>
          <a className="header-phone" href={`tel:${PHONE}`}><Phone size={17} /> {PHONE_DISPLAY}</a>
          <a className="btn btn-red header-cta" href="#book">Schedule <ArrowUpRight size={17} /></a>
          <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
        </div>
      </header>
    </div>
  );
}

// -----------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------

function Hero({ rating }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" style={{ backgroundImage: `url(${PHOTOS.owner})` }} aria-hidden="true" />
      <Stripes className="hero-stripes" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="kicker">Family-run · Broomfield · Since 1980</span>
          <h1>Broomfield's <span>car &amp; truck</span> experts.</h1>
          <p>Oil changes to engine replacements on domestic, import, hybrid, off-road and fleet vehicles. ASE-certified, AAA approved, and backed by a 36-month, 36,000-mile nationwide guarantee.</p>
          <div className="hero-actions">
            <a className="btn btn-red" href="#book">Schedule an Appointment <ArrowUpRight size={18} /></a>
            <a className="btn btn-line" href={`tel:${PHONE}`}><Phone size={18} /> {PHONE_DISPLAY}</a>
          </div>
          <ul className="hero-facts">
            <li><Clock size={16} /> Mon–Thu 7–5 · Fri 7–2</li>
            <li><MapPin size={16} /> {ADDRESS}, Broomfield</li>
            {rating && <li><a href={rating.googleMapsUri || GOOGLE_URL} target="_blank" rel="noopener noreferrer">★ {rating.rating.toFixed(1)} · {rating.userRatingCount.toLocaleString()} Google reviews</a></li>}
          </ul>
        </div>
        <div className="hero-figure">
          <img className="hero-kyle" src={PHOTOS.kyle} alt="Stang Auto Tech technician at work" width="701" height="860" />
          <Plate />
        </div>
      </div>
    </section>
  );
}

function TrophyRail() {
  return (
    <section className="trophies" aria-label="Awards and affiliations">
      <div className="wrap trophies-inner">
        <div className="trophies-title">
          <span className="kicker dark">Recognized by</span>
          <strong>The people who rate repair shops.</strong>
        </div>
        <div className="trophy-row">
          {AWARDS.map(({ src, alt, label, sub }) => (
            <figure key={src} className="trophy">
              <div><img src={src} alt={alt} loading="lazy" /></div>
              <figcaption><b>{label}</b>{sub}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];
  const Icon = current.icon;
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="kicker dark">The service menu</span>
            <h2>Every system. <span>Every vehicle.</span></h2>
          </div>
          <p>All ten service menus from the current site in one place. Pick a system to see what's covered.</p>
        </div>
        <div className="menu-board">
          <div className="menu-tabs" role="tablist" aria-label="Service categories">
            {SERVICES.map(({ title, icon: TabIcon }, i) => (
              <button key={title} type="button" role="tab" aria-selected={i === active} className={i === active ? "active" : ""} onClick={() => setActive(i)}>
                <span className="tab-num">{String(i + 1).padStart(2, "0")}</span><TabIcon size={18} /> {title}
              </button>
            ))}
          </div>
          <div className="menu-panel" role="tabpanel">
            <Stripes className="panel-stripes" />
            <span className="panel-icon"><Icon size={30} strokeWidth={1.6} /></span>
            <h3>{current.title}</h3>
            <p>{current.lead}</p>
            <ul>{current.items.map((item) => <li key={item}><CheckCircle2 size={16} /> {item}</li>)}</ul>
            <a className="btn btn-red" href="#book" data-service={current.title}>Schedule {current.title} <ArrowRight size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Vehicles() {
  return (
    <section className="vehicles">
      <div className="wrap vehicles-inner">
        <div className="vehicles-car">
          <img src={PHOTOS.mustang} alt="Ford Mustang GT" loading="lazy" width="819" height="900" />
        </div>
        <div>
          <span className="kicker">What rolls into our bays</span>
          <h2>Pony cars to <span>work trucks.</span></h2>
          <p className="lead-light">One shop for the whole household and the whole fleet, serving Broomfield, Adams and Boulder counties.</p>
          <div className="vehicle-grid">
            {VEHICLES.map(({ icon: Icon, title, text }) => (
              <div key={title}><Icon size={24} strokeWidth={1.6} /><b>{title}</b><span>{text}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="section perks" id="perks">
      <div className="wrap">
        <div className="head">
          <div>
            <span className="kicker dark">Pit pass</span>
            <h2>Your car's in the shop. <span>You're not stuck.</span></h2>
          </div>
          <p>Perks for valued customers, plus seasonal specials throughout the year.</p>
        </div>
        <div className="tickets">
          {PERKS.map(([big, title, text]) => (
            <article className="ticket" key={title}>
              <div className="ticket-stub"><strong>{big}</strong></div>
              <div className="ticket-body"><b>{title}</b><span>{text}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Warranty() {
  return (
    <section className="section warranty" id="warranty">
      <Stripes className="warranty-stripes" />
      <div className="wrap warranty-inner">
        <div className="warranty-card">
          <span className="kicker">Nationwide guarantee</span>
          <h2>36 months. <span>36,000 miles.</span></h2>
          <p>One of the best warranties in the industry, honored across the country. Your repair stays covered whether you're in Broomfield or on a road trip.</p>
          <Odometer value="036000" />
        </div>
        <div className="rescue">
          <span className="rescue-icon"><LifeBuoy size={34} strokeWidth={1.6} /></span>
          <span className="kicker">Rescue Me Roadside Assistance</span>
          <h3>Stranded? Call for help.</h3>
          <ul>
            {["Towing", "Flat tires", "No-starts", "Locked-in keys"].map((x) => <li key={x}><KeyRound size={15} /> {x}</li>)}
          </ul>
          <a className="btn btn-red" href={`tel:${PHONE}`}><Phone size={17} /> Call {PHONE_DISPLAY}</a>
        </div>
      </div>
    </section>
  );
}

function Crew() {
  return (
    <section className="section crew" id="crew">
      <div className="wrap">
        <div className="crew-top">
          <div>
            <span className="kicker dark">Family, community, faith</span>
            <h2>The crew behind <span>the counter.</span></h2>
          </div>
          <p>Since 1980, Stang Auto Tech has been a family-run, full-service repair and preventive maintenance center for Broomfield, Adams and Boulder counties. Our mission is to put integrity and our customers first, in a workplace that inspires the people who work here.</p>
        </div>
        <figure className="crew-photo">
          <img src={PHOTOS.team} alt="The Stang Auto Tech team" loading="lazy" width="1920" height="584" />
          <figcaption>The Stang Auto Tech team, Broomfield</figcaption>
        </figure>
        <div className="values">
          {VALUES.map(({ icon: Icon, title, text, gold }) => (
            <article key={title} className={gold ? "value gold" : "value"}>
              <Icon size={26} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="filmstrip">
          <img src={PHOTOS.interior} alt="Two technicians checking a car's interior" loading="lazy" />
          <img src={PHOTOS.tire} alt="Technician removing a tire" loading="lazy" />
          <img src={PHOTOS.mentor} alt="A mentor working with a young apprentice" loading="lazy" />
          <img src={PHOTOS.snow} alt="The Stang Auto Tech team outside in the snow" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const blank = { name: "", phone: "", email: "", vehicle: "", service: "", ride: "", date: "", notes: "", website: "" };
  const [form, setForm] = useState(blank);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const pick = (event) => {
      const link = event.target.closest?.("a[data-service]");
      if (link) setForm((prev) => ({ ...prev, service: link.dataset.service }));
    };
    document.addEventListener("click", pick);
    return () => document.removeEventListener("click", pick);
  }, []);

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function submit(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.message || "Something went wrong.");
      setStatus(result.demo ? "demo" : "sent");
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  }

  if (status === "sent" || status === "demo") {
    return (
      <div className="form done">
        <CheckCircle2 size={44} />
        <h3>{status === "demo" ? "This is where Stang gets your request." : "Request received."}</h3>
        <p>{status === "demo"
          ? "In this concept preview, requests aren't sent anywhere. On the live site they'd land in the shop's inbox with everything needed to call you back."
          : `Thanks, ${form.name.split(" ")[0]}. We'll call to confirm your time.`}</p>
        <button type="button" className="btn btn-dark" onClick={() => setStatus("idle")}>Back to the form</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <label>Name *<input value={form.name} onChange={update("name")} required maxLength={160} autoComplete="name" /></label>
        <label>Phone *<input type="tel" value={form.phone} onChange={update("phone")} required maxLength={40} autoComplete="tel" /></label>
      </div>
      <div className="form-row">
        <label>Email<input type="email" value={form.email} onChange={update("email")} maxLength={254} autoComplete="email" /></label>
        <label>Vehicle<input value={form.vehicle} onChange={update("vehicle")} maxLength={160} placeholder="Year, make, model" /></label>
      </div>
      <div className="form-row">
        <label>Service<select value={form.service} onChange={update("service")}><option value="">Choose a service…</option>{SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}</select></label>
        <label>While we work<select value={form.ride} onChange={update("ride")}><option value="">Choose…</option>{["I'll wait / drop off", "Free shuttle", "$15 valet", "$25/day rental"].map((o) => <option key={o}>{o}</option>)}</select></label>
      </div>
      <label>Preferred day<input type="date" value={form.date} onChange={update("date")} /></label>
      <label>What's going on?<textarea rows={4} maxLength={3000} value={form.notes} onChange={update("notes")} placeholder="Symptoms, warning lights, service due…" /></label>
      <div className="interest-honeypot" aria-hidden="true"><label>Website<input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} /></label></div>
      {message && <p className="form-error" role="alert">{message}</p>}
      <button type="submit" className="btn btn-red full" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request Appointment"} <ArrowUpRight size={18} /></button>
      <p className="form-note">We'll confirm by phone. Need it sooner? Call <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.</p>
    </form>
  );
}

function Book() {
  return (
    <section className="section book" id="book">
      <Stripes className="book-stripes" />
      <div className="wrap book-inner">
        <div>
          <span className="kicker">Schedule an appointment</span>
          <h2>Booking that <span>actually works.</span></h2>
          <p className="lead-light">Pick a service and a day. We'll confirm your time and line up a shuttle, valet or rental if you need one.</p>
          <ul className="book-points">
            <li><CheckCircle2 size={18} /> Mon–Thu 7 am – 5 pm, Fri 7 am – 2 pm</li>
            <li><CheckCircle2 size={18} /> Free shuttle or $25/day rental</li>
            <li><CheckCircle2 size={18} /> 36/36 nationwide guarantee</li>
          </ul>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

function Visit({ rating }) {
  const embed = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=15&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`;
  return (
    <section className="section visit" id="visit">
      <div className="wrap visit-inner">
        <div>
          <span className="kicker dark">Visit the shop</span>
          <h2>West 116th Avenue, <span>Broomfield.</span></h2>
          <div className="visit-list">
            <div><MapPin size={20} /><span><small>Address</small>{ADDRESS}<br />{CITY}</span></div>
            <div><Phone size={20} /><span><small>Phone</small><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></span></div>
            <div><Clock size={20} /><span><small>Hours</small>{HOURS.map(([d, h]) => <span className="hours" key={d}><b>{d}</b>{h}</span>)}</span></div>
          </div>
          <div className="visit-actions">
            <a className="btn btn-dark" href={directions} target="_blank" rel="noopener noreferrer">Get Directions <ArrowUpRight size={17} /></a>
            <a className="btn btn-outline" href={rating?.googleMapsUri || GOOGLE_URL} target="_blank" rel="noopener noreferrer">
              {rating ? `★ ${rating.rating.toFixed(1)} · Read Google reviews` : "Read reviews on Google"} <ArrowUpRight size={17} />
            </a>
          </div>
          <p className="areas">Serving Broomfield, Adams and Boulder counties.</p>
        </div>
        <div className="map"><iframe title={`Map to ${COMPANY}`} src={embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Stripes className="footer-stripes" />
      <div className="wrap footer-main">
        <div>
          <span className="footer-logo"><img src={PHOTOS.logo} alt={COMPANY} width="229" height="66" loading="lazy" /></span>
          <p>Family-run car and truck repair in Broomfield since 1980. AAA Top Shop, ASE-certified, 36/36 nationwide guarantee.</p>
          <div className="footer-social">
            {SOCIAL.map(({ name, url, icon: Icon }) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}><Icon size={16} /></a>)}
            <a href="https://yelp.com/biz/stang-auto-tech-broomfield" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="footer-yelp">Yelp</a>
          </div>
        </div>
        <div><b>Services</b>{SERVICES.slice(0, 6).map(({ title }) => <a key={title} href="#services">{title}</a>)}</div>
        <div><b>Shop</b>{NAV.map(([href, label]) => <a key={href} href={href}>{label}</a>)}<a href="#book">Schedule Service</a></div>
        <div><b>Contact</b><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a><span>{ADDRESS}</span><span>{CITY}</span><span>Mon–Thu 7–5 · Fri 7–2</span></div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {COMPANY}. Independent design concept, not an official company website.</span>
        <StudioCredit />
      </div>
    </footer>
  );
}

// -----------------------------------------------------------------------------
// PAGE
// -----------------------------------------------------------------------------

export default function App() {
  const [rating, setRating] = useState(null);

  // A rating shows only when live Google data is configured (GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID).
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/google-reviews", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (typeof d?.rating === "number" && typeof d?.userRatingCount === "number") setRating(d); })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <>
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
      <Header />
      <main>
        <Hero rating={rating} />
        <TrophyRail />
        <Services />
        <Vehicles />
        <Perks />
        <Warranty />
        <Crew />
        <Book />
        <Visit rating={rating} />
      </main>
      <Footer />
    </>
  );
}
