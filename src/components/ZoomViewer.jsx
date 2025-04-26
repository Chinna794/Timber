import React, { useRef, useState } from "react";

export default function ZoomViewer({ src, zoom = 2.5 }) {
  const imgRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });

  const handleClick = (e) => {
    const bounds = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;

    setZoomOrigin({ x, y });
    setZoomed(!zoomed);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onClick={handleClick}
      style={{ cursor: zoomed ? "zoom-out" : "zoom-in" }}
    >
      <img
        ref={imgRef}
        src={src}
        alt="Zoomable"
        className="w-full h-full object-cover transition-transform duration-300 select-none"
        style={{
          transform: `scale(${zoomed ? zoom : 1})`,
          transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
        }}
        draggable={false}
      />
    </div>
  );
}
