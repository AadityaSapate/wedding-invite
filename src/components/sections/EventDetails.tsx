import { siteConfig } from '@/config/site';
import { Clock, Shirt, Calendar } from 'lucide-react';

export function EventDetails() {
  return (
    <section id="schedule" className="section-container bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-neutral-900 mb-4">
            Wedding Celebrations
          </h2>
          <p className="text-lg text-neutral-600">
            Join us for two days of beautiful traditions and joyful celebrations
          </p>
        </div>

        <div className="space-y-12">
          {siteConfig.days.map((day, dayIndex) => (
            <div key={dayIndex} className="space-y-6">
              {/* Day Header */}
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary-500" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">
                    {day.day}
                  </h3>
                  <p className="text-primary-600 font-medium">{day.date}</p>
                </div>
              </div>

              {/* Events for this day */}
              <div className="grid md:grid-cols-2 gap-6">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="space-y-3">
                      {/* Event Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-primary-500" />
                          </div>
                          <div>
                            <h4 className="text-xl font-serif font-semibold text-neutral-900">
                              {event.title}
                            </h4>
                            <span className="text-primary-600 font-semibold text-sm">
                              {event.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      {event.description && (
                        <p className="text-neutral-700 text-sm">
                          {event.description}
                        </p>
                      )}

                      {/* Dress Code */}
                      {event.dressCode && (
                        <div className="flex items-start gap-2 mt-4 pt-4 border-t border-neutral-100">
                          <Shirt className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <span className="text-xs font-medium text-neutral-600 block mb-1">
                              Dress Code
                            </span>
                            <span className="text-sm text-sage-600 font-semibold">
                              {event.dressCode}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
