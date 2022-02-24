import {React, useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function inc(){
    setCount(count + 1);
  }
  function dec(){
    setCount(count - 1) 
  }
  return (
    <div className='box'>
        <h1>{count}</h1>
        <button className='btn' onClick={inc}>+</button>
        <button className='btn' onClick={dec}>-</button>
    </div>
  )
}

export default App;
