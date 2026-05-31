import { useEffect } from 'react';
import Icon from '@/components/ui/icon';
import NavBar from '@/components/NavBar';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import { YANDEX_EDA_URL, reviews, navItems } from '@/data/cafeData';

export default function Index() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--warm-white)' }}>

      <NavBar scrollTo={scrollTo} />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/fa777d37-a4fe-435c-b1bd-930ce0e52154/files/1ca78846-6153-40c6-ae04-870a24a939ff.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(44,24,16,0.88) 0%, rgba(168,60,10,0.6) 60%, rgba(44,24,16,0.85) 100%)' }} />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="animate-spin-slow opacity-5 text-center"
            style={{ fontSize: '60vw', lineHeight: 1, color: 'var(--saffron)' }}
          >
            ✿
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-sm tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: 'var(--saffron)' }}>
              ✦ Аутентичная индийская кухня ✦
            </p>
          </div>
          <h1
            className="animate-fade-in-up delay-200 text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#FEF6E8' }}
          >
            Арт оф{' '}
            <span className="gold-text italic">Карри</span>
          </h1>
          <p
            className="animate-fade-in-up delay-400 text-lg sm:text-xl mb-10 font-light leading-relaxed"
            style={{ color: 'rgba(254,246,232,0.8)' }}
          >
            Погружение в мир ароматных специй, традиционных рецептов и тёплого гостеприимства Индии
          </p>
          <div className="animate-fade-in-up delay-600 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollTo('menu')}
              className="px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
              style={{ background: 'var(--curry)', color: '#FEF6E8', boxShadow: '0 8px 24px rgba(200,105,30,0.4)' }}
            >
              Смотреть меню
            </button>
            <a
              href={YANDEX_EDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 inline-block"
              style={{ border: '2px solid var(--saffron)', color: 'var(--saffron)', background: 'transparent', textDecoration: 'none' }}
            >
              Заказать доставку
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={28} style={{ color: 'var(--saffron)' }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-4 sm:px-6 indian-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: 'var(--curry)' }}>История</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--dark-brown)' }}>
              О нашем кафе
            </h2>
            <div className="ornament">
              <span style={{ color: 'var(--turmeric)' }}>✦</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h3 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--dark-brown)' }}>
              Вкус настоящей Индии<br />в каждом блюде
            </h3>
            <p className="text-base leading-relaxed" style={{ color: '#5a3a28' }}>
              Кафе «Арт оф Карри» — это место, где традиционные индийские рецепты встречаются с современным уютом. Наши повара готовят каждое блюдо из свежих ингредиентов с использованием настоящих специй, привезённых прямо из Индии.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#5a3a28' }}>
              Мы верим, что еда — это искусство. В каждой тарелке — история, аромат и любовь к традиционной кулинарии. Вегетарианское и невегетарианское меню удовлетворит любые предпочтения.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: '🌿', label: 'Свежие специи', sub: 'Прямо из Индии' },
                { icon: '👨‍🍳', label: 'Опытные повара', sub: 'Традиционные рецепты' },
                { icon: '🛵', label: 'Быстрая доставка', sub: 'По городу' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl flex flex-col items-center justify-start"
                  style={{ background: 'rgba(232,160,32,0.1)', border: '1px solid rgba(232,160,32,0.2)', minHeight: 100 }}
                >
                  <div className="text-2xl mb-2 leading-none">{item.icon}</div>
                  <div className="text-xs font-semibold mb-1 leading-tight" style={{ color: 'var(--dark-brown)' }}>{item.label}</div>
                  <div className="text-xs leading-tight" style={{ color: 'var(--curry)' }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MenuSection />

      {/* DELIVERY */}
      <section id="delivery" className="py-24 px-4 sm:px-6 indian-pattern">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: 'var(--curry)' }}>Привезём к вам</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--dark-brown)' }}>
              Доставка
            </h2>
            <div className="ornament">
              <span style={{ color: 'var(--turmeric)' }}>✦</span>
            </div>
          </div>

          <div
            className="rounded-3xl p-8 sm:p-12 text-center mb-8 relative overflow-hidden"
            style={{ background: 'var(--dark-brown)', border: '2px solid rgba(232,160,32,0.25)' }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,160,32,0.12) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: 'rgba(254,246,232,0.08)', border: '1px solid rgba(232,160,32,0.2)' }}
                >
                  🛵
                </div>
              </div>
              <h3
                className="text-3xl sm:text-4xl font-bold mb-3"
                style={{ fontFamily: 'Playfair Display, serif', color: '#FEF6E8' }}
              >
                Заказ через Яндекс Еду
              </h3>
              <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: 'rgba(254,246,232,0.65)' }}>
                Быстрая доставка горячих блюд прямо к вашей двери. Удобный выбор, оплата онлайн и отслеживание заказа в приложении.
              </p>
              <a
                href={YANDEX_EDA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #FC3F1D 0%, #FF6B35 100%)',
                  color: '#fff',
                  boxShadow: '0 12px 32px rgba(252,63,29,0.4)',
                  textDecoration: 'none',
                }}
              >
                <span className="text-xl">🍽</span>
                Открыть в Яндекс Еде
                <Icon name="ExternalLink" size={18} />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: '⚡', title: 'Быстро', sub: 'Среднее время доставки 45 минут' },
              { icon: '🌡️', title: 'Горячим', sub: 'Термо-упаковка сохраняет аромат' },
              { icon: '📍', title: 'По городу', sub: 'Доставка по всей Москве' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 text-center"
                style={{ background: '#fff', border: '1px solid rgba(232,160,32,0.2)', boxShadow: '0 4px 16px rgba(200,105,30,0.07)' }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-sm mb-1" style={{ color: 'var(--dark-brown)' }}>{item.title}</div>
                <div className="text-xs" style={{ color: '#5a3a28' }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-4 sm:px-6 indian-pattern">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: 'var(--curry)' }}>Что говорят гости</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--dark-brown)' }}>
              Отзывы
            </h2>
            <div className="ornament">
              <span style={{ color: 'var(--turmeric)' }}>✦</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(232,160,32,0.25)',
                  boxShadow: '0 4px 16px rgba(200,105,30,0.08)',
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-lg" style={{ color: 'var(--saffron)' }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: '#5a3a28' }}>
                  «{review.text}»
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ background: 'var(--curry)', color: '#FEF6E8' }}
                    >
                      {review.name[0]}
                    </div>
                    <span className="font-semibold text-sm" style={{ color: 'var(--dark-brown)' }}>{review.name}</span>
                  </div>
                  <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" style={{ background: 'var(--dark-brown)', padding: '5rem 1rem' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: 'var(--turmeric)' }}>Найти нас</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#FEF6E8' }}>
            Контакты
          </h2>
          <div className="ornament mb-12">
            <span style={{ color: 'var(--turmeric)' }}>✦</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: 'Phone', title: 'Телефон', lines: ['+7 (917) 521-26-17', 'Ежедневно 11:00–23:00'] },
              { icon: 'MapPin', title: 'Адрес', lines: ['ТЦ Рязанский, Рязанский пр-т, 30 к2', 'Москва'] },
              { icon: 'Clock', title: 'Режим работы', lines: ['Пн–Вс: 11:00 – 23:00', 'Без выходных'] },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ background: 'rgba(254,246,232,0.05)', border: '1px solid rgba(232,160,32,0.15)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'var(--curry)' }}
                >
                  <Icon name={item.icon} size={22} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--saffron)' }}>{item.title}</h4>
                {item.lines.map((line, j) => (
                  item.title === 'Телефон' && j === 0
                    ? <a key={j} href="tel:+79175212617" className="text-sm block hover:opacity-75 transition-opacity" style={{ color: '#FEF6E8' }}>{line}</a>
                    : <p key={j} className="text-sm" style={{ color: j === 0 ? '#FEF6E8' : 'rgba(254,246,232,0.5)' }}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ background: 'rgba(232,160,32,0.08)', border: '1px solid rgba(232,160,32,0.2)' }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#FEF6E8' }}>
              Написать нам
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Ваше имя"
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: 'rgba(254,246,232,0.08)', border: '1px solid rgba(232,160,32,0.3)', color: '#FEF6E8' }}
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: 'rgba(254,246,232,0.08)', border: '1px solid rgba(232,160,32,0.3)', color: '#FEF6E8' }}
              />
            </div>
            <button
              className="mt-4 px-10 py-3.5 rounded-full font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
              style={{ background: 'var(--curry)', color: '#FEF6E8', boxShadow: '0 8px 24px rgba(200,105,30,0.35)' }}
            >
              Отправить заявку
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'rgba(20, 10, 5, 0.98)', padding: '2rem 1rem' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl">🍛</span>
            <span style={{ fontFamily: 'Playfair Display, serif', color: 'var(--saffron)', fontSize: '1.1rem', fontWeight: 600 }}>
              Арт оф Карри
            </span>
          </div>
          <p className="text-xs mb-4" style={{ color: 'rgba(254,246,232,0.4)' }}>
            Аутентичная индийская кухня • Доставка и самовывоз
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-xs" style={{ color: 'rgba(254,246,232,0.35)' }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="hover:opacity-70 transition-opacity">
                {item.label}
              </button>
            ))}
          </div>
          <p className="text-xs mt-6" style={{ color: 'rgba(254,246,232,0.2)' }}>
            © 2024 Арт оф Карри. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}