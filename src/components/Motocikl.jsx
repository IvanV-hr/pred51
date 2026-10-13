import Button from "./Button";

const Motocikl = ({ motocikl, onObrisi }) => {
  return (
    <div className="kartica">
      <h3>{motocikl.title}</h3>
      <p>Cijena: {motocikl.price} $</p>
      <p>Ocjena: {motocikl.rating} / 5</p>
      <Button onClick={() => onObrisi(motocikl.id)}>Obriši</Button>
    </div>
  );
};

export default Motocikl;
