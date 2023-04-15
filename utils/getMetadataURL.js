var metadataURL = "";
export const getMetadataURL = async () => {
  // Create Metadata URL
  // "description":"{"name":"Ayush NFT","Owner_name":"Ayush","Area":"Nagpur","Property_PID_number":"12345678","Physical_Survay_Number":"87654321", "Price":"1000000"}",
  // ['Ayush NFT','Ayush','Nagpur','12345678','87654321','1000000']

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bfb1eeca-e144-4c3b-82ab-13d5bef82804",
    },
    body: `{
          "name":"Ayush",
        "description":"['Ayush NFT','Ayush','Nagpur','12345678','87654321','1000000']",
        "file_url":"TEST_LAND"
        }`,
  };

  fetch("https://api.nftport.xyz/v0/metadata", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      metadataURL = JSON.stringify(response["metadata_uri"]);
      console.log(metadataURL);
    })
    .catch((err) => console.error(err));

    return metadataURL;
};
