import { Leaf, Flame, Utensils } from 'lucide-react';

const iconMap = {
  leaf: Leaf,
  flame: Flame,
  utensils: Utensils,
};

export default function CategoriesRow({ categories = [] }) {
  return (
    <section className="-mt-6">
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-3 min-w-max">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Utensils;
            return (
              <button
                key={cat.key}
                className={`group relative rounded-2xl p-[2px] bg-gradient-to-r ${cat.color} shadow-lg`}
              >
                <div className="rounded-[14px] bg-neutral-950/90 px-4 py-3 flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-white">
                    <Icon size={18} />
                  </span>
                  <span className="font-semibold">{cat.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
