import React, { useState } from "react";


export const VerifyData = async (Owner,PID,Surveyno,Area) => {
  const [Dataset, setDataset] = useState([]);

  fetch("http://localhost:8000/landDetails")
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      setDataset(response);
      console.log(Dataset);
    })
    .catch((err) => {
      console.error(err);
      // alert(err)
    });
    for(i in Dataset){
      console.log(i);
    }

};
