import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowUpRight } from "../lib/icons";
import { navItems } from "../lib/data";

type OverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchOverlay({ open, onClose }: OverlayProps) {
  const [q, setQ] = useState("");
  const results = [
    "Deadpool III release date",
    "Hugh Jackman as Wolverine",
    "El Capitan Theatre tickets",
    "Shawn Levy interview",
    "IMAX 6 showtimes",
    "Made by MWIJAY",
  ].filter((r) => r.toLowerCase().includes(q.toLowerCase()) || !q);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-start justify-center bg-black/80 p-4 pt-16 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="w-[min(92vw,640px)] rounded-3xl bg-[#121216] p-6 text-white shadow-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Search size={18} className="text-[#ff4d6d]" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search Cine Daily 2026…"
                className="w-full bg-transparent text-[16px] outline-none placeholder:text-white/30"
              />
              <button
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-full bg-white/5 hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </div>
            <ul className="mt-4 space-y-1.5 max-h-[300px] overflow-y-auto">
              {results.map((r) => (
                <li key={r}>
                  <button
                    onClick={onClose}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-[14px] text-white/70 hover:bg-white/5 hover:text-white transition-all cursor-pointer"
                  >
                    <span>{r}</span>
                    <ArrowUpRight size={13} className="text-white/30" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MenuOverlay({
  open,
  onClose,
  onNav,
}: OverlayProps & { onNav: (id: string) => void }) {
  const allItems = [
    { id: "hero", label: "HOME" },
    ...navItems,
    { id: "director", label: "DIRECTOR" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[80] flex flex-col justify-between bg-[#09090c] p-6 sm:p-10 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <span style={{ fontFamily: "var(--font-black)" }} className="tracking-[0.14em] text-[18px]">
              CINE<span className="mx-1 text-[#c41228]">●</span>DAILY
            </span>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white text-black shadow-lg"
              aria-label="Close menu"
            >
              <X size={18} />
            </motion.button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 my-auto py-6">
            {allItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => {
                  onNav(item.id);
                  onClose();
                }}
                className="group flex items-baseline gap-4 text-left cursor-pointer transition-transform hover:translate-x-3"
              >
                <span
                  className="font-cond text-[14px] text-white/35 group-hover:text-[#ff4d6d]"
                  style={{ fontFamily: "var(--font-cond)" }}
                >
                  0{i + 1}
                </span>
                <span
                  className="font-display text-[52px] leading-[0.9] group-hover:text-[#ff4d6d] sm:text-[76px] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.label}
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Footer inside menu */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[12px] text-white/40 font-cond tracking-[0.2em]" style={{ fontFamily: "var(--font-cond)" }}>
            <span>DEADPOOL III · ULTRA 2026</span>
            <span className="text-[#ff4d6d]">MADE BY MWIJAY</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function BookOverlay({ open, onClose }: OverlayProps) {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", seats: "2", time: "7:40 PM" });

  function submit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[min(92vw,460px)] overflow-hidden rounded-3xl bg-[#121216] text-white shadow-2xl border border-white/10"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <p
                className="font-cond text-[13px] tracking-[0.28em] text-[#ff4d6d]"
                style={{ fontFamily: "var(--font-cond)" }}
              >
                RESERVE TICKETS
              </p>
              <button
                onClick={() => {
                  setDone(false);
                  onClose();
                }}
                className="grid h-7 w-7 place-items-center rounded-full bg-white/5 hover:bg-white/15 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={15} />
              </button>
            </div>

            {done ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-6 py-10 text-center"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#c41228]/20 border border-[#c41228] text-[#ff4d6d] mb-4 text-2xl shadow-[0_0_20px_rgba(196,18,40,0.5)]">
                  ✓
                </span>
                <p
                  className="font-display text-[46px] leading-none text-gradient-red"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  YOU’RE IN.
                </p>
                <p className="mt-3 text-[14px] text-white/70">
                  {form.seats} IMAX seat{form.seats === "1" ? "" : "s"} reserved for <span className="text-white font-semibold">{form.name}</span> at El Capitan Theatre · {form.time}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setDone(false);
                    onClose();
                  }}
                  className="mt-6 rounded-full bg-[#c41228] px-8 py-2.5 font-cond tracking-[0.2em] font-semibold cursor-pointer shadow-[0_0_15px_rgba(196,18,40,0.4)]"
                  style={{ fontFamily: "var(--font-cond)" }}
                >
                  CLOSE
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-4 px-6 py-6">
                <label className="block text-[11px] tracking-wider text-white/50 font-cond" style={{ fontFamily: "var(--font-cond)" }}>
                  FULL NAME
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Wade Wilson"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-[14px] text-white outline-none focus:border-[#c41228] transition-colors"
                  />
                </label>
                <label className="block text-[11px] tracking-wider text-white/50 font-cond" style={{ fontFamily: "var(--font-cond)" }}>
                  EMAIL ADDRESS
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="wade@deadpool.com"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-[14px] text-white outline-none focus:border-[#c41228] transition-colors"
                  />
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="block text-[11px] tracking-wider text-white/50 font-cond" style={{ fontFamily: "var(--font-cond)" }}>
                    SEATS
                    <select
                      value={form.seats}
                      onChange={(e) => setForm({ ...form, seats: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-[#1a1a20] px-3.5 py-2.5 text-[14px] text-white outline-none cursor-pointer"
                    >
                      {["1", "2", "3", "4", "5", "6"].map((n) => (
                        <option key={n}>{n} Ticket{n === "1" ? "" : "s"}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-[11px] tracking-wider text-white/50 font-cond" style={{ fontFamily: "var(--font-cond)" }}>
                    TIME
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-[#1a1a20] px-3.5 py-2.5 text-[14px] text-white outline-none cursor-pointer"
                    >
                      {["1:15 PM", "4:20 PM", "7:40 PM", "10:35 PM"].map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#e01832" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-2 w-full rounded-full bg-[#c41228] py-3.5 font-cond text-[14px] tracking-[0.24em] font-semibold text-white shadow-[0_0_20px_rgba(196,18,40,0.5)] cursor-pointer"
                  style={{ fontFamily: "var(--font-cond)" }}
                >
                  CONFIRM RESERVATION
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}