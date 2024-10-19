// provides detailed information about each item

const ItemCard = ({ name, quantity, purpose }) => {
  return (
    <>
      <h2 className="mb-5">{name} </h2>
      <p className="mb-2.5">Quantity: {quantity}</p>
      <p className="mb-2.5">Purpose:{purpose}</p>
    </>
  );
};

export default ItemCard;
