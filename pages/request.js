import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps, Col, Row, Modal, Space, Table, Tag } from "antd";
import { Footer } from "../components/Footer";
import processstatus from "./processstatus/[processstatus]";
import { UpdateData } from "../utils/updateData";
import Metamask from "../components/metamask";

var status = "accept";

const columns1 = [
  {
    title: "PID",
    dataIndex: "propertyID",
    key: "propertyID",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Seller Name",
    dataIndex: "Owner",
    key: "owner",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Seller Address",
    dataIndex: "ownerAddress",
    key: "ownerAddress",
  },
  {
    title: "Status",
    dataIndex: "request",
    key: "request",
    render: (text) => (
      <>
        <div className="flex">
          {" "}
          {text == false ? (
            <button
              onClick={() => (window.location.href = `/processstatus/${text}`)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-4 py-2 rounded"
            >
              Accepted {text}
            </button>
          ) : text==true? (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold w-full  mr-4 py-2 rounded"
            >
              Pending
            </button>
          ):(<></>)}
        </div>
      </>
    ),
  },
  {
    title: "View",
    dataIndex: "propertyID",
    key: "propertyID",
    render: (text) => (
      <div className="flex">
        {" "}
        <button
          onClick={() => (window.location.href = `/processstatus/${text}`)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-4 py-2 rounded"
        >
          View Land Status
        </button>
      </div>
    ),
  },
];

function AcceptResponse(text) {
  UpdateData({ request: false }, text);
  setTimeout
  (() => {
  window.location.href = `/processstatus/${text}`;
  }, 3000);
}

const columns = [
  {
    title: "PID",
    dataIndex: "propertyID",
    key: "propertyID",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Buyer Name",
    dataIndex: "Buyer_name",
    key: "Buyer_name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Buyer Address",
    dataIndex: "Buyer_address",
    key: "Buyer_address",
  },
  {
    title: "Response",
    dataIndex: "propertyID",
    key: "propertyID",
    render: (text) => (
      <>
        <div className="flex">
          <button
            onClick={() => AcceptResponse(text)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-4 py-2 rounded"
          >
            Accept
          </button>
          <br />
          <button
            onClick={()=>UpdateData({ Buyer_address: "", Buyer_name: "" }, text)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold w-full  mr-4 py-2 rounded"
          >
            Reject
          </button>
        </div>
      </>
    ),
  },
];

const Request = () => {
  const [Dataset, setDataset] = useState([]);
  const [accountid, setAccount] = useState('Connect Wallet');


  useEffect(() => {
    return async () => {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    };
  }, []);


  fetch("http://localhost:8000/SellingLand")
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

  // My Land Requested
  let data = Dataset.filter(function (el) {
    return (
      (el.ownerAddress.toLowerCase())== (accountid.toLowerCase()) &&
      el.Buyer_address != "" &&
      el.request != false
    );
  });

  // Land I Request
  let data1 = Dataset.filter(function (el) {
    console.log("sdfghgds "+el.Buyer_address+" wergfth "+accountid)
    return ((el.Buyer_address) == (accountid.toLowerCase())); 
  });

  return (
    <div>
      <Navbar />
      <div className="pt-[110px] rounded-2xl">
        <div className="w-[90%] shadow-2xl m-auto p-10 rounded-2xl">
          <h1 className="flex   font-bold text-4xl text-gray-800">
            My Land Requested
          </h1>

          <Table
            className="mt-10"
            pagination={false}
            columns={columns}
            dataSource={data}
          />
        </div>

        <div className="w-[90%] mt-24 shadow-2xl m-auto p-10 rounded-2xl">
          <h1 className="flex   font-bold text-4xl text-gray-800">
            Land I Request
          </h1>

          <Table
            className="mt-10"
            pagination={false}
            columns={columns1}
            dataSource={data1}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Request;
