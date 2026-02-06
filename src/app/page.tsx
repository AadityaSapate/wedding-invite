'use client';

import { useState, useEffect } from 'react';
import { Hero } from '@/components/sections/Hero';
import { EventDetails } from '@/components/sections/EventDetails';
import { PhotoGallery } from '@/components/sections/PhotoGallery';
import { RSVPForm } from '@/components/sections/RSVPForm';
import { Footer } from '@/components/Footer';
import { SaveTheDateLoader } from '@/components/SaveTheDateLoader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Hide loader after 3.5 seconds (loader fades at 2.5s)
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    // Show content with slight delay for smooth transition
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <>
      {isLoading && <SaveTheDateLoader />}
      <div
        className={`transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <main className="min-h-screen">
          <Hero />
          <EventDetails />
          <PhotoGallery />
          <RSVPForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
