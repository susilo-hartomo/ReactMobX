import React from 'react';
import './App.css';
import { useObserver } from 'mobx-react'

//pages
import Home from './pages/Home'

function App() {
  return useObserver(() => (
    <main>
      <h1 style={{ textAlign: 'center' }}>Conuter App</h1>
      <p style={{ textAlign: 'center', color: 'grey' }}>with</p>
      <h4 style={{ textAlign: 'center' }}>MobX management state and React Framework</h4>
      <Home />
    </main>
  ));
}

export default App;
