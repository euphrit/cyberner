import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
const App = (props) => {

  return (
    <div className='wrapper'>
      <Header />
      <Main
        state={props.state}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        addMessage={props.addMessage}
        updateNewMessageText={props.updateNewMessageText} />
    </div>
  );
}

export default App;
