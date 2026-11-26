import { useRef, useState, type CSSProperties, type PointerEvent } from "react";

type FloatingGalleryImageProps = {
  src: string;
  alt: string;
  className: string;
};

export default function FloatingGalleryImage({ src, alt, className }: FloatingGalleryImageProps) {
  const frame = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0, rotation: 0 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !frame.current) return;
    const bounds = frame.current.getBoundingClientRect();
    const horizontalProgress = (event.clientX - bounds.left) / bounds.width - 0.5;
    const verticalProgress = (event.clientY - bounds.top) / bounds.height - 0.5;
    setOffset({
      x: horizontalProgress * 42,
      y: verticalProgress * 42,
      rotation: horizontalProgress * 5,
    });
  };

  const reset = () => setOffset({ x: 0, y: 0, rotation: 0 });

  return (
    <div
      ref={frame}
      className={`gallery-card ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      onPointerDown={(event) => {
        if (event.pointerType === "touch") setOffset({ x: 0, y: -14, rotation: -1.5 });
      }}
      onPointerUp={reset}
      style={
        {
          "--float-x": `${offset.x}px`,
          "--float-y": `${offset.y}px`,
          "--float-rotation": `${offset.rotation}deg`,
        } as CSSProperties
      }
    >
      <img src={src} alt={alt} draggable={false} />
    </div>
  );
}
