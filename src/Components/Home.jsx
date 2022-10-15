import { useState } from "react";
import Navbar from "./Navbar";
import bg from "../images/header-bg.png";
import mint from "./mint";
import RegisterPage from "./RegisterPage";
import "./home.css";
import About from './About';
import Agents from './Agents';
import Bproperty from './Bproperty';
import Mint from "./BackendConnection/mint";
import { useEffect } from "react";
import connectWallet from "./connectWallet";

function Home() {
  // function test() {
  //   const random = Math.floor(Math.random() * (300 - 200)) + 200;
  //   mint(random);
  // }
  useEffect(()=>{
    connectWallet();
  },[])

  const [login, setLogin] = useState(false);
  return (<>
    <div className="header">
      <img className="bg-img" src={bg}></img>
      <RegisterPage login={login} setLogin={setLogin} />
      <div className="intro">
        <h1>
          <span>T</span>he World's Premier Green Energy and Non Fungible Tokens
        </h1>

        <a href="#" onClick={() => setLogin(true)} className="header-btn il register-button">
          Register
        </a>
        <button className="header-btn il need-margin mint-button" onClick={Mint}>
          Mint Token
        </button>
      </div>
    </div>
      <About/> 
      <Bproperty/>
      <Agents/>
    </>
  );
}
export default Home;
