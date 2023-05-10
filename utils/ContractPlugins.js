import Web3 from "web3";
import { Alchemy, Network } from "alchemy-sdk";
import { abi,contractAddress } from "./abi";
const config = {
  apiKey: "Ako92qUmH4xOvqLp7sYBK1WPdvKceXeL",
  network: Network.MATIC_MUMBAI,
};
const alchemy = new Alchemy(config);



export const CreateNFT = async (
  Owneraddress,
  tokenURI,
  Name,
  description,
  ImageURI
) => {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask first.");
  }

  window.addEventListener("load", async () => {
    try {
      await ethereum.enable();
    } catch (error) {}
  });

  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const address = accounts[0];
  
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, contractAddress);

  const createnft = await contract.methods
    .createNFT(Owneraddress, tokenURI, Name, description, ImageURI)
    .send({ from: address });

  console.log(createnft);
};

export const GetNFT = async () => {
  // Flag to omit metadata
  const omitMetadata = false;

  // Get all NFTs
  const response = await alchemy.nft.getNftsForContract(contractAddress, {
    omitMetadata: omitMetadata,
  });
  console.log(JSON.stringify(response, null, 2));
};

export const GetTokenId = async () => {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask first.");
  }
  
  window.addEventListener("load", async () => {
    try {
      await ethereum.enable();
    } catch (error) {}
  });
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, contractAddress);

  const tokenid = await contract.methods._tokenIds().call();
  console.log(tokenid);
  return parseInt(tokenid) + 1;
};

export const TransferOwnership = async (from,to,tokenId) => {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask first.");
  }
  
  window.addEventListener("load", async () => {
    try {
      await ethereum.enable();
    } catch (error) {}
  });

  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const address = accounts[0];

  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, contractAddress);
 
  const transferNFT = await contract.methods.transferNFT(from,to,tokenId).send({ from: address });
  console.log(transferNFT);
};