import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  { id: "hero", theme: "dark" as const },
  { id: "production", theme: "dark" as const },
  { id: "director", theme: "light" as const },
  { id: "details", theme: "light" as const },
  { id: "imax", theme: "dark" as const },
  { id: "casts", theme: "dark" as const },
  { id: "boxoffice", theme: "dark" as const },
];

export default function App() {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [quote, setQuote] = useState(0);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [book, setBook] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const theme = sections[index]?.theme ?? "dark";
  const activeNav = useMemo(() => {
    const id = sections[index]?.id;
    if (id === "hero") return "";
    if (id === "director") return "production";
    if (id === "details") return "imax";
    return id ?? "";
  }, [index]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollTop / el.clientHeight);
      setIndex(Math.max(0, Math.min(sections.length - 1, i)));

      const maxScroll = el.scrollHeight - el.clientHeight;
      if (maxScroll > 0) {
        setScrollProgress(el.scrollTop / maxScroll);
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function go(id: string) {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-dvh bg-[#b8b0ae] px-2 py-2 sm:px-4 sm:py-4 lg:px-8 lg:py-6 selection:bg-[#c41228] selection:text-white">
      {/* Outer Shell Window */}
      <div className="relative mx-auto h-[calc(100dvh-16px)] max-w-[1280px] overflow-hidden rounded-[28px] shadow-[0_35px_90px_rgba(0,0,0,0.35)] sm:h-[calc(100dvh-32px)] lg:h-[calc(100dvh-48px)] ring-1 ring-black/20">
        
        {/* Subtle 2026 Inner Glow Border */}
        <div className="pointer-events-none absolute inset-0 z-50 rounded-[28px] ring-1 ring-white/10" />

        {/* 2026 Vertical Scroll Progress Indicator */}
        <div className="pointer-events-none absolute right-2.5 top-20 bottom-20 z-40 hidden w-1 rounded-full bg-black/15 sm:block overflow-hidden">
          <motion.div
            style={{ height: `${Math.max(8, scrollProgress * 100)}%` }}
            className="w-full rounded-full bg-gradient-to-b from-[#c41228] to-[#ff4d6d] shadow-[0_0_8px_#c41228]"
          />
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
          className="no-scrollbar h-full w-full snap-y snap-mandatory overflow-y-auto scroll-smooth"
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
