import './App.css';
import Sequencer from './Components/Sequencer/Sequencer.js';

function App() {
  return (
    <div className="App">
        <Sequencer />
        <div id='description'>
          <p>
            Click anywhere on the grid to draw a sequence. <br/>
            Pick a musical scale from the key drop-down. <br/>
            Adjust the playback speed with the tempo slider. <br/>
            Press play to make some music! <br/>
          </p>
        </div>
    </div>
  );
}

export default App;
