import React from 'react';
import './app.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
