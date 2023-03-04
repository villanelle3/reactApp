import "../../styles/index.scss"
import { useState } from 'react';

function Teste(props){
    const [age, setAge] = useState(0)
    function handleClick() {
        setAge(age + 1);
    }
    function getInput(e){
        console.log(e.target.value)
    }

    return(
        <div className="container main-container">
            <h2 id="teste">esse é um resre. ola {props.nome}</h2>
            <h3>{age}</h3>
            <button onClick={() => {setAge(age + 1)}} className="btn btn-info">
                You pressed me {age} times
            </button>
            <form action="" className="form-control">
                {/* <input type="text" onChange={(e) => {console.log(e.target.value)}} /> */}
                <input type="text" onChange={getInput} />
            </form>
        </div>
    )
}


export default Teste


