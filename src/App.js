import './App.css';
import Heading from './Heading';
import Bag from './components/Bag';
import Ternary from './components/Ternary';
import logo_react from './logo_react.svg';
import Card from './components/Card';

const Logo = () =>{
  const userPic = <img src={logo_react} className="logo-img" alt="React Logo" />;
  return userPic;
}

function App() {
  return (
    <div className="App">
      <Heading firstName="Bob" />
      <Bag>
        <p>This is content inside the Bag component.</p>
      </Bag>
      <Ternary/>
      <Logo />
      <Card/>
    </div>
  );
}

export default App;
