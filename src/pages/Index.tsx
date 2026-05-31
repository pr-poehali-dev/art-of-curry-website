import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const menuData = {
  vegetarian: {
    label: 'Вегетарианские блюда',
    emoji: '🌿',
    note: 'Карри+рис (120г) или роти на выбор',
    items: [
      { name: 'Малай Кофта / Malai Kofta', desc: 'Жареные картофельные и сырные шарики в томатно-луковом соусе', weight: '300г', price: 580 },
      { name: 'Чана Масала / Channa Masala', desc: 'Карри из нута в томатно-луковом соусе', weight: '300г', price: 410 },
      { name: 'Палак Панир / Palak Paneer', desc: 'Блюдо из густого шпинатного пюре с кусочками домашнего сыра', weight: '300г', price: 520 },
      { name: 'Алу Гоби / Aloo Gobi', desc: 'Картофель и цветная капуста со специями', weight: '280г', price: 430 },
      { name: 'Панир Макхани / Paneer Makhani', desc: 'Кубики домашнего сыра в сливочном томатном соусе с кешью', weight: '280г', price: 490 },
      { name: 'Баклажан Бхарта / Eggplant Bharta', desc: 'Баклажаны-гриль с помидорами, зеленью и специями', weight: '280г', price: 530 },
      { name: 'Микс Веджетейблз / Mix Vegetables', desc: 'Смесь овощей с карри и специями', weight: '280г', price: 490 },
      { name: 'Кадай Панир / Kadai Paneer', desc: 'Домашний сыр, болгарский перец и свежемолотые специи', weight: '280г', price: 540 },
      { name: 'Шахи Панир / Shahi Paneer', desc: 'Кубики панира в густом соусе из помидоров, кешью, гхи и сливок', weight: '300г', price: 550 },
      { name: 'Раджма Масала / Rajma Masala', desc: 'Карри из красной фасоли со специями', weight: '330г', price: 410 },
      { name: 'Дал Макхани / Dal Makhani', desc: 'Чёрный маш на медленном огне с помидорами и сливками', weight: '330г', price: 470 },
      { name: 'Дал Тадка / Dal Tadka', desc: 'Чечевица со специями и зеленью', weight: '300г', price: 350 },
      { name: 'Микс Дал / Mix Dal', desc: 'Индийское блюдо из комбинации чечевицы', weight: '300г', price: 370 },
      { name: 'Дал Палак / Dal Palak', desc: 'Шпинат, чечевица, специи и травы', weight: '300г', price: 440 },
      { name: 'Овощной Бирьяни / Veg Biryani', desc: 'Ароматный плов из риса басмати с овощами', weight: '250/30/20г', price: 450 },
    ]
  },
  nonvegetarian: {
    label: 'Не вегетарианские блюда',
    emoji: '🍗',
    note: 'Карри+рис (120г) или роти на выбор',
    items: [
      { name: 'Батер Чикен / Butter Chicken', desc: 'Кусочки курицы в томатно-сливочном соусе со специями', weight: '280г', price: 530 },
      { name: 'Минт Чикен Карри / Mint Chicken Curry', desc: 'Курица маринуется в специях, готовится в карри из мяты и кинзы', weight: '280г', price: 540 },
      { name: 'Чикен Карри / Chicken Curry', desc: 'Куриное мясо в пряном соусе из кориандра, куркумы, чили и имбиря', weight: '280г', price: 450 },
      { name: 'Корма Чикен / Korma Chicken', desc: 'Курица с кешью в кремовом соусе', weight: '280г', price: 510 },
      { name: 'Чикен Тикка Масала / Chicken Tikka Masala', desc: 'Куриное бедро с луком, чесноком, имбирём и специями', weight: '280г', price: 490 },
      { name: 'Маттон Карри / Mutton Curry', desc: 'Баранина в пряном соусе из кориандра, куркумы, чили и имбиря', weight: '280г', price: 680 },
      { name: 'Проун Карри / Prawns Curry', desc: 'Карри с тигровыми креветками', weight: '300г', price: 680 },
      { name: 'Проун Масала Карри / Prawns Masala Curry', desc: 'Карри с креветками и специями масала', weight: '300г', price: 690 },
      { name: 'Кадай Чикен / Kadai Chicken', desc: 'Куриное бедро с чили, кориандром, паприкой и луком', weight: '300г', price: 510 },
      { name: 'Маттон Корма / Mutton Korma', desc: 'Баранина в густом сливочно-ореховом соусе', weight: '280г', price: 680 },
      { name: 'Суп с Бараниной / Soup with Mutton', desc: 'Болгарский перец, чеснок, имбирь, баранина, кинза, специи', weight: '300г', price: 580 },
      { name: 'Курица с Жареным Рисом / Chicken Fried Rice', desc: 'Плов из риса басмати с кусочками курицы и специями', weight: '350г', price: 480 },
      { name: 'Маттон Бирьяни / Mutton Biryani', desc: 'Плов из риса басмати с кусочками баранины и специями', weight: '350г', price: 720 },
      { name: 'Чикен Тикка Бирьяни / Chicken Tikka Biryani', desc: 'Обжаренное филе цыплёнка под соусом масала с рисом басмати', weight: '250/30/20г', price: 480 },
    ]
  },
  starters: {
    label: 'Закуски и салаты',
    emoji: '🥗',
    note: '',
    items: [
      { name: 'Панир Ролл / Paneer Roll', desc: 'Болгарский перец, капуста, помидор, огурец, домашний сыр, соус', weight: '150г', price: 300 },
      { name: 'Момо Вегетарианский / Momo Veg Steam', desc: 'Индийские пельмени с вегетарианской начинкой из овощей, с острым соусом', weight: '220г', price: 350 },
      { name: 'Чикен Эгг Ролл с картошкой / Chicken Egg Roll', desc: 'Курица, яйцо, соус, болгарский перец, капуста, помидор, огурец', weight: '280/120г', price: 440 },
      { name: 'Эгг Ролл / Egg Roll', desc: 'Яйцо, болгарский перец, капуста, помидор, огурец, соус', weight: '250г', price: 270 },
      { name: 'Овощная Пакора / Veg Pakora', desc: 'Кусочки овощей во фритюре в остром кляре из нутовой муки', weight: '250г', price: 450 },
      { name: 'Хара Бхара Кебаб / Hara Bhara Kabab', desc: 'Картофельная котлета со шпинатом, горошком и нутом', weight: '250г', price: 430 },
      { name: 'Алу Самоса / Aloo Samosa', desc: 'Традиционная закуска с картофельной начинкой со специями', weight: '250г', price: 270 },
      { name: 'Момо Вегетарианский / Veg Momo', desc: 'Индийские пельмени с вегетарианской начинкой, с прянным соусом', weight: '200г', price: 350 },
      { name: 'Момо с Курицей / Momo Chicken', desc: 'Индийские пельмени с начинкой из курицы', weight: '250г', price: 380 },
      { name: 'Панир Пакора / Paneer Pakora', desc: 'Кусочки домашнего сыра в кляре, обжаренные во фритюре', weight: '250г', price: 450 },
      { name: 'Чикен Самоса / Chicken Samosa', desc: 'Закуска с куриной начинкой со специями', weight: '250г', price: 350 },
      { name: 'Момо из Баранины / Mutton Momo', desc: 'Индийские пельмени с начинкой из баранины', weight: '250г', price: 490 },
      { name: 'Нутовый Салат / Channa Salad', desc: 'Нут, помидор, лук, огурцы, кинза, перец чили', weight: '220г', price: 350 },
      { name: 'Смесь Овощей / Mix Salad', desc: 'Огурец, томат, морковь, болгарский перец, оливковое масло, кинза', weight: '200г', price: 330 },
      { name: 'Чили Панир / Chili Panir', desc: 'Индо-китайское блюдо из сыра в остром пикантном соусе с перцем', weight: '350г', price: 550 },
    ]
  },
  bread: {
    label: 'Хлеб и Рис',
    emoji: '🫓',
    note: '',
    items: [
      { name: 'Алу Паратха / Aloo Parantha', desc: 'Лепёшка с начинкой из картофеля со специями', weight: '150г', price: 170 },
      { name: 'Гарлик Паратха / Garlic Parantha', desc: 'Лепёшка с добавлением чеснока', weight: '120г', price: 150 },
      { name: 'Папад / Papad', desc: 'Тонкая круглая лепёшка с пряностями и травами', weight: '10г', price: 100 },
      { name: 'Роти / Roti', desc: 'Традиционный индийский хлеб в виде круглых лепёшек', weight: '80г', price: 80 },
      { name: 'Баттер Роти / Butter Roti', desc: 'Традиционный хлеб с добавлением топлёного масла', weight: '100г', price: 220 },
      { name: 'Кимма Паратха / Kimma Parantha', desc: 'Лепёшка с начинкой из куриного мяса со специями', weight: '150г', price: 250 },
      { name: 'Чиз Гарлик Паратха / Chees Garlic Parantha', desc: 'Лепёшка с начинкой из сыра с добавлением чеснока', weight: '150г', price: 210 },
      { name: 'Панир Паратха / Paneer Parantha', desc: 'Домашний сыр, куркума, кинза, паприка, сливочное масло', weight: '170г', price: 220 },
      { name: 'Чиз Паратха / Chees Parantha', desc: 'Лепёшка с начинкой из сыра', weight: '140г', price: 190 },
      { name: 'Микс Паратха / Mix Parantha', desc: 'Мука, картошка, имбирь, лук, кинза, сыр, куркума, паприка', weight: '170г', price: 200 },
      { name: 'Зира Рис / Zira Rice', desc: 'Рис басмати приготовленный с добавлением кумина', weight: '200г', price: 220 },
      { name: 'Лимон Рис / Lemon Rice', desc: 'Рис басмати с добавлением лимонного сока и специй', weight: '200г', price: 250 },
      { name: 'Плейн Райс / Plain Rice', desc: 'Варёный рассыпчатый рис басмати', weight: '200г', price: 180 },
      { name: 'Рис Басмати со Шпинатом / Rice Basmati with Spinach', desc: 'Ароматный рис с добавлением шпината', weight: '200г', price: 350 },
    ]
  },
  desserts: {
    label: 'Десерты и напитки',
    emoji: '🍮',
    note: '',
    items: [
      { name: 'Гаджар ка Халва / Gajar ka Halwa', desc: 'Сладкий десерт: тёртая морковь, молоко, топлёное масло, сахар', weight: '100г', price: 220 },
      { name: 'Гулаб Джамун / Gulab Jamun', desc: 'Сладкие шарики из сухого молока, обжаренные в масле гхи в сахарном сиропе', weight: '120г', price: 220 },
      { name: 'Кокосовое Ладду / Coconut Ladoo', desc: 'Мягкие белые круглые шарики из кокоса', weight: '120г', price: 220 },
      { name: 'Суджи ка Халва / Suji ka Halwa', desc: 'Индийская халва из манки', weight: '100г', price: 220 },
      { name: 'Бесан Ладду / Besan Ladoo', desc: 'Традиционная сладость из нутовой муки', weight: '100г', price: 220 },
      { name: 'Клубничное Ласси / Strawberry Lassi', desc: 'Клубничное пюре, кефир, сахар', weight: '280мл', price: 220 },
      { name: 'Пенджаби Ласси / Punjabi Lassi', desc: 'Кефир, имбирь, тмин, мята, соль, чёрный перец', weight: '280мл', price: 200 },
      { name: 'Манго Ласси / Mango Lassi', desc: 'Кефир, сахар, пюре из манго', weight: '280мл', price: 220 },
      { name: 'Чёрный чай', desc: 'Ароматный чёрный чай', weight: '200мл', price: 60 },
      { name: 'Зелёный чай', desc: 'Освежающий зелёный чай', weight: '200мл', price: 60 },
      { name: 'Чай масала', desc: 'Традиционный индийский чай с пряностями', weight: '200мл', price: 150 },
    ]
  }
};

