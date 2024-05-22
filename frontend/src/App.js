import Timer from './components/Timer.js'
import FullScreenButton from './components/FullScreenButton.js'
import './App.css';
import ThemeButtons from './components/ThemeButtons.js'

function App() {
  return (
    <div className="App">

      <div className="FullScreenButton">
        <FullScreenButton />
      </div>
      <div className='ThemeAndTimer'>
        <div className="ThemeButtons">
          <ThemeButtons />
        </div>
        <div className="Timer">
          <Timer />
        </div>
      </div>

    </div>
  );
}

export default App;
