import React from "react";
import { useState } from "react";
import "./sellToken.css";
import logo from "../images/logo.png";
import Loader from "./Loader";
import approveEnigma from "./BackendConnection/approveEnigma.js";
import { useEffect } from "react";
import sellEnigma from "./BackendConnection/sellEnigma";
import holderToValue from "./BackendConnection/holderToValue";
import connectWallet from "./connectWallet";



const SellToken = () => {
	const [token, setToken] = useState(0);
	const [value, setValue] = useState(0);
	const [loder, setloder] = useState(false);

	async function use(){
		let data = await holderToValue()
		setToken(data);
	}

	useEffect( ()=>{
		connectWallet();
		use();
	  },[])

	async function sell() {
		startloder();
		await sellEnigma(value);
		startloder();
		
	}
	async function approve() {
		startloder();
		await approveEnigma(value);
		startloder();
		// var myFunction = function () {
		// 	startloder();
		// };
		// setTimeout(myFunction, 5000);
	}

	function handleChange(e){

		console.log(e.target.value,"🤑");
		setValue(e.target.value);

	}

	function startloder() {
		setloder((prev) => !prev);
	}

	return (
		<>
			
			{loder ? (
				<Loader />
			) : (
				<div className="body">
					<div className="title">
						You Have {token?token:"0"} Enigma In Sell Pool
					</div>
					<div className="content">
						<form>
							<div className="container">
								<div>
									<div className="form-title">
										Enter Amount You Want To Sell
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
									<img src={logo} className="enigma-logo" alt="" />
								</div>
								<div>
									<button className="first-button" onClick={approve}>Approve</button>
								</div>
								<div>
									<button type="submit" onClick={sell}>
										Sell
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

export default SellToken;
