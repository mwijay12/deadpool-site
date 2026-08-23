import { motion } from "framer-motion";
import { Menu, Search, User } from "../lib/icons";

type Props = {
  theme: "dark" | "light";
  active: string;
  onNav: (id: string) => void;
  onSearch: () => void;
  onMenu: () => void;
};

export default function NavBar({ theme, active, onNav, onSearch, onMenu }: Props) {
  const light = theme === "light";

  return (
    <header className="relative z-40 flex items-center justify-between px-4 py-3 sm:px-8 sm:py-4 transition-colors duration-500">
      {/* Brand Logo */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => onNav("hero")}
        className="flex items-center gap-1.5 tracking-[0.14em] cursor-pointer"
        aria-label="Cine Daily home"
      >
        <span
          className={`font-black text-[14px] sm:text-[16px] transition-colors duration-300 ${light ? "text-black" : "text-white"}`}
          style={{ fontFamily: "var(--font-black)" }}
        >
          CINE
        </span>
        <span className="relative mx-0.5 inline-flex h-[15px] w-[15px] items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-[#c41228] shadow-[0_0_8px_#c41228]" />
          <span className="relative h-[5px] w-[5px] rounded-full bg-white shadow-[-6px_0_0_#fff,6px_0_0_#fff]" />
        </span>
        <span
          className={`font-black text-[14px] sm:text-[16px] transition-colors duration-300 ${light ? "text-black" : "text-white"}`}
          style={{ fontFamily: "var(--font-black)" }}
        >
          DAILY
        </span>
      </motion.button>

      {/* Center Desktop Navigation */}
      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 md:flex lg:gap-6">
        {["TOP CASTS", "PRODUCTION", "BOX OFFICE", "IMAX 6"].map((label, i) => {
          const id = ["casts", "production", "boxoffice", "imax"][i];
          const isOn = active === id;
          return (
            <motion.button
              key={label}
              whileHover={{ y: -2 }}
              onClick={() => onNav(id)}
              className={`relative font-cond text-[11px] tracking-[0.24em] font-medium transition-colors cursor-pointer ${
                light
                  ? isOn
                    ? "text-black font-bold"
                    : "text-black/60 hover:text-black"
                  : isOn
                  ? "text-white font-bold"
                  : "text-white/65 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-cond)" }}
            >
              {label}
              {isOn && (
                <motion.span
                  layoutId="activeNavDot"
                  className="absolute -bottom-2 left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#c41228] shadow-[0_0_8px_#c41228]"
                />
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-2.5">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={onSearch}
          className={`grid h-8 w-8 cursor-pointer place-items-center rounded-full border transition-all ${
            light
              ? "border-black/20 text-black hover:bg-black/5"
              : "border-white/20 text-white hover:bg-white/10"
          }`}
          aria-label="Search"
        >
          <Search size={13} />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className={`hidden h-8 w-8 cursor-pointer place-items-center rounded-full border transition-all sm:grid ${
            light
              ? "border-black/20 text-black hover:bg-black/5"
              : "border-white/20 text-white hover:bg-white/10"
          }`}
          aria-label="Account"
        >
          <User size={13} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: light ? "#1a1a1a" : "#ffffff" }}
          whileTap={{ scale: 0.92 }}
          onClick={onMenu}
          className={`grid h-8 w-8 cursor-pointer place-items-center rounded-full shadow-md transition-all ${
            light ? "bg-black text-white" : "bg-white text-black"
          }`}
          aria-label="Menu"
        >
          <Menu size={14} />
        </motion.button>
      </div>
    </header>
  );
}