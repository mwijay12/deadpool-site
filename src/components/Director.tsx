import { motion } from "framer-motion";
import { ArrowUpRight } from "../lib/icons";
import { CyberLines, TypewriterText, HUDCorner } from "./CyberEffects";

type Props = {
  onGallery: () => void;
};

export default function Director({ onGallery }: Props) {
  return (
    <section
      id="director"
      className="relative flex min-h-full flex-col overflow-hidden bg-white pt-14 text-black select-none"
    >
      <CyberLines />
      <HUDCorner position="tl" className="border-black/20" />
      <HUDCorner position="tr" className="border-black/20" />

      <div className="pointer-events-none absolute inset-0 opacity-40 crosshair-dark" />
      <div className="pointer-events-none absolute left-1/2 top-[-16%] w-[min(34vw,240px)] -translate-x-1/2">
        <motion.img
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src="/images/journal-crop.png"
          alt=""
          className="w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.22)]"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pt-16 sm:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[15vw] leading-[0.82] tracking-[-0.02em] sm:text-[88px] lg:text-[116px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DIRECTED
            <span className="mx-3 align-middle font-cond text-[18px] tracking-[0.2em] text-[#c41228] sm:text-[24px]">
              BY
            </span>
            <span className="block sm:inline hover:text-[#c41228] transition-colors">
              SHAWN LEVY
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md pb-2"
          >
            <p
              className="mb-2 flex items-center gap-1.5 font-cond text-[11px] tracking-[0.26em] text-black/60"
              style={{ fontFamily: "var(--font-cond)" }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#c41228] shadow-[0_0_8px_#c41228]" />
              CINEMATIC VISION
            </p>
            <p className="text-[12px] leading-relaxed text-black/70 min-h-[44px]">
              <span className="mr-1 font-semibold text-black">PART B.</span>
              <TypewriterText
                text="Deadpool & Wolverine unites two iconic titans under Phase Five of the MCU, combining meta-humor, blockbuster kinetic action, and an unfiltered R-rated legacy."
                speed={18}
                delay={350}
              />
            </p>

            <motion.button
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.96 }}
              onClick={onGallery}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-4 py-1.5 font-cond text-[11px] tracking-[0.28em] text-black hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm"
              style={{ fontFamily: "var(--font-cond)" }}
            >
              EXPLORE GALLERY 07 / 32
              <ArrowUpRight size={13} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}