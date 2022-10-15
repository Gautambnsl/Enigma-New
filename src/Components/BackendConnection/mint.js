import ERC20 from "../abi/enigmaToken.json"
import getEnigmaBalance from "./getEnigmaBalance";
const { ethers } = require("ethers");


const Mint = async (address) => {
    try{
	if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(
			"0x56cEe3862a76abDD318026A2947890B289b3b5f8",
			ERC20,
			signer
		);
		const amt = Math.floor(Math.random() * (3000 - 2000)) + 2000;
		const tx = await Contract.mint(amt);
        await tx.wait();
        alert("Success");
        getEnigmaBalance(window.ethereum.selectedAddress);
	}else{
        alert("Please Connect MetaMask To Mumbai Network")
    }
}catch(error){
    alert("Error Could be: \nYou are not Registered\nYou Can't Mint within 30 Days of Last Mint");
}
};

export default Mint;
