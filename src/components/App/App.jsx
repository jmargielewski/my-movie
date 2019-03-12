import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './app.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Route path="/" component={Main} />
    </div>
  </Router>
);

export default App;
