import React from "react";
import { useState,useEffect } from "react";
import "./buynft.css";
import logo from "../images/usdc.png";
import Loader from "./Loader";
import usdtBalance from "./BackendConnection/UsdtBalance";
import free from "./BackendConnection/free";
import approveUSDT from "./BackendConnection/approveUSDT";
import buyEnigma from "./BackendConnection/buyEnigma";
import connectWallet from "./connectWallet";




console.log("🤑🤑🤑🤑🤑🤑🤑🤑");

const BuyNft = () => {
	const [token, setToken] = useState(0);
	const [value, setValue] = useState(0);
	const [loder, setloder] = useState(false);




	async function use(){
		let data = await usdtBalance()
		setToken(data);
	}

	useEffect( ()=>{
		use();
	},[])

	useEffect(()=>{
		connectWallet();
	  },[])

	async function buy() {
		startloder();
		await buyEnigma(value)
			startloder();
	
	}
	async function approve() {
		startloder();
		await approveUSDT(value);
		startloder();
		
	}

	function startloder() {
		setloder((prev) => !prev);
	}

	
	function handleChange(e){

		console.log(e.target.value,"🤑");
		setValue(e.target.value);

	}

	return (
		<>
			{loder ? (
				<Loader />
			) : (
				<div className="body">
					<div className="title">
						You Have {token?token:"0"} USDT to Buy Enigma Energy NFT!
					</div>
					<div className="free">
						To get 1000 Test USDT Click <button onClick={free}>here</button>
					</div>
					<div className="content">
						<form>
							<div className="container">
								<div>
									<div className="form-title">
										Enter Amount You Want To Buy For
									</div>
									<br />
									<input
										onChange={handleChange}
										type="number"
										id="amount"
										placeholder="0.0"
										name="coin"
									/>
								</div>
								<div>
									<img src={logo} className="my-logo" alt="" />
								</div>
								<div>
									<button className="first-button" onClick={approve}>Approve</button>
								</div>
								<div>
									<button type="submit" onClick={buy}>Buy!</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default BuyNft;
