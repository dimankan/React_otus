import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { StateDemo } from './Components/StateDemo';
import { ContextDemo } from './Components/ContextDemo';
import LifecycleDemo from './Components/LifeCycleDemo';
import { HocDemo } from './Components/HocDemo';

function App() {

  return <>
    {/* <StateDemo /> */}
    <ContextDemo/>
    {/* <LifecycleDemo/> */}
    {/* <HocDemo/> */}
  </>;
}

export default App;
