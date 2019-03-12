import React from 'react';
import Header from '../Header/Header';
import './mainLayout.css';

const MainLayout = ({ children }) => (
  <div id="main-layout">
    <Header />
    <main id="main-layout-body" className="main-layout-body">
      {children}
    </main>
  </div>
);

export default MainLayout;
