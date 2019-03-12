import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Movie from '../Movie/Movie';
import Main from '../Main/Main';
import './app.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/:movieId" component={Movie} />
    </div>
  </Router>
);

export default App;
