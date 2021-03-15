import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <main>
          <div className='content'>
            <Sidebar />
            <div className='content__grid'>
              <Route path='/profile' component={Profile} />
              <Route path='/messages' component={Messages} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/settings' component={Settings} />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
