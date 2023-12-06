import { useState, useEffect } from "react";
import { Button, Modal, Card } from "antd";
import Navbar from "../../components/navbar/Navbar";
import { Select } from "antd";
import { Footer } from "../../components/footer";
import { retrieveNFT } from "../../utils/retrieveNFT";
import { useRouter } from 'next/router';
import axios from "axios";
import Metamask from "../../components/metamask";
import Router from "next/router";
import { UpdateData } from "../../utils/updateData";
import { createAuction } from "../../utils/createAuction";
import { MaketokenPayment, PaymentBuyertoSeller } from "../../utils/makePayment";

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
  const [Data, setData] = useState([]);
  const [address, setaddress] = useState("");
  const [FilterDataset, setFilterDataset] = useState([]);
  const [loadings, setLoadings] = useState([]);
  const [Dataset, setDataset] = useState([]);
  const router = useRouter();
  const { aadhar } = router.query;
  const [LoginUserData, setLoginUserData] = useState({});

  useEffect(() => {
    // Fetch user details and related data based on the aadhar value
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/getall/get-data-by-aadhar/${aadhar}`);
        const data = await response.json();
        // console.log(data)
        setLoginUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (aadhar) {
      fetchData();
    }

  })

  useEffect(() => {
    // setData(retrieveNFT())
    // console.log(Data)
    setaddress(<Metamask />);

    fetch("http://localhost:8000/SellingLand")
      .then((response) => response.json())
      .then(async (response) => {
        // console.log(response);
        setDataset(response);
        console.log("2345", response);

        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        owneraddress = accounts[0];

        let FilterDataset1 = response.filter(function (el) {
          return (
            el.aadhaar_number != aadhar
            // &&
            // el.request == false
            && el.ProcessStatus == 1
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
    enterLoading(0);
    console.log(PID);
    // processstatus(PID)

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const address = accounts[0];

    UpdateData(
      { Buyer_address: address },
      PID
    );
    setTimeout(() => {
      const { pathname } = Router;
      //  Router.push(`/processstatus/${PID}`)
      Router.push(`/request`);
    }, 3000);
  }

  async function JoinAuction(PID, ownerAddress,Price) {
    try {

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      const address = accounts[0];
  
      await UpdateData( { Buyer_address: address,Buyer_name:LoginUserData?.user?.full_name,Buyer_adhar:LoginUserData?.user?.aadhaar_number }, PID );

      // Assuming PaymentBuyertoSeller is an asynchronous operation
      await MaketokenPayment(PID, ownerAddress, Price);
  
      // If PaymentBuyertoSeller is successful, proceed to the next step
      const userId = 'user123';
  
      try {
        const url = `http://localhost:8000/auction/add-buyer/${PID}/${LoginUserData?.user?._id}`;
        const response = await axios.post(url);
        if (response.status === 200) {
          Router.push(`/${aadhar}/${PID}/bidboard`);
          console.log('Buyer added to auction successfully');
        } else {
          console.error('Error adding buyer to auction:', response.data.message);
        }
      } catch (error) {
        console.error('Error adding buyer to auction:', error.message);
      }
    } catch (error) {
      console.error('Error during PaymentBuyertoSeller:', error.message);
    }
  }
  

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
              Land Gallery
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
                          <h1 className="mt-0  font-bold justify-between flex ">
                            <div>
                              Area: {data.Area} sq.m.
                            </div>
                            {data.auctioncreated ?
                              <div className="bg-gray-200 px-3 rounded-lg">Auction Scheduled</div> : null}
                          </h1>
                          <h3 className="">Price: Rs. {data.Price}</h3>
                          <h3 className="">Owner: {data.ownerName}</h3>
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
                          {data.auctioncreated ?
                            <Button
                              type="primary"
                              loading={loadings[0]}
                              onClick={() => JoinAuction(data.propertyID,data.ownerAddress,data.Price)}
                              className="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]"
                            >
                              Join Auction
                            </Button> :
                            <Button
                              type="primary"
                              loading={loadings[0]}
                              // onClick={() => RequestLand(data.propertyID)}
                              className="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]"
                            >
                              Contact Owner
                            </Button>
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
