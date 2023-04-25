import axios from "axios"
const cors = require('cors')


export const UpdateData = async (data,url_pid) => {
  console.log(data);
  console.log(url_pid);

  const url = `http://localhost:8000/SellingLand/${url_pid}/`;
  console.log(url);
  try{
    const response = await axios.post(url, data) 
    console.log(response);
  }
  catch(error){
    console.log(error);
  }
}
