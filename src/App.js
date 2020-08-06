import React, { useContext, createContext, useLayoutEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useObserver, Provider, useLocalStore } from 'mobx-react'

//pages
import Home from './pages/Home'

function App() {
  return useObserver(() => (
    <main>
      <p>App</p>
      <Home />
    </main>
  ));
}

export default App;
