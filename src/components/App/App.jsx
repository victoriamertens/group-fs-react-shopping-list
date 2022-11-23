import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import './App.css';
import axios from 'axios';
import AddItem from '../AddItem/AddItem.js';




const fetchItems = () => {                      //INVOKED BY: (useEffect)
    axios.get('/item')
      .then(response => {
        console.log(response.data);
        setItemList(response.data);
      }).catch(error => {
        console.log(error);
      })
    useEffect(() => {
        fetchItems();
    }, [])
  }                                             //INVOKES: (GET)(setItemList)


function App() {
    return (
        <div className="App">
            <Header />
            <ShoppingList />
            <main>
              {/* <AddItem/>   */}
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
