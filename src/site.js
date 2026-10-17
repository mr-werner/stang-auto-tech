import { Award, Battery, Car, Clock, Cog, Disc3, Facebook, Gauge, Instagram, MapPin, Settings, ShieldCheck, Star, Thermometer, Truck, Wind, Wrench, Zap, CircleDot, Bus, KeyRound } from "lucide-react";

const COMPANY = "Stang Auto Tech";
const MAPS_QUERY = "Stang Auto Tech, 7202 W 116th Ave, Broomfield, CO 80020";
const IMG = "https://irp.cdn-website.com/a6341a53/dms3rep/multi";

export default {
  COMPANY,
  ABBR: "sat",
  NOUN: "shop",
  PHONE: "3034043813",
  PHONE_DISPLAY: "(303) 404-3813",
  EMAIL: "",
  ADDRESS: "7202 W 116th Ave",
  CITY: "Broomfield, CO 80020",
  MAPS_QUERY,
  FOUNDED: 1980,
  GOOGLE_PLACE_ID: "",
  // Shown until live Google data loads. From a third-party listing (may be outdated); confirm before launch.
  FALLBACK_RATING: { rating: 4.8, userRatingCount: 210 },
  END_DATE: "2026-11-24T23:59:59-07:00",

  BRAND: { name: "Stang Auto Tech", sub: "BROOMFIELD · SINCE 1980", icon: Car, logo: `${IMG}/opt/logo+%2810%29-1920w.png` },
  ANNOUNCE: "AAA Top Shop · CARFAX Top-Rated 2024 & 2025 · 36-month / 36,000-mile nationwide guarantee",

  HOURS: [
    ["Monday – Thursday", "7:00 am – 5:00 pm"],
    ["Friday", "7:00 am – 2:00 pm"],
    ["Saturday & Sunday", "Closed"],
  ],
  HOURS_SHORT: "Mon–Thu 7–5 · Fri 7–2",

  HERO: {
    eyebrow: "FAMILY-RUN AUTO REPAIR · BROOMFIELD · SINCE 1980",
    title: ["Broomfield's car and truck experts ", "since 1980."],
    text: "Family-run, ASE-certified and AAA approved. Stang Auto Tech handles everything from oil changes to engine replacements on domestic, import, hybrid, off-road and fleet vehicles, backed by a 36-month, 36,000-mile nationwide guarantee.",
    cta: "Schedule an Appointment",
    image: `${IMG}/opt/Team_group_Stang_Autotech-2304w.png`,
    badgeKicker: "★★★★★",
    badgeBig: "4.8",
    badgeSmall: "Google rating",
    card: [
      { icon: Clock, title: "Mon–Thu 7 am – 5 pm", text: "Friday 7 am – 2 pm" },
      { icon: ShieldCheck, title: "36 mo / 36,000 mi", text: "Nationwide guarantee" },
      { icon: MapPin, title: "7202 W 116th Ave", text: "Broomfield, CO 80020" },
    ],
  },

  STATS: (rating) => [
    ["46 yrs", "Serving Broomfield"],
    [rating ? `${rating.rating.toFixed(1)} ★` : "5 ★", "Google rating"],
    ["36/36", "Nationwide guarantee"],
    ["$25/day", "Loaner car rentals"],
  ],

  AWARDS: [
    { title: "AAA Top Shop", text: "AAA Approved Auto Repair winner", img: `${IMG}/opt/AAA-topshop-Stang-Auto-Tech-640w.png` },
    { title: "CARFAX 2024", text: "Top-Rated Service Center", img: `${IMG}/opt/caefax-center-2024-Stang-Auto-Tech-640w.png` },
    { title: "CARFAX 2025", text: "Top-Rated Service Center", img: `${IMG}/opt/caefax-center-2025-Stang-Auto-Tech-9284edaf-640w.png` },
    { title: "ASA Member", text: "Automotive Service Association", img: `${IMG}/ASA-logo-3Dt-Stang-Auto-Tech.svg` },
  ],

  OFFERS: [
    ["Free shuttle", "We'll get you to work or home"],
    ["$25/day rentals", "Keep moving while we fix it"],
    ["Free 5th oil change", "Our thank-you for loyal customers"],
    ["Rescue Me Roadside", "Towing, flats, no-starts and lockouts"],
  ],

  SERVICES: {
    eyebrow: "WHAT WE DO",
    title: ["Full-service repair. ", "Every system, every vehicle."],
    text: "Domestic, import, hybrid, electric, off-road and fleet. Preventive maintenance through heavy-duty work.",
    cta: "Schedule this service",
    items: [
      { title: "Maintenance & Car Care", desc: "Oil, lube and filter, fluids, spark plugs, fuel injection and tune-ups.", icon: Wrench },
      { title: "Engine", desc: "Diagnostics, timing components, cylinder heads and engine replacement.", icon: Cog },
      { title: "Brakes", desc: "Pads, rotors, calipers, ABS, traction control and brake fluid exchange.", icon: Disc3 },
      { title: "Transmission & Drivetrain", desc: "Automatic and manual, clutches, 4WD, transfer cases and differentials.", icon: Settings },
      { title: "Steering & Suspension", desc: "Shocks, struts, control arms, sway bars and alignment.", icon: Gauge },
      { title: "Heating & Cooling", desc: "A/C, radiators, thermostats, belts, hoses and coolant exchange.", icon: Thermometer },
      { title: "Electrical & Hybrid", desc: "Batteries, starters, alternators, computer controls, hybrid and EV repair.", icon: Zap },
      { title: "Exhaust & Tires", desc: "Mufflers, catalytic converters, EGR, new tires, mounting and balancing.", icon: Wind },
    ],
  },

  FEATURE: {
    id: "vehicles",
    nav: "Vehicles",
    eyebrow: "WHAT WE WORK ON",
    title: ["Daily drivers to ", "work trucks."],
    text: "One shop for the whole household and the whole fleet.",
    cards: [
      { name: "Cars & SUVs", icon: Car, lead: "Domestic and import.", items: ["Factory maintenance", "Check-engine diagnostics", "Hybrid and electric repair"] },
      { name: "Trucks & Off-Road", icon: Truck, lead: "Built for Colorado.", items: ["4WD and transfer cases", "Differentials and driveshafts", "Heavy-duty work"] },
      { name: "Fleet Vehicles", icon: Bus, lead: "Keep your business moving.", items: ["Scheduled fleet service", "Fast turnaround", "Towing available"] },
    ],
  },

  PROCESS: {
    eyebrow: "HOW IT WORKS",
    title: ["Easy in. ", "Easy out."],
    text: "We make the time your car is in the shop as painless as possible.",
    steps: [
      ["Schedule", "Book online or call. Towing is available if it won't drive."],
      ["Get moving", "Free shuttle, $15 valet or a $25-a-day rental while we work."],
      ["Approve the work", "ASE-certified techs diagnose it and walk you through the estimate."],
      ["Drive away covered", "36-month, 36,000-mile nationwide guarantee on the repair."],
    ],
  },

  ABOUT: {
    nav: "About",
    eyebrow: "FAMILY-RUN SINCE 1980",
    title: ["Integrity, improvement, ", "and staying gold."],
    text: [
      "Since 1980, Stang Auto Tech has given Broomfield motorists expert car and truck repair. We're family-run, our technicians are ASE-certified, and our mission is to maintain an inspiring and motivating environment for our customers and our employees.",
      "Our core values: Ethics and Integrity, Continuous Improvement, Servant Attitude, and Stay Gold.",
    ],
    badge: ["1980", "Family-run since"],
    tiles: [
      { label: "Ethics & Integrity", icon: ShieldCheck },
      { label: "Continuous Improvement", icon: Gauge },
      { label: "Servant Attitude", icon: KeyRound },
      { label: "Stay Gold", icon: Award },
    ],
    credentials: [
      { title: "ASE-certified technicians", desc: "Trained on today's domestic, import and hybrid systems." },
      { title: "AAA Top Shop", desc: "Recognized by AAA Approved Auto Repair." },
      { title: "36/36 nationwide guarantee", desc: "36 months or 36,000 miles, honored across the country." },
      { title: "Serving three counties", desc: "Broomfield, Adams and Boulder." },
    ],
  },

  REVIEWS: {
    title: ["Thousands of reviews. ", "One reputation."],
    text: "The current site counts more than 3,400 customer reviews. Read them on Google.",
    quoteSource: "",
    quotes: [],
  },

  BOOK: {
    nav: "Schedule Service",
    eyebrow: "SCHEDULE AN APPOINTMENT",
    title: ["Booking that ", "actually works."],
    text: "Pick a service and a day. We'll confirm your time and set up a shuttle or rental if you need one.",
    points: ["Mon–Thu 7 am – 5 pm, Fri 7 am – 2 pm", "Free shuttle or $25/day rental", "36/36 nationwide guarantee"],
    submit: "Request Appointment",
    note: "We'll confirm by phone. Need it sooner? Call",
    fields: [
      [{ name: "name", label: "Name", required: true, autoComplete: "name" }, { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" }],
      [{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "vehicle", label: "Vehicle", placeholder: "Year, make, model" }],
      [{ name: "service", label: "Service", type: "select", placeholder: "Choose a service…", options: ["Not sure / diagnosis", "Maintenance & Car Care", "Engine", "Brakes", "Transmission & Drivetrain", "Steering & Suspension", "Heating & Cooling", "Electrical & Hybrid", "Exhaust & Tires", "Towing"] }, { name: "ride", label: "While we work", type: "select", placeholder: "Choose…", options: ["I'll wait / drop off", "Free shuttle", "$15 valet", "$25/day rental"] }],
      [{ name: "date", label: "Preferred day", type: "date" }, { name: "mileage", label: "Mileage", placeholder: "Approximate miles" }],
      { name: "notes", label: "What's going on?", type: "textarea", placeholder: "Symptoms, warning lights, service due…" },
    ],
  },

  VISIT: {
    nav: "Visit",
    eyebrow: "VISIT THE SHOP",
    title: ["Find us on ", "West 116th Avenue."],
    areas: "Serving Broomfield, Adams and Boulder counties.",
  },

  FOOTER_BLURB: "Family-run car and truck repair in Broomfield since 1980. AAA Top Shop, ASE-certified, 36/36 nationwide guarantee.",
  SOCIAL_LINKS: [
    { name: "Facebook", url: "https://facebook.com/stangautotech", icon: Facebook },
    { name: "Instagram", url: "https://instagram.com/stangautotech/", icon: Instagram },
    { name: "Yelp", url: "https://yelp.com/biz/stang-auto-tech-broomfield", icon: Star },
    { name: "Google", url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`, icon: Star },
  ],
};
