import { motion } from 'framer-motion';

export default function TrendingCarousel({ items = [] }) {
  return (
    <div className="relative">
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-4 min-w-max pr-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, type: 'spring', stiffness: 120, damping: 16 }}
              whileHover={{ y: -4 }}
              className="relative w-[260px] sm:w-[320px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} pointer-events-none`} />
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                loading="lazy"
              />
              <div className="relative h-44 sm:h-56 p-4 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className={
                    'inline-block w-2.5 h-2.5 rounded-full ' + (item.veg ? 'bg-green-400' : 'bg-red-400')
                  } />
                  <span className="text-xs text-white/90">{item.veg ? 'Veg' : 'Non-Veg'}</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold drop-shadow">{item.title}</h4>
                <p className="text-xs text-white/85">Most loved by locals this week</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
