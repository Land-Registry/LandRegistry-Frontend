import React, { useState } from "react";

const Data = () => {
  const [Dataset, setDataset] = useState([]);

  fetch("https://rich-cyan-fawn-robe.cyclic.app/landDetails")
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      setDataset(response);
    //   console.log(Dataset);
    })
    .catch((err) => {
      console.error(err);
      // alert(err)
    });

  return (
    <div>
      <table>
      <thead>
          
          <th>City</th>
          <th>Owner</th>
          <th>Area</th>
          <th>Location</th>
          <th>State</th>
          <th>Survey_number</th>
          <th>Previous_Price</th>
          <th>pricePerSqFeet</th>
          <th>propertyID</th>
          <th>_id</th>
        </thead>
        <tbody>

        {Dataset.map((data) => (
          <tr>
            <td>{data.City}</td>
            <td>{data.Owner}</td>
            <td>{data.Area}</td>
            <td>{data.Location}</td>
            <td>{data.State}</td>
            <td>{data.Survey_number}</td>
            <td>{data.Previous_Price}</td>
            <td>{data.pricePerSqFeet}</td>
            <td>{data.propertyID}</td>
            <td>{data._id}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
