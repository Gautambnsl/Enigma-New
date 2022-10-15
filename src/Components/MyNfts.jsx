import {useState, useEffect} from 'react';
import styles from "./MyNfts.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../images/logo.png';
import Navbar from './Navbar';
import connectWallet from './connectWallet';
import { ethers } from 'ethers';
import abi from './abi/enigmaNft.json'
import getNft from './BackendConnection/getNft';
import "./nfts.css"


export default function MyNfts() {

  const [data, setData] = useState([]);
 
  async function temp(){
    console.log("test 1")
    const value = await getNft(window.ethereum.selectedAddress);
    console.log(value,"🚀🚀🚀")
    setData(value);
  }

  
  useEffect(() => {
      temp();
  }, []);
  
  useEffect(()=>{
    connectWallet();
  },[])

 
  return (
    <>
    <div className='element'>  
        {
        data.map((e)=>{
          return <><div className='element-child'>
            <img src={logo} alt="" /> 
           <div >Enigma NFT</div>
           <div >Units : {e}</div>
           </div>
           </>
        })
        }
      </div>

    </>
  );
}