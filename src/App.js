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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <main>
          <div className='content'>
            <Sidebar />
            <div className='content__grid'>
              <Route
                path='/profile'
                render={() => <Profile state={props.state.profilePage} />} />
              <Route
                path='/messages'
                render={() => <Messages state={props.state.messagesPage} />} />
              <Route
                path='/news'
                render={() => <News state={props.state.newsPage} />} />
              <Route
                path='/music'
                render={() => <Music state={props.state.musicPage} />} />
              <Route
                path='/settings'
                render={() => <Settings state={props.state.settingsPage} />} />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
