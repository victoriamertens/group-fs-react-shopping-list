// import {useState} from 'react';

function AddItem() {
    return (
      <div>
        <h1>Add an Item</h1>
        <div>
            <label>
                Item:
            </label>
            <input 
            type="text"
            />
        </div>
        <div>
            <label>
                Quantity:
            </label>
            <input
            type="number"
            />
            <label>
                Unit:
            </label>
            <input
            type="text"
            />
        </div>
        <button type="submit">Save</button>
      </div>

    )
}

export default AddItem;