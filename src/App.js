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
import {Routes, Route, Link} from 'react-router-dom';
import Login from './login/Login';
import rooftops from './assets/images/image.png';

const Logo = () =>{
  const userPic = <img src={logo_react} className="logo-img" alt="React Logo" />;
  return userPic;
}

function App() {
  const randomImageUrl = "https://picsum.photos/400/265"
  
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
      <Login />
      
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
      <h1>Task: add three images with some styling</h1>
      <h3>First image using import statement</h3>
      <img
          height={200}
          width={600}
          src={rooftops}
          alt='an image for human'
      />
      <h3> second image using require statement</h3>
      <img
          height={200}
          width={600}
          src={require("./assets/images/image.png")}
          alt='an image for human'
      />

      <h3> second image using random image</h3>
      <img
          height={200}
          width={600}
          src={randomImageUrl}
          alt='an image for human'
      />
      
    </div>
  );
}

export default App;
