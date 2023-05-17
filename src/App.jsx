import './App.css';
import Intro from './Intro/Intro';
import NavBar from './Navbar/Navbar';
import About from './About/About';

function App() {

  return (
    <>
      <div className='container'>
      <NavBar/>
      <Intro/>
      <About/>
      <About/>
      <About/>
      </div>
    </>
  )
}

export default App
