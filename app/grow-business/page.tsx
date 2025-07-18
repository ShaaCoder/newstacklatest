import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Briefcase, DollarSign, CheckCircle, TrendingUp, Smartphone, Globe, MessageCircle, ShieldCheck, Rocket, Phone, Mail, ShoppingCart, User, FileText, Zap, Layout, Search, Star, BarChart2 } from "lucide-react";
import { offerLinks } from "./offer/pageLinks";

const offers = [
  {
    slug: "responsive-website-design",
    icon: <Layout className="h-8 w-8 text-blue-600" />,
    title: "Responsive Website Design",
    description: "Mobile + Desktop friendly, stunning designs."
  },
  {
    slug: "seo-setup",
    icon: <Search className="h-8 w-8 text-green-600" />,
    title: "SEO Setup",
    description: "Get found on Google with SEO-ready sites."
  },
  {
    slug: "lightning-fast-loading",
    icon: <Zap className="h-8 w-8 text-yellow-600" />,
    title: "Lightning Fast Loading",
    description: "Optimized for speed and performance."
  },
  {
    slug: "free-hosting-domain-help",
    icon: <Globe className="h-8 w-8 text-purple-600" />,
    title: "Free Hosting & Domain Help",
    description: "Assistance with setup, no extra hassle."
  },
  {
    slug: "whatsapp-call-social-integration",
    icon: <MessageCircle className="h-8 w-8 text-pink-600" />,
    title: "WhatsApp, Call & Social Integration",
    description: "Easy contact and social media links."
  },
  {
    slug: "admin-panel",
    icon: <ShieldCheck className="h-8 w-8 text-indigo-600" />,
    title: "Admin Panel (optional)",
    description: "Manage your content with ease."
  },
  {
    slug: "lifetime-support-maintenance",
    icon: <CheckCircle className="h-8 w-8 text-green-700" />,
    title: "Lifetime Support & Maintenance",
    description: "We’re here for you, always."
  },
];

const servicesPricing = [
  { title: "One Page Business Website", price: "₹1,999", icon: <Layout className="h-6 w-6 text-blue-600" /> },
  { title: "3 Page Website Package", price: "₹4,999", icon: <Layout className="h-6 w-6 text-green-600" /> },
  { title: "5 Page Website", price: "₹7,999", icon: <Layout className="h-6 w-6 text-purple-600" /> },
  { title: "E-Commerce Website (10 Products)", price: "₹11,999", icon: <ShoppingCart className="h-6 w-6 text-pink-600" /> },
  { title: "Portfolio / Personal Branding Site", price: "₹3,999", icon: <User className="h-6 w-6 text-yellow-600" /> },
  { title: "Landing Page for Ads", price: "₹1,499", icon: <FileText className="h-6 w-6 text-indigo-600" /> },
  { title: "Blog Website", price: "₹3,999", icon: <FileText className="h-6 w-6 text-blue-400" /> },
  { title: "Restaurant / Food Ordering Website", price: "₹7,999", icon: <ShoppingCart className="h-6 w-6 text-green-400" /> },
  { title: "SEO Setup (Basic)", price: "₹999", icon: <Search className="h-6 w-6 text-green-700" /> },
  { title: "WhatsApp Chat Integration", price: "₹499", icon: <MessageCircle className="h-6 w-6 text-green-500" /> },
  { title: "Website Maintenance (Monthly)", price: "₹999/month", icon: <ShieldCheck className="h-6 w-6 text-purple-700" /> },
];

const whatWeDo = [
  { icon: <Layout className="h-6 w-6 text-blue-600" />, text: "Build beautiful, mobile-friendly websites" },
  { icon: <Search className="h-6 w-6 text-green-600" />, text: "Make your website Google-ready with SEO" },
  { icon: <Zap className="h-6 w-6 text-yellow-600" />, text: "Deliver blazing fast performance" },
  { icon: <MessageCircle className="h-6 w-6 text-pink-600" />, text: "Ensure clear communication via contact options" },
  { icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />, text: "Provide tools to manage your content (CMS)" },
];

const benefits = [
  { icon: <Star className="h-6 w-6 text-blue-600" />, title: "More Online Visibility", description: "Get found by more customers through SEO." },
  { icon: <Briefcase className="h-6 w-6 text-green-600" />, title: "Professional Look", description: "Build trust with a modern, polished website." },
  { icon: <Smartphone className="h-6 w-6 text-purple-600" />, title: "Easy Customer Contact", description: "WhatsApp, call, and social links for instant reach." },
  { icon: <ShoppingCart className="h-6 w-6 text-pink-600" />, title: "24/7 Sales", description: "Sell anytime with e-commerce setup." },
  { icon: <BarChart2 className="h-6 w-6 text-yellow-600" />, title: "Track Performance", description: "Analytics to measure your growth." },
];

export default function GrowBusinessPage() {
  return (
    <>
      <Header />
      <br />
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">NewStack Web Solutions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Helping you go online with stunning, fast, and SEO-ready websites.</p>
          <Link href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold mt-4 hover:bg-blue-700 transition">Let’s Get Started</Link>
        </section>

        {/* What We Offer */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">✅ What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <Link
                key={offer.slug}
                href={`/grow-business/offer/${offer.slug}`}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center space-y-4 border border-gray-100 hover:shadow-2xl transition group hover:bg-blue-50 focus:outline-none"
              >
                {offer.icon}
                <h3 className="font-bold text-xl">{offer.title}</h3>
                <p className="text-gray-600 text-sm">{offer.description}</p>
                <span className="text-blue-600 font-semibold mt-2 group-hover:underline">Learn More →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Services & Pricing */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">💼 Services & Pricing</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-blue-50">
                  <th className="py-3 px-4 text-left font-semibold">Service</th>
                  <th className="py-3 px-4 text-left font-semibold">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                {servicesPricing.map((service) => (
                  <tr key={service.title} className="border-b last:border-b-0">
                    <td className="py-3 px-4 flex items-center gap-2">{service.icon}{service.title}</td>
                    <td className="py-3 px-4 font-bold text-blue-700">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">🔧 What We Do</h2>
          <ul className="max-w-2xl mx-auto space-y-4">
            {whatWeDo.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-lg">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How It Benefits Your Business */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">🚀 How It Benefits Your Business</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
                {benefit.icon}
                <h3 className="font-bold text-lg mt-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action / Contact */}
        <section id="contact" className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Let’s Get Started!</h2>
          <p className="text-gray-600">Your new website is just a few clicks away. Contact us now to start building your online presence.</p>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-lg">
              <Mail className="h-5 w-5 text-blue-600" />
              <span>hello@newstack.in</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Globe className="h-5 w-5 text-green-600" />
              <a href="https://nayastack.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">nayastack.com</a>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg">
              <Phone className="h-5 w-5 text-purple-600" />
              <span>+91-8810524651, 7835996416</span>
            </div>
          </div>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4">Contact Us</Link>
          <div className="text-gray-400 text-sm mt-6">© 2025 Nayastack. All rights reserved.</div>
        </section>
      </main>
      <Footer />
    </>
  );
} 