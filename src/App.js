import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <div className="hero">
          <div className="left-h">
            <Header/>
          </div>
          <div className="right-h">
              right side
          </div>
      </div>
    </div>
  );
}

export default App;
