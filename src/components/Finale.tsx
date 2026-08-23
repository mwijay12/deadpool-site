import { motion } from "framer-motion";

export default function Finale() {
  return (
    <section
      id="imax"
      className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#09090c] pt-14 pb-0 text-white select-none"
    >
      {/* Target Concentric Rings */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c41228]/30 shadow-[0_0_60px_rgba(196,18,40,0.25)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 crosshair" />

      {/* Top Header Information */}
      <div className="relative z-10 mt-1 flex flex-col items-center justify-center px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-1 flex items-center gap-2 font-cond text-[11px] tracking-[0.42em] text-[#ff4d6d]"
          style={{ fontFamily: "var(--font-cond)" }}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[#c41228] shadow-[0_0_8px_#c41228] animate-ping" />
          IN THEATERS & IMAX 6 NATIONWIDE
        </motion.p>

        <motion.h2
          initial={{ scale: 0.92, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[16vw] leading-[0.78] tracking-[-0.03em] sm:text-[96px] lg:text-[124px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          DEADPOOL{" "}
          <span className="inline-block tracking-[0.08em] text-[#c41228] text-gradient-red drop-shadow-[0_0_30px_rgba(196,18,40,0.65)]">
            III
          </span>
        </motion.h2>

        {/* Date / Format Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-1 flex w-[min(74vw,520px)] items-center justify-between font-cond text-[13px] tracking-[0.28em] text-white/80 font-semibold"
          style={{ fontFamily: "var(--font-cond)" }}
        >
          <span className="rounded-full bg-white/10 px-3 py-0.5 border border-white/15">MAY 3</span>
          <span className="text-[#ff4d6d] drop-shadow-[0_0_10px_rgba(255,77,109,0.6)]">IMAX 6 EXPERIENCE</span>
          <span className="rounded-full bg-white/10 px-3 py-0.5 border border-white/15">2026</span>
        </motion.div>
      </div>

      {/* Heart Deadpool Graphic — Significantly Larger & Imposing */}
      <div className="relative z-10 mx-auto flex w-full max-w-[880px] flex-1 items-end justify-center px-2 pb-0 -mt-4 sm:-mt-6">
        <motion.div
          initial={{ y: 35, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-full max-w-[780px]"
        >
          <motion.div
            animate={{ scale: [1, 1.025, 1], y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/images/dp-heart.jpg"
              alt="Deadpool making a heart with his hands"
              className="mx-auto h-auto max-h-[62vh] w-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)] filter contrast-110 brightness-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}