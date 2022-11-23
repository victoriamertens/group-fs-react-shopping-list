import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';


useEffect(() => {
    fetchItems();
  }, [])


const fetchItems = () => {                      //INVOKED BY: (useEffect)
    axios.get('/item')
      .then(response => {
        console.log(response.data);
        setItemList(response.data);
      }).catch(error => {
        console.log(error);
      })
  }                                             //INVOKES: (GET)(setItemList)


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
