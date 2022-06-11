import logo from './logo.svg';
import './App.css';
import Addtask from './compents/Addtask';
import Filter from './compents/Filter';
import { useState } from 'react';

function App() {
const[search,setSearch]= useState("");
  const [tasks,setTasks]=useState([
    {
      name: "study",
      description:"learn more about hooks props state",
      done:true,
    },
    {
      name: "eat",
      description:"eat healthy food",
      done:false,
    },
    {
      name: "go aout side",
      description:"learn more about hooks props state",
      done:true,
    },



  ]);






  const addT=(x)=>{
setTasks( [x,...tasks]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Addtask addT={addT} />
        <Filter search={search} setSearch={setSearch} />
        {tasks.filter(el=>el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((el)=>(
          <div className="task">
            <h1>{el.name}</h1>
          <p>{el.description}</p>
          <h3>{el.done ? "done":"not done"}</h3>
          </div>
        ))}
       
      </header>
    </div>
  );
}

export default App;
