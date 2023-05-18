import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
