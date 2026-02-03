'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';
import { formatDate, getTimeUntilDate } from '@/lib/utils';

export function Hero() {
  const [timeUntil, setTimeUntil] = useState(getTimeUntilDate(siteConfig.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntil(getTimeUntilDate(siteConfig.date));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white">
      <div className="section-container text-center">
        <div className="space-y-6">
          {/* Names */}
          <div className="space-y-2">
            <h1 className="heading-1 text-primary-600">
              {siteConfig.names.bride} & {siteConfig.names.groom}
            </h1>
            <p className="text-xl text-neutral-600">
              are getting married!
            </p>
          </div>

          {/* Date */}
          <div className="space-y-2">
            <p className="text-2xl font-serif text-neutral-800">
              {formatDate(siteConfig.date)}
            </p>
            <p className="text-lg text-neutral-600">
              {siteConfig.venue.name}
            </p>
          </div>

          {/* Countdown */}
          <div className="mt-12">
            <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
              Counting down to our special day
            </p>
            <div className="flex justify-center gap-4 sm:gap-8">
              <CountdownUnit value={timeUntil.days} label="Days" />
              <CountdownUnit value={timeUntil.hours} label="Hours" />
              <CountdownUnit value={timeUntil.minutes} label="Minutes" />
              <CountdownUnit value={timeUntil.seconds} label="Seconds" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="#rsvp"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              RSVP Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-primary-200 rounded-lg flex items-center justify-center shadow-sm">
        <span className="text-2xl sm:text-3xl font-bold text-primary-600">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm text-neutral-600 mt-2">{label}</span>
    </div>
  );
}
