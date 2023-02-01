import React from "react";
import { Routes, Route } from "react-router-dom"
import Wizard from './components/Wizard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Wizard />} />
      </Routes>
    </div>
  );
}

export default App;
