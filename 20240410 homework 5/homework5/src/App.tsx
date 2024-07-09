import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputClass } from './components/Obsolete/InputClass';
import { ButtonFunction } from './components/Obsolete/ButtonFunction';
import { MainComponent } from './components/Obsolete/MainComponent';
import { ClassComponent } from './components/ClassComponent';
import { FunctionComponent } from './components/FunctionComponent';

function App() {
  return (

    <div className="app">
      <div className="left-pane">
     <ClassComponent/>
      </div>
      <div className="right-pane">
     <FunctionComponent />
      </div>
    </div>
  );
}

export default App;
