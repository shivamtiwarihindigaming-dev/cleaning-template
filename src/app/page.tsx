"use client";

import React, { useState } from "react";
import { 
  Sparkles, CheckCircle2, Calendar, DollarSign, Star, Menu, X, 
  Clock, ShieldCheck, ThumbsUp, MapPin, Phone, Mail, Award, Check, HelpCircle
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Quote Calculator State
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [serviceType, setServiceType] = useState("standard");
  const [frequency, setFrequency] = useState("weekly");

  // Calculate estimated price (Toronto Standard Rates)
  const calculatePrice = () => {
    let base = 90;
    const roomCost = bedrooms * 25 + bathrooms * 30;
    let multiplier = 1.0;
    
    if (serviceType === "deep") multiplier = 1.5;
    if (serviceType === "move") multiplier = 1.8;

    let discount = 1.0;
    if (frequency === "weekly") discount = 0.8; // 20% off
    if (frequency === "biweekly") discount = 0.85; // 15% off

    return Math.round((base + roomCost) * multiplier * discount);
  };

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Homeowner in Toronto",
      stars: 5,
      text: "Prestige Cleaning is a lifesaver! I scheduled a deep clean before my parents visited, and the team left the house absolutely spotless. The bathroom slider on their site is no joke—the real thing looked exactly like that!",
    },
    {
      name: "Marcus Aurelius",
      role: "Condo Tenant",
      stars: 5,
      text: "Outstanding service. The booking process was seamless, and the cleaners were punctual, professional, and did an amazing job. The before/after difference in my bathroom was night and day.",
    },
    {
      name: "Elena Rostova",
      role: "Airbnb Host",
      stars: 5,
      text: "I use their bi-weekly service for my rental properties. Reliability is key in my business, and they have never let me down once. High quality, great customer service, and very reasonable pricing.",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-indigo-500 selection:text-white relative">
      {/* Background Soft Glows */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-200/30 blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute top-[35%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-100/30 blur-[120px] pointer-events-none z-0"></div>

      {/* Navigation Header */}
      <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 bg-clip-text text-transparent tracking-tight">
              Prestige Cleaning
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Services</a>
            <a href="#results" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Before & After</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Pricing Estimator</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">FAQs</a>
            <a 
              href="#book-now" 
              className="px-5 py-2.5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/15 transition-all"
            >
              Book Instant Clean
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-500 hover:text-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-600 hover:text-slate-900 py-2 text-base font-medium"
            >
              Services
            </a>
            <a 
              href="#results" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-600 hover:text-slate-900 py-2 text-base font-medium"
            >
              Before & After
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-600 hover:text-slate-900 py-2 text-base font-medium"
            >
              Pricing Estimator
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-600 hover:text-slate-900 py-2 text-base font-medium"
            >
              FAQs
            </a>
            <a 
              href="#book-now"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full px-5 py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition"
            >
              Book Instant Clean
            </a>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-28 relative z-10">

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Fully Licensed, Insured & Bonded</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-slate-900">
              Sparkling Clean Home.{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                Zero Effort.
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Spend your weekends on what matters. Our vetted, professional cleaning teams leave your home, condo, or apartment spotless, sanitized, and refreshingly clean. Guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="#book-now"
                className="px-6 py-3.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/10"
              >
                Book Your Clean Now
              </a>
              <a 
                href="#pricing"
                className="px-6 py-3.5 text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl flex items-center justify-center gap-2 transition"
              >
                Estimate Pricing
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 mt-4">
              <div>
                <span className="text-2xl font-bold text-slate-900">100%</span>
                <p className="text-[10px] text-slate-500 uppercase mt-0.5">Satisfaction Guarantee</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900">5-Star</span>
                <p className="text-[10px] text-slate-500 uppercase mt-0.5">Google Rated Teams</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900">Eco</span>
                <p className="text-[10px] text-slate-500 uppercase mt-0.5">Friendly Products</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Slider */}
          <div className="w-full">
            <BeforeAfterSlider
              beforeImage="/dirty-kitchen.png"
              afterImage="/clean-kitchen.png"
              beforeLabel="Dirty Counter"
              afterLabel="Spotless counter"
            />
            <p className="text-[11px] text-center text-slate-500 mt-3 font-mono">
              Drag the center slider handles left & right to see our work
            </p>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section id="services" className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Cleaning Packages</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Professional residential cleaning tailored to your specific needs. Standard, deep, or move-out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Clean */}
            <div className="bg-white border border-slate-200/80 shadow-md hover:shadow-lg rounded-2xl p-6 flex flex-col justify-between transition-all group hover:border-indigo-500/20">
              <div>
                <img 
                  src="/standard-plan.png" 
                  alt="Standard Clean" 
                  className="w-full h-44 object-cover rounded-xl mb-6 shadow-sm border border-slate-100" 
                />
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition">Standard Home Clean</h3>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-2xl font-extrabold text-slate-900">$129</span>
                  <span className="text-slate-500 text-[10px] font-mono">starting at</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Perfect for regular upkeep. Includes dusting, vacuuming, mopping, bathroom detailing, kitchen counter wiping, and trash removal.
                </p>
              </div>
              <div>
                <ul className="text-[11px] text-slate-500 space-y-2 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-indigo-600" /> Dust accessible surfaces</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-indigo-600" /> Vacuum & mop hard floors</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-indigo-600" /> Clean toilet, shower & sink</li>
                </ul>
                <button
                  onClick={() => {
                    setServiceType("standard");
                    document.getElementById("book-now")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-6 w-full py-2.5 text-xs font-semibold bg-indigo-50 border border-indigo-200 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all flex items-center justify-center gap-1.5"
                >
                  Book Standard Clean
                </button>
              </div>
            </div>

            {/* Deep Clean */}
            <div className="bg-white border border-indigo-500/30 shadow-lg shadow-indigo-600/5 rounded-2xl p-6 flex flex-col justify-between transition-all group relative hover:shadow-xl hover:border-indigo-500/50">
              <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[8px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold z-10">
                Most Popular
              </div>
              <div>
                <img 
                  src="/deep-plan.png" 
                  alt="Deep Clean" 
                  className="w-full h-44 object-cover rounded-xl mb-6 shadow-sm border border-slate-100" 
                />
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition">Deep Sanitizing Clean</h3>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-2xl font-extrabold text-slate-900">$199</span>
                  <span className="text-slate-500 text-[10px] font-mono">starting at</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Recommended for first visits or homes that haven't been cleaned in 2+ months. Targets deep-seated grime, baseboards, and appliances.
                </p>
              </div>
              <div>
                <ul className="text-[11px] text-slate-500 space-y-2 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-purple-600" /> Everything in Standard Clean</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-purple-600" /> Clean baseboards & sills</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-purple-600" /> Oven & microwave interior</li>
                </ul>
                <button
                  onClick={() => {
                    setServiceType("deep");
                    document.getElementById("book-now")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-6 w-full py-2.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/10 transition-all flex items-center justify-center gap-1.5"
                >
                  Book Deep Clean
                </button>
              </div>
            </div>

            {/* Move-In / Move-Out Clean */}
            <div className="bg-white border border-slate-200/80 shadow-md hover:shadow-lg rounded-2xl p-6 flex flex-col justify-between transition-all group hover:border-teal-500/20">
              <div>
                <img 
                  src="/move-plan.png" 
                  alt="Move-In / Move-Out Clean" 
                  className="w-full h-44 object-cover rounded-xl mb-6 shadow-sm border border-slate-100" 
                />
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition">Move In / Move Out</h3>
                
                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="text-2xl font-extrabold text-slate-900">$279</span>
                  <span className="text-slate-500 text-[10px] font-mono">starting at</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Moving houses? We clean top to bottom, including inside all empty cabinets, drawers, closets, and detail every corner to get your deposit back.
                </p>
              </div>
              <div>
                <ul className="text-[11px] text-slate-500 space-y-2 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-teal-600" /> Complete empty room detailing</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-teal-600" /> Inside cabinets & drawers</li>
                  <li className="flex items-center gap-2"><Check className="w-3 h-3 text-teal-600" /> Deep detailing of appliances</li>
                </ul>
                <button
                  onClick={() => {
                    setServiceType("move");
                    document.getElementById("book-now")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-6 w-full py-2.5 text-xs font-semibold bg-teal-50 border border-teal-200 text-teal-600 rounded-xl hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all flex items-center justify-center gap-1.5"
                >
                  Book Move-Out Clean
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Slider Showcase */}
        <section id="results" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-sm">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 w-fit">
              <Award className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Visual Proof</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">See The Difference</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We focus on the corners, grout, and hidden dirt that other services skip. Use our slider to see actual bathroom sink cleaning completed by our team.
            </p>
            <ul className="space-y-3.5 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0">1</span>
                <span>Chrome hardware polish and water spot removal</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0">2</span>
                <span>Tile & Grout scum scrubbed clean</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0">3</span>
                <span>Pristine and sanitized vanity countertop</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 w-full">
            <BeforeAfterSlider
              beforeImage="/dirty-bathroom.png"
              afterImage="/clean-bathroom.png"
              beforeLabel="Dirty Sink"
              afterLabel="Polished Vanity"
            />
          </div>
        </section>

        {/* Pricing Estimator Section */}
        <section id="pricing" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 w-fit">
              <DollarSign className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Fair Pricing</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Interactive Cost Estimator</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              No hidden fees. Adjust the selectors to estimate the price for your cleaning package. If you are satisfied with the price, fill in the booking form to reserve your spot!
            </p>

            {/* Input Controls */}
            <div className="space-y-5 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <div>
                <div className="flex justify-between text-xs font-mono uppercase text-slate-500 font-semibold mb-2">
                  <span>Bedrooms</span>
                  <span>{bedrooms} Bed</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="6" 
                  value={bedrooms} 
                  onChange={(e) => setBedrooms(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 mt-2" 
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono uppercase text-slate-500 font-semibold mb-2">
                  <span>Bathrooms</span>
                  <span>{bathrooms} Bath</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="4" 
                  value={bathrooms} 
                  onChange={(e) => setBathrooms(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 mt-2" 
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-slate-500 font-semibold block mb-2">Service Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {["standard", "deep", "move"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setServiceType(type)}
                      className={`py-2.5 text-[10px] sm:text-xs font-semibold rounded-lg capitalize border transition-all ${
                        serviceType === type 
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-sm" 
                          : "border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {type === "move" ? "Move-Out" : type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-slate-500 font-semibold block mb-2">Frequency Discount</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: "weekly", label: "Weekly (20% off)" },
                    { key: "biweekly", label: "Bi-Weekly (15% off)" },
                    { key: "onetime", label: "One-Time" }
                  ].map((freq) => (
                    <button
                      key={freq.key}
                      type="button"
                      onClick={() => setFrequency(freq.key)}
                      className={`py-2.5 text-[9px] sm:text-[10px] font-semibold rounded-lg border transition-all ${
                        frequency === freq.key 
                          ? "bg-purple-600 border-purple-600 text-white shadow-sm" 
                          : "border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {freq.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Result Card */}
          <div className="bg-white border border-indigo-100 shadow-xl shadow-indigo-600/5 rounded-3xl p-8 text-center flex flex-col justify-between h-[360px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-indigo-50 rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="space-y-2 pt-4">
              <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest block font-semibold">Estimated Cost</span>
              <div className="flex items-center justify-center gap-1">
                <span className="text-5xl font-extrabold text-slate-900">${calculatePrice()}</span>
                <span className="text-slate-500 text-xs font-mono">/ clean</span>
              </div>
            </div>

            <div className="border-t border-slate-100 py-6 space-y-2.5 text-left text-xs text-slate-600 max-w-[280px] mx-auto w-full">
              <div className="flex justify-between">
                <span>Cleaning Type:</span>
                <span className="text-slate-900 font-semibold capitalize">{serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span>Rooms:</span>
                <span className="text-slate-900 font-semibold">{bedrooms} Bed / {bathrooms} Bath</span>
              </div>
              <div className="flex justify-between">
                <span>Schedule:</span>
                <span className="text-slate-900 font-semibold capitalize">{frequency === "onetime" ? "One-Time" : frequency}</span>
              </div>
            </div>

            <a 
              href="#book-now"
              className="w-full py-3.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition shadow-md shadow-indigo-600/10 block"
            >
              Lock In This Price & Book
            </a>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="space-y-10 border-t border-slate-200 pt-16">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 w-fit">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Service Coverage</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Service Areas</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              We proudly serve the Greater Toronto Area (GTA) and surrounding regions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Toronto", "North York", "Scarborough", "Etobicoke", 
              "Mississauga", "Brampton", "Vaughan", "Richmond Hill", "Markham"
            ].map((area, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm hover:border-indigo-500/35 hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us & Trust Section */}
        <section id="why-us" className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-16">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">100% Vetted Cleaners</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                All staff undergo background checks, in-person training, and regular reviews to guarantee safety.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Satisfaction Guaranteed</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                If you aren't happy with any area, notify us within 24 hours and we'll re-clean it for free.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Easy Rescheduling</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Plans changed? Reschedule or cancel for free up to 24 hours before your booking.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Slider */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-purple-50 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="flex justify-center gap-1 text-amber-400">
            {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <blockquote className="text-sm sm:text-base text-slate-700 italic max-w-2xl mx-auto leading-relaxed">
            "{testimonials[activeTestimonial].text}"
          </blockquote>

          <div>
            <cite className="not-italic font-bold text-slate-900 block text-xs">{testimonials[activeTestimonial].name}</cite>
            <span className="text-[10px] text-slate-500 uppercase font-mono">{testimonials[activeTestimonial].role}</span>
          </div>

          <div className="flex justify-center gap-2 pt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeTestimonial === i ? "bg-indigo-600 w-4" : "bg-slate-200"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="space-y-10 border-t border-slate-200 pt-16">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-700 w-fit">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Google Reviews</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">What Our Clients Say on Google</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Real 5-star reviews from happy residential and commercial clients across the GTA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "David L.",
                area: "Toronto",
                text: "Highly recommend Prestige Cleaning! The deep clean they did on my kitchen was incredible. Very professional and detail-oriented."
              },
              {
                name: "Sophia M.",
                area: "North York",
                text: "They are the most reliable cleaning service in GTA. The booking process was very easy and the pricing estimator is very accurate. Cleaners were punctual."
              },
              {
                name: "Liam K.",
                area: "Mississauga",
                text: "Excellent move-out clean! They helped me get my full security deposit back. They even cleaned inside the oven and empty cabinets. Will use again."
              }
            ].map((rev, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="font-bold text-slate-800">{rev.name}</span>
                  <span>{rev.area}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl shadow-sm transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>See All Reviews on Google</span>
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="space-y-10 border-t border-slate-200 pt-16">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 w-fit">
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Help Center</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Got questions? We've got answers. If you can't find what you are looking for, contact us!
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How long does a cleaning take?",
                a: "It depends on the size of your home and the package selected. A standard clean for a 2-bedroom home typically takes 2 to 3 hours, while a deep clean or move-out clean can take 4 to 6 hours depending on the condition of the home."
              },
              {
                q: "Do you bring your own supplies?",
                a: "Yes, our professional cleaners bring all the necessary eco-friendly cleaning products and state-of-the-art equipment (like vacuum cleaners and microfiber cloths) required for the job. You don't need to provide anything."
              },
              {
                q: "What if I'm not satisfied?",
                a: "Your satisfaction is our top priority. If you aren't completely happy with any area we cleaned, notify us within 24 hours and we will send a team back to re-clean the area for free."
              },
              {
                q: "How do I cancel or reschedule?",
                a: "You can easily cancel or reschedule your cleaning by calling or emailing us. We ask for a 24-hour notice to cancel or reschedule for free."
              },
              {
                q: "Are your cleaners background checked?",
                a: "Absolutely. All of our cleaners are 100% vetted, undergo rigorous background checks, and receive comprehensive in-person training to ensure safety and quality."
              },
              {
                q: "Do I need to be home during cleaning?",
                a: "No, you do not need to be home. Many of our clients provide lockbox codes or leave keys. If you prefer to be home during the cleaning, that is completely fine too!"
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm">{faq.q}</span>
                  <span className="text-indigo-600 font-mono text-lg shrink-0 ml-4">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Booking Form */}
        <section id="book-now" className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative shadow-sm">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Schedule Your Cleaning</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ready to book? Fill in the form and we will confirm your reservation within 2 hours.
            </p>
            
            <div className="space-y-4 text-xs text-slate-600 pt-6">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-600" />
                <span>+1 (647) 555-0199 (Toronto Line)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>bookings@prestigecleaning.ca</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>Greater Toronto Area, ON, Canada</span>
              </div>
            </div>
          </div>

          {/* Form UI */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl w-full">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Booking Request Received!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you! We have logged your details. Our team is checking the schedule and we will text you a confirmation shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs transition shadow-sm"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5 font-bold">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Sarah Jenkins"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5 font-bold">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+1 (647) 555-0123"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5 font-bold">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="sarah@example.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5 font-bold">Preferred Date</label>
                    <input 
                      type="date" 
                      required
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5 font-bold">Street Address</label>
                  <input 
                    type="text" 
                    required
                    placeholder="123 Yonge St, Suite 4B, Toronto, ON"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5 font-bold">Beds</label>
                    <select 
                      value={bedrooms}
                      onChange={(e) => setBedrooms(parseInt(e.target.value))}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition capitalize"
                    >
                      {[1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={n}>{n} Bed</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5 font-bold">Baths</label>
                    <select 
                      value={bathrooms}
                      onChange={(e) => setBathrooms(parseInt(e.target.value))}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition capitalize"
                    >
                      {[1, 2, 3, 4].map(n => (
                        <option key={n} value={n}>{n} Bath</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-500 block mb-1.5 font-bold">Service</label>
                    <select 
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition capitalize"
                    >
                      <option value="standard">Standard</option>
                      <option value="deep">Deep Clean</option>
                      <option value="move">Move-Out</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-sm">
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">Estimated Price:</span>
                  <span className="text-lg font-bold text-indigo-600">${calculatePrice()}</span>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition shadow-md shadow-indigo-600/10"
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 mt-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>&copy; {new Date().getFullYear()} Prestige Cleaning GTA. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a href="#services" className="hover:text-slate-800">Services</a>
            <span>•</span>
            <a href="#results" className="hover:text-slate-800">Before & After</a>
            <span>•</span>
            <a href="#pricing" className="hover:text-slate-800">Pricing Estimator</a>
            <span>•</span>
            <a href="#book-now" className="hover:text-slate-800">Contact Booking</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/16475550199"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-emerald-500/25"
      >
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.961S14.304 1.24 11.669 1.24c-5.439 0-9.867 4.42-9.871 9.858 0 1.902.486 3.758 1.412 5.376L2.125 20.25l3.906-.99-.384.62zm10.74-5.263c-.324-.162-1.92-.949-2.213-1.055-.293-.106-.507-.16-.721.162-.213.324-.827 1.055-1.013 1.268-.187.213-.373.24-.697.078-.324-.162-1.37-.505-2.61-1.613-.964-.86-1.614-1.923-1.804-2.247-.187-.324-.02-.5-.182-.662-.146-.145-.324-.378-.487-.567-.162-.189-.216-.324-.324-.541-.109-.217-.055-.405-.028-.567.027-.162.216-.514.324-.676.106-.162.146-.27.216-.405.071-.135.035-.253-.014-.405-.049-.153-.487-1.176-.667-1.609-.176-.425-.37-.367-.507-.367-.13-.003-.28-.003-.43-.003-.15 0-.393.056-.599.28-.206.224-.786.77-.786 1.88s.81 2.18 1.92 2.33c.11.015 2.133 3.258 5.167 4.567.722.311 1.282.497 1.722.637.725.23 1.385.197 1.907.12.581-.086 1.92-.786 2.19-1.505.27-.718.27-1.334.19-1.46-.082-.125-.296-.205-.62-.367z" />
        </svg>
        <span>Chat with us</span>
      </a>
    </div>
  );
}
