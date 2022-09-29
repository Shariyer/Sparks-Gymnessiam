import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Activities from './components/Activities/Activities';
import Questionandans from './components/Questionandans/Questionandans';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Activities></Activities>
     <Questionandans></Questionandans> 
    </div>
  );
}

export default App;
