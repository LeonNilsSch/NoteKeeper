// src/components/CharacterNotes.jsx
import React from 'react';

function CharacterNotes() {
  return (
    <div className="p-6 bg-[#2d2a1f] text-[#f0e6d2] min-h-screen">
      <h2 className="text-3xl font-bold text-[#d4af37] mb-4">Character Notes</h2>
      <p className="mb-4">Write down details about your characters here. Include their backstory, skills, and other important details.</p>
      
      {/* Example of a character detail */}
      <div className="bg-[#3e2b1f] p-4 rounded-lg border border-[#d4af37] mb-4">
        <h3 className="text-xl font-semibold text-[#d4af37]">Character Name</h3>
        <p className="text-[#f0e6d2]">A brief description of your character goes here...</p>
      </div>
    </div>
  );
}

export default CharacterNotes;
