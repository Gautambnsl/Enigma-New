import { useState } from "react";
import Navbar from "./Navbar";
import bg from "../images/header-bg.png";
import mint from "./mint";
import RegisterPage from "./RegisterPage";
import "./Header.module.css";
import "./test.css";

function Header() {
  function test() {
    const random = Math.floor(Math.random() * (300 - 200)) + 200;
    mint(random);
  }

  const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <Navbar />
      <img className="bg-img" src={bg}></img>
      <RegisterPage login={login} setLogin={setLogin} />
      <div className="intro">
        <h1>
          <span>T</span>he World's Premier Green Energy and Non Fungible Tokens
        </h1>

        <a href="#" onClick={() => setLogin(true)} className="header-btn il">
          Register
        </a>
        <button className="mint" onClick={test}>
          Mint
        </button>
      </div>
    </div>
  );
}
export default Header;
