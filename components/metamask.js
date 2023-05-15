import Web3 from 'web3';
import { useEffect, useState } from 'react';

const Metamask = () => {
    const [accountid, setAccount] = useState('Connect Wallet');

    useEffect(() => {
      try{
      if (window.ethereum) {
        const _web3 = new Web3(window.ethereum)
      } else {
        alert('Please install MetaMask!')
      }
    } catch (error) {
      console.log(error);
        }
    }, [])
  
    const onConnect = async () => {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        // console.log("Account: " + accounts[0]);
        setAccount(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    }  
  
    onConnect();
  
  return accountid;
}

export default Metamask;
