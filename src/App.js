import React from 'react';
import './App.css';
import { useObserver } from 'mobx-react'

//pages
import Home from './pages/Home'

function App() {
  return useObserver(() => (
    <main>
      <h1 style={{ textAlign: 'center' }}>Counter App</h1>
      <h5 style={{ textAlign: 'center', color: 'grey' }}>with</h5>
      <h4 style={{ textAlign: 'center' }}>MobX management state and React Framework</h4>
      <Home />
    </main>
  ));
}

export default App;
