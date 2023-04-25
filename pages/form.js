import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  message,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from "antd";
import Navbar from "../components/navbar/Navbar";
import { Footer } from "../components/Footer";
import { getMetadataURL } from "../utils/mintNFT";
import { MintNFT } from "../utils/mintNFT";



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
  const [data,setData] = useState([]);
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
    setmetadataStatus(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function getMintNFT(){
    if(metadataStatus){
      MintNFT(data.district,
        data.name,
        data.area,
        data.PID,
        data.survay,
        data.price);
    }
  }

  function MintNFTRedirect() {
    // MintNFT();
    window.location.href = "/lands";
  }

  return (
    <>
      <Navbar />
      <div className="pt-20 bg-gray-300">
      <div className="w-1/2 shadow-2xl  rounded-2xl  mb-8 mx-auto pb-2 bg-gray-100 dark:bg-gray-100 ">
        <div className="flex items-center flex-none px-4 bg-gradient-to-r  from-rose-500 via-violet-600 to-blue-700 rounded-b-none h-11 rounded-xl">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 border-2 border-[#dc2626] bg-[#dc2626] rounded-full"></div>
              <div className="w-3 h-3 border-2 border-[#eab308] bg-[#eab308] rounded-full"></div>
              <div className="w-3 h-3 border-2 border-[#22c55e] bg-[#22c55e] rounded-full"></div>
            </div>
          </div>

          <div className="m-10 mt-6 mb-10">
            <p className="font-bold mb-6 text-xl text-black">ADD LAND DETAILS</p>
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
                label="Taulka"
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
                    required: true,
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
                    required: true,
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
                  Verify Land
                </button>
              </Form.Item>

              {!metadataStatus ? (
                <Button
                  disabled
                  onClick={() => getMintNFT()}
                  type="primary"
                  className="w-full  font-bold py-2 h-auto px-4  rounded my-2"
                >
                  Mint Land
                </Button>
              ) : (
                <Button
                  onClick={() => getMintNFT()}
                  type="primary"
                  className="w-full bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 rounded my-2"
                >
                  Add Land (MINT NFT)
                </Button>
              )}
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default form;
