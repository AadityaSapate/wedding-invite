import Image from 'next/image';
import { Heart } from 'lucide-react';

// Placeholder images - replace with actual wedding photos
const photos = [
  { id: 1, src: '/images/gallery/photo1.jpg', alt: 'Wedding photo 1', span: 'md:col-span-2' },
  { id: 2, src: '/images/gallery/photo2.jpg', alt: 'Wedding photo 2', span: '' },
  { id: 3, src: '/images/gallery/photo3.jpg', alt: 'Wedding photo 3', span: '' },
  { id: 4, src: '/images/gallery/photo4.jpg', alt: 'Wedding photo 4', span: 'md:row-span-2' },
  { id: 5, src: '/images/gallery/photo5.jpg', alt: 'Wedding photo 5', span: 'md:col-span-2' },
  { id: 6, src: '/images/gallery/photo6.jpg', alt: 'Wedding photo 6', span: '' },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
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
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
