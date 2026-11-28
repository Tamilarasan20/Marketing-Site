import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/**
 * Short looping product video rendered with Remotion (video/ in the repo root, output in
 * public/video/). Muted, inline, looping, with a poster. Nothing downloads until the box is
 * near the viewport; it pauses when scrolled away. With reduced motion only the poster shows.
 * The box reserves 16:9 up front, so loading never shifts layout.
 */
export function LoopVideo({ name, label, className }: { name: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [still, setStill] = useState(false);
  const [paused, setPaused] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setStill(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        if (e.isIntersecting) {
          setLoad(true);
          if (!userPaused.current && v.readyState > 0) v.play().catch(() => {});
        } else if (!v.paused) {
          v.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // Sources are added only once `load` flips, so the element needs an explicit load + play.
  useEffect(() => {
    const v = ref.current;
    if (!load || !v) return;
    v.load();
    v.play().catch(() => setPaused(true));
  }, [load]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  const poster = `/video/${name}.jpg`;
  return (
    <div className={`lx-video ${className ?? ""}`}>
      {still ? (
        <img src={poster} alt={label} loading="lazy" decoding="async" width={1280} height={720} />
      ) : (
        <>
          <video
            ref={ref}
            muted
            loop
            playsInline
            preload="none"
            poster={poster}
            aria-label={label}
            width={1280}
            height={720}
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
          >
            {load && <source src={`/video/${name}.webm`} type="video/webm" />}
            {load && <source src={`/video/${name}.mp4`} type="video/mp4" />}
          </video>
          <button
            type="button"
            onClick={toggle}
            aria-label={paused ? "Play video" : "Pause video"}
            className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full border border-[var(--lx-line)] bg-white/90 text-[var(--lx-slate)] shadow-sm transition-colors hover:text-[var(--lx-ink)]"
          >
            {paused ? <Play className="size-3.5" aria-hidden="true" /> : <Pause className="size-3.5" aria-hidden="true" />}
          </button>
        </>
      )}
    </div>
  );
}
