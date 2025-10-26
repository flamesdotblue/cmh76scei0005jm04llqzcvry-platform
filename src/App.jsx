import { useMemo, useState } from 'react';
import { Home, Search, Heart, ShoppingBag, User, MapPin, Star, ArrowRight } from 'lucide-react';
import HeroSection from './components/HeroSection';
import CategoriesRow from './components/CategoriesRow';
import DishesGrid from './components/DishesGrid';
import TrendingCarousel from './components/TrendingCarousel';

const sampleDishes = [
  {
    id: 'd1',
    name: 'Masala Dosa',
    veg: true,
    images: [
      'https://images.unsplash.com/photo-1617196034796-73dfa7c9d638?q=80&w=1600&auto=format&fit=crop',
    ],
    priceMin: 60,
    priceMax: 120,
    rating: 4.5,
    sources: 8,
  },
  {
    id: 'd2',
    name: 'Chicken Biryani',
    veg: false,
    images: [
      'https://images.unsplash.com/photo-1617692855027-0078c50f7f08?q=80&w=1600&auto=format&fit=crop',
    ],
    priceMin: 180,
    priceMax: 280,
    rating: 4.3,
    sources: 12,
  },
  {
    id: 'd3',
    name: 'Paneer Butter Masala',
    veg: true,
    images: [
      'https://images.unsplash.com/photo-1625944525886-4699a39c1ce2?q=80&w=1600&auto=format&fit=crop',
    ],
    priceMin: 160,
    priceMax: 240,
    rating: 4.6,
    sources: 10,
  },
  {
    id: 'd4',
    name: 'Gobi Manchurian',
    veg: true,
    images: [
      'https://images.unsplash.com/photo-1625944525720-0e8f4d730a1f?q=80&w=1600&auto=format&fit=crop',
    ],
    priceMin: 110,
    priceMax: 180,
    rating: 4.1,
    sources: 9,
  },
  {
    id: 'd5',
    name: 'Idli Vada Sambar',
    veg: true,
    images: [
      'https://images.unsplash.com/photo-1596797038530-2c107229cd8e?q=80&w=1600&auto=format&fit=crop',
    ],
    priceMin: 40,
    priceMax: 90,
    rating: 4.4,
    sources: 11,
  },
  {
    id: 'd6',
    name: 'Veg Fried Rice',
    veg: true,
    images: [
      'https://images.unsplash.com/photo-1625944525816-b953fddf62bc?q=80&w=1600&auto=format&fit=crop',
    ],
    priceMin: 120,
    priceMax: 190,
    rating: 4.0,
    sources: 7,
  },
];

