// src/components/DialogueNotes.jsx
import React from 'react';

function DialogueNotes() {
  return (
    <div className="p-6 bg-[#2d2a1f] text-[#f0e6d2] min-h-screen">
      <h2 className="text-3xl font-bold text-[#d4af37] mb-4">Dialogue Notes</h2>
      <p className="mb-4">Record dialogues between characters or key NPCs here.</p>

      {/* Example of a dialogue */}
      <div className="bg-[#3e2b1f] p-4 rounded-lg border border-[#d4af37] mb-4">
        <h3 className="text-xl font-semibold text-[#d4af37]">Dialogue Title</h3>
        <p className="text-[#f0e6d2]">Here goes the dialogue exchange between characters...</p>
      </div>
    </div>
  );
}

export default DialogueNotes;
