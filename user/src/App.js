import React, { useState } from 'react';
import './App.css';
import socket from './components/socket';
import Chat from './components/chat';
import SideMenu from './components/sideMenu';

function App() {
  
  return (

    <div className="App" style={{height: '100vh'}}>
      <SideMenu />
      <Chat />

    </div>
);
}

export default App;
