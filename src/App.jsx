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
import SosialEkonomiPage from './components/SosialEkonomiPage';
import MasalahPotensiPage from './components/MasalahPotensiPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
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
          <Route path="/kondisi-desa/sosial-ekonomi" element={<SosialEkonomiPage />} />

          {/* Rute Masalah dan Potensi */}
          <Route path="/masalah-dan-potensi" element={<MasalahPotensiPage />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;