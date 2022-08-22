import React from "react";
import logo from "../images/logo.png"
import Login from "../Login";
import connectWallet from "./connectWallet.js";
import register from "./register";
import { Link } from "react-router-dom";

function Navbar(){
   return(
    <>
        <a href="#" className="logo">
            <img src={logo} alt="logo"/>
        </a>
        <nav>
            <input className="menu-btn" type="checkbox" id='menu-btn'/>
            <label className="menu-icon" for='menu-btn'>
                <span className="nav-icon"></span>
            </label>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Whitepaper</a></li>
                <li><a href="#">Contact</a></li>
                <li><Link to="/mynft">My NFT</Link></li>
                {/* <li><a href="mynft">My NFT</a></li> */}
                <li><a id="address" onClick={connectWallet} href="#">Connect Wallet</a></li>
                
            </ul>
        </nav>
    </>
   )
}
export default Navbar;