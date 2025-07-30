// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Anggap kita sudah membuat Navbar
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import KondisiDesaPage from './components/KondisiDesaPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/kondisi-desa" element={<KondisiDesaPage />} />
        {/* Tambahkan rute lain di sini */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App;