import { siteConfig } from '@/config/site';
import { MapPin } from 'lucide-react';

export function VenueInfo() {
  return (
    <section id="venue" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="heading-2 text-neutral-900 mb-4">
            Where
          </h2>
          <p className="text-lg text-neutral-600">
            Join us at this beautiful location
          </p>
        </div>

        {/* Venue Card */}
        <div className="max-w-xl mx-auto bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-3 mb-6">
            <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
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
            className="inline-block w-full bg-primary-500 hover:bg-primary-600 text-white text-center font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
