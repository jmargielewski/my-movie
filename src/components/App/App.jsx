import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import SearchPage from '../../containers/SearchPage/SearchPage';
import MoviePage from '../../containers/MoviePage/MoviePage';
import './app.css';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = () => (
  <Router>
    <div className="app">
      <AppRoute exact path="/" layout={MainLayout} component={SearchPage} />
      <AppRoute path="/:movieId" layout={MainLayout} component={MoviePage} />
    </div>
  </Router>
);

export default App;
