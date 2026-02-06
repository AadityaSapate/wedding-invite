import Image from 'next/image';

// Our journey together
const photos = [
  {
    id: 1,
    src: '/images/gallery/nagpur-2022.jpeg',
    alt: 'We Started in Nagpur in 2022',
    caption: 'Where it all began',
    date: 'Nagpur, 2022',
    rotate: -6,
  },
  {
    id: 2,
    src: '/images/gallery/gurugram-2023.jpeg',
    alt: 'Our journey continued in Gurugram 2023',
    caption: 'Our favorite moments',
    date: 'Gurugram, 2023',
    rotate: 4,
  },
  {
    id: 3,
    src: '/images/gallery/banglore-2024.jpeg',
    alt: 'Together in Banglore 2024',
    caption: 'Crafting together',
    date: 'Banglore, 2024',
    rotate: -3,
  },
  {
    id: 4,
    src: '/images/gallery/nagpur-2025.jpeg',
    alt: 'Confirmation from families in 2025',
    caption: 'Families united!',
    date: 'Nagpur, 2025',
    rotate: 5,
  },
];

export function PhotoGallery() {
  return (
    <section id="photos" className="py-28 px-6 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-primary-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-primary-100/20 to-transparent rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="inline-block text-3xl mb-4">♥</span>
          <h2 className="heading-2 text-neutral-900 mb-4">
            Our Memories
          </h2>
          <p className="text-lg text-neutral-600 max-w-md mx-auto">
            A glimpse into our journey together
          </p>
        </div>

        {/* Polaroid Grid - Artistic scattered layout */}
        <div className="relative">
          {/* Desktop: Scattered artistic layout */}
          <div className="hidden md:block relative h-[700px]">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`absolute bg-white p-3 pb-12 shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-10
                  ${index === 0 ? 'top-0 left-0 w-64' : ''}
                  ${index === 1 ? 'top-8 right-8 w-56' : ''}
                  ${index === 2 ? 'bottom-0 left-1/4 w-72' : ''}
                  ${index === 3 ? 'bottom-16 right-1/4 w-52' : ''}
                `}
                style={{
                  transform: `rotate(${photo.rotate}deg)`,
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)',
                }}
              >
                <div className="overflow-hidden relative aspect-[4/5]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-serif text-neutral-900 italic text-sm">
                    {photo.caption}
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {photo.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Stacked with slight rotation */}
          <div className="md:hidden flex flex-col items-center gap-8">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white p-3 pb-12 shadow-xl w-64 relative"
                style={{
                  transform: `rotate(${photo.rotate / 2}deg)`,
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.03)',
                }}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-serif text-neutral-900 italic text-sm">
                    {photo.caption}
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {photo.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline connector */}
        {/*<div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />*/}
      </div>
    </section>
  );
}
