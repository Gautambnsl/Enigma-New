import {useState, useEffect} from 'react';
import styles from "./MyNfts.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../images/logo.png';
import Navbar from './Navbar';
import connectWallet from './connectWallet';
import { ethers } from 'ethers';
import abi from './abi.json'

export default function MyNfts() {

  // const [nfts, setNfts] = useState([]);
  // let [arr , setArr] = useState([]);
   let [name , setName] = useState();
   let [value , setValue] = useState();
   let [meter , setMeter] = useState();
   let [obj , setOjb] = useState([]);

   async function temp(){
    console.log('collection test 1');
    let add = connectWallet();
    const usdcContractAddress = '0xee4a4dcbd8d3f400442f9498e3d1bc622499b419';
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/yl9TVrISmKuXSbjAf_l1tWsI6tajagX5");
    const Contract = new ethers.Contract(usdcContractAddress, abi, provider);
    console.log('collection test 2');
    let a =  await Contract.getMyTokenIds(add);
    console.log(a.toString());
    a = a.toString();
   let temp = await Contract.decode(a);
   setMeter(temp[5].toString());
   setValue(temp[2].toString());
   console.log(temp);
   setOjb(temp);
   console.log(obj);
    }

  useEffect(() => {
      temp();
  }, []);

  // const [nftInformation, setNftInformation] = useState({
  //   name: "Bappi #022",
  //   price: "1"
  // });
  
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Collected NFTs</h1>
        <div className={styles.cardSection}>
          {
            
              <Card className={styles.card} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title className={styles.title}>{obj[1]}</Card.Title>
                <Card.Text className={styles.price}>
                  Energy Saved : {value} Uint
                </Card.Text>
                <Card.Text className={styles.price}>
                  MeterId : {meter} 
                </Card.Text>
              </Card.Body>
            </Card>
          
        }
      </div>
      </div>
    </>
  );
}