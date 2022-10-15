import usdt from "../abi/USDT.json"
const { ethers } = require("ethers");


const free = async (amt) => {
    try{
	if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(
			"0xf9b8174FB00E8357450821efcE2c9BD06070d112",
			usdt,
			signer
		);
		const tx = await Contract.mint();
        await tx.wait()
        alert("you get 1000 free test USDT")
        // getEnigmaBalance(window.ethereum.selectedAddress);
        
	}else{
        alert("Please Connect MetaMask To Mumbai Network")
        return
    }
}catch(error){
    console.log(error);
    alert("Sorry, Something is not Right ");
    return
}
};

export default free;
