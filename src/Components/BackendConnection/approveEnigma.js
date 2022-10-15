import ERC20 from "../abi/enigmaToken.json"
const { ethers } = require("ethers");


const approveEnigma = async (amt) => {
    try{
	if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(
			"0x56cEe3862a76abDD318026A2947890B289b3b5f8",
			ERC20,
			signer
		);
		const tx = await Contract.approve("0x30b8ad52151fE908b3bF6E4524E03D93b6521170",amt);
        await tx.wait();
        alert("Approve Success");
        return
        // getEnigmaBalance(window.ethereum.selectedAddress);
        
	}else{
        alert("Please Connect MetaMask To Mumbai Network")
        return
    }
}catch(error){
    console.log(error);
    alert("tx failed!");
    return
}
};

export default approveEnigma;
