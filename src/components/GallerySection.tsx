import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { galleryImages } from '@/data/cafeData';

export default function GallerySection() {
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);

  return (
    <section id="gallery" style={{ background: 'var(--dark-brown)', padding: '5rem 1rem' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: 'var(--turmeric)' }}>Фотографии</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#FEF6E8' }}>
            Галерея
          </h2>
          <div className="ornament">
            <span style={{ color: 'var(--turmeric)' }}>✦</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((item, i) => (
            <button
              key={i}
              onClick={() => setGalleryOpen(i)}
              className="overflow-hidden rounded-xl aspect-square transition-all duration-300 hover:scale-105 relative group"
              style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(44,24,16,0.8) 0%, transparent 60%)' }}
              >
                <span className="text-xs font-semibold" style={{ color: 'var(--saffron)' }}>{item.label}</span>
              </div>
            </button>
          ))}
        </div>

        {galleryOpen !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            onClick={() => setGalleryOpen(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setGalleryOpen(null)}
            >
              <Icon name="X" size={28} />
            </button>
            <div className="flex flex-col items-center gap-3" onClick={e => e.stopPropagation()}>
              <img
                src={galleryImages[galleryOpen].src}
                alt={galleryImages[galleryOpen].label}
                className="max-w-full max-h-full rounded-2xl object-contain"
                style={{ maxHeight: '82vh', maxWidth: '90vw' }}
              />
              <span className="text-sm font-semibold" style={{ color: 'var(--saffron)' }}>
                {galleryImages[galleryOpen].label}
              </span>
            </div>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2"
              style={{ color: 'var(--saffron)' }}
              onClick={e => { e.stopPropagation(); setGalleryOpen((galleryOpen - 1 + galleryImages.length) % galleryImages.length); }}
            >
              <Icon name="ChevronLeft" size={36} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2"
              style={{ color: 'var(--saffron)' }}
              onClick={e => { e.stopPropagation(); setGalleryOpen((galleryOpen + 1) % galleryImages.length); }}
            >
              <Icon name="ChevronRight" size={36} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
