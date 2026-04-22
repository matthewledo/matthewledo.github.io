import React, { useEffect } from 'react';
import { HiX } from 'react-icons/hi';

export default function ProjectModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()} // Prevent click from closing modal
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
          <h3 className="font-bold text-slate-700">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <HiX className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        {/* Content (Scrollable) */}
        <div className="p-0 overflow-y-auto flex-1 bg-black">
          {children}
        </div>
      </div>
    </div>
  );
}