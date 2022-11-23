import ItemCard from "../ItemCard/ItemCard";



function ShoppingList(props){
    console.log('in shoppingList');

    return(
        <>
            <div>
                
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