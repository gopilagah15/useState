import { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [num, setNum] = useState(0)
  return (
    <> 
    
    <div className="container" style={{width:'100%', height:'100vh'}}>
    <div style={{position:'absolute', left:'50%' , top:'50%', transform:"translate(-50%,-50%)"}}>
      <div style={{display:'flex',justifyContent:'center'}}>
    <Header/>
    </div>
    <h1 style={{display:'flex',justifyContent:'center'}}>{num}</h1>
    <button onClick={()=>{setNum(num+1)}}>Increment</button>
    <button onClick={()=>{setNum(num-1)}}>Decrement</button> 
    </div>
    </div>
    </>
  );
}

export default App;


// let ex = 234;
// function setEx(n) {ex=n}
// const useState = [ex,setEx]
// useState[0]
// 234
// setEx(423290249)
// ex
// 423290249