const YANDEX_EDA_URL = 'https://eda.yandex.ru/moscow/r/art_of_karri';

const reviews = [
  { name: 'Анна К.', text: 'Невероятно вкусно! Батер Чикен просто растворяется во рту. Атмосфера кафе переносит прямо в Индию. Обязательно вернусь!', rating: 5, date: 'Март 2024' },
  { name: 'Михаил Р.', text: 'Лучший индийский ресторан в городе без вопросов. Масала чай — это что-то особенное, а Момо с курицей уже заказываю в третий раз.', rating: 5, date: 'Февраль 2024' },
  { name: 'Елена В.', text: 'Пришли всей семьёй, детям понравился овощной бирьяни. Персонал очень приветливый, рассказали о каждом блюде. Приятная атмосфера!', rating: 5, date: 'Апрель 2024' },
  { name: 'Дмитрий С.', text: 'Заказывал доставку — всё приехало горячим и вовремя. Маттон Бирьяни шикарный! Порции щедрые, цены адекватные.', rating: 5, date: 'Май 2024' },
];

const galleryImages = [
  'https://cdn.poehali.dev/projects/fa777d37-a4fe-435c-b1bd-930ce0e52154/bucket/e7a99adb-4f9a-47c6-9dee-d6b60529ccd5.png',
  'https://cdn.poehali.dev/projects/fa777d37-a4fe-435c-b1bd-930ce0e52154/bucket/39faff53-e864-4a06-859d-abcea9a2744d.png',
  'https://cdn.poehali.dev/projects/fa777d37-a4fe-435c-b1bd-930ce0e52154/bucket/0e6eddc8-20f8-42e3-a784-e8c64c7bc0cc.png',
  'https://cdn.poehali.dev/projects/fa777d37-a4fe-435c-b1bd-930ce0e52154/bucket/d2908796-a72c-4e85-ab0b-ebe4b15def17.png',
  'https://cdn.poehali.dev/projects/fa777d37-a4fe-435c-b1bd-930ce0e52154/bucket/7edfba06-dc12-4b0d-8b7b-b2cd7aebabd3.png',
  'https://cdn.poehali.dev/projects/fa777d37-a4fe-435c-b1bd-930ce0e52154/files/e87de4e1-5c79-4dca-86cb-78944e0f7db4.jpg',
];

