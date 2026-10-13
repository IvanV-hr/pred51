import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ProizvodiSekcija from "./components/ProizvodiSekcija";
import KorisniciSekcija from "./components/KorisniciSekcija";

function App() {
  return (
    <>
      <Header naslov="Proizvodi i korisnici" />
      <main>
        <h1>Proizvodi i korisnici</h1>
        <ProizvodiSekcija />
        <KorisniciSekcija />
      </main>
      <Footer naslov="Proizvodi i korisnici" />
    </>
  );
}

export default App;
