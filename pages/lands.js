import { useState, useEffect } from "react";
import { Button, Modal, Card } from "antd";
import Navbar from "../components/navbar/Navbar";
import { Select } from "antd";
import { Footer } from "../components/Footer";
import { retrieveNFT } from "../utils/retrieveNFT";
import axios from "axios";
import Metamask from "../components/metamask";
import processstatus from "./processstatus/[processstatus]";
import Router from 'next/router'
import { UpdateData } from "../utils/updateData";

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log("search:", value);
};

var owneraddress;
var FilterDataset = [];
const contractaddress = "0x2f9227E2e1465a1bB38cE53c4516eC867Ac1535D";



const lands = () => {
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState([]);
  const [address, setaddress] = useState("");

  const [loadings, setLoadings] = useState([]);
  const [Dataset, setDataset] = useState([]);

  fetch("http://localhost:8000/SellingLand")
    .then((response) => response.json())
    .then(async (response) => {
      // console.log(response);
      setDataset(response);
      console.log(Dataset);
      
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      owneraddress = accounts[0];

      FilterDataset = Dataset.filter(function (el) {
        return (
          (el.ownerAddress.toLowerCase())!= (owneraddress.toLowerCase()) && (el.request == false)
        );
      });

    })
    .catch((err) => {
      console.error(err);
      // alert(err)
    });

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

  useEffect(() => {
    // setData(retrieveNFT())
    // console.log(Data)
    setaddress(<Metamask />);
  }, []);

  // const options = {
  //   method: "GET",
  //   url: `https://api.nftport.xyz/v0/nfts/${contractaddress}`,
  //   params: {
  //     chain: "polygon",
  //     include: "metadata",
  //     page_number: "1",
  //     page_size: "50",
  //     refresh_metadata: "false",
  //   },
  //   headers: {
  //     accept: "application/json",
  //     Authorization: "bfb1eeca-e144-4c3b-82ab-13d5bef82804",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     // console.log(response.data);
  //     setData(response.data.nfts);
  //     console.log(Data);
  //     // console.log(split_string);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

    async function RequestLand(PID) {
      enterLoading(0)
      console.log(PID)
      // processstatus(PID)

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      owneraddress = accounts[0];
      
      UpdateData({Buyer_address:owneraddress,Document_Access:owneraddress,request:true},PID)

      const {pathname} = Router
       Router.push(`/processstatus/${PID}`)    }

  return (
    <div className="bg-slate-100">
      <Navbar />

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
          src="https://kuula.co/share/collection/7vzxT?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
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
              Selling Land Gallary
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
                          <h3>Owner: {data.ownerAddress}</h3>
                        </div>
                        <div className="m-auto text-center">
                          <button
                            onClick={() => setOpen(true)}
                            className="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded"
                          >
                            3D Land View
                          </button>
                          <Button
                            type="primary"
                            loading={loadings[0]}
                            onClick={() => RequestLand(data.propertyID)}
                            className="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]"
                          >
                            Request Document
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col m-auto p-auto w-[90%] shadow-2xl  mt-10 rounded-2xl mb-10">
        <div className="flex items-center flex-none px-4 bg-gradient-to-r from-[#240146] via-[#741760]  to-[#f63d8d] rounded-b-none h-11 rounded-xl">
<div className="pt-[130px]">
      <div className="flex flex-col m-auto p-auto w-[90%] shadow-2xl rounded-2xl">
        <div className="flex items-center flex-none px-4 bg-gradient-to-r from-rose-500 via-violet-600 to-blue-700 rounded-b-none h-11 rounded-xl">
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
          <h1 className="flex pb-5  font-bold text-4xl text-gray-700">
            SELLING LAND
          </h1>
          <div className="flex overflow-x-scroll pb-10 scrollbar-hide ">
            <div className="flex flex-nowrap "> 

            {
                  Data &&
                  Data.map((data) => (
                  data['creator_address'] == address ?(
              <div className="inline-block px-3 cursor-pointer">
                <div className="w-[500px] h-[470px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3SI5bhu0nhSe6xiB08qoNEOPmNYpT05ODRoxxn_8Xg&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4 text-black">
                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} className="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button className="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded my-2">
Request Land Document
</button>
                
                  </div>
                </div>
              </div>

              <div               className="inline-block px-3 cursor-pointer"              >
                <div className="w-[500px] h-[410px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgp7aWgs3y16pdSdukJcmPrKn2vFp_f-Mms_PiF5eHXQ&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">

                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} className="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button className="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded my-2">
Request Land Document
</button>
                
                  </div>
                </div>
              </div>

              <div               className="inline-block px-3 cursor-pointer"              >
                <div className="w-[500px] h-[410px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1I0AfGRSj-3WqexUhRL4TeFbTmGU11LTxaHVPbH7QkA&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">

                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} className="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button className="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded my-2">
Request Land Document
</button>
                
                  </div>
                </div>
              </div>

              <div               className="inline-block px-3 cursor-pointer"              >
                <div className="w-[500px] h-[410px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9G2rNCbd0Putgz-ybp5IjT5QXpZ-nrp2dmo2lONj1Q&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">
                    <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                    <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                    <h3 className="">Price: Rs. 1,00,000</h3>
                    <h3>PID: 12345</h3>
                    <h3>Survey no: 123</h3>
                    <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">
                    <button
                      onClick={() => setOpen(true)}
                      className="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded"
                    >
                      3D Land View
                    </button>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed w-[46%] hover:bg-blue-700  mx-2 my-2 ">
                      Request Land Document
                    </button>
                    <button
                      onClick={processstatus}
                      className="bg-red-500  text-white font-bold py-2 px-4 rounded   w-[96%] hover:bg-red-700  mx-2 my-2 "
                    >
                      Process Status
                    </button>
                  </div>
                </div>
              </div>
  ):(<></>)))
}
           
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
      </div>
  );
};

export default lands;
