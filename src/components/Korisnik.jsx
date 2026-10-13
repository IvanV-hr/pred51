import { useState } from "react";
import Button from "./Button";

const Korisnik = ({ korisnik }) => {
  const [prikaziDetalje, setPrikaziDetalje] = useState(false);

  return (
    <div className="kartica">
      <h3>
        {korisnik.firstName} {korisnik.lastName}
      </h3>
      <p>Grad: {korisnik.address.city}</p>
      <Button onClick={() => setPrikaziDetalje(!prikaziDetalje)}>
        Prikaži detalje
      </Button>
      {prikaziDetalje && <p>prikazi detalje</p>}
    </div>
  );
};

export default Korisnik;
