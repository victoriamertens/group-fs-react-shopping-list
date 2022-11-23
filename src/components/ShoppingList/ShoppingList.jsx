import axios from "axios";
import App from "../App/App";



function ShoppingList(props){
    console.log('in shoppingList');

    return(
        <>
            {
                props.items.map(item => {
                    <ItemCard 
                        key = {item.id}
                        item = {item}/>
                })
            }
        </>
    )
}

export default ShoppingList;