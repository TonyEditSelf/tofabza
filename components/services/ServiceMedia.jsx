// components/services/ServiceMedia.jsx
"use client";
import { useState, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function ServiceMedia({ title, slug }) {
  const [muted, setMuted] = useState(true);
  const [videoExists, setVideoExists] = useState(false);
  const videoSrc = `/videos/${slug}.mp4`;

  // Check if video file exists — if not, fall back to placeholder
  useEffect(() => {
    if (!slug) return;
    fetch(videoSrc, { method: "HEAD" })
      .then((r) => setVideoExists(r.ok))
      .catch(() => setVideoExists(false));
  }, [videoSrc, slug]);

  return (
    <section className="pt-20">
      <div className="container">
        <div
          className="relative w-full rounded-3xl overflow-hidden glass-card group"
          style={{ aspectRatio: "16/9" }}
        >
          {videoExists ? (
            <>
              <video
                key={videoSrc}
                src={videoSrc}
                autoPlay
                // muted={muted}
                loop
                // playsInline
                // controls
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Mute toggle */}
              <button
                onClick={() => setMuted(!muted)}
                className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-navy-900/70 backdrop-blur-sm border border-gold-500/30 flex items-center justify-center hover:border-gold-500 transition-colors z-10"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? (
                  <VolumeX className="h-4 w-4 text-gold-500" />
                ) : (
                  <Volume2 className="h-4 w-4 text-gold-500" />
                )}
              </button>
              {/* <div className="absolute bottom-6 left-6 text-xs text-gold-500/80 tracking-[0.25em] uppercase font-semibold z-10">
                {title} · Reel
              </div> */}
            </>
          ) : (
            <>
              {/* Fallback placeholder — shown when no video file exists yet */}
              <div className="absolute inset-0 animated-gradient-bg" />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/60 via-transparent to-navy-900/70" />
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
              <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold-500/10 blur-[100px] animate-pulse-soft" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <div className="w-24 h-24 rounded-full bg-gold-gradient flex items-center justify-center shadow-2xl shadow-gold-500/50 group-hover:scale-110 transition-transform duration-500 gold-border-glow">
                  <Play
                    className="h-9 w-9 text-navy-900 ml-1"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </div>
                <div className="text-gold-500 text-xs uppercase tracking-[0.35em] font-semibold">
                  Sample Reel
                </div>
              </div>

              <div className="absolute bottom-6 left-6 text-xs text-muted-foreground">
                {title} · Preview
              </div>
              <div className="absolute bottom-6 right-6 text-xs text-gold-500/60 font-mono">
                00:00 / --:--
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
