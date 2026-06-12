"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCompress,
  FaTimes,
} from "react-icons/fa";

type LocalVideoProps = {
  src: string;
  poster: string;
  title: string;
  autoPlay?: boolean;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const ctrlBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  fontSize: "15px",
  padding: "4px",
  display: "flex",
  alignItems: "center",
};

type PlayerCoreProps = {
  src: string;
  poster: string;
  title: string;
  autoPlay?: boolean;
  /** "fill" = absolute-fill parent box; "intrinsic" = size to the video itself (popup) */
  fit: "fill" | "intrinsic";
};

function PlayerCore({ src, poster, title, autoPlay, fit }: PlayerCoreProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(!!autoPlay);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setControlsVisible(false);
    }, 2500);
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  useEffect(() => {
    const onFsChange = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setStarted(true);
      video.play();
    } else {
      video.pause();
    }
    showControls();
  }, [showControls]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    showControls();
  }, [showControls]);

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!container || !video) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      // iOS Safari only supports fullscreen on the video element itself
      video.webkitEnterFullscreen();
    }
    showControls();
  }, [showControls]);

  const seekFromPointer = useCallback((clientX: number) => {
    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video || !video.duration) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setCurrentTime(video.currentTime);
  }, []);

  const onTrackPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      seekFromPointer(e.clientX);
    },
    [seekFromPointer]
  );

  const onTrackPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) seekFromPointer(e.clientX);
    },
    [seekFromPointer]
  );

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const containerStyle: React.CSSProperties =
    fit === "fill"
      ? {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          overflow: "hidden",
        }
      : {
          position: "relative",
          lineHeight: 0,
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#000",
        };

  const videoStyle: React.CSSProperties =
    fit === "fill"
      ? {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          cursor: "pointer",
        }
      : {
          display: "block",
          maxWidth: "92vw",
          maxHeight: "82vh",
          minHeight: "min(70vh, 500px)",
          width: "auto",
          height: "auto",
          cursor: "pointer",
        };

  return (
    <div ref={containerRef} onMouseMove={showControls} onTouchStart={showControls} style={containerStyle}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        title={title}
        playsInline
        preload={autoPlay ? "auto" : "none"}
        autoPlay={autoPlay}
        onClick={togglePlay}
        onPlay={() => {
          setPlaying(true);
          setStarted(true);
          showControls();
        }}
        onPause={() => {
          setPlaying(false);
          setControlsVisible(true);
        }}
        onEnded={() => {
          setPlaying(false);
          setControlsVisible(true);
        }}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        style={videoStyle}
      />

      {/* Big centered play button while paused */}
      {!playing && (
        <button
          onClick={togglePlay}
          aria-label={`Play: ${title}`}
          className="video-pulse-btn"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--color-primary)",
            color: "#fff",
            fontSize: "20px",
          }}
        >
          <FaPlay style={{ marginLeft: "4px" }} />
        </button>
      )}

      {/* Control bar */}
      {started && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: "20px 12px 8px",
            background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
            opacity: controlsVisible ? 1 : 0,
            pointerEvents: controlsVisible ? "auto" : "none",
            transition: "opacity 0.25s ease",
            lineHeight: "normal",
          }}
        >
          {/* Seek bar */}
          <div
            ref={trackRef}
            onPointerDown={onTrackPointerDown}
            onPointerMove={onTrackPointerMove}
            role="slider"
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={Math.floor(duration)}
            aria-valuenow={Math.floor(currentTime)}
            style={{
              position: "relative",
              height: "14px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              touchAction: "none",
              marginBottom: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "rgba(255,255,255,0.3)",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  borderRadius: "2px",
                  backgroundColor: "var(--color-primary)",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: `${progress}%`,
                transform: "translateX(-50%)",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
              }}
            />
          </div>

          {/* Buttons row */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", color: "#fff" }}>
            <button onClick={togglePlay} aria-label={playing ? "Pause" : "Play"} style={ctrlBtn}>
              {playing ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} style={ctrlBtn}>
              {muted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <span style={{ fontSize: "12px", fontVariantNumeric: "tabular-nums" }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <button
              onClick={toggleFullscreen}
              aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
              style={{ ...ctrlBtn, marginLeft: "auto" }}
            >
              {fullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LocalVideo({ src, poster, title, autoPlay }: LocalVideoProps) {
  const [open, setOpen] = useState(false);

  // Close popup on Escape; lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // Hero modal etc. already provide their own overlay — play inline there
  if (autoPlay) {
    return <PlayerCore src={src} poster={poster} title={title} autoPlay fit="fill" />;
  }

  return (
    <>
      {/* Inline thumbnail — click opens large popup */}
      <button
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${title}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 0,
          border: "none",
          cursor: "pointer",
          backgroundColor: "#000",
          display: "block",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <span
          className="video-pulse-btn"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--color-primary)",
            color: "#fff",
            fontSize: "20px",
          }}
        >
          <FaPlay style={{ marginLeft: "4px" }} />
        </span>
      </button>

      {/* Popup player */}
      {open &&
        createPortal(
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "rgba(0,0,0,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <div onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close video"
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: 0,
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <FaTimes />
                <span style={{ fontSize: "14px", fontWeight: 600 }}>Close</span>
              </button>
              <PlayerCore src={src} poster={poster} title={title} autoPlay fit="intrinsic" />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
