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

var status ='accept';

const columns1 = [
  {
    title: "PID",
    dataIndex: "pid",
    key: "pid",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Seller Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  
  {
    title: "Seller Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "View",
    dataIndex: "view",
    key: "view",
  },
];

const columns = [
  {
    title: "PID",
    dataIndex: "pid",
    key: "pid",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Buyer Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  
  {
    title: "Buyer Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Response",
    dataIndex: "response",
    key: "response",
  },
];
const data = [
  {
    key: "1",
    pid: "1234",
    name: "John Brown",
    response: (
      <div className="flex">
        {" "}
        <button
          onClick={() => processstatus("1234")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-4 py-2 rounded"
        >
          Accept
        </button>
        <br />
        <button
          onClick={() => MintNFT()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold w-full  mr-4 py-2 rounded"
        >
          Reject
        </button>
      </div>
    ),
    address: "0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7",
  },
];

const data1 = [
  {
    key: "1",
    pid: "1234",
    name: "John Brown",
    status: (
      <div className="flex">
        {" "}
        {status == "accept" ? (
          <button
          onClick={() => processstatus("1234")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-4 py-2 rounded"
          >
          Accepted
        </button>
        ):(
          <button
          onClick={() => MintNFT()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold w-full  mr-4 py-2 rounded"
          >
          Rejected
        </button>
        )}
      </div>
    ),
    address: "0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7",
    view: (
      <div className="flex">
        {" "}
        <button
        
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-4 py-2 rounded"
        >
          View Land Status
        </button>
      </div>
    ),
  },
];

const Request = () => {
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
