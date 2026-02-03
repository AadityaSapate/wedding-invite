import { Hero } from '@/components/sections/Hero';
import { VenueInfo } from '@/components/sections/VenueInfo';
import { EventDetails } from '@/components/sections/EventDetails';
import { DressCode } from '@/components/sections/DressCode';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VenueInfo />
      <EventDetails />
      <DressCode />

      {/* Placeholder for Photo Gallery */}
      <section id="photos" className="section-container bg-neutral-50">
        <div className="text-center">
          <h2 className="heading-2 text-neutral-900 mb-4">Our Memories</h2>
          <p className="text-neutral-600">Photo gallery coming soon...</p>
        </div>
      </section>

      {/* Placeholder for RSVP Form */}
      <section id="rsvp" className="section-container bg-white">
        <div className="text-center">
          <h2 className="heading-2 text-neutral-900 mb-4">RSVP</h2>
          <p className="text-neutral-600">RSVP form coming soon...</p>
        </div>
      </section>
    </main>
  );
}
