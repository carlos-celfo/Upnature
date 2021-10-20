import React from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';







function App() {
  return (
    <div >
    <NavBar />
     {/* put your page here */}
    <Home />
    <Footer />
    </div>

  );
}

export default App;