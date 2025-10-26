import { Star } from 'lucide-react';

function VegBadge({ veg }) {
  return (
    <div className="flex items-center gap-1 text-xs">
      <span className={
        'inline-block w-2.5 h-2.5 rounded-full ' + (veg ? 'bg-green-500' : 'bg-red-500')
      } />
      <span className="text-white/80">{veg ? 'Veg' : 'Non-Veg'}</span>
    </div>
  );
}

function DishCard({ dish, selected, onToggle }) {
  return (
    <div className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition">
      <div className="relative h-40">
        <img
          src={dish.images[0]}
          alt={dish.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute left-3 top-3">
          <VegBadge veg={dish.veg} />
        </div>
        <button
          onClick={() => onToggle(dish.id)}
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow bg-white/90 text-neutral-900 hover:bg-white ${selected ? 'ring-2 ring-green-400' : ''}`}
        >
          {selected ? 'Selected' : 'Compare'}
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-base leading-tight">{dish.name}</h3>
          <div className="flex items-center gap-1 text-amber-300">
            <Star size={16} fill="currentColor" />
            <span className="text-sm text-white">{dish.rating}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-white/80">₹{dish.priceMin} – ₹{dish.priceMax}</p>
          <p className="text-xs text-white/60">from {dish.sources}+ places</p>
        </div>
      </div>
    </div>
  );
}

export default function DishesGrid({ dishes = [], compareList = [], onToggleCompare }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          selected={compareList.includes(dish.id)}
          onToggle={onToggleCompare}
        />
      ))}
    </div>
  );
}
