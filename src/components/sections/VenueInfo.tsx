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

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Venue Details */}
          <div className="space-y-6">
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

            <div className="bg-sage-50 p-6 rounded-lg">
              <p className="text-sm text-neutral-700">
                <span className="font-semibold">Parking:</span> Complimentary valet parking will be available for all guests.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="h-80 md:h-full min-h-[320px] bg-neutral-100 rounded-lg overflow-hidden shadow-md">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(siteConfig.venue.address)}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
