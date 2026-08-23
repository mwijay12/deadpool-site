import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "../lib/icons";
import { CyberLines, HUDCorner, CountUp } from "./CyberEffects";

type Props = {
  quoteIndex: number;
  onPrev: () => void;
  onNext: () => void;
  quote: string;
};

export default function Production({ quoteIndex, onPrev, onNext, quote }: Props) {
  return (
    <section
      id="production"
      className="relative flex min-h-full flex-col justify-between overflow-hidden bg-[#0d0d0f] pt-14 pb-4 text-white select-none"
    >
      <CyberLines />
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />

      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute inset-0 opacity-30 crosshair" />

      {/* Top Graphic Reel Header */}
      <div className="relative z-10 overflow-hidden">
        <div className="relative h-[min(26vh,200px)] overflow-hidden">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-1/2 -translate-y-[58%] whitespace-nowrap font-display text-[22vw] leading-none text-white/90 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] sm:text-[14vw] lg:text-[160px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DEADPOOL
          </motion.p>

          <div className="pointer-events-none absolute left-1/2 top-[16%] w-[min(46vw,340px)] -translate-x-1/2">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/images/hero-dp.png"
                alt="Deadpool"
                className="w-full object-contain object-top filter contrast-[1.05]"
                style={{ clipPath: "inset(18% 8% 38% 8%)" }}
              />
            </motion.div>
          </div>

          <span
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 font-cond text-[11px] tracking-[0.24em] text-white/70 [writing-mode:vertical-rl] sm:block"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            [2026]
          </span>
        </div>

        {/* Film Head Reel Strip */}
        <div className="relative h-[26px] overflow-hidden bg-[#9b1024] border-y border-[#c41228]/40 shadow-[0_0_15px_rgba(155,16,36,0.5)]">
          <div className="marquee-track flex h-full w-[200%] items-center">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                className="mx-[3px] inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#7a0c1c] shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]"
              >
                <span className="relative h-[5px] w-[11px]">
                  <span className="absolute left-0 top-0 h-[5px] w-[5px] rounded-full bg-white shadow-[0_0_3px_#fff]" />
                  <span className="absolute right-0 top-0 h-[5px] w-[5px] rounded-full bg-white shadow-[0_0_3px_#fff]" />
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center 3-Column Studio & Interactive Data Badges */}
      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-6 px-5 py-4 sm:grid-cols-3 sm:px-8">
        
        {/* Left Column: Marvel Studios Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="mb-2 flex items-center gap-2 font-cond text-[11px] tracking-[0.28em] text-white/60"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#c41228] shadow-[0_0_8px_#c41228]" />
            PRODUCTION
          </p>
          <p
            className="font-black text-[24px] leading-none tracking-tight"
            style={{ fontFamily: "var(--font-black)" }}
          >
            MARVEL
            <span className="ml-1.5 text-[14px] tracking-[0.2em] text-[#ff4d6d]">STUDIOS</span>
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span
              className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/5 font-cond text-[12px] text-white/90"
              style={{ fontFamily: "var(--font-cond)" }}
            >
              02
            </span>
            <div className="flex gap-1 text-[#ff2b47] text-[15px]">
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
          <motion.div
            whileHover={{ scale: 1.12, y: -4 }}
            className="grid h-[90px] w-[90px] cursor-pointer place-items-center rounded-full bg-white text-black shadow-[0_10px_25px_rgba(255,255,255,0.2)]"
          >
            <div className="text-center">
              <p className="font-cond text-[10px] tracking-[0.2em]" style={{ fontFamily: "var(--font-cond)" }}>
                TRAILER
              </p>
              <p className="font-display text-[30px] leading-none" style={{ fontFamily: "var(--font-display)" }}>
                1:47”
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.14, y: -5 }}
            className="grid h-[94px] w-[94px] cursor-pointer place-items-center rounded-full bg-gradient-to-tr from-[#900a1c] to-[#c41228] shadow-[0_10px_30px_rgba(196,18,40,0.5)] border border-[#ff4d6d]/40"
          >
            <div className="text-center">
              <p className="font-cond text-[10px] tracking-[0.2em] text-white/80" style={{ fontFamily: "var(--font-cond)" }}>
                IMAX
              </p>
              <p className="font-display text-[36px] leading-none text-white" style={{ fontFamily: "var(--font-display)" }}>
                <CountUp value={6} duration={1.5} />
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.12, y: -4 }}
            className="grid h-[90px] w-[90px] cursor-pointer place-items-center rounded-full bg-[#18181c] ring-1 ring-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            <div className="text-center">
              <p className="font-cond text-[10px] tracking-[0.2em] text-[#ff4d6d]" style={{ fontFamily: "var(--font-cond)" }}>
                MAY
              </p>
              <p className="font-display text-[36px] leading-none text-white" style={{ fontFamily: "var(--font-display)" }}>
                <CountUp value={3} duration={1.2} />
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Quotes Slider */}
        <div className="sm:text-right">
          <div className="min-h-[70px] border-l border-[#c41228] pl-3 text-left sm:ml-auto sm:max-w-[260px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="text-[12px] leading-relaxed tracking-wide text-white/85"
              >
                “ {quote}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center gap-2 sm:justify-end">
            {[0, 1].map((i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === quoteIndex ? "bg-[#ff4d6d] w-5 shadow-[0_0_8px_#ff4d6d]" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="relative z-20 flex items-end justify-between px-4 pb-2 sm:px-8">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#e01832" }}
          whileTap={{ scale: 0.94 }}
          onClick={onPrev}
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-[#c41228] text-white shadow-[0_0_15px_rgba(196,18,40,0.4)]"
          aria-label="Previous quote"
        >
          <ChevronLeft size={20} />
        </motion.button>

        {/* Center Journal Graphic */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none -mb-2 w-[min(46vw,270px)]"
        >
          <img
            src="/images/journal-crop.png"
            alt="Deadpool journal"
            className="w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94 }}
          onClick={onNext}
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          aria-label="Next quote"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </section>
  );
}