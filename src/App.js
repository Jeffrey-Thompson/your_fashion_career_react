import React from 'react';
import Header from './components/Header/Header';
import Routes from './config/Routes';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
