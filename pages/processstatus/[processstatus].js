import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Steps,
  Col,
  Row,
  Modal,
  Space,
  Table,
  Tag,
  Button,
  Checkbox,
  Form,
  Input,
} from "antd";
import { Footer } from "../../components/footer";
import { useRouter, Router } from "next/router";
import { UpdateData } from "../../utils/updateData";
import {
  CheckBalance,
  MakePayment,
  MaketokenPayment,
  PaymentBuyertoSeller,
} from "../../utils/makePayment";
import { Chat } from "../../PushModule/@pushprotocol/uiweb";
// import { Chat } from "@pushprotocol/uiweb";

var id = "";
var Owner = "";
var Tokenid = "";
var PropertyID = "";
var SurveyNo = "";
var Area = "";
var Buyer_name = "";
var ownerAddress = "";
var Buyer_address = "";
var InspectorName = "";
var Document_Access = "";
var tokensend = "process";
var ProcessStatus;
var Document_Verify = "wait";
var Transaction = "wair";
var Ownership_Transfer = "wait";
var Price = "";
var request = false;
var ImageURL = "";
var DocumentURL = "";
var ICON = <LoadingOutlined />;
var PaymentStatus = false;
var address;
var support_address;
var BuyerTokenstatus = false;
var StampDutyTokenStatus = false;
var OwnerAdhar = "";
var OwnerContact = "";
var PaymentDuration = "";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "SELLER") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

async function getaddress() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  address = accounts[0];
  if (address == ownerAddress) {
    support_address = Buyer_address;
  } else {
    support_address = ownerAddress;
  }
}

