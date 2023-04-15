import axios from "axios";
const contractaddress = '0x2f9227E2e1465a1bB38cE53c4516eC867Ac1535D'


export const contract = async () => {
  // 1.
  // const options = {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json', Authorization: 'bfb1eeca-e144-4c3b-82ab-13d5bef82804'},
  //     body:  `{
  //       "chain":"polygon",
  //       "name":"Polypunks",
  //       "symbol":"PP",
  //       "owner_address":"0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7",
  //       "metadata_updatable":true
  //       }`
  //   };

  //   fetch('https://api.nftport.xyz/v0/contracts', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  // 2.
  // const options = {
  //     method: 'GET',
  //     headers: {'Content-Type': 'application/json', Authorization: 'bfb1eeca-e144-4c3b-82ab-13d5bef82804'}
  //   };
  //   const transaction_hash = "0xbc437c69e5f6a0e4ac0a3ee395461fc438ecbf3a94eb2c651ea5f5c58b3e93ab"
  //   fetch(`https://api.nftport.xyz/v0/contracts/${transaction_hash}?chain=polygon`, options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  // 3. Create Metadata
//   const fs = require("fs");
//   const fetch = require("node-fetch");
//   const FormData = require("form-data");

//   const form = new FormData();
//   const fileStream = fs.createReadStream("image.jpg");
//   form.append("file", fileStream);

//   const options = {
//     method: "POST",
//     body: form,
//     headers: {
//       Authorization: "bfb1eeca-e144-4c3b-82ab-13d5bef82804",
//     },
//   };

//   fetch("https://api.nftport.xyz/v0/files", options)
//     .then((response) => {
//       return response.json();
//     })
//     .then((responseJson) => {
//       // Handle the response
//       console.log(responseJson);
//     });

// 4. Create and upload
// const options = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json', Authorization: 'bfb1eeca-e144-4c3b-82ab-13d5bef82804'},
//     body: `{
//         "name":"Ayush NFT",
//       "Owner_name":"Ayush",
//       "description":"Your NFT description",
//       "file_url":"The ipfs_url you got from the previous request response",
//       "Area":"Nagpur",
//       "Property_PID_number":"12345678",
//       "Physical_Survay_Number":"87654321",
//       "Price":"1000000"
//       }`
//   };
  
//   fetch('https://api.nftport.xyz/v0/metadata', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// 5. MINT 
// const options = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json', Authorization: 'bfb1eeca-e144-4c3b-82ab-13d5bef82804'},
//     body: `{
//       "chain":"polygon",
//       "contract_address":"0x2f9227E2e1465a1bB38cE53c4516eC867Ac1535D",
//       "metadata_uri":"ipfs://bafkreigwmxz5zsxqhjmzmd3weqtbem25zecqcc6bvkixqb5izylclpocyi",
//       "mint_to_address":"0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7"
//       }`
//   };
  
//   fetch('https://api.nftport.xyz/v0/mints/customizable', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// 6.get token
// const options = {
//     method: 'GET',
//     headers: {'Content-Type': 'application/json', Authorization: 'bfb1eeca-e144-4c3b-82ab-13d5bef82804'}
//   };

//   const transaction_hash = "0x42834f2d608e63e247ddffec5a1c709974c744925401c4b5cf84ef82fee95d8b";
  
//   fetch(`https://api.nftport.xyz/v0/mints/${transaction_hash}?chain=polygon`, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
//     //  //Token "267963671256672147363"

// 7. Update NFT 
// const options = {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json', Authorization: 'bfb1eeca-e144-4c3b-82ab-13d5bef82804'},
//     body: `{"chain":"polygon","contract_address":"0x2f9227E2e1465a1bB38cE53c4516eC867Ac1535D",
//     "token_id":"267963671256672147363",
//     "metadata_uri":"ipfs://bafkreigwmxz5zsxqhjmzmd3weqtbem25zecqcc6bvkixqb5izylclpocyi"}`
//   };
  
//   fetch('https://api.nftport.xyz/v0/mints/customizable', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
};
