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
}

export default App
