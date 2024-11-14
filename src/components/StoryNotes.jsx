// src/components/StoryNotes.jsx
import React from 'react';

function StoryNotes() {
  return (
    <div className="p-6 bg-[#2d2a1f] text-[#f0e6d2] min-h-screen">
      <h2 className="text-3xl font-bold text-[#d4af37] mb-4">Story Notes</h2>
      <p className="mb-4">Write down the details of your adventure, quests, and major story events.</p>

      {/* Example of a story detail */}
      <div className="bg-[#3e2b1f] p-4 rounded-lg border border-[#d4af37] mb-4">
        <h3 className="text-xl font-semibold text-[#d4af37]">Story Title</h3>
        <p className="text-[#f0e6d2]">An important story detail or event goes here...</p>
      </div>
    </div>
  );
}

export default StoryNotes;
