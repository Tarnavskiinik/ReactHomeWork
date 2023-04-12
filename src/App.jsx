import React from 'react';
import Header from "./components/Header";
import Navigation from './components/Navigation';
import Container from './components/Container';
import './App.css'

function App() {
  return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Navigation />
          <Container />
        </div>
      </div>
  );
}

export default App;
