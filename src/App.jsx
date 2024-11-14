// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharacterNotes from './components/CharacterNotes';
import StoryNotes from './components/StoryNotes';
import DialogueNotes from './components/DialogueNotes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/character-notes" element={<CharacterNotes />} />
        <Route path="/story-notes" element={<StoryNotes />} />
        <Route path="/dialogue-notes" element={<DialogueNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
