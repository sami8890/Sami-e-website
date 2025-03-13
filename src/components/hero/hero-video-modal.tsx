"use client";

import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Updated YouTube URL with proper parameters
  const videoUrl =
    "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&showinfo=0";

  useEffect(() => {
    if (isOpen) {
      const linkEl = document.createElement("link");
      linkEl.rel = "preconnect";
      linkEl.href = "https://www.youtube.com";
      document.head.appendChild(linkEl);

      return () => {
        if (document.head.contains(linkEl)) {
          document.head.removeChild(linkEl);
        }
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      style={{ pointerEvents: "auto" }}
    >
      <div
        ref={modalRef}
        className="bg-black rounded-lg max-w-4xl w-full aspect-video relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ pointerEvents: "auto" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[9999] bg-black/70 p-2 rounded-full text-white hover:bg-black/90 transition-colors"
          aria-label="Close video"
        >
          <X size={20} />
        </button>

        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="w-10 h-10 border-4 border-gray-400 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* Error message */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white text-center p-4 z-10">
            <div className="space-y-4">
              <p>Sorry, there was an error loading the video.</p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* YouTube iframe */}
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="Video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 5,
            opacity: 1,
            pointerEvents: "auto",
          }}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </div>

      {/* Accessibility description */}
      <div className="sr-only" role="status" aria-live="polite">
        {isLoading ? "Loading video..." : "Video is playing"}
      </div>
    </div>
  );
};
