import React from 'react';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;