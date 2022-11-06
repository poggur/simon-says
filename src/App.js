import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Game from './stuff';
import { RandomSequence } from './stuff';

function App() {
  useEffect(() => {
    document.title = "Simon Says";
  }, []);

  window.onkeypress = () => {
    setTimeout(RandomSequence, 200)
  }
  return (
    <>
      <h1 id="level-title">Press A Key to Start</h1>
      <div className="container">
        <div className="row">

          <div type="button" id="green" className="btn green" onClick={() => { Game(1, "green") }} style={{ backgroundColor: 'green' }}>

          </div>

          <div type="button" id="red" className="btn red" onClick={() => { Game(2, "red") }} style={{ backgroundColor: 'red' }}>

          </div>
        </div>

        <div className="row">

          <div type="button" id="yellow" className="btn yellow" onClick={() => { Game(3, "yellow") }} style={{ backgroundColor: 'yellow' }}>

          </div>
          <div type="button" id="blue" className="btn blue" onClick={() => { Game(4, "blue") }} style={{ backgroundColor: 'blue' }}>

          </div>

        </div>

      </div>
    </>
  );
}

export default App;
