import axios from 'axios';
import {useState} from 'react';

function AddItem({fetchItems}) {
    
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] =  useState('');
    const [newUnit, setNewUnit] =  useState('');

    const handlesubmit = (event) => {

        const itemObject ={
            name: newItem,
            quantity: newQuantity,
            unit: newUnit
        }

        console.log(itemObject);
        axios({
            method: 'POST',
            url: '/item',
            data: itemObject
        })
        .then(response => {
            console.log('repsonse additem post', response)
            setNewItem('');
            setNewQuantity('');
            setNewUnit('');
            //TODO call
            fetchItems();
            

        })
        .catch(error => {
            alert('Error Adding Item');
            console.log(error)
        })
    }

    

    return (
      <div>
        <h1>Add an Item</h1>
        <div>
            <label>
                Item:
            </label>
            <input 
            type="text"
            value={newItem}
            onChange={(evt) => setNewItem(evt.target.value)}
            />
        </div>
        <div>
            <label>
                Quantity:
            </label>
            <input
            type="number"
            value={newQuantity}
            onChange={(evt) => setNewQuantity(evt.target.value)}
            />
            <label>
                Unit:
            </label>
            <input
            type="text"
            value={newUnit}
            onChange={(evt) => setNewUnit(evt.target.value)}
            />
        </div>
        <button onClick={handlesubmit} type="submit">Save</button>
      </div>

    )
}

export default AddItem;