import React from "react";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
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

      <div className="w-1/2 shadow-2xl  rounded-2xl  mb-6 mx-auto pb-2">
        <div className="flex items-center flex-none px-4 bg-gradient-to-r from-[#240146] via-[#741760]  to-[#f63d8d] rounded-b-none h-11 rounded-xl">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 border-2 border-[#dc2626] bg-[#dc2626] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#eab308] bg-[#eab308] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#22c55e] bg-[#22c55e] rounded-full"></div>
          </div>
        </div>

        <div className="m-10 mt-6 mb-10">
          <p className="font-bold mb-6 text-xl">#Add Land</p>
          <Form className="" layout="vertical"          
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
            <Form.Item
              label="Area (in sqm.)"
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
              label="City"
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
              label="Country"
              name="country"
              rules={[
                {
                  required: true,
                  message: "Please input your Country!",
                },
              ]}
            >
              <Select>
                <Select.Option value="india">India</Select.Option>
              </Select>
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
              label="Insert AdharCard Document"
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
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 rounded"
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
