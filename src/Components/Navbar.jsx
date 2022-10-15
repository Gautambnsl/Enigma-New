import React from "react";
import logo from "../images/enigma.png"
import Login from "../Login";
import connectWallet from "./connectWallet.js";
// import register from "./register";
import { Link } from "react-router-dom";
import "./navbar.css"  

function Navbar(){
   return(
    <>
        <a href="#" className="logo">
            <img src={logo} alt="logo"/>
        </a>
        <div>
        <nav>
            <input className="menu-btn" type="checkbox" id='menu-btn'/>
            <label className="menu-icon" htmlFor='menu-btn'>
                <span className="nav-icon"></span>
            </label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="selltoken">Sell Enigma</Link></li>
                <li><Link to="buynft">Buy NFT</Link></li>
                <li><Link to="/mynft">My NFT</Link></li>
                {/* <liLink<a href="mynft">My NFT</a></li> */}
                <li><a id="address" onClick={connectWallet} href="#">Connect Wallet</a></li>
                
            </ul>
        </nav>
        </div>
    </>
   )
}
export default Navbar;