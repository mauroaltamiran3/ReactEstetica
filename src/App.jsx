<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/product/:productId" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    );
=======
// import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer variablePrecio= {0.9} />
    </>
  )
>>>>>>> 5b7b3807fa5e1f5d540a86503180e44fd5863797
}

export default App;