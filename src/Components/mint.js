import connectWallet from "./connectWallet";

// import { sequence } from "0xsequence";
const { ethers } = require("ethers");

async function mint(e) {
  
  let provider  = connectWallet();
  let signer = provider.getSigner();

  
  
}

export default mint;
