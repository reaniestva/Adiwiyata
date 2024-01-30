import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beranda from './pages/beranda';
import Gallery from './pages/gallery';
import HariBesar from './pages/hariBesar';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Beranda />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hari-besar" element={<HariBesar />} />
      </Routes>
    </Router>
  );
}

export default App;