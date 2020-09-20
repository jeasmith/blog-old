import React from 'react';
import './App.scss';
import { HoldingMessage } from './components/holdingpage';

function App(): JSX.Element {
  return (
    <div className="app">
      <div className="layout">
        <HoldingMessage />
      </div>
    </div>
  );
}

export default App;
