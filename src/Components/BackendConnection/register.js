import ERC20 from "../abi/enigmaToken.json"
const { ethers } = require("ethers");


const Register = async (address) => {
	console.log("register is running")
	try{
	if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(
			"0x56cEe3862a76abDD318026A2947890B289b3b5f8",
			ERC20,
			signer
		);
		
		const tx = await Contract.register(address);
		await tx.wait()
		alert("Success");
	}else{
        alert("Please Connect MetaMask To Mumbai Network")
    }
}catch(error){
	console.log("this is catch")
	console.log(error,"😀😀😀😀");
	alert("Failed! Sorry, Something is not Right");
}
};

export default Register;
