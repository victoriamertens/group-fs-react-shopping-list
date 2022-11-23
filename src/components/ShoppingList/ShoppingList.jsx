import axios from 'axios';
import App from '../App/App';
import ItemCard from '../ItemCard/ItemCard.jsx';
import ListHeader from '../ListHeader/ListHeader.jsx';

function ShoppingList() {
  console.log('in shoppingList');

  return (
    <>
      <div>
        <ListHeader />
      </div>
      <div>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </>
  );
}

export default ShoppingList;
