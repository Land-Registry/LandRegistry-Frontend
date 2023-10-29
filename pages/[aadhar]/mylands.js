import { useState, useEffect } from "react";
import { Button, Modal, Card } from "antd";
import Navbar from "../../components/navbar/Navbar";
import { Select } from "antd";
import { Footer } from "../../components/footer";
import { useRouter } from 'next/router';
import { retrieveNFT } from "../../utils/retrieveNFT";
import axios from "axios";
import Metamask from "../../components/metamask";
import Router from "next/router";
import { UpdateData } from "../../utils/updateData";
import { createAuction } from "../../utils/createAuction";
import Link from "next/link";
const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log("search:", value);
};

var owneraddress;
const contractaddress = "0x2f9227E2e1465a1bB38cE53c4516eC867Ac1535D";

const lands = () => {
  const [open, setOpen] = useState(false);
  const [Date, setDate] = useState(false);
  const [address, setaddress] = useState("");
  const [FilterDataset, setFilterDataset] = useState([]);
  const [loadings, setLoadings] = useState([]);
  const [Dataset, setDataset] = useState([]);
  const [dateAndTime, setDateAndTime] = useState('');
  const [selectedPID, setSelectedPID] = useState('');
  const [AucPrice, setAucPrice] = useState('');
    const router = useRouter();
    const { aadhar } = router.query;
  useEffect(() => {
    // setData(retrieveNFT())
    // console.log(Data)
    setaddress(<Metamask />);

    fetch("http://localhost:8000/SellingLand")
      .then((response) => response.json())
      .then(async (response) => {
        // console.log(response);
        setDataset(response);

        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        owneraddress = accounts[0];
        let FilterDataset1 = response.filter(function (el) {
          return (
            el.aadhaar_number == aadhar
            // &&
            // el.request == false
            //  && el.ProcessStatus == 1
            // el.Buyer_address == "0"
          );
        });
        setFilterDataset(FilterDataset1);


      })
      .catch((err) => {
        console.error(err);
        // alert(err)
      });
  }, [aadhar]);

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 100000);
  };

  async function CreateAuction() {
    // Ensure a PID is selected
    if (!selectedPID) {
      alert("Please select a Property ID (PID) before creating an auction.");
      return;
    }

    // Create the auction
    try {
      const response = await createAuction({
        owner: FilterDataset.length > 0 ? FilterDataset[0]['ownerName'] : '',
        StartPrice: AucPrice,
        propertyID: selectedPID,
        // sellerID: "", // Fill in the seller ID if needed
        numberOfBuyers: 0, 
        date: dateAndTime, 
        status: "scheduled", 
        aadhaar_number: aadhar,
      });

      if (response) {
        alert("Auction created successfully!");
        // Redirect to the auction page or any other necessary action
                Router.push(`/${aadhar}/${selectedPID}/bidboard`); 
      } else {
        alert("Failed to create auction. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the auction.");
    }
  }


  async function RequestLand(PID) {
    enterLoading(0);
    console.log(PID);
    // processstatus(PID)

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const address = accounts[0];

    UpdateData(
      { Buyer_address: address, Document_Access: address, request: true, ProcessStatus: 2 },
      PID
    );
    setTimeout(() => {
      const { pathname } = Router;
      //  Router.push(`/processstatus/${PID}`)
      Router.push(`/request`);
    }, 3000);
  }

  console.log(FilterDataset)


  const handleDateAndTimeChange = (e) => {
    setDateAndTime(e.target.value);
  };
  const handlePIDChange = (e) => {
    const selectedPID = e.target.value;
    setSelectedPID(selectedPID);
  
    // Get the price based on the selected PID and set it to the state variable
    const selectedProperty = FilterDataset.find((property) => property.propertyID == selectedPID);
    if (selectedProperty) {
      setAucPrice(selectedProperty.Price);
    } else {
      // Handle the case where no property with the selected PID is found
      setAucPrice(0); // Set a default value or handle the error as needed
    }
  };
  const handleAucPriceChange = (e) => {
    // Update the AucPrice state when the input value changes
    setAucPrice(e.target.value);
  };
  return (
    <div className="bg-slate-100">
      <Navbar />

      <Modal
        title="Schedule Action"
        centered
        open={Date}
        onOk={() => setDate(false)}
        onCancel={() => setDate(false)}
        width={500}
        okButtonProps={{
          disabled: true,
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          disabled: true,
          style: {
            display: "none",
          },
        }}
      >
        <div>
        <label htmlFor="PID" className="block text-gray-700 font-bold mt-2">
        Property ID
      </label>
      <select
        id="PID"
        name="PID"
        value={selectedPID}
        onChange={handlePIDChange}
        className="mt-1 p-2 border rounded-md w-full focus:ring bg-white focus:ring-indigo-300"
      >
        <option value="">Select a PID</option>
        {FilterDataset.map((PID, index) => (
          <option key={index} value={PID.propertyID}>
            {PID.propertyID}
          </option>
        ))}
      </select>
        <label htmlFor="owner" className="block text-gray-700 font-bold mt-2">
            Owner
          </label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={FilterDataset.length > 0 ? FilterDataset[0]['ownerName'] : ''}
  className="mt-1 p-2 border rounded-md w-full focus:ring bg-white focus:ring-indigo-300"
            disabled
          />
           <label htmlFor="auctionprice" className="block text-gray-700 font-bold mt-2">
           Auction Price
          </label>
          <input
            type="text"
            id="auctionprice"
            name="auctionprice"
            value={
              AucPrice
            }
            onChange={handleAucPriceChange} // Handle changes to the input value
      
  className="mt-1 p-2 border rounded-md w-full focus:ring bg-white focus:ring-indigo-300"
          />
          <label htmlFor="owner" className="block text-gray-700 font-bold mt-2">
            Date and Time
          </label>
          <input
            type="datetime-local"
            id="dateAndTime"
            name="dateAndTime"
            value={dateAndTime}
            onChange={handleDateAndTimeChange}
            className="mt-1 p-2 border rounded-md w-full focus:ring bg-white focus:ring-indigo-300"
          />
        
        <button onClick={()=> CreateAuction()} className="px-3 py-1 rounded-lg bg-green-500 border font-bold mt-4 flex mx-auto">CREATE AUCTION</button>
        </div>
      </Modal>

      <Modal
        title="Land"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        okButtonProps={{
          disabled: true,
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          disabled: true,
          style: {
            display: "none",
          },
        }}
      >
        <iframe
          width="100%"
          height="640"
          frameborder="0"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowfullscreen
          scrolling="no"
          src="https://kuula.co/share/5hDfC?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
        ></iframe>
      </Modal>

      <div className="pt-[130px]">
        <div className="flex flex-col m-auto p-auto w-[90%] shadow-2xl rounded-2xl">
          <div className="flex items-center flex-none px-4 bg-gradient-to-r from-[#240146] via-[#741760]  to-[#f63d8d] rounded-b-none h-11 rounded-xl">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 border-2 border-[#dc2626] bg-[#dc2626] rounded-full"></div>
              <div className="w-3 h-3 border-2 border-[#eab308] bg-[#eab308] rounded-full"></div>
              <div className="w-3 h-3 border-2 border-[#22c55e] bg-[#22c55e] rounded-full"></div>
              <div className="w-96 h-3 -mt-2.5 pl-4">
                <Select
                  showSearch
                  placeholder="Select a City"
                  optionFilterProp="children"
                  defaultValue="Nagpur"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Nagpur",
                      label: "Nagpur",
                    },
                    {
                      value: "Mumbai",
                      label: "Mumbai",
                    },
                    {
                      value: "Pune",
                      label: "Pune",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="p-8">
            <h1 className="flex pb-5  font-bold text-4xl text-gray-800">
              My Land Gallery
            </h1>
            <div className=" flex overflow-x-scroll pb-10 scrollbar-hide ">
              <div className="flex flex-nowrap ">
                {/*  */}

                {FilterDataset &&
                  FilterDataset.map((data) => (
                    <div className="inline-block px-3 cursor-pointer">
                      <div className="w-[500px] h-[410px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white text-black  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <img
                          onClick={() => setOpen(true)}
                          className="p-2 w-[500px] h-48 rounded-2xl"
                          src={data.ImageURL}
                          alt=""
                        />
                        <div className="p-2 px-4">
                          {/* <h1 className="mt-0  font-bold">Area: {data['metadata']['description'].split(",,")[2]} sq.m.</h1>
                          <h3 className="">
                            Loaction: {data['metadata']['description'].split(",,")[0]}, Maharashtra
                          </h3>
                          <h3 className="">Price: Rs. {data['metadata']['description'].split(",,")[5]}</h3>
                          <h3>PID: {data['metadata']['description'].split(",,")[3]}</h3>
                          <h3>Survey no: {data['metadata']['description'].split(",,")[4]}</h3>
                          <h3>Owner: {data['metadata']['description'].split(",,")[1]}</h3> */}

                          <h1 className="mt-0  font-bold">
                            Area: {data.Area} sq.m.
                          </h1>
                          <h3 className="">Price: Rs. {data.Price}</h3>
                          <h3>PID: {data.propertyID}</h3>
                          <h3>Survey no: {data.physicalSurveyNo}</h3>
                          <h3>Owner: {data.ownerName}</h3>
                        </div>
                        <div className="m-auto text-center">
                          <button
                            onClick={() => setOpen(true)}
                            className="bg-blue-500 w-[30%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded"
                          >
                            3D Land View
                          </button>
                          <Link
                          type="primary"
                          loading={loadings[0]}
                          href={`/${aadhar}/${data.propertyID}/bidboard/`}
                          // onClick={() => setDate(true)}
                          className="bg-blue-500 w-[20%] hover:bg-blue-700 text-white font-bold py-3 h-auto px-6 mx-2 rounded my-2 text-[16px]"
                        >
                          Auction
                        </Link>
                          {data.Buyer_name == null || data.Buyer_name == '0'?
                          <Button
                            type="primary"
                            loading={loadings[0]}
                            onClick={() => setDate(true)}
                            className="bg-blue-500 w-[30%] hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]"
                          >
                            Schedule 
                          </Button>
                          :
                          <Link
                          type="primary"
                          loading={loadings[0]}
                          href={`/${aadhar}/processstatus/${data.propertyID}`}
                          // onClick={() => setDate(true)}
                          className="bg-red-500 w-[30%] hover:bg-red-700 text-white font-bold py-3 h-auto px-6 mx-2 rounded my-2 text-[16px]"
                        >
                          In Process 
                        </Link>
                          }
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default lands;
