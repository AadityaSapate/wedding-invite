'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';
import { getTimeUntilDate } from '@/lib/utils';

export function Hero() {
  const [timeUntil, setTimeUntil] = useState(getTimeUntilDate(siteConfig.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntil(getTimeUntilDate(siteConfig.date));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-primary-50" />

        {/* Animated mesh gradient 1 */}
        <div
          className="absolute inset-0 opacity-40 animate-mesh-1"
        />

        {/* Animated mesh gradient 2 */}
        <div
          className="absolute inset-0 opacity-30 animate-mesh-2"
        />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-primary-400/40 animate-float" />
      <div className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-primary-300/30 animate-float-delay" />
      <div className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-primary-500/50 animate-float-slow" />
      <div className="absolute bottom-1/4 right-[25%] w-2.5 h-2.5 rounded-full bg-primary-400/40 animate-float-reverse" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        <h1 className="font-serif text-6xl md:text-8xl font-medium text-primary-600 mb-2 italic">
          {siteConfig.names.bride}
        </h1>

        <div className="my-4">
          <span className="font-serif text-2xl text-neutral-500">&</span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl font-medium text-primary-600 mb-8 italic">
          {siteConfig.names.groom}
        </h1>

        <div className="mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-neutral-500 mb-6">
            Are Getting Married
          </p>
          <div className="flex items-center justify-center gap-4 text-neutral-900">
            <span className="w-12 h-px bg-neutral-300" />
            <p className="font-serif text-xl md:text-2xl">
              February 24 & 25, 2026
            </p>
            <span className="w-12 h-px bg-neutral-300" />
          </div>
          <p className="text-neutral-600 text-sm mt-2">{siteConfig.venue.name}</p>
        </div>

        {/* Minimal Countdown */}
        <div className="flex justify-center gap-8 md:gap-12 mb-12">
          <CountdownUnit value={timeUntil.days} label="Days" />
          <CountdownUnit value={timeUntil.hours} label="Hours" />
          <CountdownUnit value={timeUntil.minutes} label="Min" />
          <CountdownUnit value={timeUntil.seconds} label="Sec" />
        </div>

        <a
          href="#rsvp"
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-semibold text-sm tracking-wider transition-colors"
        >
          RSVP Now
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-scroll-hint">
          <span className="text-xs tracking-widest text-neutral-500 uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-neutral-400/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <span className="font-serif text-3xl md:text-4xl text-primary-600 font-bold block">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-neutral-600">
        {label}
      </span>
    </div>
  );
}
