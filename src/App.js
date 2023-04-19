import './App.scss';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Reservations from './pages/Reservations/Reservations';
import Location from './pages/Location/Location';
import Gallery from './pages/Gallery/Gallery' 




function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/menu' element = {<Menu />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
