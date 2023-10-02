import axios from "axios"
const cors = require('cors')

const url = 'https://rich-cyan-fawn-robe.cyclic.app/SellingLand';

export const InsertData = async (data) => {
  console.log('fgh')
  console.log(data);
  try{
    const response = await axios.post(url, data)  
    console.log("Done: ",response);
  }
  catch(error){
    console.log(error);
  }
}
