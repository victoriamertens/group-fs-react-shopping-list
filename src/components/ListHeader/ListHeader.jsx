import axios, { Axios } from "axios"

function ListHeader(props) {
    const resetBtn = () => {
        // put
        axios.put('/item')
        .then(response => {
            console.log('successful reset')
            props.fetchItems();
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    const clearBtn = () => {
        // delete
        axios.delete('/item')
        .then(response => {
            console.log('successful delete');
            props.fetchItems();
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <h3>Shopping List</h3>
            <button onClick = {resetBtn}>Reset</button>
            <button onClick = {clearBtn}>Clear</button>
        </div>
    )
}

export default ListHeader