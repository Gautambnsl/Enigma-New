import usdt from "../abi/USDT.json"
const { ethers } = require("ethers");


const usdtBalance = async (amt) => {
    try{
	if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(
			"0xf9b8174FB00E8357450821efcE2c9BD06070d112",
			usdt,
			signer
		);
		const data = await Contract.balanceOf(window.ethereum.selectedAddress);
        
        return data.toString();
        // getEnigmaBalance(window.ethereum.selectedAddress);
        
	}else{
        alert("Please Connect MetaMask To Mumbai Network")
        return
    }
}catch(error){
    console.log(error);
    // alert("Error Could Be one Of these: \nYou are not Registered \n You Can't Mint within 30 Days of Last Mint \n you rejected");
    return
}
};

export default usdtBalance;
