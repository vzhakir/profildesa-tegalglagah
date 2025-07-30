import { dataProfil } from '../data/profil'; // Import data dari file

function ProfilePage() {
  return (
    <div className="container">
      <h1>Profil Desa</h1>
      <h2>Sejarah</h2>
      <p>{dataProfil.sejarah}</p>
      <h2>Visi</h2>
      <p>{dataProfil.visi}</p>
      <h2>Misi</h2>
      <ul>
        {dataProfil.misi.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage;