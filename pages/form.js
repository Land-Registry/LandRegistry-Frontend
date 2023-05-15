import React, { useState ,useEffect} from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  message,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Button,
  Progress,
  Table,
} from "antd";

import Navbar from "../components/navbar/navbar";
import { Footer } from "../components/footer";

import { getMetadataURL } from "../utils/mintNFT";
import { UpdateData } from "../utils/updateData";

const props = {
  name: "file",
  listType: "picture",
  maxCount: 1,
  action: "/",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};



const form = () => {
  const [metadataStatus, setmetadataStatus] = useState(false);
  const [data, setData] = useState([]);
  const [Dataset, setDataset] = useState([]);
const [accountid, setAccount] = useState("Connect Wallet");

useEffect(() => {
  return async () => {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setAccount(accounts[0]);
  };
}, []);


function FetchData() {
  fetch("https://rich-cyan-fawn-robe.cyclic.app/SellingLand/")
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      setDataset(response);
      // console.log(Dataset);
    })
    .catch((err) => {
      console.error(err);
      // alert(err)
    });
  console.log("Function Called");
}

useEffect(() => {
  FetchData();
}, []);

// My Land
try {
  
  var datafilter = Dataset.filter(function (el) {
    return (
      el.ownerAddress.toLowerCase() == accountid.toLowerCase() &&
      el.ProcessStatus == 5
    
    );
  });
} catch (error) {
 console.log(error) 
}

function SellLand(PID) {
  UpdateData({ProcessStatus:1},PID);
  window.location.href = "/request";
}

  const onFinish = (values) => {
    setData(values);
    // console.log("Success:", values);
    getMetadataURL(
      values.district,
      values.name,
      values.area,
      values.PID,
      values.survay,
      values.price
    );
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function MintNFTRedirect() {
    // MintNFT();
    window.location.href = "/lands";
  }

  const columns = [
    {
      title: "PID",
      dataIndex: "propertyID",
      key: "propertyID",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Owner Name",
      dataIndex: "owner",
      key: "owner",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Owner",
      dataIndex: "ownerAddress",
      key: "ownerAddress",
    },
    {
      title: "Response",
      dataIndex: "propertyID",
      key: "propertyID",
      render: (text) => (
        <>
          <div className="flex">
            <button
              onClick={() => SellLand(text)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full mr-4 py-2 rounded"
            >
              Sell land
            </button>
           
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-20 bg-gray-300">
        <div className="w-[90%] shadow-2xl m-auto p-10 rounded-2xl mb-[500px]">
          <h1 className="flex   font-bold text-4xl text-gray-800">
            My Land
          </h1>

          <Table
            className="mt-10"
            pagination={false}
            columns={columns}
            dataSource={datafilter}
          />
<button>
</button>
          <a href="#Addland" className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-10 p-2 rounded">Add New Land</a>
        </div>
        <div className="my-[200px]" id="Addland">_</div>
        <div className="w-1/2 shadow-2xl  rounded-2xl  mx-auto pb-2 bg-gray-100 dark:bg-gray-100">
          <div className="flex items-center flex-none px-4 bg-gradient-to-r  from-rose-500 via-violet-600 to-blue-700 rounded-b-none h-11 rounded-xl">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 border-2 border-[#dc2626] bg-[#dc2626] rounded-full"></div>
              <div className="w-3 h-3 border-2 border-[#eab308] bg-[#eab308] rounded-full"></div>
              <div className="w-3 h-3 border-2 border-[#22c55e] bg-[#22c55e] rounded-full"></div>
            </div>
          </div>

          <div className="m-10 mt-6 mb-10" >
            <p className="font-bold mb-6 text-xl text-black">
              ADD LAND DETAILS
            </p>
            <Form
              className=""
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Land Owner Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input Owner Name",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Land Area (in sqm.)"
                name="area"
                rules={[
                  {
                    required: true,
                    message: "Please input your Area in sqm.",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="State"
                name="state"
                rules={[
                  {
                    required: true,
                    message: "Please input your State!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="District"
                name="district"
                rules={[
                  {
                    required: true,
                    message: "Please input your District!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Taluka"
                name="taluka"
                rules={[
                  {
                    required: true,
                    message: "Please input your Taluka!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please input Land Price!",
                  },
                ]}
              >
                <InputNumber width={1000} />
              </Form.Item>
              <Form.Item
                label="Property PID number"
                name="PID"
                rules={[
                  {
                    required: true,
                    message: "Please input Property PID Number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Physical Survay Number"
                name="survay"
                rules={[
                  {
                    required: true,
                    message: "Please input Physical Survay Number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Insert Land Image"
                name="landimage"
                rules={[
                  {
                    // required: true,
                    message: "Please Upload Land Images!",
                  },
                ]}
              >
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Upload LandImage</Button>
                </Upload>
              </Form.Item>

              <Form.Item
                label="Insert AdharCard Document"
                name="adharCard"
                rules={[
                  {
                    // required: true,
                    message: "Please Upload Adhar Card!",
                  },
                ]}
              >
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Upload Adharcard</Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <button
                  Type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 rounded"
                >
                  Verify Land and Create NFT
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default form;
