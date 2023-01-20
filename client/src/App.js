import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import SupervisorForm from './components/SupervisorForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SupervisorForm />
      </header>
    </div>
  );
}

export default App;
