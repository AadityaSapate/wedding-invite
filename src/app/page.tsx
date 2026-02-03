import { Hero } from '@/components/sections/Hero';
import { VenueInfo } from '@/components/sections/VenueInfo';
import { EventDetails } from '@/components/sections/EventDetails';
import { DressCode } from '@/components/sections/DressCode';
import { PhotoGallery } from '@/components/sections/PhotoGallery';
import { RSVPForm } from '@/components/sections/RSVPForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VenueInfo />
      <EventDetails />
      <DressCode />
      <PhotoGallery />
      <RSVPForm />
    </main>
  );
}
