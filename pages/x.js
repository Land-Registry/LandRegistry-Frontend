import React from "react";
import { retrieveNFT } from "../utils/retrieveNFT";
import { contract } from "../utils/contract";
import { getMetadataURL } from "../utils/mintNFT";
import { MintNFT } from "../utils/mintNFT";
import Data from "../utils/Data";
import { VerifyData } from "../utils/verifyData";
import { InsertData } from "../utils/insertData";
import Metamask from "../components/metamask";
import { UpdateData } from "../utils/updateData";
import { GetTokenId, TransferOwnership } from "../utils/ContractPlugins";
import { CheckBalance, MakePayment, TokenApprove } from "../utils/makePayment";

const x = () => {
  return (
    <div>
      <button onClick={() => retrieveNFT()}>RETRIVE</button>
      <br />
      <button onClick={() => contract()}>CONTRACT</button>
      <br />
      <button onClick={() => getMetadataURL()}>getmetadataURL</button>
      <br />
      <button onClick={() => MintNFT()}>MINT</button> <br />
      <button onClick={() => VerifyData("Ayush", 1233, 1234, 20)}>
        VerifyData
      </button>{" "}
      <br />
      <button onClick={() => InsertData({ propertyID: 23345645 ,owner:"werty"})}>
        Data insert
      </button>{" "}
      <br />
      <button onClick={()=> GetTokenId()}
      >GetTokenID</button>
      <br />
      <button onClick={()=> TransferOwnership("0x1D853e5a1eE20b61dc3187558Eda7F3b8eD14AB7","0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7",1)}
      >TransferNFT</button>
      {/* <Data/> */} <br />
      <button onClick={()=> MakePayment(1111,"0x1D853e5a1eE20b61dc3187558Eda7F3b8eD14AB7","0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7",5)}
      >SendToken</button><br />
      <button onClick={()=> CheckBalance()}
      >CheckBalance</button><br />
      <button onClick={()=>TokenApprove("0x20DB5E91F92e254AeFbeFCe5da77435c0A9cD99F",100000000)}>Approve</button>
      <br />
      <button onClick={()=>CreateNFT("0x7ed790a1ac108b9a50e24f5c5e061df59e3673a7","tokenURI","Name","description","ImageURI")}>Create NFT</button>
    </div>
  );
};

export default x;