import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Beranda from './pages/beranda';

const Utama = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      {/* tambahkan rute lain jika diperlukan */}
    </Routes>
  );
}

export default Utama;