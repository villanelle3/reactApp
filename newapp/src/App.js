import "./styles/index.scss"
import "./styles/App.css"
import Employ from "./components/Employ";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

function App() {
  function getInput(e){
    console.log(e.target.value)
  }
  const names = ["Camila", "Luciana", "Maria", "Joana", "Natalia", "Augustin", "Fred", "Batista", "Felipe", "Titan"]
  const [Emps, setEmps] = useState([
    {
      name:"",
      role: ""
    },
    {
      name:"",
      role: ""
    },
    {
      name:"",
      role: ""
    }
  ])


  return (
    <div className="App">

      <div className="container-fluid navbar">
        <div className="container">
            <h1 id="title">NewApp</h1>
        </div>
      </div>

      {/* <div className="container">
        <form>
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="First name" onChange={getInput} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last name"/>
            </div>
          </div>
        </form>
      </div> */}

      <div className="container">
        <div className="flex flex-wrap">
          { names.map( (name) => 
            <Employ name={name} role="dev" key={uuidv4()} />     // key ---> npm install uuid
          ) }
          <Employ name="Laura"/>
        </div>
      </div>

    
    </div>
  );
}

export default App;

// npm run build
