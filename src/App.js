import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import Allopathic from './components/pages/Allopathic';
import Ayurvedic from './components/pages/Ayurvedic';
import Homeopathic from './components/pages/Homeopathic';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/allopathic' component={Allopathic} />
        <Route path='/ayurvedic' component={Ayurvedic} />
        <Route path='/homeopathic' component={Homeopathic} />
      </Switch>
    </Router>
  );
}

export default App;
