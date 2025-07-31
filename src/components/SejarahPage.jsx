import React from 'react';
import styles from './SejarahPage.module.css';
import PageNavigator from './PageNavigator'; // Impor komponen navigasi

function SejarahPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Sejarah Brebes</h1>
      <div className={styles.content}>
        <p>
          Ada beberapa pendapat mengenai asal-usul nama Brebes. Salah satunya menyebutkan bahwa nama tersebut berasal dari gabungan kata “Bara” yang berarti tanah luas, dan “Basah” yang berarti mengandung banyak air. Kedua kata ini menggambarkan kondisi wilayah Brebes yang merupakan dataran luas dan berair. Dalam pelafalan, “bara” sering diucapkan “bere” dan “basah” diucapkan “besah”, sehingga untuk memudahkan pengucapan, akhirnya menjadi “Brebes”. Selain itu, dalam Bahasa Jawa, kata Brebes atau 'mrebes' berarti “selalu mengeluarkan air”, yang juga menggambarkan karakter wilayah ini.
        </p>
        <p>
          Nama Brebes mulai dikenal sejak era Kerajaan Mataram. Kota ini terletak di pesisir utara Jawa, bersebelahan dengan kota-kota lain seperti Pekalongan, Pemalang, dan Tegal. Pada masa itu, Brebes masih menjadi bagian dari Kabupaten Tegal.
        </p>
        <p>
          Pada tanggal 17 Januari 1678, di Jepara diadakan pertemuan para Adipati Mataram dari wilayah Jawa Tengah, termasuk Arya Martalaya (Adipati Tegal) dan Arya Martapura (Adipati Jepara). Karena ketidaksepakatan atas perjanjian antara Amangkurat dengan Belanda—khususnya terkait bantuan militer untuk menumpas pemberontakan Trunajaya dengan imbalan wilayah Mataram—terjadi duel antara dua adipati tersebut. Peristiwa ini menjadi titik awal terbentuknya Kabupaten Brebes dengan bupati yang berwenang penuh.
        </p>
        <p>
          Sehari setelah kejadian itu, yakni pada 18 Januari 1678, Sri Amangkurat II yang saat itu berada di Jepara, mengangkat beberapa adipati baru untuk menggantikan yang gugur. Arya Suralaya, adik dari Arya Martalaya, diangkat sebagai pemimpin wilayah baru yang kemudian disebut Kabupaten Brebes. Pengangkatan ini sekaligus menjadi penanda pemisahan Kadipaten Tegal menjadi dua: bagian timur tetap menjadi Kadipaten Tegal, sementara bagian barat menjadi Kabupaten Brebes.
        </p>
      </div>

      {/* Tambahkan navigator di sini */}
      <PageNavigator
        nextLink={{ path: '/profil/visi-misi', title: 'Visi & Misi' }}
      />
    </div>
  );
}

export default SejarahPage;