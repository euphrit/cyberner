import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import SectionProfile from './components/SectionProfile/SectionProfile';
import SectionMessages from './components/SectionMessages/SectionMessages';
import SectionNews from './components/SectionNews/SectionNews';
import SectionMusic from './components/SectionMusic/SectionMusic';
import SectionSettings from './components/SectionSettings/SectionSettings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <main>
          <div className='content'>
            <Sidebar />
            <Route path='/sectionprofile' component={SectionProfile} />
            <Route path='/sectionmessages' component={SectionMessages} />
            <Route path='/sectionnews' component={SectionNews} />
            <Route path='/sectionmusic' component={SectionMusic} />
            <Route path='/sectionsettings' component={SectionSettings} />
          </div>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
