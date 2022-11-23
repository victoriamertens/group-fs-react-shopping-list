import axios from "axios";
import App from "../App/App";
import ItemCard from "../ItemCard/ItemCard";



function ShoppingList(props){


    console.log('in shoppingList',props.items);

    return (

        <div>
            {props.items.map((item) => (
                <ItemCard
                    key={item.id}
                    item={item}/>
            ))


            }


        </div>

    )

   
    








}

export default ShoppingList;