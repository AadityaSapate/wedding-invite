import Image from 'next/image';
import { Heart } from 'lucide-react';

// Our journey together
const photos = [
  {
    id: 1,
    src: '/images/gallery/nagpur-2022.jpeg',
    alt: 'We Started in Nagpur in 2022',
    caption: 'Nagpur 2022',
    span: '' // Square photo - standard size
  },
  {
    id: 2,
    src: '/images/gallery/gurugram-2023.jpeg',
    alt: 'Our journey continued in Gurugram 2023',
    caption: 'Gurugram 2023',
    span: 'md:row-span-2' // Portrait photo - taller
  },
  {
    id: 3,
    src: '/images/gallery/banglore-2024.jpeg',
    alt: 'Together in Banglore 2024',
    caption: 'Banglore 2024',
    span: 'md:col-span-2' // Landscape photo - wider
  },
  {
    id: 4,
    src: '/images/gallery/nagpur-2025.jpeg',
    alt: 'Confirmation from families in 2025',
    caption: 'Families United 2025',
    span: 'md:col-span-2 md:row-span-2' // Large photo - emphasis on final milestone
  },
];

export function PhotoGallery() {
  return (
    <section id="photos" className="section-container bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-primary-500 fill-primary-500" />
            <h2 className="heading-2 text-neutral-900">
              Our Memories
            </h2>
            <Heart className="w-6 h-6 text-primary-500 fill-primary-500" />
          </div>
          <p className="text-lg text-neutral-600">
            A glimpse into our journey together
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-lg group ${photo.span} hover:shadow-xl transition-shadow duration-300`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-serif text-lg md:text-xl font-semibold p-4 w-full">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
