import { sequence } from '0xsequence';

async function connectWallet(){

const wallet = await sequence.initWallet("mumbai", {
    networkRpcUrl: "https://polygon-mumbai.g.alchemy.com/v2/yl9TVrISmKuXSbjAf_l1tWsI6tajagX5",
})


console.log(wallet);

const connectDetails = await wallet.connect()

// const connectDetails = await wallet.connect()

// console.log('=> connected?', connectDetails.connected)

const add = sequence.getWallet()

const walletAddress = await add.getAddress()

document.getElementById('address').innerHTML = walletAddress;
document.getElementById("address").style.color = "yellow";

console.log(walletAddress)

return walletAddress;

}

export default connectWallet;
