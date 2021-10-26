import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;