// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DrachenIcon from '../assets/DracheIcon.png'; // Dein Logo importieren

function Navbar() {
  return (
    <nav className="bg-[#4a392f] p-4 border-b-2 border-[#d4af37] fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo und Titel */}
        <div className="flex items-center space-x-2">
          <img src={DrachenIcon} alt="NoteKeeper Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-[#d4af37]">NoteKeeper</h1>
        </div>

        {/* Links */}
        <div>
          <Link to="/character-notes" className="mx-2 hover:text-[#ffd700] text-[#f0e6d2]">
            Character Notes
          </Link>
          <Link to="/story-notes" className="mx-2 hover:text-[#ffd700] text-[#f0e6d2]">
            Story Notes
          </Link>
          <Link to="/dialogue-notes" className="mx-2 hover:text-[#ffd700] text-[#f0e6d2]">
            Dialogue Notes
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
