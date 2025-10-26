import { MapPin, ChevronDown, Search as SearchIcon } from 'lucide-react';

const districts = [
  { name: 'Bagalkot', active: true },
  { name: 'Belagavi', active: false },
  { name: 'Dharwad', active: false },
  { name: 'Hubballi', active: false },
  { name: 'Vijayapura', active: false },
  { name: 'Gadag', active: false },
];

export default function HeroSection() {
  return (
    <section className="relative h-[58vh] md:h-[68vh] w-full overflow-hidden">
      {/* Replaced animated background with a vibrant static gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-500 to-emerald-600" />
      {/* Subtle dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center gap-6">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/15 backdrop-blur border border-white/20 shadow">
          <span className="text-xs uppercase tracking-wider text-white/90">Dish-centric food search</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black leading-tight">
          <span className="bg-gradient-to-r from-white via-amber-100 to-green-100 bg-clip-text text-transparent">Find, compare, and crave</span> your favorite dishes
        </h1>

        {/* Search and location */}
        <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3">
          <div className="relative">
            <button className="w-full h-12 rounded-2xl bg-white/15 border border-white/25 hover:border-white/40 transition shadow-inner flex items-center justify-between px-4">
              <span className="flex items-center gap-2 text-white">
                <MapPin className="text-orange-200" size={18} /> Bagalkot
              </span>
              <ChevronDown size={18} className="text-white/80" />
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for your favorite dish…"
              className="w-full h-12 rounded-2xl pl-12 pr-4 bg-white text-neutral-900 placeholder-neutral-500 shadow-xl focus:outline-none"
            />
            <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
          </div>
        </div>

        {/* Districts ribbon */}
        <div className="mt-2 flex items-center gap-2 flex-wrap justify-center">
          {districts.map((d) => (
            <span
              key={d.name}
              className={
                'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border transition ' +
                (d.active
                  ? 'bg-white text-neutral-900 border-white shadow'
                  : 'bg-white/10 text-white/85 border-white/25')
              }
            >
              {d.name}
              {!d.active && (
                <span className="ml-1 rounded-full bg-white/15 text-[10px] px-2 py-0.5">Coming Soon</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
