import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "../lib/icons";
import { CyberLines, TypewriterText, AudioVisualizer, HUDCorner } from "./CyberEffects";

type Props = {
  onBook: () => void;
  onStory: () => void;
};

export default function Hero({ onBook, onStory }: Props) {
  const [hoveredActor, setHoveredActor] = useState<string | null>(null);

  // 2026 Interactive Mouse Parallax Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const heroTranslateX = useTransform(smoothX, [-300, 300], [-16, 16]);
  const heroTranslateY = useTransform(smoothY, [-300, 300], [-8, 8]);
  const heroRotate = useTransform(smoothX, [-300, 300], [-2, 2]);

  const bgCircleX = useTransform(smoothX, [-300, 300], [10, -10]);
  const bgCircleY = useTransform(smoothY, [-300, 300], [6, -6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const actors = [
    { name: "RYAN REYNOLDS", role: "DEADPOOL" },
    { name: "KARAN SONI", role: "DOPINDER" },
    { name: "EMMA CORRIN", role: "CASSANDRA" },
    { name: "HUGH JACKMAN", role: "WOLVERINE" },
  ];

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#0a0a0c] pt-14 pb-3 text-white select-none"
    >
      {/* 2026 Cybernetic Laser Lines & HUD Elements */}
      <CyberLines />
      <HUDCorner position="tl" />
      <HUDCorner position="tr" />
      <HUDCorner position="bl" />
      <HUDCorner position="br" />

      {/* 2026 Ambient Background & Dynamic Cyber Crosshair */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-40 crosshair" />

      {/* Target Radar Rings */}
      <div className="pointer-events-none absolute left-1/2 top-[40%] z-[1] h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute left-1/2 top-[40%] z-[1] h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute left-1/2 top-[40%] z-[1] h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c41228]/25 shadow-[0_0_40px_rgba(196,18,40,0.15)]" />

      {/* Ambient Ember Glow Particles */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <div className="animate-ember absolute bottom-12 left-[18%] h-1.5 w-1.5 rounded-full bg-[#e01832] shadow-[0_0_8px_#e01832]" style={{ animationDelay: "0.2s" }} />
        <div className="animate-ember absolute bottom-16 left-[42%] h-2 w-2 rounded-full bg-[#ff4d6d] shadow-[0_0_12px_#ff4d6d]" style={{ animationDelay: "1.5s" }} />
        <div className="animate-ember absolute bottom-10 right-[24%] h-1 w-1 rounded-full bg-[#c41228] shadow-[0_0_6px_#c41228]" style={{ animationDelay: "0.8s" }} />
        <div className="animate-ember absolute bottom-18 right-[38%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" style={{ animationDelay: "2.4s" }} />
      </div>

      {/* HORIZONTAL FILM PERFORATION STRIP — LOWER LAYER BEHIND DEADPOOL (z-5) */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-[68px] z-[5]">
        <div className="relative h-[20px] w-full overflow-hidden bg-black/90 shadow-[0_4px_25px_rgba(0,0,0,0.9)] border-y border-white/15">
          <div className="film-perforation absolute inset-0 opacity-90" />
        </div>
      </div>

      {/* Top Meta Bar */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-[30] mt-1 flex items-start justify-between px-4 sm:px-8"
      >
        <div className="flex flex-wrap items-center gap-2">
          {["ACTION", "COMEDY", "SCI-FI", "2026"].map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full border px-2.5 py-0.5 font-cond text-[9px] tracking-[0.2em] transition-all duration-300 ${
                i === 3
                  ? "border-[#c41228] bg-[#c41228]/20 text-[#ff4d6d] shadow-[0_0_10px_rgba(196,18,40,0.4)] animate-pulse"
                  : "border-white/20 bg-white/5 text-white/80 hover:border-white/40"
              }`}
              style={{ fontFamily: "var(--font-cond)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <AudioVisualizer bars={4} />
          <span className="h-1.5 w-1.5 rounded-full bg-[#c41228] animate-ping" />
          <p
            className="text-right font-cond text-[10px] tracking-[0.28em] text-white/70"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            GLOBAL RELEASE · MAY 3, 2026
          </p>
        </div>
      </motion.div>

      {/* Cast Names Header with Kinetic Hover Glow */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative z-[30] mt-1 grid grid-cols-2 gap-x-2 gap-y-0.5 px-4 sm:mt-2 sm:grid-cols-4 sm:px-8"
        style={{ fontFamily: "var(--font-cond)" }}
      >
        {actors.map((actor) => (
          <div
            key={actor.name}
            onMouseEnter={() => setHoveredActor(actor.name)}
            onMouseLeave={() => setHoveredActor(null)}
            className="group cursor-pointer text-center transition-all duration-300"
          >
            <p className="text-[12px] tracking-[0.22em] text-white/90 group-hover:text-[#ff4d6d] sm:text-[14px] lg:text-[16px] transition-colors">
              {actor.name}
            </p>
            <p
              className={`text-[9px] tracking-[0.26em] transition-opacity duration-300 ${
                hoveredActor === actor.name ? "text-[#c41228] opacity-100 font-bold" : "text-white/40 opacity-0 group-hover:opacity-100"
              }`}
            >
              {actor.role}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Main Centerpiece Stage (z-20 — ON TOP OF THE FILM LINE!) */}
      <div className="relative z-[20] mx-auto my-auto flex w-full max-w-[1200px] flex-1 items-center justify-center px-2">
        <div className="relative flex w-full items-center justify-center">

          {/* Background Red Circle Aura */}
          <motion.div
            style={{ x: bgCircleX, y: bgCircleY }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-1/2 top-[44%] z-[5] h-[min(52vw,410px)] w-[min(52vw,410px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#900a1c] via-[#c41228] to-[#ff2b47] shadow-[0_0_80px_rgba(196,18,40,0.6)]"
          >
            <div className="pulse-ring absolute inset-0 rounded-full border-2 border-[#ff4d6d]/40" />
          </motion.div>

          {/* "III" Roman Numeral */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="absolute left-1/2 top-[8%] z-10 -translate-x-1/2 font-display text-[44px] leading-none tracking-[0.14em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] sm:text-[58px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            III
          </motion.p>

          {/* Giant "DEADPOOL" Typography with kinetic entrance */}
          <motion.h1
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 select-none whitespace-nowrap font-display text-[22vw] leading-[0.76] tracking-[-0.02em] text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] sm:text-[14vw] lg:text-[175px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DEADPOOL
          </motion.h1>

          {/* Vertical Tag [2026] */}
          <span
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 font-cond text-[12px] tracking-[0.24em] text-white/75 [writing-mode:vertical-rl] sm:block"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            [2026]
          </span>

          {/* DEADPOOL HERO CHARACTER (z-25 — High layer, parallax and breathing animation) */}
          <motion.div
            style={{
              x: heroTranslateX,
              y: heroTranslateY,
              rotate: heroRotate,
            }}
            initial={{ scale: 0.88, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="pointer-events-none absolute left-1/2 top-[46%] z-[25] w-[min(62vw,460px)] -translate-x-1/2 -translate-y-[22%]"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
            >
              <img
                src="/images/hero-dp.png"
                alt="Deadpool standing with arms crossed"
                className="mx-auto h-auto w-full object-contain object-top drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] filter contrast-[1.06] brightness-[1.02]"
                style={{ clipPath: "inset(8% 2% 0 2%)" }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Controls & Teaser Strip (z-30) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="relative z-[30] mt-auto"
      >
        <div className="flex items-end justify-between gap-4 px-4 py-2 sm:px-8 sm:py-2.5">

          {/* Story Preview Button with Typewriter Text */}
          <motion.button
            whileHover={{ scale: 1.03, x: 3 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStory}
            className="group max-w-[300px] text-left cursor-pointer rounded-xl bg-black/50 p-2.5 backdrop-blur-md border border-white/10 transition-all hover:border-[#c41228]/50 hover:bg-black/70 shadow-lg"
          >
            <p
              className="mb-1 flex items-center gap-2 font-cond text-[10px] tracking-[0.24em] text-white/80 group-hover:text-white"
              style={{ fontFamily: "var(--font-cond)" }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#c41228] shadow-[0_0_8px_#c41228] group-hover:animate-ping" />
              DEADPOOL III STORY
            </p>
            <p className="text-[10px] leading-relaxed text-white/60 group-hover:text-white/90 sm:text-[11px] transition-colors min-h-[32px]">
              <span className="mr-1 font-semibold text-[#ff4d6d]">PART A.</span>
              <TypewriterText
                text="Wolverine joins the “merc with a mouth” in the third installment of the Deadpool film franchise."
                speed={25}
                delay={400}
              />
            </p>
          </motion.button>

          {/* Book Now Pill CTA with Shimmer & Glow */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(224, 24, 50, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onBook}
            className="relative overflow-hidden inline-flex shrink-0 items-center gap-2.5 rounded-full border border-[#c41228] bg-gradient-to-r from-[#c41228] via-[#e01832] to-[#c41228] px-6 py-2.5 font-cond text-[13px] tracking-[0.24em] font-semibold text-white shadow-[0_0_15px_rgba(196,18,40,0.4)] transition-all cursor-pointer hover:brightness-110"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            BOOK NOW
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>

          {/* Issue Stamp Badge with Rotation Physics */}
          <motion.div
            whileHover={{ rotate: 20, scale: 1.12 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative hidden h-[72px] w-[72px] shrink-0 sm:block cursor-pointer"
          >
            <img
              src="/images/stamp.png"
              alt="Issue stamp"
              className="h-full w-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}