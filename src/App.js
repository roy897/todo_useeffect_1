import React from 'react'
import './App.css';
import Todos from './components/Todos';

function App() {
  // const [count, setCount] = React.useState(0)

  // fetch("https://m6g3bt.sse.codesandbox.io/todos")

  // fetch("http://localhost:8000/todos")
  // .then((r)=>r.json())
  // .then((d)=>{
  //   console.log(d);
  // });

  return (
    <div className="App">
      <Todos/>      
      {/* <h1 onClick={()=>setCount(count+1)}>hello: {count}</h1> */}
    </div>
  );
}

export default App;
