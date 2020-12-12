import './reset.scss'
import './App.scss'
import Heading from './Components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading>        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Heading>
      </header>
    </div>
  );
}

export default App;
