"use client";

import React, { useState } from "react";
import { 
  Sparkles, CheckCircle2, Calendar, DollarSign, Star, Menu, X, 
  Clock, ShieldCheck, ThumbsUp, MapPin, Phone, Mail, Award, Check
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Quote Calculator State
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [serviceType, setServiceType] = useState("standard");
  const [frequency, setFrequency] = useState("weekly");

  // Calculate estimated price
  const calculatePrice = () => {
    let base = 80;
    const roomCost = bedrooms * 20 + bathrooms * 25;
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
      text: "Prestige Cleaning is a lifesaver! I scheduled a deep clean before my parents visited, and the team left the house absolutely spotless. The kitchen slider on their site is no joke—the real thing looked exactly like that!",
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none"></div>

      {/* Navigation Header */}
      <header className="border-b border-white/5 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              Prestige Cleaning
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-slate-400 hover:text-slate-200 transition">Services</a>
            <a href="#results" className="text-sm text-slate-400 hover:text-slate-200 transition">Before & After</a>
            <a href="#pricing" className="text-sm text-slate-400 hover:text-slate-200 transition">Pricing</a>
            <a href="#why-us" className="text-sm text-slate-400 hover:text-slate-200 transition">Why Us</a>
            <a 
              href="#book-now" 
              className="px-5 py-2.5 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/25 transition"
            >
              Book Instant Clean
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-slate-200 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/5 bg-slate-950 px-4 pt-2 pb-6 space-y-3">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white py-2 text-base font-medium"
            >
              Services
            </a>
            <a 
              href="#results" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white py-2 text-base font-medium"
            >
              Before & After
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white py-2 text-base font-medium"
            >
              Pricing
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white py-2 text-base font-medium"
            >
              Why Us
            </a>
            <a 
              href="#book-now"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full px-5 py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg transition"
            >
              Book Instant Clean
            </a>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-28">

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/25 bg-indigo-950/30 text-indigo-300 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Fully Licensed, Insured & Bonded</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-slate-100">
              Sparkling Clean Home.{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Zero Effort.
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              Spend your weekends on what matters. Our vetted, professional cleaning teams leave your home or apartment spotless, sanitized, and refreshingly clean. Guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a 
                href="#book-now"
                className="px-6 py-3.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-600/25"
              >
                Book Your Clean Now
              </a>
              <a 
                href="#pricing"
                className="px-6 py-3.5 text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 rounded-xl flex items-center justify-center gap-2 transition"
              >
                Estimate Pricing
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 mt-4">
              <div>
                <span className="text-2xl font-bold text-slate-200">100%</span>
                <p className="text-[10px] text-slate-400 uppercase mt-0.5">Satisfaction Guarantee</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-200">5-Star</span>
                <p className="text-[10px] text-slate-400 uppercase mt-0.5">Google Rated Teams</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-200">Eco</span>
                <p className="text-[10px] text-slate-400 uppercase mt-0.5">Friendly Products</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Slider */}
          <div className="w-full">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
              beforeLabel="Dirty Kitchen"
              afterLabel="Spotless Prestige Kitchen"
            />
            <p className="text-[11px] text-center text-slate-500 mt-3 font-mono">
              Drag the center slider handles left & right to see our work
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">Our Cleaning Services</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Professional residential cleaning tailored to your specific needs. Standard, deep, or move-out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Clean */}
            <div className="bg-slate-900/20 border border-white/5 hover:border-indigo-500/20 rounded-2xl p-8 flex flex-col justify-between transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-indigo-400 transition">Standard Home Cleaning</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Perfect for regular upkeep. Includes dusting, vacuuming, mopping, bathroom cleaning, kitchen counter wiping, and trash removal.
                </p>
              </div>
              <ul className="text-xs text-slate-400 space-y-2.5 pt-6 border-t border-white/5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Dust all accessible surfaces</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Vacuum & mop floors</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-indigo-400" /> Clean toilet, shower & sink</li>
              </ul>
            </div>

            {/* Deep Clean */}
            <div className="bg-slate-900/20 border border-indigo-500/25 shadow-lg shadow-indigo-500/5 rounded-2xl p-8 flex flex-col justify-between transition-all group relative">
              <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                Most Popular
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-purple-400 transition">Deep Sanitizing Clean</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Highly recommended for first visits or homes that haven't been cleaned in 2+ months. Targets deep-seated grime, baseboards, and appliances.
                </p>
              </div>
              <ul className="text-xs text-slate-400 space-y-2.5 pt-6 border-t border-white/5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400" /> Everything in Standard clean</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400" /> Clean baseboards & window sills</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-purple-400" /> Oven & microwave interior</li>
              </ul>
            </div>

            {/* Move-In / Move-Out Clean */}
            <div className="bg-slate-900/20 border border-white/5 hover:border-cyan-500/20 rounded-2xl p-8 flex flex-col justify-between transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition">Move In / Move Out</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Moving houses? We clean top to bottom, including inside all empty cabinets, drawers, closets, and detail every corner to get your deposit back.
                </p>
              </div>
              <ul className="text-xs text-slate-400 space-y-2.5 pt-6 border-t border-white/5">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400" /> Complete empty room detailing</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400" /> Inside cabinets & drawers</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-cyan-400" /> Deep detailing of kitchen appliances</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Before & After Slider Showcase */}
        <section id="results" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900/10 border border-white/5 p-8 sm:p-12 rounded-3xl backdrop-blur-md">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/25 bg-purple-950/30 text-purple-300 w-fit">
              <Award className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Visual Proof</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">See The Difference</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We focus on the corners, grout, and hidden dirt that other services skip. Use our slider to see actual bathroom restoration work completed by our team.
            </p>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded bg-indigo-600/10 border border-indigo-500/25 flex items-center justify-center text-indigo-300 font-bold shrink-0">1</span>
                <span>Tile & Grout scum removal</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded bg-indigo-600/10 border border-indigo-500/25 flex items-center justify-center text-indigo-300 font-bold shrink-0">2</span>
                <span>Chrome hardware polish and water spot removal</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded bg-indigo-600/10 border border-indigo-500/25 flex items-center justify-center text-indigo-300 font-bold shrink-0">3</span>
                <span>Glass door soap scum scraping</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 w-full">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1527030280862-64139fbe04ca?auto=format&fit=crop&w=800&q=80"
              beforeLabel="Dirty Bathroom"
              afterLabel="Polished Bathroom"
            />
          </div>
        </section>

        {/* Pricing Estimator Section */}
        <section id="pricing" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-950/30 text-cyan-300 w-fit">
              <DollarSign className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">Fair Pricing</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">Interactive Quote Estimator</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              No hidden fees. Adjust the selectors to estimate the price for your cleaning package. If you are satisfied with the price, fill in the booking form to reserve your spot!
            </p>

            {/* Input Controls */}
            <div className="space-y-5 bg-slate-900/30 border border-white/5 p-6 rounded-2xl">
              <div>
                <label className="text-xs font-mono uppercase text-slate-400">Bedrooms: {bedrooms}</label>
                <input 
                  type="range" 
                  min="1" 
                  max="6" 
                  value={bedrooms} 
                  onChange={(e) => setBedrooms(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 mt-2" 
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-slate-400">Bathrooms: {bathrooms}</label>
                <input 
                  type="range" 
                  min="1" 
                  max="4" 
                  value={bathrooms} 
                  onChange={(e) => setBathrooms(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 mt-2" 
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-slate-400 block mb-2">Service Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {["standard", "deep", "move"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setServiceType(type)}
                      className={`py-2 text-[10px] sm:text-xs font-semibold rounded-lg capitalize border transition ${
                        serviceType === type 
                          ? "bg-indigo-600 border-indigo-500 text-white" 
                          : "border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"
                      }`}
                    >
                      {type === "move" ? "Move-Out" : type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-slate-400 block mb-2">Frequency Discount</label>
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
                      className={`py-2 text-[9px] sm:text-[10px] font-semibold rounded-lg border transition ${
                        frequency === freq.key 
                          ? "bg-purple-600 border-purple-500 text-white" 
                          : "border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"
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
          <div className="bg-gradient-to-br from-indigo-950/20 to-purple-950/20 border border-indigo-500/20 rounded-3xl p-8 text-center flex flex-col justify-between h-[350px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-indigo-300 uppercase tracking-widest block">Estimated Cost</span>
              <div className="flex items-center justify-center gap-1">
                <span className="text-5xl font-extrabold text-slate-100">${calculatePrice()}</span>
                <span className="text-slate-400 text-xs font-mono">/ cleaning</span>
              </div>
            </div>

            <div className="border-t border-white/5 py-4 space-y-1.5 text-left text-xs text-slate-400 max-w-[280px] mx-auto">
              <div className="flex justify-between">
                <span>Cleaning Type:</span>
                <span className="text-slate-200 font-mono capitalize">{serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span>Rooms:</span>
                <span className="text-slate-200 font-mono">{bedrooms} Bed / {bathrooms} Bath</span>
              </div>
              <div className="flex justify-between">
                <span>Schedule:</span>
                <span className="text-slate-200 font-mono capitalize">{frequency === "onetime" ? "One-Time" : frequency}</span>
              </div>
            </div>

            <a 
              href="#book-now"
              className="w-full py-3 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition shadow-lg shadow-indigo-600/20 block"
            >
              Lock In This Price & Book
            </a>
          </div>
        </section>

        {/* Why Choose Us & Trust Section */}
        <section id="why-us" className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-16">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-200">100% Vetted Cleaners</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                All staff undergo background checks, in-person training, and regular reviews to guarantee safety.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-200">Satisfaction Guaranteed</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                If you aren't happy with any area, notify us within 24 hours and we'll re-clean it for free.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-200">Easy Rescheduling</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-1">
                Plans changed? Reschedule or cancel for free up to 24 hours before your booking.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Slider */}
        <section className="bg-slate-900/10 border border-white/5 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[150px] h-[150px] bg-purple-500/5 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="flex justify-center gap-1 text-amber-400">
            {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <blockquote className="text-sm sm:text-base text-slate-300 italic max-w-2xl mx-auto leading-relaxed">
            "{testimonials[activeTestimonial].text}"
          </blockquote>

          <div>
            <cite className="not-italic font-bold text-slate-200 block text-xs">{testimonials[activeTestimonial].name}</cite>
            <span className="text-[10px] text-slate-500 uppercase font-mono">{testimonials[activeTestimonial].role}</span>
          </div>

          <div className="flex justify-center gap-2 pt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition ${
                  activeTestimonial === i ? "bg-indigo-500 w-4" : "bg-white/20"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Interactive Booking Form */}
        <section id="book-now" className="bg-slate-900/20 border border-white/5 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">Schedule Your Cleaning</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ready to book? Fill in the form and we will confirm your reservation within 2 hours.
            </p>
            
            <div className="space-y-4 text-xs text-slate-400 pt-6">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>+1 (647) 555-0199 (Toronto Line)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>bookings@prestigecleaning.ca</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Greater Toronto Area, ON, Canada</span>
              </div>
            </div>
          </div>

          {/* Form UI */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-white/5 p-6 sm:p-8 rounded-2xl w-full">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Booking Request Received!</h3>
                <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Thank you! We have logged your details. Our team is checking the schedule and we will text you a confirmation shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 rounded-lg text-xs transition"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Sarah Jenkins"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+1 (647) 555-0123"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="sarah@example.com"
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">Preferred Date</label>
                    <input 
                      type="date" 
                      required
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">Street Address</label>
                  <input 
                    type="text" 
                    required
                    placeholder="123 Yonge St, Suite 4B, Toronto, ON"
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">Beds</label>
                    <select 
                      value={bedrooms}
                      onChange={(e) => setBedrooms(parseInt(e.target.value))}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition capitalize"
                    >
                      {[1, 2, 3, 4, 5, 6].map(n => (
                        <option key={n} value={n}>{n} Bed</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">Baths</label>
                    <select 
                      value={bathrooms}
                      onChange={(e) => setBathrooms(parseInt(e.target.value))}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition capitalize"
                    >
                      {[1, 2, 3, 4].map(n => (
                        <option key={n} value={n}>{n} Bath</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1.5">Service</label>
                    <select 
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition capitalize"
                    >
                      <option value="standard">Standard</option>
                      <option value="deep">Deep Clean</option>
                      <option value="move">Move-Out</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 border border-white/5 rounded-xl flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase text-slate-400">Estimated Price:</span>
                  <span className="text-lg font-bold text-slate-100">${calculatePrice()}</span>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition shadow-lg shadow-indigo-600/20"
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 py-12 mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>&copy; {new Date().getFullYear()} Prestige Cleaning GTA. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a href="#services" className="hover:text-slate-400">Services</a>
            <span>•</span>
            <a href="#results" className="hover:text-slate-400">Before & After</a>
            <span>•</span>
            <a href="#pricing" className="hover:text-slate-400">Pricing Estimator</a>
            <span>•</span>
            <a href="#book-now" className="hover:text-slate-400">Contact Booking</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
