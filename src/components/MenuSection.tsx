import { useState } from 'react';
import { menuData } from '@/data/cafeData';

export default function MenuSection() {
  const [activeMenu, setActiveMenu] = useState<keyof typeof menuData>('vegetarian');

  return (
    <section id="menu" style={{ background: 'var(--dark-brown)', padding: '5rem 1rem' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: 'var(--turmeric)' }}>Наши блюда</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#FEF6E8' }}>
            Меню
          </h2>
          <div className="ornament">
            <span style={{ color: 'var(--turmeric)' }}>✦</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {(Object.keys(menuData) as (keyof typeof menuData)[]).map(key => (
            <button
              key={key}
              onClick={() => setActiveMenu(key)}
              className="px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: activeMenu === key ? 'var(--curry)' : 'rgba(232,160,32,0.12)',
                color: activeMenu === key ? '#FEF6E8' : 'rgba(254,246,232,0.7)',
                border: activeMenu === key ? '2px solid var(--turmeric)' : '2px solid transparent',
                transform: activeMenu === key ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {menuData[key].emoji} {menuData[key].label}
            </button>
          ))}
        </div>

        {menuData[activeMenu].note && (
          <p className="text-center text-sm mb-6" style={{ color: 'var(--saffron)' }}>
            ⚡ {menuData[activeMenu].note}
          </p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuData[activeMenu].items.map((item, i) => (
            <div
              key={i}
              className="menu-card rounded-xl p-5"
              style={{
                background: 'rgba(254,246,232,0.05)',
                border: '1px solid rgba(232,160,32,0.15)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm leading-tight mb-2" style={{ color: 'var(--saffron)' }}>
                    {item.name}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(254,246,232,0.6)' }}>
                    {item.desc}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-lg font-bold" style={{ color: '#FEF6E8' }}>{item.price} ₽</div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(232,160,32,0.7)' }}>{item.weight}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
