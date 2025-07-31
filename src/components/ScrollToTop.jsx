import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "Scroll" ke bagian atas halaman setiap kali `pathname` berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponen ini tidak menampilkan apa-apa (hanya fungsionalitas)
}