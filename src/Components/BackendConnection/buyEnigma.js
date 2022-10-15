import pool from "../abi/pool.json"
const { ethers } = require("ethers");


const buyEnigma = async (amt) => {
    try{
	if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(
			"0x30b8ad52151fE908b3bF6E4524E03D93b6521170",
			pool,
			signer
		);
		const tx = await Contract.buyEnigma(amt);
        await tx.wait();
        alert("Purchase Success");
        return
        // getEnigmaBalance(window.ethereum.selectedAddress);
        
	}else{
        alert("Please Connect MetaMask To Mumbai Network")
        return
    }
}catch(error){
    console.log(error);
    alert("Failed! Sorry, Something is not Right ");
    return
}
};

export default buyEnigma;
