"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

type VideoLightboxProps = {
  open: boolean;
  onClose: () => void;
  youtubeId: string;
  title?: string;
};

export function VideoLightbox({
  open,
  onClose,
  youtubeId,
  title = "Watch video",
}: VideoLightboxProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-md bg-primary shadow-hover"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-sm bg-bg p-2 text-text"
          aria-label="Close video"
        >
          <Icon icon={X} size="sm" />
        </button>
        <div className="aspect-video w-full">
          <iframe
            title={title}
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
