import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todo from './Components/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
