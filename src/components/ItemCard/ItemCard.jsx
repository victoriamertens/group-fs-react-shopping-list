function ItemCard(props) {

  






  console.log(props);
  return (
    <div>
      <p>Name:{props.item.name}</p>
      <p>
        Quantity: {props.item.quantity}, Unit {props.item.unit}
      </p>
      <button>BUY</button>
      <button>REMOVE</button>
    </div>
  );
}

export default ItemCard;