export default function App() {
  const [compareList, setCompareList] = useState([]);

  const categories = useMemo(
    () => [
      { key: 'veg', label: 'Veg', color: 'from-green-500 to-emerald-500', icon: 'leaf' },
      { key: 'nonveg', label: 'Non-Veg', color: 'from-orange-500 to-red-500', icon: 'flame' },
      { key: 'north', label: 'North Indian', color: 'from-amber-500 to-orange-500', icon: 'utensils' },
      { key: 'south', label: 'South Indian', color: 'from-lime-500 to-green-500', icon: 'utensils' },
      { key: 'chinese', label: 'Chinese', color: 'from-yellow-500 to-red-500', icon: 'utensils' },
    ],
    []
  );

  const trending = useMemo(
    () => [
      {
        id: 't1',
        title: 'Spicy Chicken Biryani',
        image:
          'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1600&auto=format&fit=crop',
        gradient: 'from-orange-500/90 to-rose-500/90',
        veg: false,
      },
      {
        id: 't2',
        title: 'Crispy Dosa Roll',
        image:
          'https://images.unsplash.com/photo-1604908176997-43162fdfd2dd?q=80&w=1600&auto=format&fit=crop',
        gradient: 'from-emerald-500/90 to-green-500/90',
        veg: true,
      },
      {
        id: 't3',
        title: 'Paneer Tikka Masala',
        image:
          'https://images.unsplash.com/photo-1625944525341-6a08452e8ef9?q=80&w=1600&auto=format&fit=crop',
        gradient: 'from-amber-500/90 to-orange-600/90',
        veg: true,
      },
    ],
    []
  );

  const toggleCompare = (dishId) => {
    setCompareList((prev) => {
      if (prev.includes(dishId)) return prev.filter((id) => id !== dishId);
      return [...prev, dishId];
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Desktop top nav */}
      <div className="hidden md:flex items-center justify-between px-6 py-4 sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-orange-400 via-amber-400 to-green-400 bg-clip-text text-transparent">
            DISHLYST
          </span>
          <span className="hidden lg:flex items-center text-sm text-white/70 gap-2">
            <MapPin size={16} className="text-orange-400" />
            Bagalkot
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-white/80">
          <a className="hover:text-white transition" href="#home">Home</a>
          <a className="hover:text-white transition" href="#search">Search</a>
          <a className="hover:text-white transition" href="#favorites">Favorites</a>
          <a className="hover:text-white transition" href="#orders">Orders</a>
          <a className="hover:text-white transition" href="#profile">Profile</a>
        </div>
      </div>

      <HeroSection />

      <main className="relative z-10 -mt-10 md:-mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <CategoriesRow categories={categories} />

          <section className="mt-8">
            <div className="flex items-end justify-between mb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Popular in Bagalkot</h2>
              <button className="text-sm text-orange-400 hover:text-orange-300 inline-flex items-center gap-1">
                View all <ArrowRight size={16} />
              </button>
            </div>
            <DishesGrid dishes={sampleDishes} compareList={compareList} onToggleCompare={toggleCompare} />
          </section>

          <section className="mt-10">
            <div className="flex items-end justify-between mb-3">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Trending in Bagalkot</h2>
            </div>
            <TrendingCarousel items={trending} />
          </section>
        </div>

        <section className="mx-4 sm:mx-6 mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 p-[2px] shadow-xl">
            <div className="rounded-[22px] bg-neutral-950/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-2xl sm:text-3xl font-extrabold">Save more, eat smarter — only on DISHLYST</h3>
                <p className="text-white/80 mt-1 text-sm">Compare prices across restaurants for every dish. Taste wins, wallet smiles.</p>
              </div>
              <button className="shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-neutral-900 font-semibold hover:opacity-90 transition">
                Start Comparing <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Compare Button */}
      <button
        className="fixed right-4 bottom-24 md:bottom-8 z-40 inline-flex items-center gap-2 rounded-full px-5 py-3 bg-gradient-to-r from-orange-500 to-green-500 text-neutral-900 font-bold shadow-xl hover:opacity-95 active:scale-[0.98] transition"
        onClick={() => alert(`Compare ${compareList.length} item(s)`)}
      >
        <Search size={18} /> Compare ({compareList.length})
      </button>

      {/* Mobile bottom nav */}
      <nav className="fixed md:hidden bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="grid grid-cols-5 py-2 text-xs">
          <a href="#home" className="flex flex-col items-center gap-1 text-orange-400">
            <Home size={20} /> Home
          </a>
          <a href="#search" className="flex flex-col items-center gap-1 text-white/70">
            <Search size={20} /> Search
          </a>
          <a href="#favorites" className="flex flex-col items-center gap-1 text-white/70">
            <Heart size={20} /> Favorites
          </a>
          <a href="#orders" className="flex flex-col items-center gap-1 text-white/70">
            <ShoppingBag size={20} /> Orders
          </a>
          <a href="#profile" className="flex flex-col items-center gap-1 text-white/70">
            <User size={20} /> Profile
          </a>
        </div>
      </nav>

      <footer className="py-10 text-center text-white/50 text-sm">Made with love for food lovers in Bagalkot • DISHLYST</footer>
    </div>
  );
}
