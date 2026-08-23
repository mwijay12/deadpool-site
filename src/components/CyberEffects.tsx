import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

/**
 * Animated number counter that counts up from 0 to destination
 */
export function CountUp({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(latest);
      },
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/**
 * Typewriter Text effect that reveals text character by character
 */
export function TypewriterText({
  text,
  speed = 35,
  delay = 200,
  className = "",
  showCursor = true,
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {showCursor && displayed.length < text.length && (
        <span className="inline-block w-1.5 h-3.5 bg-[#c41228] ml-1 animate-blink align-middle" />
      )}
    </span>
  );
}

/**
 * Cybernetic Laser Grid Scanlines (Horizontal & Vertical slide light beams)
 */
export function CyberLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[3]">
      {/* Horizontal Laser Scanline */}
      <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c41228]/40 to-transparent">
        <div className="animate-laser-h h-[2px] w-[180px] bg-gradient-to-r from-transparent via-[#ff4d6d] to-transparent shadow-[0_0_12px_#ff4d6d]" />
      </div>

      <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent">
        <div className="animate-laser-h h-[2px] w-[140px] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_#fff]" style={{ animationDelay: "2.5s" }} />
      </div>

      {/* Vertical Laser Scanline */}
      <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#c41228]/30 to-transparent">
        <div className="animate-laser-v w-[2px] h-[160px] bg-gradient-to-b from-transparent via-[#ff4d6d] to-transparent shadow-[0_0_12px_#ff4d6d]" />
      </div>

      <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent">
        <div className="animate-laser-v w-[2px] h-[140px] bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_10px_#fff]" style={{ animationDelay: "3s" }} />
      </div>
    </div>
  );
}

/**
 * Cyber Corner Bracket HUD element
 */
export function HUDCorner({ position = "tl", className = "" }: { position?: "tl" | "tr" | "bl" | "br"; className?: string }) {
  const borderClasses = {
    tl: "top-2 left-2 border-t-2 border-l-2",
    tr: "top-2 right-2 border-t-2 border-r-2",
    bl: "bottom-2 left-2 border-b-2 border-l-2",
    br: "bottom-2 right-2 border-b-2 border-r-2",
  }[position];

  return (
    <div
      className={`pointer-events-none absolute h-3.5 w-3.5 border-[#c41228]/60 ${borderClasses} ${className}`}
    />
  );
}

/**
 * Live Audio Visualizer EQ Bars
 */
export function AudioVisualizer({ bars = 5 }: { bars?: number }) {
  return (
    <div className="flex items-end gap-0.5 h-3">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          animate={{ height: ["20%", "100%", "40%", "80%", "30%"] }}
          transition={{
            duration: 0.8 + (i % 3) * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.1,
          }}
          className="w-[2.5px] rounded-full bg-[#c41228] shadow-[0_0_4px_#c41228]"
        />
      ))}
    </div>
  );
}
