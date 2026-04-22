import React, { useState } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import ProjectModal from './ProjectModal';
import ImageCarousel from './ImageCarousel';

export default function ProjectActions({ videoSrc, videoTitle, sourceImages }) {
  const [activeModal, setActiveModal] = useState(null); // 'demo', 'code', or null

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Live Demo Button */}
        <button 
          onClick={() => setActiveModal('demo')}
          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-900/10 hover:cursor-pointer hover:shadow-md"
        >
          <HiExternalLink /> Watch Demo (1m)
        </button>

        {/* Source Code Button */}
        <button 
          onClick={() => setActiveModal('code')}
          className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-900 transition-colors hover:cursor-pointer shadow-lg hover:shadow-md"
        >
          <HiCode /> View System Logic
        </button>
      </div>

      {/* --- MODALS --- */}

      {/* 1. VIDEO MODAL */}
      <ProjectModal 
        isOpen={activeModal === 'demo'} 
        onClose={() => setActiveModal(null)}
        title={videoTitle}
      >
        <div className="aspect-video w-full bg-black flex items-center justify-center">
            {/* Replace this with your video file path */}
            <video controls autoPlay className="w-full h-full">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
      </ProjectModal>

      {/* 2. SOURCE CODE / CAROUSEL MODAL */}
      <ProjectModal 
        isOpen={activeModal === 'code'} 
        onClose={() => setActiveModal(null)}
        title="System Architecture & Logic"
      >
        <ImageCarousel images={sourceImages} />
      </ProjectModal>
    </>
  );
}