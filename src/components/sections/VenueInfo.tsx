import { siteConfig } from '@/config/site';
import { MapPin } from 'lucide-react';

export function VenueInfo() {
  return (
    <section id="venue" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-neutral-900 mb-4">
            When & Where
          </h2>
          <p className="text-lg text-neutral-600">
            Join us at this beautiful location
          </p>
        </div>

        <div className="flex justify-center">
          {/* Venue Details */}
          <div className="max-w-md w-full">
            <div className="bg-neutral-50 p-8 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                    {siteConfig.venue.name}
                  </h3>
                  <p className="text-neutral-700">
                    {siteConfig.venue.address}
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white text-center font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
