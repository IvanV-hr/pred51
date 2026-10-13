import { useState } from "react";
import Button from "./Button";
import Korisnik from "./Korisnik";

const ProizvodiSekcija = () => {
  const [korisnici, setKorisnici] = useState([]);
  const [poruka, setPoruka] = useState("");

  async function ucitajKorisnike() {
    setPoruka("Ucitavanje korisnika...");
    try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) throw new Error();
      const korisnici = (await response.json()).users;
      setPoruka("");
      setKorisnici(korisnici);
    } catch {
      setPoruka("Doslo je do greske prilikom ucitavanja korisnika.");
    }
  }

  return (
    <section className="section">
      <h2>Korisnici</h2>
      <Button disabled={!!korisnici.length} onClick={ucitajKorisnike}>
        Učitaj korisnike
      </Button>
      {poruka && <p>{poruka}</p>}
      <div className="kartice">
        {korisnici.map((korisnik) => (
          <Korisnik key={korisnik.id} korisnik={korisnik} />
        ))}
      </div>
    </section>
  );
};

export default ProizvodiSekcija;
