import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { navItems } from '@/data/cafeData';

interface NavBarProps {
  scrollTo: (id: string) => void;
}

export default function NavBar({ scrollTo }: NavBarProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setIsNavOpen(false);
    scrollTo(id);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(44, 24, 16, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="flex items-center gap-2">
          <span className="text-2xl">🍛</span>
          <div>
            <div className="font-bold text-lg leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--saffron)' }}>
              Арт оф Карри
            </div>
            <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(245,200,66,0.6)' }}>Art of Curry</div>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="nav-link text-sm font-medium tracking-wide"
              style={{ color: '#FEF6E8' }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: 'var(--saffron)' }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <Icon name={isNavOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {isNavOpen && (
        <div className="md:hidden px-4 pb-4" style={{ background: 'rgba(44, 24, 16, 0.98)' }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="block w-full text-left py-3 border-b text-sm"
              style={{ color: '#FEF6E8', borderColor: 'rgba(232,160,32,0.2)' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
