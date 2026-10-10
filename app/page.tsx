"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Sparkles } from 'lucide-react';

const stats = [
  { value: '50K+', label: 'Entrepreneurs envisioned by 2050' },
  { value: '12', label: 'Countries engaged in regional strategy' },
  { value: '90%', label: 'Founder-led programs with mentorship' },
];

const values = [
  {
    title: 'Leadership',
    text: 'We build founders who think boldly, lead responsibly, and create durable institutions.',
  },
  {
    title: 'Innovation',
    text: 'We equip entrepreneurs to solve local problems with disciplined, scalable ideas.',
  },
  {
    title: 'Excellence',
    text: 'We raise the standards of execution, ethics, and long-term thinking.',
  },
];

const pillars = [
  { title: 'Capability Platforms', text: 'Scalable systems that build skills, confidence, and growth.' },
  { title: 'Leadership Pathways', text: 'Structured journeys that develop visionary leaders.' },
  { title: 'Community Ecosystems', text: 'Environments and networks that enable people to flourish.' },
  { title: 'Opportunity Systems', text: 'Infrastructure that expands long-term social and economic mobility.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream text-navy">
      <section className="relative overflow-hidden border-b border-midnight/20 bg-midnight text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(210,175,46,0.18),_transparent_35%)]" />
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                <Sparkles size={16} /> Entrepreneurship, leadership, and opportunity
              </p>
              <h1 className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-gold sm:text-6xl lg:text-7xl">
                Building the next generation of entrepreneurs across West Africa.
              </h1>
              <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-gold via-gold/70 to-transparent" />
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                GGFG equips founders with the skills, mentorship, and networks to build ventures and create opportunity in their communities.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/empower-50k" className="btn-gold">
                  Explore Empower 50K <ArrowRight size={16} />
                </Link>
                <Link href="/about" className="btn-outline-light">
                  Discover our approach
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="overflow-hidden rounded-2xl border border-white/10 bg-navy text-white shadow-soft">
              <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(227,163,66,0.18),_transparent_50%)] px-8 py-10 sm:px-10 sm:py-12">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Empower 50K · Flagship initiative</p>
                <p className="mt-8 font-display text-7xl font-semibold leading-none text-gold sm:text-8xl">50K</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Entrepreneurs by 2050</p>
                <p className="mt-6 max-w-sm text-base leading-7 text-white/80">Developing founders across West Africa through mentorship, venture support, and leadership development.</p>
              </div>
              <div className="grid grid-cols-2 border-t border-white/10 bg-midnight">
                {stats.slice(1).map((stat) => (
                  <div key={stat.label} className="p-6 sm:p-8">
                    <p className="text-3xl font-semibold text-gold">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-goldDark">Empower Lab</p>
              <h3 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Practical learning for people building a business.</h3>
              <p className="mt-4 text-lg leading-8 text-navy/80">Explore focused entrepreneurship modules, work through an assessment, and follow a clear learning path.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/empower-lab" className="btn-gold">
                  Explore Empower Lab <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="border-l-2 border-gold/60 pl-6 sm:pl-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-goldDark">What’s inside</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-navy/85">
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" /><span>Five focused learning modules built around practical entrepreneurship content.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" /><span>PDF learning materials that are easy to open and download.</span></li>
                <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" /><span>A calm learning experience with practical next-step guidance.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-goldDark">Moments</p>
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-50">
            <div className="absolute left-3 top-3 z-10 rounded-full bg-navy/80 p-2">
              <Sparkles size={16} className="text-gold" />
            </div>
            <video
              src="/our-purpose.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="/hero-photo.jpg"
            />
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-goldDark">Our Purpose</p>
            <p className="mt-2 text-sm leading-6 text-navy/80">A concise look at the mission and energy behind GGFG.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-goldDark">Core Values</p>
            <h3 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">We create a standard of excellence that founders can inherit.</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} key={value.title} className="border-t-2 border-gold/50 pt-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-goldDark">0{index + 1}</p>
                <h4 className="text-xl font-semibold text-navy">{value.title}</h4>
                <p className="mt-3 text-sm leading-7 text-navy/80">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-goldDark">How GGFG Works</p>
              <h3 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">GGFG creates impact through four core pillars.</h3>
            </div>
            <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-goldDark transition hover:text-navy">
              View programs <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, index) => (
              <motion.div key={pillar.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05 }} className="border-t border-navy/20 pt-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-goldDark">0{index + 1}</p>
                  <BarChart3 size={18} className="text-green" />
                </div>
                <h4 className="mt-5 text-xl font-semibold text-navy">{pillar.title}</h4>
                <p className="mt-3 text-sm leading-7 text-navy/85">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Explore Our Work</p>
              <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Our initiatives strengthen people, communities, and systems across regions.</h3>
            </div>
            <div className="border-l-2 border-gold/60 pl-6 sm:pl-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Empower 50K</p>
              <p className="mt-4 text-lg leading-8 text-white/80">A long-term entrepreneurship and founder-building initiative focused on West Africa.</p>
              <Link href="/empower-50k" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-white">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-navy/10 bg-navy px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 GGFG. Building founders for long-term impact.</p>
          <div className="flex gap-5">
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/impact" className="transition hover:text-white">Impact</Link>
            <Link href="/empower-lab" className="transition hover:text-white">Empower Lab</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
