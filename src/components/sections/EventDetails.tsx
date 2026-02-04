import { siteConfig } from '@/config/site';
import { Clock, Shirt } from 'lucide-react';

export function EventDetails() {
  return (
    <section id="schedule" className="section-container bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-neutral-900 mb-4">
            Schedule of Events
          </h2>
          <p className="text-lg text-neutral-600">
            Here&apos;s what to expect on our special day
          </p>
        </div>

        <div className="space-y-6">
          {siteConfig.events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
                    <Clock className="w-8 h-8 text-primary-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-serif font-semibold text-neutral-900">
                      {event.title}
                    </h3>
                    <span className="text-primary-600 font-semibold">
                      {event.time}
                    </span>
                  </div>
                  {event.description && (
                    <p className="text-neutral-700 mb-3">
                      {event.description}
                    </p>
                  )}
                  {event.dressCode && (
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-neutral-100">
                      <Shirt className="w-4 h-4 text-sage-500" />
                      <span className="text-sm font-medium text-neutral-600">Dress Code:</span>
                      <span className="text-sm text-sage-600 font-semibold">{event.dressCode}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
