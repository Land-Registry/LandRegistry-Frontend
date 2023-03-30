import Web3 from 'web3';
import { useEffect, useState } from 'react';

const Metamask = () => {
    const [accountid, setAccount] = useState('');

    useEffect(() => {
      if (window.ethereum) {
        const _web3 = new Web3(window.ethereum)
      } else {
        alert('Please install MetaMask!')
      }
    }, [])
  
    const onConnect = async () => {
      
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Account: " + accounts[0]);
      setAccount(accounts[0]);
    }  
  
    onConnect();
  
  return accountid;
}

export default Metamask;
