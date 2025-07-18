import React from "react";
import { notFound } from "next/navigation";
import { Layout, Search, Zap, Globe, MessageCircle, ShieldCheck, CheckCircle, Star, Briefcase, Smartphone, ShoppingCart, BarChart2 } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const benefits = {
  "more-online-visibility": {
    icon: <Star className="h-7 w-7 text-blue-600" />,
    title: "More Online Visibility",
    description: "Get found by more customers through SEO and modern web practices.",
  },
  "professional-look": {
    icon: <Briefcase className="h-7 w-7 text-green-600" />,
    title: "Professional Look",
    description: "Build trust with a modern, polished website.",
  },
  "easy-customer-contact": {
    icon: <Smartphone className="h-7 w-7 text-purple-600" />,
    title: "Easy Customer Contact",
    description: "WhatsApp, call, and social links for instant reach.",
  },
  "24-7-sales": {
    icon: <ShoppingCart className="h-7 w-7 text-pink-600" />,
    title: "24/7 Sales",
    description: "Sell anytime with e-commerce setup.",
  },
  "track-performance": {
    icon: <BarChart2 className="h-7 w-7 text-yellow-600" />,
    title: "Track Performance",
    description: "Analytics to measure your growth.",
  },
};

type BenefitKey = keyof typeof benefits;

const offers: {
  slug: string;
  icon: JSX.Element;
  title: string;
  description: string;
  benefits: BenefitKey[];
}[] = [
  {
    slug: "responsive-website-design",
    icon: <Layout className="h-10 w-10 text-blue-600" />,
    title: "Responsive Website Design",
    description: "Mobile + Desktop friendly, stunning designs that look great on any device.",
    benefits: ["more-online-visibility", "professional-look", "easy-customer-contact"],
  },
  {
    slug: "seo-setup",
    icon: <Search className="h-10 w-10 text-green-600" />,
    title: "SEO Setup",
    description: "Get found on Google with SEO-ready sites and best practices.",
    benefits: ["more-online-visibility", "track-performance"],
  },
  {
    slug: "lightning-fast-loading",
    icon: <Zap className="h-10 w-10 text-yellow-600" />,
    title: "Lightning Fast Loading",
    description: "Optimized for speed and performance to keep visitors engaged.",
    benefits: ["more-online-visibility", "professional-look"],
  },
  {
    slug: "free-hosting-domain-help",
    icon: <Globe className="h-10 w-10 text-purple-600" />,
    title: "Free Hosting & Domain Help",
    description: "Assistance with setup, so you can focus on your business.",
    benefits: ["professional-look"],
  },
  {
    slug: "whatsapp-call-social-integration",
    icon: <MessageCircle className="h-10 w-10 text-pink-600" />,
    title: "WhatsApp, Call & Social Integration",
    description: "Easy contact and social media links for better communication.",
    benefits: ["easy-customer-contact", "more-online-visibility"],
  },
  {
    slug: "admin-panel",
    icon: <ShieldCheck className="h-10 w-10 text-indigo-600" />,
    title: "Admin Panel (optional)",
    description: "Manage your content with ease using a simple admin panel.",
    benefits: ["professional-look", "track-performance"],
  },
  {
    slug: "lifetime-support-maintenance",
    icon: <CheckCircle className="h-10 w-10 text-green-700" />,
    title: "Lifetime Support & Maintenance",
    description: "We’re here for you, always, to keep your site running smoothly.",
    benefits: ["professional-look"],
  },
];

export default function OfferDetailPage({ params }: { params: { slug: string } }) {
  const offer = offers.find((o) => o.slug === params.slug);
  if (!offer) return notFound();

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        <section className="text-center space-y-4">
          <div className="flex justify-center">{offer.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold">{offer.title}</h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">{offer.description}</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">How This Helps Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offer.benefits.map((b: BenefitKey) => (
              <div key={b} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100">
                {benefits[b].icon}
                <h3 className="font-bold text-lg mt-2">{benefits[b].title}</h3>
                <p className="text-gray-600 text-sm mt-1">{benefits[b].description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="text-center mt-8">
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</Link>
        </section>
      </main>
      <Footer />
    </>
  );
} 