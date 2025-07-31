import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import KondisiDesaPage from './components/KondisiDesaPage';
import Footer from './components/Footer'; 
import SejarahPage from './components/SejarahPage';
import VisiMisiPage from './components/VisiMisiPage';
import StrukturOrganisasiPage from './components/StrukturOrganisasi';
import DemografiPage from './components/DemografiPage';
import PetaPage from './components/PetaPage';
import KeadaanSosialPage from './components/KeadaanSosialPage';
import KeadaanEkonomiPage from './components/KeadaanEkonomiPage';

// 1. Impor komponen ScrollToTop yang baru dibuat
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      {/* 2. Panggil komponen ScrollToTop di sini */}
      <ScrollToTop />
      
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/kondisi-desa" element={<KondisiDesaPage />} />
          
          {/* Rute Profil */}
          <Route path="/profil/sejarah" element={<SejarahPage />} />
          <Route path="/profil/visi-misi" element={<VisiMisiPage />} />
          <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasiPage />} />

          {/* Rute Kondisi Desa */}
          <Route path="/kondisi-desa/peta" element={<PetaPage />} />
          <Route path="/kondisi-desa/demografi" element={<DemografiPage />} />
          <Route path="/kondisi-desa/sosial" element={<KeadaanSosialPage />} />
          <Route path="/kondisi-desa/ekonomi" element={<KeadaanEkonomiPage />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App