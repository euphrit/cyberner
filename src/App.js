import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import SectionProfile from './components/SectionProfile/SectionProfile';

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