const processstatus = () => {
  const [open3d, setOpen3d] = useState(false);
  const [openprice, setOpenprice] = useState(false);
  const [opennotify, setOpennotify] = useState(false);
  const [opendocument, setOpendocument] = useState(false);
  const [Dataset, setDataset] = useState([]);
  // const [Owner, setOwner] = useState("");
  // const [Tokenid, setTokenid] = useState("");
  // const [PropertyID, setPropertyID] = useState("");
  // const [SurveyNo, setSurveyNo] = useState("");
  // const [Area, setArea] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
    UpdateData({ Price: parseInt(values.Price),ProcessStatus:3 }, PropertyID);
    alert(
      "Price Updated Successfully. Please wait for the transaction to be completed."
    );
    FetchData();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function SetIcon(stateno, ProcessStatus) {
    if (stateno == ProcessStatus) {
      ICON = <LoadingOutlined />;
    } else {
      ICON = <SolutionOutlined />;
    }
    return ICON;
  }

  function SetStatus(stateno, ProcessStatus) {
    if (stateno == ProcessStatus) {
      return "process";
    } else if (stateno <= ProcessStatus) {
      return "finish";
    } else {
      return "wait";
    }
  }

  getaddress();

  const router = useRouter();
  const { processstatus } = router.query;

  if (5 == ProcessStatus) {
    setOpennotify(true);
    ProcessStatus = 6;
    return "finish";
  }

  function FetchData() {
    fetch("https://rich-cyan-fawn-robe.cyclic.app/SellingLand/")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setDataset(response);
        console.log("sfdbg", Dataset);
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

  setUpdateData();

  function setUpdateData() {
    for (let i in Dataset) {
      if (Dataset[i].propertyID == processstatus) {
        id = Dataset[i]._id;
        Owner = Dataset[i].owner;
        Tokenid = Dataset[i].tokenID;
        PropertyID = Dataset[i].propertyID;
        SurveyNo = Dataset[i].physicalSurveyNo;
        Area = Dataset[i].Area;
        Buyer_name = Dataset[i].Buyer_name;
        ownerAddress = Dataset[i].ownerAddress;
        Buyer_address = Dataset[i].Buyer_address;
        Document_Access = Dataset[i].Document_Access;
        tokensend = Dataset[i].tokensend;
        ProcessStatus = Dataset[i].ProcessStatus;
        Document_Verify = Dataset[i].Document_Verify;
        Transaction = Dataset[i].Transaction;
        Ownership_Transfer = Dataset[i].Ownership_Transfer;
        Price = Dataset[i].Price;
        ImageURL = Dataset[i].ImageURL;
        request = Dataset[i].request;
        InspectorName = Dataset[i].InspectorName;
        DocumentURL = Dataset[i].DocumentURL;
        PaymentStatus = Dataset[i].PaymentStatus;
        ProcessStatus = Dataset[i].ProcessStatus;
        BuyerTokenstatus = Dataset[i].BuyerTokenstatus;
        StampDutyTokenStatus = Dataset[i].StampDutyTokenStatus;
        OwnerAdhar = Dataset[i].OwnerAdhar;
        OwnerContact = Dataset[i].OwnerContact;
        PaymentDuration = Dataset[i].PaymentDuration;
      }
    }
  }

  const data = [
    {
      key: "1",
      name: Owner,
      address: ownerAddress,
      tags: ["SELLER"],
    },
    {
      key: "2",
      name: Buyer_name,
      address: Buyer_address,
      tags: ["BUYER"],
    },
    {
      key: "3",
      name: InspectorName,
      address: "-",
      tags: ["LAND INSPECTOR"],
    },
  ];

  return (
    <div>
      <Modal
        title="Notification"
        centered
        open={opennotify}
        width={600}
        closable={false}
        footer={null}
      >
        {address == ownerAddress
          ? "Thanks for Buying Land By ❤"
          : "Thanks for Selling Land By ❤"}
      </Modal>
      <Modal
        title="Update Price"
        centered
        open={openprice}
        onOk={() => setOpenprice(false)}
        onCancel={() => setOpenprice(false)}
        width={600}
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
        <Form
          className="m-auto"
          name="Update Price"
          style={{
            maxWidth: 400,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="price"
            name="Price"
            rules={[
              {
                required: true,
                message: "Update Price",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-500  hover:bg-blue-700 text-white text-center font-bold mx-auto px-4  rounded"
            >
              Update Price
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Land"
        centered
        open={open3d}
        onOk={() => setOpen3d(false)}
        onCancel={() => setOpen3d(false)}
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

      <Modal
        title="Land Document"
        centered
        open={opendocument}
        onOk={() => setOpendocument(false)}
        onCancel={() => setOpendocument(false)}
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
        <object
          data={DocumentURL}
          type="application/pdf"
          width="100%"
          height="500px"
        >
          <p>
            Unable to display PDF file. <a href={DocumentURL}>Download</a>{" "}
            instead.
          </p>
        </object>
      </Modal>

      <Navbar />
      <div className="pt-[110px] rounded-2xl">
        <div className="w-[90%] shadow-2xl m-auto p-10 rounded-2xl">
          <Row className="mb-10">
            <Col span={12}>
              <div className="p-2 px-4">
                <h1 className="mt-0  font-bold">Area: {Area} sq.m.</h1>
                <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                <h3 className="">Price: Rs. {Price}</h3>
                <h3>PID: {PropertyID}</h3>
                <h3>Survey no: {SurveyNo}</h3>
                <h3>Owner: {Owner}</h3>
              </div>
              <div className="m-auto text-center">
                <button
                  onClick={() => setOpen3d(true)}
                  className="bg-blue-500 w-[30%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded"
                >
                  3D Land View
                </button>
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-[30%] hover:bg-blue-700  mx-2 my-2 "
                  onClick={() => setOpendocument(true)}
                >
                  View Document
                </button>
                {ProcessStatus < 3 ? (
                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-[30%] hover:bg-blue-700  mx-2 my-2 "
                    onClick={() => setOpenprice(true)}
                  >
                    Update Price
                  </button>
                ) : (
                  <button
                    className="disabled:opacity-25 bg-blue-500 text-white font-bold py-2 px-4 rounded w-[30%] cursor-not-allowed hover:bg-blue-700  mx-2 my-2 "
                    disabled
                  >
                    Update Price
                  </button>
                )}
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-[30%] hover:bg-blue-700  mx-2 my-2 "
                  onClick={() => CheckBalance()}
                >
                  Check Balance
                </button>
                {PaymentStatus == true ? (
                  <button
                    disabled
                    className="bg-green-500  text-white font-bold py-2 px-4 rounded   w-[62%] hover:bg-green-700 cursor-not-allowed  mx-2 my-2 "
                  >
                    Payment Done
                  </button>
                ) : address == Buyer_address && ProcessStatus == 3 ? (
                  <>
                    <button
                      onClick={() =>
                        PaymentBuyertoSeller(
                          PropertyID,
                          Buyer_address,
                          ownerAddress,
                          Price
                        )
                      }
                      className="disabled:opacity-25 bg-green-500  text-white font-bold py-2 px-4 rounded  w-[62%] hover:bg-green-700  mx-2 my-2 "
                    > 
                      Send Token ({parseInt(Price)*0.05}LR)
                    </button>
                  </>
                ) : ProcessStatus < 4 ? (
                  <button
                    disabled
                    className="disabled:opacity-25 bg-blue-500  text-white font-bold py-2 px-4 rounded cursor-not-allowed w-[62%] hover:bg-blue-700  mx-2 my-2 "
                  >
                    Pending Processes
                  </button>
                ) : address == Buyer_address && StampDutyTokenStatus == false ? (
                  <button
                    onClick={() =>
                      MaketokenPayment(
                        PropertyID,
                        Buyer_address,
                        "0x7ed790a1ac108b9a50e24f5c5e061df59e3673a7",
                        parseInt(Price) * 0.06
                      )
                    }
                    className="disabled:opacity-25 bg-green-500  text-white font-bold py-2 px-4 rounded  w-[62%] hover:bg-green-700  mx-2 my-2 "
                  >
                    Pay for Stamp Duty ({parseInt(parseInt(Price) * 0.06)}LR)
                  </button>
                ) : address == Buyer_address && StampDutyTokenStatus == true ? (
                  <>
                    <button
                      onClick={() =>
                        MakePayment(
                          PropertyID,
                          Buyer_address,
                          ownerAddress,
                          Price
                        )
                      }
                      className="disabled:opacity-25 bg-green-500  text-white font-bold py-2 px-4 rounded  w-[62%] hover:bg-green-700  mx-2 my-2 "
                    >
                      Make Payment
                    </button>
                  </>
                ) : (
                  <button
                    disabled
                    className="disabled:opacity-25 bg-green-500  text-white font-bold py-2 px-4 rounded cursor-not-allowed w-[62%] hover:bg-green-700  mx-2 my-2 "
                  >
                    You are not allow to Pay
                  </button>
                )}
              </div>
            </Col>
            <Col span={12}>
              <img
                onClick={() => setOpen3d(true)}
                className="m-auto w-[500px] h-48 rounded-2xl cursor-pointer hover:blur-sm"
                src={ImageURL}
                alt={ImageURL}
              /> <br />
              <div className="text-center ">
                {ProcessStatus > 3?(
                  <p className="text-xl m-auto font-bold text-red-400">Transaction Duration Till <br /> {PaymentDuration}</p>
                ):(<></>)}
              <button
                  onClick={() => setOpen3d(true)}
                  className="bg-red-500 w-[30%]  hover:bg-red-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded"
                  >
                  Cancel deal
                </button>
                  </div>

            </Col>
          </Row>

          <Steps
            items={[
              {
                title: "1. Login / Verify",
                status: "finish",
                icon: <UserOutlined />,
              },
              {
                title: "2. Document Verification / Negotiation",
                status: SetStatus(2, ProcessStatus),
                icon: SetIcon(2, ProcessStatus),
                // icon: <SolutionOutlined />,
              },
              {
                title: "3. Token Send",
                status: SetStatus(3, ProcessStatus),
                icon: SetIcon(3, ProcessStatus),
              },
              {
                title: "4. Transaction",
                status: SetStatus(4, ProcessStatus),
                icon: SetIcon(4, ProcessStatus),
                // icon: <LoadingOutlined />,
              },
              {
                title: "5. Ownership Transfered",
                status: SetStatus(5, ProcessStatus),
                icon: <SmileOutlined />,
              },
            ]}
          />
          <Table
            className="mt-10"
            pagination={false}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>

      <Footer />
      <Chat
        account={address} //user address
        supportAddress={support_address} //support address
        apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
        env="staging"
      />
    </div>
  );
};

export default processstatus;
