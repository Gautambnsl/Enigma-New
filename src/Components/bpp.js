import './App.css';
import { sequence } from '0xsequence';
const { ethers } = require("ethers");
const abi = require('./abi.json');
function App() {

  async function  test(){
  const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/yl9TVrISmKuXSbjAf_l1tWsI6tajagX5');
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  
  
  const daiContract = new ethers.Contract('0x6bdad0ac57652605a9da37dd03d5e44d7aeecdd8', abi, provider);
  console.log(await daiContract.myTokenIds(1));
}


  async function  test2(){
  // Part of the ERC20 ABI, so we can encode a `transfer` call
const erc20Interface = new ethers.utils.Interface([
  'function mint()'
])

sequence.initWallet("mumbai", {
  networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
});

// Get the wallet signer interface
const wallet = sequence.getWallet()
const signer = wallet.getSigner()

// USDC contract address on Polygon network
const usdcContractAddress = '0x6bdad0ac57652605a9da37dd03d5e44d7aeecdd8'

// Sending to a recipient address
// const recipientAddress = '0x8b4de256180cfec54c436a470af50f9ee2813dbb'

// Sending 1.50 USDC, note USDC has 6 decimal places
const amount = ethers.utils.parseUnits('1.50', 6)

// Encode an ERC-20 token transfer to recipient of the specified amount
const data = erc20Interface.encodeFunctionData(
  'mint', []
)

// Prepare Transaction object
const tx ={
  to: usdcContractAddress,
  data: data
}

// Send the transaction via the signer to the blockchain :D The signer will prompt the user
// sign+send the transaction, and once the user confirms it will be transmitted.
const txnResp = await signer.sendTransaction(tx)

// Wait for the transaction to be mined by the network
await txnResp.wait()

// We're done, print the transaction hash, and open it up in your block explorer
console.log('transaction hash:', txnResp.hash)


}


async function connectwallet(){

const wallet = await sequence.initWallet("mumbai", {
  networkRpcUrl: "https://matic-mumbai.chainstacklabs.com",
});
console.log('this worked');

const connectDetails =  wallet.connect();

// console.log('=> connected?', connectDetails.connected)



}


  return (
    <div className="App">
    <h1 onClick={test}>hellow</h1>
    <button onClick={connectwallet}> test 1 </button>
    <button onClick={test2}> test 2 </button>
    </div>
  );
}

export default App;
