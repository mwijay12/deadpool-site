import { motion } from "framer-motion";
import { casts } from "../lib/data";
import { CyberLines, HUDCorner, AudioVisualizer } from "./CyberEffects";

export default function Casts() {
  return (
    <section
      id="casts"
      className="relative flex min-h-full flex-col overflow-hidden bg-[#0a0a0d] pt-14 text-white select-none"
    >
      <CyberLines />
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />

      <div className="pointer-events-none absolute inset-0 opacity-30 crosshair" />
      
      {/* Background Red Ambient Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-[#c41228]/10 blur-[120px]" />

      <div className="relative z-10 flex flex-1 flex-col px-5 py-5 sm:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p
              className="mb-1 flex items-center gap-2 font-cond text-[10px] tracking-[0.32em] text-[#ff4d6d]"
              style={{ fontFamily: "var(--font-cond)" }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#c41228] shadow-[0_0_8px_#c41228] animate-ping" />
              STAR STUDDED LINEUP
            </p>
            <h2
              className="font-display text-[48px] leading-none sm:text-[68px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              THE MERC
              <span className="text-[#c41228]"> CREW</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <AudioVisualizer bars={4} />
            <p className="max-w-xs text-[11px] leading-relaxed text-white/50">
              Unfiltered chemistry, powerhouse performances, and Marvel's most chaotic duo ever assembled.
            </p>
          </div>
        </motion.div>

        {/* 4 Cast Cards Grid with 3D Tilt & Glow Effects */}
        <div className="mt-5 grid flex-1 grid-cols-2 gap-3.5 lg:grid-cols-4">
          {casts.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#141418] border border-white/10 group-hover:border-[#c41228]/70 group-hover:shadow-[0_15px_35px_rgba(196,18,40,0.35)] transition-all duration-500">
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-full w-full object-cover grayscale contrast-110 transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c41228]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                {/* Card Number Badge */}
                <span
                  className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-black/70 backdrop-blur-md font-cond text-[10px] tracking-[0.2em] text-white/80 border border-white/15 group-hover:border-[#ff4d6d] group-hover:text-[#ff4d6d] transition-colors shadow-md"
                  style={{ fontFamily: "var(--font-cond)" }}
                >
                  0{i + 1}
                </span>

                {/* Card Bottom Details */}
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <p
                    className="font-display text-[22px] leading-none text-white group-hover:text-[#ff4d6d] transition-colors sm:text-[26px]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {c.name}
                  </p>
                  <p className="mt-1 text-[10px] tracking-wide text-white/70 font-medium">{c.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}