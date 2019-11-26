import React from 'react';
import './App.css';
import MainComponent from '../src/components/main/mainComponent'
import HeaderComponent from './components/header/headerComponent';

function App() {
  
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <MainComponent></MainComponent>
    </div>
  );
}

export default App;
