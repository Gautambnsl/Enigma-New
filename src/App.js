import React from 'react';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import MyNfts from './Components/MyNfts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SellToken from './Components/SellToken';
import BuyNft from './Components/BuyNft';

function App() {
  
 


 return (<>
  <div className="App">
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="selltoken" element={<SellToken />} />
    <Route path="buynft" element={<BuyNft />} />
    <Route path="mynft" element={<MyNfts />} />
    <Route path="*" element={<div>Not found, please go back</div>} />  
  </Routes>
  </BrowserRouter>
  </div>
  </>
  );
}

export default App;
