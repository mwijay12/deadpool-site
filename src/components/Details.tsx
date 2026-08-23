import { motion } from "framer-motion";
import { ArrowLeftRight, MapPin, ArrowUpRight } from "../lib/icons";
import { CyberLines, TypewriterText, HUDCorner } from "./CyberEffects";

type Props = {
  onBook: () => void;
};

export default function Details({ onBook }: Props) {
  return (
    <section
      id="details"
      className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#faf8f6] pt-14 pb-3 text-black select-none border-y border-black/5"
    >
      <CyberLines />
      <HUDCorner position="tl" className="border-black/30" />
      <HUDCorner position="tr" className="border-black/30" />

      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5" />
      <div className="pointer-events-none absolute inset-0 opacity-40 crosshair-dark" />

      {/* Top Section Numerals */}
      <div
        className="relative z-10 mt-1 flex items-center justify-between px-6 font-cond text-[11px] tracking-[0.2em] text-black/40 sm:px-10"
        style={{ fontFamily: "var(--font-cond)" }}
      >
        <span>01</span>
        <span>02</span>
        <span className="ml-auto mr-8 text-[#c41228] font-bold">03</span>
        <span>04</span>
      </div>

      {/* Main Title Heading */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto mt-1 max-w-[700px] px-4 text-center"
      >
        <h3
          className="font-black text-[18px] leading-[1.12] tracking-tight sm:text-[26px] lg:text-[28px]"
          style={{ fontFamily: "var(--font-black)" }}
        >
          DEADPOOL III: RELEASE DATE, CAST, AND
          <br />
          <span className="text-[#c41228]">EVERYTHING ABOUT THE FILM!</span>
        </h3>
        <div className="mt-1 flex items-center justify-center text-black/30">
          <ArrowLeftRight size={14} />
        </div>
      </motion.div>

      {/* 3-Column Layout: Stills, Interactive Center Ticket, Premiere Info */}
      <div className="relative z-10 grid flex-1 grid-cols-1 items-center gap-4 px-4 py-2 sm:grid-cols-3 sm:px-8">
        
        {/* Left Column: Origins & Stills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-2 flex items-center gap-1.5">
            <img src="/images/cast-3.jpg" alt="" className="h-6 w-6 rounded-full object-cover ring-1 ring-[#c41228]/40" />
            <img src="/images/cast-2.jpg" alt="" className="h-6 w-6 rounded-full object-cover ring-1 ring-[#c41228]/40" />
            <span className="h-6 w-6 rounded-full bg-[#c41228] flex items-center justify-center text-white font-black text-[8px]">III</span>
            <img src="/images/cast-1.jpg" alt="" className="h-6 w-6 rounded-full object-cover ring-1 ring-[#c41228]/40" />
          </div>
          <p
            className="mb-1 flex items-center gap-1.5 font-cond text-[10px] tracking-[0.24em] text-black/50"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c41228]" />
            X - MEN LEGACY
          </p>
          <p className="max-w-[240px] text-[11px] leading-snug text-black/65 min-h-[30px]">
            <span className="mr-1 font-semibold text-black">PART C.</span>
            <TypewriterText
              text="Deadpool unites with Wolverine in an explosive collision across the multiverse."
              speed={20}
              delay={300}
            />
          </p>
          <div className="mt-2.5 flex items-end gap-2">
            <motion.img
              whileHover={{ scale: 1.06, rotate: -2 }}
              src="/images/still-walk.jpg"
              alt=""
              className="h-16 w-13 rounded-md object-cover shadow-sm transition-transform cursor-pointer"
            />
            <motion.img
              whileHover={{ scale: 1.06, rotate: 2 }}
              src="/images/still-fire.jpg"
              alt=""
              className="h-20 w-16 rounded-md object-cover shadow-md transition-transform cursor-pointer"
            />
          </div>
        </motion.div>

        {/* Center Column: 3D Ticket Card with Shimmer & Animated Barcode */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -6, rotateY: 4 }}
          className="relative mx-auto w-[200px]"
        >
          <div className="relative z-10 overflow-hidden rounded-[20px] bg-[#121215] text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/10">
            
            {/* Shimmer Light Bar */}
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <div className="px-3 pt-3 text-center">
              <p
                className="font-cond text-[9px] tracking-[0.3em] text-[#ff4d6d]"
                style={{ fontFamily: "var(--font-cond)" }}
              >
                CINEMA TICKET
              </p>
              <p
                className="font-black text-[17px] tracking-wide text-gradient-red"
                style={{ fontFamily: "var(--font-black)" }}
              >
                DEADPOOL III
              </p>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-1.5 px-2.5">
              <div className="relative h-[72px] overflow-hidden rounded-lg">
                <img src="/images/map.jpg" alt="" className="h-full w-full object-cover" />
                <span
                  className="absolute left-1.5 top-1.5 inline-flex items-center gap-1 rounded-full bg-black/75 backdrop-blur-sm px-1.5 py-0.5 font-cond text-[7px] tracking-[0.14em] text-white"
                  style={{ fontFamily: "var(--font-cond)" }}
                >
                  <MapPin size={8} className="text-[#ff4d6d]" /> MAP
                </span>
              </div>

              <div className="flex h-[72px] flex-col justify-between rounded-lg bg-[#1d1d22] p-2 border border-white/5">
                <p
                  className="font-cond text-[7px] tracking-[0.16em] text-white/45"
                  style={{ fontFamily: "var(--font-cond)" }}
                >
                  CINEMA
                </p>
                <p className="text-[10px] font-semibold leading-tight">
                  EL CAPITAN
                  <br />
                  THEATRE
                </p>
              </div>

              <div className="rounded-lg bg-[#1d1d22] p-2 border border-white/5">
                <p
                  className="font-cond text-[7px] tracking-[0.16em] text-white/45"
                  style={{ fontFamily: "var(--font-cond)" }}
                >
                  DATE
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-[#ff4d6d]">MAY 29</p>
              </div>

              <div className="rounded-lg bg-[#1d1d22] p-2 border border-white/5">
                <p
                  className="font-cond text-[7px] tracking-[0.16em] text-white/45"
                  style={{ fontFamily: "var(--font-cond)" }}
                >
                  TIME
                </p>
                <p className="mt-0.5 text-[11px] font-semibold text-white">9:30 PM</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#e01832" }}
              whileTap={{ scale: 0.98 }}
              onClick={onBook}
              className="mt-2.5 flex w-full items-center justify-center gap-1.5 bg-[#c41228] py-2.5 font-cond text-[11px] tracking-[0.2em] font-semibold cursor-pointer shadow-[0_4px_15px_rgba(196,18,40,0.5)]"
              style={{ fontFamily: "var(--font-cond)" }}
            >
              BOOK NOW
              <ArrowUpRight size={12} />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Premiere Stamp & Stills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center sm:text-right"
        >
          <div className="mb-2 flex justify-end">
            <div className="relative h-[60px] w-[60px]">
              <img src="/images/stamp.png" alt="Ideag stamp" className="h-full w-full object-contain" />
              <span
                className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full border border-black/15 bg-white px-1.5 py-0.2 font-cond text-[9px] font-bold shadow-sm"
                style={{ fontFamily: "var(--font-cond)" }}
              >
                03
              </span>
            </div>
          </div>

          <p
            className="mb-1 flex items-center gap-1.5 font-cond text-[10px] tracking-[0.24em] text-black/50 sm:justify-end"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c41228]" />
            PREMIERING GLOBALLY
          </p>
          <p className="ml-auto max-w-[240px] text-[11px] leading-snug text-black/65 sm:text-right min-h-[30px]">
            <span className="mr-1 font-semibold text-black">PART D.</span>
            <TypewriterText
              text="Lock your reserved seats early in IMAX 6 format for maximum screen immersion."
              speed={20}
              delay={450}
            />
          </p>

          <div className="mt-2.5 flex items-end justify-end gap-2">
            <motion.img
              whileHover={{ scale: 1.06, rotate: 2 }}
              src="/images/still-fire.jpg"
              alt=""
              className="h-20 w-16 rounded-md object-cover shadow-md cursor-pointer"
            />
            <motion.img
              whileHover={{ scale: 1.06, rotate: -2 }}
              src="/images/still-walk.jpg"
              alt=""
              className="h-16 w-13 rounded-md object-cover shadow-sm cursor-pointer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}