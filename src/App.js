import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      < Navbar/>
      < Home/>
      < About/>
      < Resume/>
      < Contact/>
    </div>
  );
}

export default App;
