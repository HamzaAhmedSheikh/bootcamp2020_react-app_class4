import React, {useState} from 'react';
import Counter from './Counter'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {

 let [count, setCount] = useState(1)
//  let [isTheme, setTheme] = useState(false)

  return (
    <div className="App">
      <div className="container-fluid bg p-5">
        <h1 className="text-center"> Bootcamp 2020 Assignment #4 </h1>
      </div>

       <Counter counter={count} />
       <br />
       <button onClick={() => setCount(++count)} className="btn btn-outline-success btn-sm m-2"> Update Counter </button>
       <button onClick={() => setCount(--count)}className="btn btn-outline-warning btn-sm m-2"> Decrement Counter </button>
       <button onClick={() => setCount(0)} className="btn btn-outline-danger btn-sm m-2"> Reset </button>
       
       
    </div>
  );
}

export default App;
