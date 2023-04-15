var metadataURL = "";
var Dataset = "";
import { Button, message, Space } from "antd";

export const getMetadataURL = async (
  City,
  OwnerName,
  area,
  PID,
  survay,
  price
) => {
  function VerifyData(Owner, PID, Surveyno, Area) {
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
        console.log(Dataset);
      })
      .catch((err) => {
        console.error(err);
        // alert(err)
      });

    for (let i in Dataset) {
      if (
        Dataset[i].Owner == Owner &&
        Dataset[i].propertyID == PID &&
        Dataset[i].Survey_number == Surveyno &&
        Dataset[i].Area == Area
      ) {
        alert("Data Verified");

        fetch("https://api.nftport.xyz/v0/metadata", options)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            VerifyData(OwnerName, PID, survay, area);
            metadataURL = JSON.stringify(response["metadata_uri"]);
            alert("Your Metadata URL is Ready MINT NFT");
          })
          .catch((err) => console.error(err));
        return true;
      } else {
        alert("Data Not Verified");
        return false;
      }
    }
  }

  VerifyData(OwnerName, PID, survay, area);
};

export const MintNFT = async () => {
  // Mint NFT
  console.log(metadataURL);
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
    .then((response1) => response1.json())
    .then((response1) => {
      console.log(response1);
      alert("NFT MINT");
      window.location.href = "/lands";
      return true;
    })
    .catch((err) => {
      console.error(err);
      alert(err);
    });

  console.log("NFT Minted");
};
