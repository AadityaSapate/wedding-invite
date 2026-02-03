import { siteConfig } from '@/config/site';
import { Shirt } from 'lucide-react';

export function DressCode() {
  return (
    <section id="dress-code" className="section-container bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-primary-50 to-sage-50 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <Shirt className="w-8 h-8 text-primary-500" />
            </div>
          </div>

          <div className="text-center space-y-4">
            <h2 className="heading-3 text-neutral-900">
              {siteConfig.dressCode.title}
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {siteConfig.dressCode.description}
            </p>
          </div>

          {/* Optional: Add color palette or style guide */}
          <div className="mt-8 pt-8 border-t border-primary-200">
            <p className="text-center text-sm text-neutral-600">
              <span className="font-semibold">Color Palette:</span> We&apos;re using soft pink and sage green tones. Feel free to complement these colors in your attire!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
