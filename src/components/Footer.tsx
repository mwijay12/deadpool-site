import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "../lib/icons";
import { AudioVisualizer } from "./CyberEffects";

type Props = {
  onNav: (id: string) => void;
};

export default function Footer({ onNav }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    onNav("hero");
  };

  const navLinks = [
    { id: "hero", label: "HERO" },
    { id: "production", label: "PRODUCTION" },
    { id: "director", label: "DIRECTOR" },
    { id: "details", label: "DETAILS" },
    { id: "imax", label: "IMAX 6" },
    { id: "casts", label: "TOP CASTS" },
    { id: "boxoffice", label: "BOX OFFICE" },
  ];

  return (
    <footer className="relative z-30 border-t border-white/10 bg-[#08080a] px-5 py-8 text-white">
      {/* Background Subtle Cyber Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#c41228]/10 to-transparent opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-20 crosshair" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* Top Row: Brand & Creator Signature */}
        <div className="flex flex-col items-center justify-between gap-6 pb-6 border-b border-white/10 sm:flex-row">
          
          {/* Logo & Cine Daily Title */}
          <div className="flex items-center gap-2.5">
            <span
              className="font-black text-[18px] tracking-[0.14em] text-white"
              style={{ fontFamily: "var(--font-black)" }}
            >
              CINE
            </span>
            <span className="relative inline-flex h-[14px] w-[14px] items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-[#c41228] animate-ping opacity-75" />
              <span className="relative h-[6px] w-[6px] rounded-full bg-white shadow-[0_0_8px_#fff]" />
            </span>
            <span
              className="font-black text-[18px] tracking-[0.14em] text-white"
              style={{ fontFamily: "var(--font-black)" }}
            >
              DAILY
            </span>
            <span
              className="ml-2 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 font-cond text-[9px] tracking-[0.2em] text-white/60"
              style={{ fontFamily: "var(--font-cond)" }}
            >
              2026 EDITION
            </span>
          </div>

          {/* PROMINENT "MADE BY MWIJAY" BADGE WITH SHIMMER */}
          <motion.div
            whileHover={{ scale: 1.06, y: -2 }}
            className="relative overflow-hidden flex items-center gap-3 rounded-full border border-[#c41228]/50 bg-[#121216] px-5 py-2 shadow-[0_0_25px_rgba(196,18,40,0.35)] backdrop-blur-md cursor-pointer"
          >
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d6d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c41228]"></span>
            </span>

            <div className="flex items-center gap-1.5 font-cond tracking-[0.24em]" style={{ fontFamily: "var(--font-cond)" }}>
              <span className="text-[11px] text-white/50">CRAFTED & CODED BY</span>
              <span className="text-[13px] font-bold text-gradient-mwijay drop-shadow-[0_0_8px_rgba(255,77,109,0.5)]">
                MWIJAY
              </span>
            </div>
          </motion.div>

          {/* System Clock & Quick Back to Top Button */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 font-cond text-[11px] tracking-[0.2em] text-white/50">
              <AudioVisualizer bars={3} />
              <span>SYS {time || "ONLINE"}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-cond text-[11px] tracking-[0.2em] text-white/80 hover:border-white/40 hover:bg-white hover:text-black transition-all cursor-pointer"
              style={{ fontFamily: "var(--font-cond)" }}
            >
              BACK TO TOP
              <ArrowUpRight size={13} />
            </motion.button>
          </div>
        </div>

        {/* Middle Row: Quick Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 py-6 sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => onNav(item.id)}
                className="font-cond text-[11px] tracking-[0.22em] text-white/55 hover:text-[#ff4d6d] transition-colors cursor-pointer"
                style={{ fontFamily: "var(--font-cond)" }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <p
            className="font-cond text-[10px] tracking-[0.24em] text-white/40"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            EXPERIENCE IN ULTRA IMAX 6 · DOLBY CINEMA
          </p>
        </div>

        {/* Bottom Row: Legal / Credits */}
        <div className="flex flex-col items-center justify-between gap-3 pt-4 text-center sm:flex-row sm:text-left text-[11px] text-white/35">
          <p>© 2026 Cine Daily. All Marvel characters & elements © Marvel Studios.</p>
          <p className="font-cond tracking-[0.2em]" style={{ fontFamily: "var(--font-cond)" }}>
            DIRECTED BY SHAWN LEVY · STARRING RYAN REYNOLDS & HUGH JACKMAN
          </p>
        </div>
      </div>
    </footer>
  );
}
