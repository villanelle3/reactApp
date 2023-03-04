import "./styles/index.scss"
import Teste from "./components/Teste";

function App() {
  return (
    <div className="App">
      <div className="container-fluid navbar">
        <div className="container">
            <h1 id="title">NewApp</h1>
        </div>
      </div>
      <Teste nome="Laura"/>
    </div>
  );
}

export default App;

// npm run build
