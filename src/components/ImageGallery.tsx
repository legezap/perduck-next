"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + images.length) % images.length : null
      ),
    [images.length]
  );
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % images.length : null
      ),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    setTimeout(() => closeRef.current?.focus(), 50);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, close, prev, next]);

  if (!images.length) return null;

  return (
    <>
      {/* Gallery Grid */}
      <section className="section-pad">
        <div className="container">
          <span className="section-label" style={{ textAlign: "center", display: "block" }}>
            Gallery
          </span>
          <h2 style={{ textAlign: "center", marginBottom: 48 }}>
            Project <span className="accent">Photos</span>
          </h2>
          <div className="gallery-grid">
            {images.map((src, i) => (
              <button
                key={i}
                className="gallery-item"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View photo ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`${alt} — photo ${i + 1}`}
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="gallery-zoom">
                  <span>&#x2922;</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox" onClick={close}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchStart.current === null) return;
              const diff = e.changedTouches[0].clientX - touchStart.current;
              if (diff > 50) prev();
              else if (diff < -50) next();
              touchStart.current = null;
            }}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${alt} — photo ${lightboxIndex + 1}`}
              width={1920}
              height={1080}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "85vh",
                objectFit: "contain",
              }}
              priority
            />
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>

          <button
            ref={closeRef}
            className="lightbox-close"
            onClick={close}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            &#8249;
          </button>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
