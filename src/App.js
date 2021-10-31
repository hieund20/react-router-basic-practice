import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Products from './components/Products';
import About from './components/About';
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} /> {/* When path is exactly '/' this will redirect to Home */}
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/:something" component={NotFound} /> {/* When user typing false url, this will redirect to Page not found */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
