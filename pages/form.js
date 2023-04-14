import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import Navbar from "../components/navbar/Navbar";
import { Footer } from "../components/Footer";

const form = () => {

  const onFinish = (values) => {
    console.log("Success:", values);
    window.location = "/lands";
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Navbar /><div className="pt-20">

      <div className="w-1/2 shadow-2xl  rounded-2xl  mb-6 mx-auto pb-2 bg-gray-100">
        <div className="flex items-center flex-none px-4 bg-gradient-to-r  from-rose-500 via-violet-600 to-blue-700 rounded-b-none h-11 rounded-xl">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 border-2 border-[#dc2626] bg-[#dc2626] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#eab308] bg-[#eab308] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#22c55e] bg-[#22c55e] rounded-full"></div>
          </div>
        </div>

        <div className="m-10 mt-6 mb-10">
          <p className="font-bold mb-6 text-2xl text-black">ADD LAND DETAILS</p>
          <Form className="text-black" layout="vertical"          
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
            <Form.Item
              label={<label style={{ color: "black" }}>Area of Land: </label>}
              className="text-black"
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
              label={<label style={{ color: "black" }}>City: </label>}
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please input your City!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "black" }}>State: </label>}
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
              label={<label style={{ color: "black" }}>Taluka: </label>}
              name="country"
              rules={[
                {
                  required: true,
                  message: "Please input your Taluka!",
                },
              ]}
            >
              <Select>
                <Select.Option value="india">Achalpur 444806</Select.Option>
                <Select.Option value="india">Akola 444001</Select.Option>
                <Select.Option value="india">Amravati 444601</Select.Option>
                <Select.Option value="india">Balapur 444302</Select.Option>
                <Select.Option value="india">Bhandara 441201</Select.Option>
                <Select.Option value="india">Buldhana 443001</Select.Option>
                <Select.Option value="india">Chandrapur442402</Select.Option>
                <Select.Option value="india">Chatrapati sambhaji nagar</Select.Option>
                <Select.Option value="india">Chikhaldara 444807</Select.Option>
                <Select.Option value="india">Dhule 424001</Select.Option>
                <Select.Option value="india">Digras 445203</Select.Option>
                <Select.Option value="india">Gadchiroli 442605</Select.Option>
                <Select.Option value="india">Gondia 441601</Select.Option>
                <Select.Option value="india">Goregaon 400063</Select.Option>
                <Select.Option value="india">Hinganghat 442301</Select.Option>
                <Select.Option value="india">Hingna 441110</Select.Option>
                <Select.Option value="india">Hatkanangale 416109</Select.Option>
                <Select.Option value="india">Jalgaon Jamod 443402</Select.Option>
                <Select.Option value="india">Jamkhed 413201</Select.Option>
                <Select.Option value="india">Jalna 431203</Select.Option>
                <Select.Option value="india">Kalyan</Select.Option>
                <Select.Option value="india">Karad 415110</Select.Option>
                <Select.Option value="india">Karjat (Matheran) 410201</Select.Option>
                <Select.Option value="india">Koregaon 415501</Select.Option>
                <Select.Option value="india">Mahabaleshwar 412806</Select.Option>
                <Select.Option value="india">Malegaon 423203</Select.Option>
                <Select.Option value="india">Miraj 416416</Select.Option>
                <Select.Option value="india">Nagar 414001</Select.Option>
                <Select.Option value="india">Nagpur (Rural)</Select.Option>
                <Select.Option value="india">Nashik422001</Select.Option>
                <Select.Option value="india">Sangamner 422605</Select.Option>
                <Select.Option value="india">Satara 415001</Select.Option>
                <Select.Option value="india">Savner 441107</Select.Option>
                <Select.Option value="india">Solapur South</Select.Option>
                <Select.Option value="india">Thane</Select.Option>
                <Select.Option value="india">Wardha 461331</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "black" }}>Price: </label>}
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please input Land Price per sqm!",
                },
              ]}
            >
            <InputNumber width={5000} />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "black" }}>Property ID: </label>}
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
              label={<label style={{ color: "black" }}>Survey Number: </label>}
              name="survay"
              rules={[
                {
                  required: true,
                  message: "Please input Survey Number!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<label style={{ color: "black" }}>Insert Land Images: </label>}
              name="landimage"
              rules={[
                {
                  required: true,
                  message: "Please Upload Land Images!",
                },
              ]}
            >
             <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              maxCount={3}
              multiple
            >
              <Button icon={<UploadOutlined />}>Upload LandImage</Button>
            </Upload>
            </Form.Item>

            <Form.Item
              label={<label style={{ color: "black" }}>Upload Aadhar Card: </label>}
              name="adharCard"
              rules={[
                {
                  required: true,
                  message: "Please Upload Adhar Card!",
                },
              ]}
            >
             <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload Adharcard</Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 rounded"
              >
                Add Land
              </button>
            </Form.Item>

          
          </Form>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default form;
