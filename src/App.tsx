import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Production from "./components/Production";
import Director from "./components/Director";
import Details from "./components/Details";
import Finale from "./components/Finale";
import Casts from "./components/Casts";
import BoxOffice from "./components/BoxOffice";
import Footer from "./components/Footer";
import { BookOverlay, MenuOverlay, SearchOverlay } from "./components/Overlays";
import { quotes } from "./lib/data";

const sections = [
  { id: "hero", label: "01 HERO", theme: "dark" as const },
  { id: "production", label: "02 PRODUCTION", theme: "dark" as const },
  { id: "director", label: "03 DIRECTOR", theme: "light" as const },
  { id: "details", label: "04 DETAILS", theme: "light" as const },
  { id: "imax", label: "05 IMAX 6", theme: "dark" as const },
  { id: "casts", label: "06 CASTS", theme: "dark" as const },
  { id: "boxoffice", label: "07 BOX OFFICE", theme: "dark" as const },
];

export default function App() {
  const scroller = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const [index, setIndex] = useState(0);
  const [quote, setQuote] = useState(0);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [book, setBook] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const theme = sections[index]?.theme ?? "dark";
  const activeNav = useMemo(() => {
    const id = sections[index]?.id;
    if (id === "hero") return "";
    if (id === "director") return "production";
    if (id === "details") return "imax";
    return id ?? "";
  }, [index]);

  const goToIndex = useCallback((targetIndex: number) => {
    const el = scroller.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(sections.length - 1, targetIndex));
    const targetTop = clamped * el.clientHeight;
    el.scrollTo({ top: targetTop, behavior: "smooth" });
    setIndex(clamped);
  }, []);

  const go = useCallback((id: string) => {
    const targetIdx = sections.findIndex((s) => s.id === id);
    if (targetIdx !== -1) {
      goToIndex(targetIdx);
    } else {
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  }, [goToIndex]);

  // Scroll listener on container to update index & progress
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const i = Math.round(el.scrollTop / el.clientHeight);
        const clampedIndex = Math.max(0, Math.min(sections.length - 1, i));
        setIndex(clampedIndex);

        const maxScroll = el.scrollHeight - el.clientHeight;
        if (maxScroll > 0) {
          setScrollProgress(el.scrollTop / maxScroll);
        }
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Keyboard navigation for desktop (ArrowUp / ArrowDown / PageUp / PageDown / Space)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (search || menu || book) return; // Don't trigger if overlay is open
      if (e.key === "ArrowDown" || e.key === "PageDown" || (e.key === " " && !e.shiftKey)) {
        e.preventDefault();
        setIndex((prev) => {
          const next = Math.min(sections.length - 1, prev + 1);
          goToIndex(next);
          return next;
        });
      } else if (e.key === "ArrowUp" || e.key === "PageUp" || (e.key === " " && e.shiftKey)) {
        e.preventDefault();
        setIndex((prev) => {
          const prevIdx = Math.max(0, prev - 1);
          goToIndex(prevIdx);
          return prevIdx;
        });
      } else if (e.key === "Home") {
        e.preventDefault();
        goToIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToIndex(sections.length - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [search, menu, book, goToIndex]);

  // Wheel forwarding from outer container so mouse anywhere on screen scrolls the site
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (search || menu || book) return;
      const el = scroller.current;
      if (!el) return;

      // If wheel occurred outside the scroller, forward the scroll
      if (!el.contains(e.target as Node)) {
        el.scrollTop += e.deltaY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [search, menu, book]);

  return (
    <div className="min-h-dvh bg-[#b8b0ae] px-2 py-2 sm:px-4 sm:py-4 lg:px-8 lg:py-6 selection:bg-[#c41228] selection:text-white">
      {/* Outer Shell Window */}
      <div className="relative mx-auto h-[calc(100dvh-16px)] max-w-[1280px] overflow-hidden rounded-[28px] shadow-[0_35px_90px_rgba(0,0,0,0.35)] sm:h-[calc(100dvh-32px)] lg:h-[calc(100dvh-48px)] ring-1 ring-black/20">
        
        {/* Subtle 2026 Inner Glow Border */}
        <div className="pointer-events-none absolute inset-0 z-50 rounded-[28px] ring-1 ring-white/10" />

        {/* Vertical Section Indicator & Progress Rail (Desktop Right Side) */}
        <div className="pointer-events-auto absolute right-3.5 top-1/2 -translate-y-1/2 z-40 hidden flex-col items-center gap-2.5 sm:flex">
          {sections.map((sec, i) => {
            const isActive = index === i;
            const isHovered = hoveredSection === i;
            return (
              <div key={sec.id} className="relative flex items-center justify-end">
                {/* Tooltip on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md bg-black/85 backdrop-blur-md px-2.5 py-1 font-cond text-[10px] tracking-[0.2em] text-white shadow-lg border border-white/10"
                      style={{ fontFamily: "var(--font-cond)" }}
                    >
                      {sec.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot / Pill Button */}
                <button
                  onClick={() => goToIndex(i)}
                  onMouseEnter={() => setHoveredSection(i)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className={`group relative flex items-center justify-center transition-all duration-300 cursor-pointer ${
                    isActive ? "h-6 w-2.5" : "h-2 w-2 hover:scale-150"
                  }`}
                  aria-label={`Go to ${sec.label}`}
                >
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? "h-full w-full bg-gradient-to-b from-[#ff4d6d] to-[#c41228] shadow-[0_0_10px_#c41228]"
                        : theme === "light"
                        ? "h-full w-full bg-black/30 group-hover:bg-black"
                        : "h-full w-full bg-white/30 group-hover:bg-white"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Navigation Bar */}
        <div className="absolute inset-x-0 top-0 z-40">
          <NavBar
            theme={theme}
            active={activeNav}
            onNav={go}
            onSearch={() => setSearch(true)}
            onMenu={() => setMenu(true)}
          />
        </div>

        {/* Main Snap Scroller with strict child constraints */}
        <div
          ref={scroller}
          className="no-scrollbar h-full w-full snap-y snap-mandatory overflow-y-auto scroll-smooth overscroll-contain"
          style={{ scrollSnapType: "y mandatory" }}
        >
          <div className="relative h-full w-full shrink-0 snap-start overflow-hidden">
            <Hero onBook={() => setBook(true)} onStory={() => go("production")} />
          </div>

          <div className="relative h-full w-full shrink-0 snap-start overflow-hidden">
            <Production
              quoteIndex={quote}
              quote={quotes[quote].text}
              onPrev={() => setQuote((q) => (q === 0 ? quotes.length - 1 : q - 1))}
              onNext={() => setQuote((q) => (q + 1) % quotes.length)}
            />
          </div>

          <div className="relative h-full w-full shrink-0 snap-start overflow-hidden">
            <Director onGallery={() => go("boxoffice")} />
          </div>

          <div className="relative h-full w-full shrink-0 snap-start overflow-hidden">
            <Details onBook={() => setBook(true)} />
          </div>

          <div className="relative h-full w-full shrink-0 snap-start overflow-hidden">
            <Finale />
          </div>

          <div className="relative h-full w-full shrink-0 snap-start overflow-hidden">
            <Casts />
          </div>

          <div className="relative h-full w-full shrink-0 snap-start overflow-y-auto no-scrollbar flex flex-col justify-between">
            <BoxOffice />
            <Footer onNav={go} />
          </div>
        </div>
      </div>

      {/* Interactive Overlays */}
      <SearchOverlay open={search} onClose={() => setSearch(false)} />
      <MenuOverlay open={menu} onClose={() => setMenu(false)} onNav={go} />
      <BookOverlay open={book} onClose={() => setBook(false)} />
    </div>
  );
}

