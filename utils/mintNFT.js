
import { Button, message, Space } from "antd";
import { InsertData } from "./insertData";
import Metamask from "../components/metamask";

var metadataURL = "";
var Dataset = "";
var token_id = "";
var transaction_hash = "";
var owneraddress = <Metamask/>;
export const getMetadataURL = async (
  City,
  OwnerName,
  area,
  PID,
  survay,
  price
) => {
  function VerifyData() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bfb1eeca-e144-4c3b-82ab-13d5bef82804",
      },
      body: `{  
            "name":"Test1",
          "description":"${City},,${OwnerName},,${area},,${PID},,${survay},,${price}",
          "file_url":"TEST_LAND"
          }`,
    };

    fetch("http://localhost:8000/landDetails")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        Dataset = response;
        console.log("234567", Dataset);
        let i;
        for (i = 0; i <= Dataset.length; i++) {
          if (
            Dataset[i].Owner == OwnerName &&
            Dataset[i].propertyID == PID &&
            Dataset[i].Survey_number == survay &&
            Dataset[i].Area == area
          ) {
            alert("Data Verified");

            fetch("https://api.nftport.xyz/v0/metadata", options)
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
                metadataURL = JSON.stringify(response["metadata_uri"]);
                alert("Your Metadata URL is Ready MINT NFT");
              })
              .catch((err) => console.error(err));
            return true;
          }
        }
        alert("Data Not Verified");
        return false;
      })
      .catch((err) => {
        console.error(err);
        // alert(err)
      });
  }

  VerifyData();
};

export const MintNFT = async (City, OwnerName, area, PID, survay, price) => {
  // Mint NFT
  const options1 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bfb1eeca-e144-4c3b-82ab-13d5bef82804",
    },
    body: `{
      "chain":"polygon",
      "contract_address":"0x2f9227E2e1465a1bB38cE53c4516eC867Ac1535D",
      "metadata_uri":${metadataURL},
      "mint_to_address":"0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7"
      }`,
  };

  fetch("https://api.nftport.xyz/v0/mints/customizable", options1)
    .then((response) => response.json())
    .then((response) => {
      console.log("asedfg", response);
      transaction_hash = response["transaction_hash"];
      alert("NFT is Minting (It may take 10 sec)");
      setTimeout(() => {
        console.log("World!");
        getTokenId();
        InsertData({
          "tokenID": token_id,
          "propertyID": PID,
          "physicalSurveyNo": survay,
          "Area": area,
          "City": City,
          "owner": OwnerName,
          "Price": price,
          "ownerAddress": owneraddress
        });
        setTimeout(() => {
        // window.location.href = "/lands";
        }, 2000);
      }, 7000);
      return true;
    })
    .catch((err) => {
      console.error("error: ", err);
      alert(err);
    });

  console.log("NFT Minted");
};

export const getTokenId = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bfb1eeca-e144-4c3b-82ab-13d5bef82804",
    },
  };

  fetch(
    `https://api.nftport.xyz/v0/mints/${transaction_hash}?chain=polygon`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      token_id = response["token_id"];
    })

    .catch((err) => console.error(err));
};
