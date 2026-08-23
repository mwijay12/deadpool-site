import { motion } from "framer-motion";
import { showtimes } from "../lib/data";
import { CountUp, CyberLines, AudioVisualizer, HUDCorner } from "./CyberEffects";

export default function BoxOffice() {
  const stats = [
    { label: "OPENING DOMESTIC", valueNum: 211, prefix: "$", suffix: "M", decimals: 0, note: "Largest R-rated opening in cinematic history" },
    { label: "GLOBAL TOTAL", valueNum: 1.33, prefix: "$", suffix: "B", decimals: 2, note: "Highest grossing R-rated film of all time" },
    { label: "BUDGET ESTIMATE", valueNum: 200, prefix: "$", suffix: "M", decimals: 0, note: "Marvel Studios & 21 Laps co-production" },
    { label: "IMAX 6 SHARE", valueNum: 18.4, prefix: "", suffix: "%", decimals: 1, note: "Global premium format gross percentage" },
  ];

  return (
    <section
      id="boxoffice"
      className="relative flex min-h-full flex-col overflow-hidden bg-[#0a0a0d] pt-14 pb-6 text-white select-none"
    >
      <CyberLines />
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />

      <div className="pointer-events-none absolute inset-0 opacity-25 crosshair" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-[#c41228]/10 blur-[100px]" />

      <div className="relative z-10 flex flex-1 flex-col px-5 py-4 sm:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p
              className="mb-1 flex items-center gap-2 font-cond text-[10px] tracking-[0.32em] text-[#ff4d6d]"
              style={{ fontFamily: "var(--font-cond)" }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#c41228] shadow-[0_0_8px_#c41228] animate-ping" />
              BOX OFFICE POWERHOUSE
            </p>
            <h2
              className="font-display text-[48px] leading-none sm:text-[68px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              THE <span className="text-[#c41228]">NUMBERS</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <AudioVisualizer bars={5} />
            <p className="max-w-sm text-[11px] leading-relaxed text-white/60">
              A record-shattering R-rated opening followed by a global billion-dollar phenomenon in IMAX 6 format.
            </p>
          </div>
        </motion.div>

        {/* 4 Stat Cards with Animated CountUp */}
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: "rgba(196, 18, 40, 0.7)", boxShadow: "0 10px 30px rgba(196,18,40,0.2)" }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-[#141418] p-4 shadow-lg transition-all cursor-pointer group"
            >
              <div className="absolute top-0 right-0 h-10 w-10 bg-gradient-to-bl from-[#c41228]/20 to-transparent pointer-events-none" />
              <p
                className="font-cond text-[10px] tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors"
                style={{ fontFamily: "var(--font-cond)" }}
              >
                {s.label}
              </p>
              <p
                className="mt-1 font-display text-[40px] leading-none text-white text-gradient-red"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <CountUp
                  value={s.valueNum}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                  duration={2}
                />
              </p>
              <p className="mt-1 text-[10px] text-white/45 font-medium">{s.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Showtime Table */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#121216] shadow-xl"
        >
          <div
            className="grid grid-cols-12 bg-white/5 px-4 py-2.5 font-cond text-[10px] tracking-[0.2em] text-white/50 border-b border-white/10"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            <span className="col-span-5">CINEMA VENUE</span>
            <span className="col-span-3">CITY</span>
            <span className="col-span-4">IMAX 6 SHOWTIMES</span>
          </div>

          {showtimes.map((s) => (
            <div
              key={s.cinema}
              className="grid grid-cols-12 items-center border-t border-white/5 px-4 py-2.5 hover:bg-white/[0.04] transition-colors"
            >
              <p className="col-span-5 text-[12px] font-semibold text-white">{s.cinema}</p>
              <p className="col-span-3 text-[11px] text-white/60">{s.city}</p>
              <div className="col-span-4 flex flex-wrap gap-1.5">
                {s.times.map((t) => (
                  <motion.button
                    key={t}
                    whileHover={{ scale: 1.08, backgroundColor: "#c41228", borderColor: "#c41228", boxShadow: "0 0 10px rgba(196,18,40,0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-cond text-[10px] tracking-wider text-white transition-all cursor-pointer"
                    style={{ fontFamily: "var(--font-cond)" }}
                  >
                    {t}
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}