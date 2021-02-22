import React from 'react';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SectionProfile from './components/SectionProfile';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <div className='content'>
          <Sidebar />
          <SectionProfile />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
