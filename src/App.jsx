import './App.css';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Testimonals from './components/Testimonals';
import Topbar from './components/Topbar';
import Works from './components/Works';
import Intro from './components/Intro'

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='sections'>
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonals/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
