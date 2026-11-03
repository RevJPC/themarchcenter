"use client";

import React, { useState } from "react";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  MapPin,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  CalendarClock,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("caseworker");
  const [submitted, setSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Opens a pre-filled email so no inquiries are lost before a backend is connected
    const subject = encodeURIComponent(
      `${siteConfig.name} — Launch Notification Request`
    );
    const body = encodeURIComponent(
      `Hello,\n\nPlease notify me when The March Center launches.\n\nEmail: ${email}\nRole / Interest: ${role}\n`
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const icons = [HeartHandshake, ShieldCheck, Users];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-warm-50 via-warm-50 to-sage-50/60">
      {/* Subtle decorative top border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-sage-600 via-sage-500 to-warm-500" />

      {/* Header */}
      <header className="w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sage-700 text-warm-50 flex items-center justify-center shadow-sm">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-tight text-sage-900 block leading-none">
              {siteConfig.name}
            </span>
            <span className="text-xs text-sage-600 font-medium tracking-wide">
              Supervised Family Visitation
            </span>
          </div>
        </div>

        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-sage-800 hover:text-sage-950 bg-white/80 hover:bg-white border border-sage-200/80 px-4 py-2 rounded-full shadow-sm transition-all"
        >
          <Mail className="w-4 h-4 text-sage-600" />
          <span>Get in Touch</span>
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-10 md:py-16">
        {/* Hero Card */}
        <section className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100/90 border border-sage-200 text-sage-800 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sage-600" />
            <span>{siteConfig.statusBadge}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-sage-900 tracking-tight leading-tight mb-6">
            A safe, nurturing space for families to reconnect.
          </h1>

          <p className="text-lg text-sage-700 leading-relaxed mb-4">
            {siteConfig.description}
          </p>

          <p className="text-base text-sage-600 leading-relaxed">
            {siteConfig.mission}
          </p>
        </section>

        {/* Notification / Early Inquiry Box */}
        <section className="max-w-xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-sage-200/70">
            <div className="flex items-center gap-2.5 text-sage-800 font-semibold text-base mb-2">
              <CalendarClock className="w-5 h-5 text-sage-600" />
              <h2>Stay Updated on Our Opening</h2>
            </div>
            <p className="text-sm text-sage-600 mb-5">
              Leave your email to receive updates on our opening date, referral
              intake process, and community partnership opportunities.
            </p>

            {submitted ? (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-sage-50 border border-sage-200 text-sage-800">
                <CheckCircle2 className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold">Thank you for reaching out!</p>
                  <p className="text-sage-600 mt-0.5">
                    Your email client has been opened to send your request to{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="underline font-medium"
                    >
                      {siteConfig.contact.email}
                    </a>
                    .
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full px-4 py-2.5 rounded-xl border border-sage-200 bg-warm-50/50 text-sage-900 placeholder:text-sage-400 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="sr-only">
                      I am a...
                    </label>
                    <select
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-sage-200 bg-warm-50/50 text-sage-800 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    >
                      <option value="Caseworker / Agency">
                        Caseworker / Agency
                      </option>
                      <option value="Family / Caregiver">
                        Family / Caregiver
                      </option>
                      <option value="Legal / Court Partner">
                        Legal / Court Partner
                      </option>
                      <option value="Community Member">Community Member</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-sage-700 hover:bg-sage-800 text-white font-medium text-sm px-5 py-3 rounded-xl shadow-sm transition-colors"
                >
                  <span>Notify Me When We Launch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Core Pillars */}
        <section className="mb-16">
          <h2 className="text-center text-xs font-semibold uppercase tracking-widest text-sage-500 mb-8">
            What We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.highlights.map((item, idx) => {
              const IconComponent = icons[idx % icons.length];
              return (
                <div
                  key={item.title}
                  className="bg-white/90 rounded-2xl p-6 border border-sage-200/60 shadow-sm flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-sage-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-sage-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Location & Direct Contact Banner */}
        <section className="bg-sage-800 text-warm-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-warm-200 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Location & Service Area</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-white">
              Serving Children & Families in {siteConfig.location.cityState}
            </h3>
            <p className="text-sm text-sage-200">{siteConfig.location.note}</p>
          </div>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="shrink-0 inline-flex items-center gap-2 bg-warm-100 hover:bg-white text-sage-900 font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
          >
            <Mail className="w-4 h-4 text-sage-700" />
            <span>Contact Us</span>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-8 border-t border-sage-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-600">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p className="flex items-center gap-4">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="hover:text-sage-900 underline underline-offset-4"
          >
            {siteConfig.contact.email}
          </a>
        </p>
      </footer>
    </div>
  );
}
