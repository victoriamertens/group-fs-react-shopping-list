import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import './App.css';
import axios from 'axios';


function App() {


    let [itemList, setItemList] = useState([]);


    useEffect(() => {
        fetchItems();
    }, [])


    


    const fetchItems = () => {                      //INVOKED BY: (useEffect)
        axios.get('/item')
        .then(response => {
            console.log(response.data);
            setItemList(response.data);
            console.log('itemlist is',itemList);
        }).catch(error => {
            console.log(error);
        })
        
    }                                             //INVOKES: (GET)(setItemList)


    return (
        <div className="App">
            <Header />
            <ShoppingList items={itemList}/>
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
