import nft from "../abi/enigmaNft.json";
const { ethers } = require("ethers");

const getNft = async (address) => {
	console.log("test 2")
	if (typeof window.ethereum !== "undefined") {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const Contract = new ethers.Contract(
			"0x4b705f4C2Dc26a2fcF0aD13b5c6739c3CA9DCb77",
			nft,
			signer
		);
		console.log("test 3")
		let data = await Contract.balanceOf(address);
		data = data.toString();

		let arr = [];
		for (let i = 0; i < data; i++) {
			let temp = await Contract.getIds(address, i);
			arr.push(temp.toString());
		}
		console.log("test 4")
        let units = [];
		for (let i = 0; i < data; i++) {
            let temp = await Contract.units(arr[i]);
			units.push(temp.toString());
        }
		console.log("test 5",units)
		return units;
	} else {
		alert("Please Connect MetaMask To Mumbai Network");
	}
};

export default getNft;
