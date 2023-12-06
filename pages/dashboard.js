import { React, useState, useEffect } from "react";
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
import Navbar from "../components/navbar/Navbar";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Metamask from "../components/metamask";
import Web3 from 'web3';
import { Footer } from "../components/footer";
import axios from "axios";

const secretKey = 'tjCmgrrcx2b7I83qu80GZhahqrHBGsTBr7Z305xYjc4AToApLWX50purgP8YYjkZn';
const clientIdKey = 'f4eb75199e000ab1e0f97f3370250ac7:c70b4f66dc0087cbb1da8dc3c2d4ad48';


const dashboard = () => {
  const [modalseller, setModalSeller] = useState(false);
  const [modalbuyer, setModalBuyer] = useState(false);
  const [modalinstpector, setModalInspector] = useState(false);
  const [clientID, setClientID] = useState('');
  const [MetamaskID, setMetamaskID] = useState('')

  useEffect(() => {
    if (window.ethereum) {
      const _web3 = new Web3(window.ethereum)
    } else {
      alert('Please install MetaMask!')
    }
  }, [])

  useEffect(() => {

    setMetamaskID(<Metamask />)
  }, [])

  const onConnect = async () => {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    // console.log("Account: " + accounts[0]);
  }

  async function SendOTP(aadhar) {
    const url = 'https://api.emptra.com/aadhaarVerification/requestOtp';

    const headers = {
      'Content-Type': 'application/json',
      secretKey,
      clientID: clientIdKey,
    };

    const requestData = {
      aadhaarNumber: aadhar,
    };

    try {
      const response = await axios.post(url, requestData, { headers });
      console.log(response.data);

      if (response.data && response.data.result && response.data.result.data) {
        const { client_id } = response.data.result.data;
        setClientID(client_id); // Store client_id in state
      }

      // Handle other response data here
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  }

  async function VerifyOTP(user, aadhar, otp) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log(clientID)
    const url = 'https://api.emptra.com/aadhaarVerification/submitOtp';

    const headers = {
      'Content-Type': 'application/json',
      secretKey,
      clientID: clientIdKey,
    };

    const requestData = {
      client_id: clientID, // Use the stored client_id from state
      otp: otp,
    };

    try {
      const response = await axios.post(url, requestData, { headers });
      console.log(response.data);

      if (response.data && response.data.result && response.data.result.data) {
        // Add code here to save the user data to your MongoDB database
        const userData = response.data.result.data;

        userData.metamaskAddress = accounts[0]

        // Create a new instance of UserDetails using the userData
        axios.post('http://localhost:8000/user', userData)
          .then(function (response) {
            console.log('User details saved successfully:', response.data);
            // Handle the response as needed
            if (user === 'seller') {
              window.location = `/${aadhar}/form`;
            } else if (user === 'buyer') {
              window.location = `/${aadhar}/lands`;
            } else if (user === 'inspector') {
              window.location = '/inspectordashboard';
            }
          })
          .catch(function (error) {
            console.error('Error saving user details:', error);
            // Handle errors here
          });



        // You can also update other state variables or perform actions here
      }
    } catch (error) {
      console.error(error);
      // Handle errors here
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
    if (errorInfo.values['Adhar Number']) {
      console.log("Failed:", errorInfo.values['otp']);
      SendOTP(errorInfo.values['Adhar Number']);
    }
    else {
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
    if (errorInfo.values['Adhar Number']) {
      console.log("Failed:", errorInfo.values['otp']);
      SendOTP(errorInfo.values['Adhar Number']);
    }
    else {
      alert(
        "Please inser Correct Adhar Card"
      )
    }
  };

  const onFinishinspector = (values) => {
    console.log("Success:", values);
    if (values.username == 'admin' && values.password == 'admin') {
      window.location = "/inspectordashboard";
    }
    else {
      alert('Invalid Credentials');
    }

  };
  const onFinishFailedinspector = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-white max-h-screen overflow-y-auto overflow-x-hidden" >
      <Navbar />
      <div>
        <img className="mt-16 mx-auto" src="https://media.istockphoto.com/id/1465469111/vector/land-registry-concept-image-with-an-imaginary-cadastral-map-of-territory-property-tax-on.jpg?s=612x612&w=0&k=20&c=sIi4lvjtH2KMDUtMH8X02FJxRdzMtytkWSieuAASp6M=" alt="" />
      </div>
      <Row gutter={16} className="justify-center ">
        <Col
          span={6}
          onClick={() => setModalSeller(true)}
          className=" m-8 cursor-pointer transition ease-in-out  flex-inline text-center  delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
        >
          <button className="bg-gray-200 w-full py-5 font-bold shadow-lg rounded-md">SELLER LOGIN</button>
        </Col>
        <Col
          span={6}
          onClick={() => setModalBuyer(true)}
          className=" m-8 cursor-pointer transition  flex-inline text-center  ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
        >
          <button className="bg-gray-200 w-full py-5 font-bold shadow-lg rounded-md">BUYER LOGIN</button>
        </Col>
        <Col
          span={6}
          onClick={() => setModalInspector(true)}
          className=" m-8 cursor-pointer flex-inline text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
        >
          <button className="bg-gray-200 w-full py-5 font-bold shadow-lg rounded-md">LAND INSPECTOR</button>
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

      <Footer />

    </div>
  );
};

export default dashboard;