export default function Index() {
  const [activeMenu, setActiveMenu] = useState<keyof typeof menuData>('vegetarian');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Главная', id: 'home' },
    { label: 'О нас', id: 'about' },
    { label: 'Меню', id: 'menu' },
    { label: 'Доставка', id: 'delivery' },
    { label: 'Галерея', id: 'gallery' },
    { label: 'Отзывы', id: 'reviews' },
    { label: 'Контакты', id: 'contacts' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--warm-white)' }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(44, 24, 16, 0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <span className="text-2xl">🍛</span>
            <div>
              <div className="font-bold text-lg leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--saffron)' }}>
                Арт оф Карри
              </div>
              <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(245,200,66,0.6)' }}>Art of Curry</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link text-sm font-medium tracking-wide"
                style={{ color: '#FEF6E8' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--saffron)' }}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <Icon name={isNavOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {isNavOpen && (
          <div className="md:hidden px-4 pb-4" style={{ background: 'rgba(44, 24, 16, 0.98)' }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left py-3 border-b text-sm"
                style={{ color: '#FEF6E8', borderColor: 'rgba(232,160,32,0.2)' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/fa777d37-a4fe-435c-b1bd-930ce0e52154/files/e87de4e1-5c79-4dca-86cb-78944e0f7db4.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(44,24,16,0.88) 0%, rgba(168,60,10,0.6) 60%, rgba(44,24,16,0.85) 100%)' }} />

        {/* Decorative mandala */}
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
            Погружение в мир ароматных специй, традиционных рецептов<br className="hidden sm:block" />
            и тёплого гостеприимства Индии
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 20px 60px rgba(200,105,30,0.2)' }}>
                <img
                  src="https://cdn.poehali.dev/projects/fa777d37-a4fe-435c-b1bd-930ce0e52154/bucket/7edfba06-dc12-4b0d-8b7b-b2cd7aebabd3.png"
                  alt="Меню Арт оф Карри"
                  className="w-full object-cover"
                  style={{ maxHeight: 480 }}
                />
              </div>
            </div>
            <div className="space-y-6">
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
                    className="text-center p-4 rounded-xl"
                    style={{ background: 'rgba(232,160,32,0.1)', border: '1px solid rgba(232,160,32,0.2)' }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-xs font-semibold mb-1" style={{ color: 'var(--dark-brown)' }}>{item.label}</div>
                    <div className="text-xs" style={{ color: 'var(--curry)' }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
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

          {/* Category tabs */}
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

          {/* Dishes grid */}
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

          {/* Яндекс Еда CTA */}
          <div
            className="rounded-3xl p-8 sm:p-12 text-center mb-8 relative overflow-hidden"
            style={{ background: 'var(--dark-brown)', border: '2px solid rgba(232,160,32,0.25)' }}
          >
            {/* decorative glow */}
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

          {/* Advantages */}
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

      {/* GALLERY */}
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
            {galleryImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setGalleryOpen(i)}
                className="overflow-hidden rounded-xl aspect-square transition-all duration-300 hover:scale-105"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
              >
                <img
                  src={src}
                  alt={`Галерея ${i + 1}`}
                  className="w-full h-full object-cover"
                />
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
              <img
                src={galleryImages[galleryOpen]}
                alt="Фото"
                className="max-w-full max-h-full rounded-2xl object-contain"
                style={{ maxHeight: '88vh', maxWidth: '90vw' }}
                onClick={e => e.stopPropagation()}
              />
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
              { icon: 'Phone', title: 'Телефон', lines: ['Укажите номер телефона', 'Ежедневно 11:00–23:00'] },
              { icon: 'MapPin', title: 'Адрес', lines: ['Укажите адрес кафе', 'Ваш город'] },
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
                  <p key={j} className="text-sm" style={{ color: j === 0 ? '#FEF6E8' : 'rgba(254,246,232,0.5)' }}>
                    {line}
                  </p>
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