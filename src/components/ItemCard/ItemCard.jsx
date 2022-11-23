import axios from 'axios';

function ItemCard(props) {
  const fetchItems = props.fetchItems;
  const purchaseBtn = () => {
    console.log('id=', props.id);
    const id = props.id;
    axios({
      method: 'PUT',
      url: `/item/${id}`,
    })
      .then(() => fetchItems())
      .catch((error) => {
        alert(error);
      });
  };
  const deleteCard = () => {
    console.log('delete id', id);
    const id = props.id;
    axios({
      method: 'DELETE',
      url: `/item/${id}`,
    });
  };

  return (
    <div>
      <p>Name:{props.name}</p>
      <p>
        Quantity: {props.quantity}, Unit{props.unit}
      </p>
      <button onClick={purchaseBtn}>BUY</button>
      <button onClick={deleteCard}>REMOVE</button>
    </div>
  );
}

export default ItemCard;
