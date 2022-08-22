
import './App.css';
import {useState} from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Agents from './Components/Agents';
import Bproperty from './Components/Bproperty';
import MyNfts from './Components/MyNfts';
import RegisterPage from './Components/RegisterPage'

function App() {
  const [login, setLogin] = useState(true);
  return (
    <div className="App">
      <Header/>
      <About/>
      <Bproperty/>
      <Agents/>
      {/* <MyNfts /> */}
    </div>
  );
}

export default App;
