import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PurpleRamka } from './components/PurpleRamka';
import { OrangeRamka } from './components/OrangeRamka';

function App() {
  // возвращает разметку
  return (
    <div className="App">
      <PurpleRamka textToShow={'Текст как переменная' + 8888} counter={333} />

      <OrangeRamka textToShow='Текст для оранжевого свойства textToShow' counter={999} myElement={<span>Тут текст</span>}>
        <span>HEeeeey</span>
        <PurpleRamka textToShow={'Текст как переменная' + 8888} counter={333} />
      </OrangeRamka>
    </div>
  );
}

// экспорт позвооляет импортировать функцию
export default App;
