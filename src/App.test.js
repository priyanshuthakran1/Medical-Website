import './App.css';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
      </header>
      <div className="content">
        <Home />
        <About />
      </div>
      <footer className="App-footer">
        <p>&copy; 2022 My Website</p>
      </footer>
    </div>
  );
}

export default App;
