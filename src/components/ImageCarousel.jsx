import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full min-h-[500px] bg-slate-900 flex items-center justify-center group">
      
      {/* Main Image */}
      <img 
        src={images[currentIndex].src} 
        alt={images[currentIndex].caption} 
        className="max-h-[80vh] max-w-full object-contain"
      />

      {/* Caption Overlay */}
      <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white p-4 text-center backdrop-blur-md">
        <p className="font-medium">{images[currentIndex].caption}</p>
        <span className="text-xs text-slate-400">{currentIndex + 1} / {images.length}</span>
      </div>

      {/* Controls */}
      <button onClick={prev} className="absolute left-4 p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur text-white transition-all opacity-0 group-hover:opacity-100 hover:cursor-pointer">
        <HiChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-4 p-3 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur text-white transition-all opacity-0 group-hover:opacity-100 hover:cursor-pointer">
        <HiChevronRight size={24} />
      </button>
    </div>
  );
}