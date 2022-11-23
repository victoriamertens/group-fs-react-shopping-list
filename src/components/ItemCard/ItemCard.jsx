function ItemCard(props) {
  return (
    <div>
      <p>Name:{props.name}</p>
      <p>
        Quantity: {props.quantity}, Unit{props.unit}
      </p>
      <button>BUY</button>
      <button>REMOVE</button>
    </div>
  );
}

export default ItemCard;
