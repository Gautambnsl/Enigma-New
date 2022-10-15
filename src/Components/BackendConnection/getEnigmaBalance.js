import ERC20 from "../abi/enigmaToken.json"
const { ethers } = require("ethers");


const getEnigmaBalance = async (address) => {
	if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(
			"0x56cEe3862a76abDD318026A2947890B289b3b5f8",
			ERC20,
			signer
		);
		
		const data = await Contract.balanceOf(address);
		// let value = data._hex;
		console.log(data.toString(),"🪙🪙🪙")
		return data;
	}else{
        alert("Please Connect MetaMask To Mumbai Network")
    }
};

export default getEnigmaBalance;
