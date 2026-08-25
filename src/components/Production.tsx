import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "../lib/icons";
import { CyberLines, HUDCorner, CountUp } from "./CyberEffects";

type Props = {
  quoteIndex: number;
  onPrev: () => void;
  onNext: () => void;
  quote: string;
};

/**
 * Authentic Deadpool Mask Vector Icon
 */
export function DeadpoolMaskIcon({ className = "h-5 w-5 shrink-0" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Dark Ring */}
      <circle cx="50" cy="50" r="48" fill="#870a18" stroke="#121215" strokeWidth="4.5" />
      <circle cx="50" cy="50" r="45" fill="#c41228" />
      {/* Center Black Divider */}
      <rect x="47" y="5" width="6" height="90" fill="#121215" rx="3" />
      {/* Left Eye Black Patch */}
      <path
        d="M 45 22 C 27 22 17 35 17 50 C 17 65 27 78 45 78 Z"
        fill="#121215"
      />
      {/* Right Eye Black Patch */}
      <path
        d="M 55 22 C 73 22 83 35 83 50 C 83 65 73 78 55 78 Z"
        fill="#121215"
      />
      {/* Left Slanted White Eye */}
      <path
        d="M 43 44 C 36 45 28 50 25 53 C 29 56 37 57 43 55 Z"
        fill="#ffffff"
      />
      {/* Right Slanted White Eye */}
      <path
        d="M 57 44 C 64 45 72 50 75 53 C 71 56 63 57 57 55 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default function Production({ quoteIndex, onPrev, onNext, quote }: Props) {
  return (
    <section
      id="production"
      className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#0d0d0f] pt-14 pb-2 text-white select-none"
    >
      <CyberLines />
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />

      {/* Target Radar Rings */}
      <div className="pointer-events-none absolute left-1/2 top-[54%] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute left-1/2 top-[54%] h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute inset-0 opacity-30 crosshair" />

      {/* Top Graphic Reel Header (DEADPOOL + Crossed Arms + Marquee) */}
      <div className="relative z-10 w-full overflow-hidden">
        <div className="relative flex h-[min(24vh,185px)] w-full items-center justify-center overflow-hidden">
          
          {/* DEADPOOL Big Title in Background */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none select-none whitespace-nowrap font-display text-[22vw] leading-none tracking-tight text-white/90 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] sm:text-[15vw] lg:text-[170px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DEADPOOL
          </motion.h2>

          {/* Deadpool with Crossed Arms Hero Image (Centered over Title) */}
          <div className="pointer-events-none absolute left-1/2 bottom-0 w-[min(50vw,380px)] -translate-x-1/2 z-10 flex justify-center">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <img
                src="/images/dp-crossed.png"
                alt="Deadpool Crossed Arms"
                className="max-h-[min(26vh,205px)] w-auto object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] filter contrast-[1.06] brightness-[1.02]"
              />
            </motion.div>
          </div>

          {/* Vertical Tag [2026] */}
          <span
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 font-cond text-[11px] tracking-[0.24em] text-white/70 [writing-mode:vertical-rl] sm:block z-20"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            [2026]
          </span>
        </div>

        {/* Cinematic Film Reel Marquee Strip — Infinite Seamless Dual Track */}
        <div className="relative z-20 h-[30px] w-full overflow-hidden bg-gradient-to-r from-[#7a0a18] via-[#a30e22] to-[#7a0a18] border-y border-[#c41228]/60 shadow-[0_0_20px_rgba(163,14,34,0.6)] flex items-center">
          
          {/* Track 1 */}
          <div className="flex w-max shrink-0 items-center animate-marquee">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={`track1-${i}`} className="mx-2 flex items-center justify-center shrink-0">
                <DeadpoolMaskIcon className="h-[18px] w-[18px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:scale-125 transition-transform" />
              </div>
            ))}
          </div>

          {/* Track 2 (Seamless Infinite Duplicate for 100% loop on Desktop & 4K) */}
          <div className="flex w-max shrink-0 items-center animate-marquee" aria-hidden="true">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={`track2-${i}`} className="mx-2 flex items-center justify-center shrink-0">
                <DeadpoolMaskIcon className="h-[18px] w-[18px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] hover:scale-125 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center 3-Column Studio & Interactive Data Badges */}
      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-4 px-5 py-2 sm:grid-cols-3 sm:px-8">
        
        {/* Left Column: Marvel Studios Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="mb-1.5 flex items-center gap-2 font-cond text-[11px] tracking-[0.28em] text-white/60"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#c41228] shadow-[0_0_8px_#c41228]" />
            PRODUCTION
          </p>
          <p
            className="font-black text-[22px] leading-none tracking-tight sm:text-[24px]"
            style={{ fontFamily: "var(--font-black)" }}
          >
            MARVEL
            <span className="ml-1.5 text-[14px] tracking-[0.2em] text-[#ff4d6d]">STUDIOS</span>
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span
              className="grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-white/5 font-cond text-[11px] text-white/90"
              style={{ fontFamily: "var(--font-cond)" }}
            >
              02
            </span>
            <div className="flex gap-1 text-[#ff2b47] text-[14px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i === 4 ? "text-white/20" : "drop-shadow-[0_0_6px_#c41228]"}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center Badges with 3D Spring Hover & CountUp Effects */}
        <div className="flex items-center justify-center gap-3">
          {/* Trailer Badge */}
          <motion.div
            whileHover={{ scale: 1.12, y: -4 }}
            className="grid h-[82px] w-[82px] cursor-pointer place-items-center rounded-full bg-white text-black shadow-[0_10px_25px_rgba(255,255,255,0.25)] sm:h-[90px] sm:w-[90px]"
          >
            <div className="text-center">
              <p className="font-cond text-[9px] tracking-[0.2em] sm:text-[10px]" style={{ fontFamily: "var(--font-cond)" }}>
                TRAILER
              </p>
              <p className="font-display text-[26px] leading-none sm:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
                1:47”
              </p>
            </div>
          </motion.div>

          {/* IMAX Badge */}
          <motion.div
            whileHover={{ scale: 1.14, y: -5 }}
            className="grid h-[86px] w-[86px] cursor-pointer place-items-center rounded-full bg-gradient-to-tr from-[#900a1c] to-[#c41228] shadow-[0_10px_30px_rgba(196,18,40,0.55)] border border-[#ff4d6d]/40 sm:h-[94px] sm:w-[94px]"
          >
            <div className="text-center">
              <p className="font-cond text-[9px] tracking-[0.2em] text-white/80 sm:text-[10px]" style={{ fontFamily: "var(--font-cond)" }}>
                IMAX
              </p>
              <p className="font-display text-[32px] leading-none text-white sm:text-[36px]" style={{ fontFamily: "var(--font-display)" }}>
                <CountUp value={6} duration={1.5} />
              </p>
            </div>
          </motion.div>

          {/* Date Badge */}
          <motion.div
            whileHover={{ scale: 1.12, y: -4 }}
            className="grid h-[82px] w-[82px] cursor-pointer place-items-center rounded-full bg-[#18181c] ring-1 ring-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.5)] sm:h-[90px] sm:w-[90px]"
          >
            <div className="text-center">
              <p className="font-cond text-[9px] tracking-[0.2em] text-[#ff4d6d] sm:text-[10px]" style={{ fontFamily: "var(--font-cond)" }}>
                MAY
              </p>
              <p className="font-display text-[32px] leading-none text-white sm:text-[36px]" style={{ fontFamily: "var(--font-display)" }}>
                <CountUp value={3} duration={1.2} />
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Quotes Slider */}
        <div className="sm:text-right">
          <div className="min-h-[64px] border-l border-[#c41228] pl-3 text-left sm:ml-auto sm:max-w-[260px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="text-[11px] leading-relaxed tracking-wide text-white/85 sm:text-[12px]"
              >
                “ {quote}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="mt-3 flex items-center gap-2 sm:justify-end">
            {[0, 1].map((i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === quoteIndex ? "bg-[#ff4d6d] w-5 shadow-[0_0_8px_#ff4d6d]" : "bg-white/25 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="relative z-20 flex items-end justify-between px-4 pb-2 sm:px-8">
        {/* Prev Quote Button */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#e01832" }}
          whileTap={{ scale: 0.94 }}
          onClick={onPrev}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-[#c41228] text-white shadow-[0_0_15px_rgba(196,18,40,0.4)] sm:h-12 sm:w-12"
          aria-label="Previous quote"
        >
          <ChevronLeft size={20} />
        </motion.button>

        {/* Center Journal / Card Stack */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none -mb-2 w-[min(42vw,240px)]"
        >
          <img
            src="/images/journal-crop.png"
            alt="Deadpool journal cards"
            className="w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.75)]"
          />
        </motion.div>

        {/* Next Quote Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94 }}
          onClick={onNext}
          className="grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)] sm:h-12 sm:w-12"
          aria-label="Next quote"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </section>
  );
}