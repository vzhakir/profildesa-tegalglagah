// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Anggap kita sudah membuat Navbar
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import KondisiDesaPage from './components/KondisiDesaPage';
import Footer from './components/Footer';
import SejarahPage from './pages/profil/SejarahPage'; // Contoh halaman baru
import VisiMisiPage from './pages/profil/VisiMisiPage'; // Contoh halaman baru

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/kondisi-desa" element={<KondisiDesaPage />} />
          
          {/* TAMBAHKAN RUTE BARU DI SINI */}
          <Route path="/profil/sejarah" element={<SejarahPage />} />
          <Route path="/profil/visi-misi" element={<VisiMisiPage />} />
          
          {/* ... rute lainnya */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;