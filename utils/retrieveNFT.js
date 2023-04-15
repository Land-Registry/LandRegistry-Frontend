
import axios from 'axios';

export const retrieveNFT = async () => {

   
    const contractaddress = '0x2f9227E2e1465a1bB38cE53c4516eC867Ac1535D'
    // const contractaddress = '0x6fdfe7feec201a840bd4709bbb8e0d2aa0a1ae53'
    const chain = 'polygon'


const options = {
  method: 'GET',
  url: `https://api.nftport.xyz/v0/nfts/${contractaddress}`,
  params: {
    chain: 'polygon',
    include: 'metadata',
    page_number: '1',
    page_size: '50',
    refresh_metadata: 'false'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'bfb1eeca-e144-4c3b-82ab-13d5bef82804'
  }
};

axios
  .request(options)
  .then(function (response) {
    // console.log(response.data);
    return(response.data)    
  })
  .catch(function (error) {
    console.error(error);
  });
  
  
}