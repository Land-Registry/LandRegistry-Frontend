import axios from "axios"
const cors = require('cors')

const url = 'http://localhost:8000/SellingLand/';

export const InsertData = async (data) => {
  console.log(data);
  try{
    const response = await axios.post(url, data)  
    console.log("Done: ",response);
  }
  catch(error){
    console.log(error);
  }
}
