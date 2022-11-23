import ItemCard from "../ItemCard/ItemCard";
import ListHeader from "../ListHeader/ListHeader";



function ShoppingList(props){
    console.log('in shoppingList');

    return(
        <>
            <div>
                <ListHeader
                    fetchItems = {props.fetchItems}/>
            </div>
            {
                props.itemList.map(item => {
                    return(
                    <ItemCard 
                        key = {item.id}
                        item = {item}/>)
                })
            }
        </>
    )
}

export default ShoppingList;