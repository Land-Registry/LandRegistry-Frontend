import { React, useState,useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Modal,
  Form,
  Input,
  Checkbox,
  Space,
} from "antd";
import Navbar from "../components/navbar/navbar";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Metamask from "../components/metamask";
import Web3 from 'web3';
import { Footer } from "../components/footer";
import axios from "axios";


const dashboard = () => {
  const [modalseller, setModalSeller] = useState(false);
  const [modalbuyer, setModalBuyer] = useState(false);
  const [modalinstpector, setModalInspector] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      const _web3 = new Web3(window.ethereum)
    } else {
      alert('Please install MetaMask!')
    }
  }, [])

  const onConnect = async () => {
    
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    // console.log("Account: " + accounts[0]);
  }  

  async function SendOTP(aadhar) {
      const url = `https://rich-cyan-fawn-robe.cyclic.app/otp/sendOtp/`;
      console.log(url);
      try{
        const response = await axios.post(url, {aadharNo:aadhar}) 
        console.log(response);
      }
      catch(error){
        console.log(error);
      }
    }
  
    async function VerifyOTP(user,aadhar, otp) {
      const url = `https://rich-cyan-fawn-robe.cyclic.app/otp/verifyOtp/`;
      console.log(url);
      try{
        const response = await axios.post(url, {aadharNo:aadhar, otp:otp})
        console.log(response);
        alert(response.data);
        console.log(
          "Adhar Card "+aadhar+" Sucessfull Verified!!"
        )        
        if (user == 'seller'){
          window.location = "/form";
        }
        else if (user == 'buyer'){
          window.location = "/lands";
        }
        else if (user == 'inspector'){
          window.location = "/inspectordashboard";
        }
      }
      catch(error){
        console.log(error);
      }
    }
    
  function OTPalert(params) {
    alert('OTP will be send to your Registred Mobile');    
    }

  function OTPSelleralert(params) {
  alert('OTP will be send to your Registred Mobile');    
  }
  const onFinishseller = (values) => {
    VerifyOTP(
      'seller',
      values['Adhar Number'],
      values['otp']
    )
  };
  const onFinishFailedseller = (errorInfo) => {
    if (errorInfo.values['Adhar Number']){
      console.log("Failed:", errorInfo.values['otp']);
      SendOTP(errorInfo.values['Adhar Number']);
    }
    else{
    alert(
      "Please inser Correct Adhar Card"
    )
    }
  
  };
  
  const onFinishbuyer = (values) => {
    VerifyOTP(
      'buyer',
      values['Adhar Number'],
      values['otp']
    )
  };
  const onFinishFailedbuyer = (errorInfo) => {
    if (errorInfo.values['Adhar Number']){
      console.log("Failed:", errorInfo.values['otp']);
      SendOTP(errorInfo.values['Adhar Number']);
    }
    else{
    alert(
      "Please inser Correct Adhar Card"
    )
    }
  };

  const onFinishinspector = (values) => {
    console.log("Success:", values);
    if (values.username=='admin' && values.password=='admin') {
    window.location = "/inspectordashboard";
    }
    else{
      alert('Invalid Credentials');
    }
    
  };
  const onFinishFailedinspector = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-gray-200 max-h-screen overflow-y-auto overflow-x-hidden" >
      <Navbar />
      <Row gutter={16} className="justify-center py-64">
        <Col
          span={6}
          onClick={() => setModalSeller(true)}
          className=" m-8 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        >
          <Card title="SELLER LOGIN" bordered={false}>
            <ul className="font-bold text-lg mb-2 text-center">FUNCTIONS OF SELLER</ul>
            <ul>
              <li className="text-center">CONNECT TO METAMASK</li>
              <li className="text-center">ADD LAND DETAILS</li>
              <li className="text-center">UPDATE LAND DETAILS</li>
            </ul>
          </Card>
        </Col>
        <Col
          span={6}
          onClick={() => setModalBuyer(true)}
          className=" m-8 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
        >
          <Card title="Buyer Login" bordered={false}>
          <ul className="font-bold text-lg mb-2 text-center">FUNCTIONS OF BUYER</ul>
            <ul>
              <li className="text-center">CONNECT TO METAMASK</li>
              <li className="text-center">BUY LAND</li>
              <li className="text-center">REQUEST FOR DOCUMENTS</li>
            </ul>
          </Card>
        </Col>
        <Col
          span={6}
          onClick={() => setModalInspector(true)}
          className=" m-8 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
        >
          <Card title="Land Inspector" bordered={false}>
          <ul className="font-bold text-lg mb-2 text-center">FUNCTIONS OF LAND INSPECTOR</ul>
            <ul>
              <li className="text-center">LOGIN USING UMIQUE ID</li>
              <li className="text-center">VERIFY LAND DETAILS</li>
              <li className="text-center">TRANSFER OWNERSHIP</li>
              <li className="text-center">UPDATE LAND DETAILS</li>
            </ul>
          </Card>
        </Col>
      </Row>

      <Modal
        title="Seller Login"
        centered
        footer={null}
        open={modalseller}
        onOk={() => setModalSeller(false)}
        onCancel={() => setModalSeller(false)}
      >
          {(<Metamask /> == '') ? (

          <>
            <p> Connect Wallet </p>
            <br />
            <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Wallet Connect
            </button>
          </>
        ) : (
          <>
            <p>Wallet Connected </p>
            <button className="mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
              {<Metamask />}
            </button>
          </>
        )}

        <Form
          layout="vertical"
          name="basic"
          onFinish={onFinishseller}
          onFinishFailed={onFinishFailedseller}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Adhar Number"
            name="Adhar Number"
            rules={[
              {
                required: true,
                message: "Please input your Adhar Number!",
              },
            ]}
          >
            <Input placeholder="xxxx xxxx xxxx xxxx" />
          </Form.Item>

          <Form.Item label="OTP">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="otp"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "OTP send to your Linked Mobile Number",
                    },
                  ]}
                >
                  <Input placeholder="Enter OTP" />
                </Form.Item>
              </Col>
              
            </Row>
          </Form.Item>

          <Form.Item wrapperCol={{}}>
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 rounded"
              >
                Get OTP / Login
              </button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Buyer Login"
        centered
        footer={null}
        open={modalbuyer}
        onOk={() => setModalBuyer(false)}
        onCancel={() => setModalBuyer(false)}
      >
           {(<Metamask /> == '') ? (

          <>
            <p> Connect Wallet </p>
            <br />
            <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Wallet Connect
            </button>
          </>
        ) : (
          <>
            <p>Wallet Connected </p>
            <button className="mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
              {<Metamask />}
            </button>
          </>
        )}

        <Form
          layout="vertical"
          name="basic"
          action="/lands"
          onFinish={onFinishbuyer}
          onFinishFailed={onFinishFailedbuyer}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
        <Form.Item
            label="Adhar Number"
            name="Adhar Number"
            rules={[
              {
                required: true,
                message: "Please input your Adhar Number!",
              },
            ]}
          >
            <Input placeholder="xxxx xxxx xxxx xxxx" />
          </Form.Item>

          <Form.Item label="OTP">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="otp"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "OTP send to your Linked Mobile Number",
                    },
                  ]}
                >
                  <Input placeholder="Enter OTP" />
                </Form.Item>
              </Col>
              
            </Row>
          </Form.Item>

          <Form.Item wrapperCol={{}}>
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 rounded"
              >
                 Get OTP / Login
              </button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="LandInspector Login"
        centered
        footer={null}
        open={modalinstpector}
        onOk={() => setModalInspector(false)}
        onCancel={() => setModalInspector(false)}
      >
      

        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinishinspector}
          onFinishFailed={onFinishFailedinspector}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot text-blue-600" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Form.Item wrapperCol={{}}>
              <Space
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 rounded"
                >
                  Login
                </button>
              </Space>
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
      
      <Footer/>
     
      </div>
  );
};

export default dashboard;
