import React from 'react';
import logo from './logo.svg';
import './App.css';
import IssLocationCard from "./IssLocation/IssLocationCard";

function App() {
  return (
    <div className="App">
        <h1>ISS Tracker</h1>
        <IssLocationCard/>
    </div>
  );
}

export default App;
