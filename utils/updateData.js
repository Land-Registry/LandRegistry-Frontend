import axios from "axios"
const cors = require('cors')


export const UpdateData = async (data,url_pid) => {
  console.log(data);
  console.log(url_pid);

  const url = `https://rich-cyan-fawn-robe.cyclic.app/SellingLand/${url_pid}/`;
  console.log(url);
  try{
    const response = await axios.post(url, data) 
    console.log(response);
  }
  catch(error){
    console.log(error);
  }
}

export const MainUpdateData = async (data,url_pid) => {
  console.log(data);
  console.log(url_pid);

  const url = `https://rich-cyan-fawn-robe.cyclic.app/landDetails/${url_pid}/`;
  console.log(url);
  try{
    const response = await axios.post(url, data) 
    console.log(response);
  }
  catch(error){
    console.log(error);
  }
}
