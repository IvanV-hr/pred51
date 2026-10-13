import { useEffect, useState } from "react";
import Motocikl from "./Motocikl";

const ProizvodiSekcija = () => {
  const [motocikli, setMotocikli] = useState([]);
  const [poruka, setPoruka] = useState("");
  const [upit, setUpit] = useState("");
  const [odabranaCheck, setOdabranaCheck] = useState(false);

  useEffect(() => {
    async function ucitajMotocikle() {
      setPoruka("Ucitavanje motocikala...");
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/motorcycle",
        );
        if (!response.ok) throw new Error();
        const motocikli = (await response.json()).products;
        setPoruka("");
        setMotocikli(motocikli);
      } catch {
        setPoruka("Doslo je do greske prilikom ucitavanja motocikala.");
      }
    }

    ucitajMotocikle();
  }, []);

  async function obrisiMotocikl(id) {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error();
      setMotocikli(motocikli.filter((motocikl) => motocikl.id !== id));
    } catch {
      setPoruka("Doslo je do greske prilikom brisanja motocikla...");
    }
  }

  const filtriraniMotocikli = motocikli.filter((motocikl) => {
    const odgovaraUpitu = motocikl.title.toLowerCase().includes(upit);
    const odgovaraOcjeni = odabranaCheck ? motocikl.rating >= 4 : true;
    return odgovaraUpitu && odgovaraOcjeni;
  });

  return (
    <section className="section">
      <h2>Proizvodi</h2>
      <label className="pretraga-oznaka" htmlFor="pretraga">
        Pretraži proizvode
      </label>
      <input
        id="pretraga"
        value={upit}
        onChange={(e) => setUpit(e.target.value)}
      />
      <label>
        <input
          id="ocjena"
          type="checkbox"
          checked={odabranaCheck}
          onChange={(e) => setOdabranaCheck(e.target.checked)}
        />
        Prikaži samo motocikle s ocjenom 4 ili više
      </label>
      {poruka && <p>{poruka}</p>}
      <div className="kartice">
        {filtriraniMotocikli.map((motocikl) => (
          <Motocikl
            key={motocikl.id}
            motocikl={motocikl}
            onObrisi={obrisiMotocikl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProizvodiSekcija;
