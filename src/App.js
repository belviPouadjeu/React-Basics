import './App.css';
import Heading from './Heading';
import Bag from './components/Bag';
import Ternary from './components/Ternary';
import logo_react from './logo_react.svg';
import Card from './components/Card';
import Btn from './events/Btn';
import ModeToggler from './events/ModeToggler';
import InputComponent from './components/InputComponent';
import Homepage from './navigarion/Homepage';
import AboutMe from './navigarion/AboutMe';
import {Routes, Route, Link} from 'react-router-dom'



const Logo = () =>{
  const userPic = <img src={logo_react} className="logo-img" alt="React Logo" />;
  return userPic;
}

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link to='' className='nav-item'>Homepage</Link>
        <Link to='about-me' className='nav-item'>About me</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='about-me' element={<AboutMe />} />
      </Routes>
      
      <Heading firstName="Bob" />
      <Bag>
        <p>This is content inside the Bag component.</p>
      </Bag>
      <Ternary/>
      <Logo />
      <InputComponent/>
      <Card/>
      <Btn />
      <ModeToggler />
      
    </div>
  );
}

export default App;
