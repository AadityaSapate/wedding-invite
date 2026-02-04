import { Hero } from '@/components/sections/Hero';
import { EventDetails } from '@/components/sections/EventDetails';
import { PhotoGallery } from '@/components/sections/PhotoGallery';
import { RSVPForm } from '@/components/sections/RSVPForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EventDetails />
      <PhotoGallery />
      <RSVPForm />
    </main>
  );
}
