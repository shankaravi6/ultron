import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pricing from './pages/PricingPage';
import SignUp from './pages/SignupPage';
import Contact from './pages/ContactPage';
import Footer from './components/Footer/Footer';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
