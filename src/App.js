//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let [total, setTotal] = useState(0)
  let digits=[1,2,3,4,5,6,7,8,9,0]
  return (
    <div className="App">
      <header className="App-header">
      <div>Total: {total}</div>
{
  digits.map(digit => {
    return <button key={digit} onClick={()=>setTotal(total+digit)}>{digit}</button>

  })
}
<button onClick={() =>{setTotal(0)}}>reset</button>

{/* <button onClick={()=>{setTotal(total+1)}}>1</button>
<button onClick={()=>{setTotal(total+2)}}>2</button>
<button onClick={()=>{setTotal(total+3)}}>3</button>
<button onClick={()=>{setTotal(total+4)}}>4</button>
<button onClick={()=>{setTotal(total+5)}}>5</button>
<button onClick={()=>{setTotal(total+6)}}>6</button>
<button onClick={()=>{setTotal(total+7)}}>7</button>
<button onClick={()=>{setTotal(total+8)}}>8</button>
<button onClick={()=>{setTotal(total+9)}}>9</button>
<button onClick={()=>{setTotal(total+0)}}>0</button> */}
{/* <button onClick={() =>{setTotal(total+1)}}>+</button> */}



        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      
      
      
      
      
      {/* <div>total</div> */}
      </header>
    </div>
  );
}

export default App;
