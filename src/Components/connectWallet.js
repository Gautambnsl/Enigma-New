import { ethers } from "ethers";
import getEnigmaBalance from "./BackendConnection/getEnigmaBalance";


async function connectWallet(){
console.log("this is woking")

    if (window.ethereum) {
        
        let chainId = window.ethereum.chainId;
        if (chainId !== "0x13881") {
            const temp = await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x13881" }], // chainId must be in hexadecimal numbers
            });
        }
        // if (chainId === "0x13881") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const account = await provider.send("eth_requestAccounts", []);
            console.log(account,"🚀")
            let balance =   await getEnigmaBalance(account[0]);
            document.getElementById("address").innerHTML = `Balance Enigma : ${balance}`;
            document.getElementById("address").classList.add("address");
        }else{
            alert("please install Metamask and Switch to Mumbai Network")
        }


    }
    



export default connectWallet;
