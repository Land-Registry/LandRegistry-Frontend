import { Button, message, Space } from "antd";
import { InsertData } from "./insertData";
import Metamask from "../components/metamask";
import { CreateNFT, GetTokenId } from "./ContractPlugins";

var metadataURL = "";
var Dataset = "";
var token_id = GetTokenId();
var transaction_hash = "";
var owneraddress;
var landarray = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "https://images.unsplash.com/photo-1629016943072-0bf0ce4e2608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "  https://media.istockphoto.com/id/1138785274/photo/zabljak-in-montenegro-mountain-view.jpg?s=170667a&w=0&k=20&c=JCA06xZw69I7XgycQgUjjIKxH6X-UPaP-QFl-LLeXtY=",
  "https://media.istockphoto.com/id/810005974/photo/peanut-tractor.jpg?s=170667a&w=0&k=20&c=K7VSqoq5tSqFI5kX-iEsKKHAF0MwHnkwdkv5iZ2CcWE=",
  "https://media.istockphoto.com/id/1179655501/photo/wheat-field.jpg?s=170667a&w=0&k=20&c=IBKD9ZGmVWrFHW0nL1yUdmprOTTxuLediny3gTCbfBo=",
];

export const getMetadataURL = async (
  City,
  OwnerName,
  area,
  PID,
  survay,
  price
) => {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  owneraddress = accounts[0];

  function VerifyData() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bfb1eeca-e144-4c3b-82ab-13d5bef82804",
      },
      body: `{  
            "name":"${OwnerName}",
          "description":"${City},,${OwnerName},,${area},,${PID},,${survay},,${price}",
          "file_url":"${landarray[Math.round(Math.random() * 4)]}"
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
            Dataset[i].owner == OwnerName &&
            Dataset[i].propertyID == PID &&
            Dataset[i].physicalSurveyNo == survay &&
            Dataset[i].Area == area
          ) {
            alert("Data Verified");

            fetch("https://api.nftport.xyz/v0/metadata", options)
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
                metadataURL = JSON.stringify(response["metadata_uri"]);
                alert("Your Metadata URL is Ready MINT NFT");
                token_id = GetTokenId();
                CreateNFT(
                  owneraddress,
                  metadataURL,
                  OwnerName,
                  `${City},,${OwnerName},,${area},,${PID},,${survay},,${price}`,
                  landarray[Math.round(Math.random() * 4)]
                );
                setTimeout(() => {
                  InsertData({
                    tokenID: token_id,
                    propertyID: parseInt(PID),
                    physicalSurveyNo: parseInt(survay),
                    Area: parseInt(area),
                    City: City,
                    owner: OwnerName,
                    Price: parseInt(price),
                    ownerAddress: owneraddress,
                    ImageURL: landarray[Math.round(Math.random() * 4)],
                  });
                  window.location.href = "/lands";
                }, 10000);
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


