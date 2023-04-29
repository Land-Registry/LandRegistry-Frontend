import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Progress, Table } from "antd";
import { Footer } from "../components/Footer";
import { MainUpdateData, UpdateData } from "../utils/updateData";
import { TransferOwnership } from "../utils/ContractPlugins";

// const data = [
//   {
//     key: "1",
//     pid: "1234",
//     sname: "Seller",
//     bname: "Buyer",
//     price: "1000",
//     landview: (
//       <Button
//         type="primary"
//         href="/processstatus/1234"
//         className=" bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]"
//       >
//         View
//       </Button>
//     ),
//     transfer: (
//       <Button
//         type="primary"
//         href="/processstatus/1234"
//         className="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]"
//       >
//         Transfer
//       </Button>
//     ),
//     status: ["Process"],
//   },
// ];

const inspectordashboard = () => {
  const [open, setOpen] = useState(false);
  const [Dataset, setDataset] = useState([]);
  const increase = (PID) => {
    alert("Process Increment");
    UpdateData({ ProcessStatus: setPercent(PID) + 1 }, PID);
  };
  const decline = (PID) => {
    alert("Process Decrement");
    UpdateData({ ProcessStatus: setPercent(PID) - 1 }, PID);
  };

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

  const data = Dataset.filter(function (el) {
    return el.request == true;
  });

  function transferNFT(propertyID) {
    let data = Dataset.filter(function (el) {
      console.log(el.propertyID, propertyID);
      return el.propertyID == propertyID;
    });
    TransferOwnership(
      data[0].ownerAddress,
      data[0].Buyer_address,
      data[0].tokenID
    );
    MainUpdateData({ owner: data[0].Buyer_name }, propertyID);
    UpdateData({ ownerAddress: data[0].Buyer_address }, propertyID);
    UpdateData({ owner: data[0].Buyer_name }, propertyID);
    UpdateData({ ProcessStatus: 2 }, propertyID);
    setTimeout(() => {
      window.location.href = "/lands";
    }, 5000);
  }

  function CheckTransaction(propertyID) {
    let data = Dataset.filter(function (el) {
      console.log(el.propertyID, propertyID);
      return el.propertyID == propertyID;
    });
    return data[0].PaymentStatus;
  }

  function ViewOnPolyscan(propertyID) {
    let data = Dataset.filter(function (el) {
      console.log(el.propertyID, propertyID);
      return el.propertyID == propertyID;
    });
    window.open("https://mumbai.polygonscan.com/tx/" + data[0].TransactionHash);
    return data[0].TransactionHash;
  }

  const columns = [
    {
      title: "PID",
      dataIndex: "propertyID",
      key: "propertyID",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Seller Address",
      dataIndex: "ownerAddress",
      key: "ownerAddress",
      render: (text) => <a>{text.slice(0, 12) + "..."}</a>,
    },
    {
      title: "Buyer Address",
      dataIndex: "Buyer_address",
      key: "Buyer_address",
      render: (text) => <a>{text.slice(0, 12) + "..."}</a>,
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "Land View",
      key: "landview",
      dataIndex: "propertyID",
      render: (text) => (
        <Button
          type="primary"
          onClick={() => {
            console.log(text);
            window.location.href = `/processstatus/${text}`;
          }}
          className=" bg-blue-500 w-[46%] mr-4 hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]"
        >
          View
        </Button>
      ),
    },
    {
      title: "Transfer Ownership",
      key: "transfer",
      dataIndex: "propertyID",
      render: (text) => (
        <>
          {CheckTransaction(text) == true ? (
            <>
              <Button
                type="primary"
                onClick={() => {
                  ViewOnPolyscan(text);
                }}
                className="bg-blue-500 w-[46%]  hover:bg-blue-700 mr-2 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]"
              >
                Polyscan{" "}
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  transferNFT(text);
                }}
                className="bg-blue-500 w-[46%] -mr-4 hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]"
              >
                Transfer
              </Button>{" "}
            </>
          ) : (
            <Button
              type="primary"
              disabled
              className="bg-blue-500  -mr-4 hover:bg-red-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]"
            >
              Transaction Pending
            </Button>
          )}
        </>
      ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "propertyID",
      render: (PID) => (
        <>
          <Progress
            type="circle"
            percent={setPercent(PID) * 20}
            style={{
              marginRight: 8,
            }}
          />
          <Button.Group>
            <Button onClick={() => decline(PID)} icon={<MinusOutlined />} />
            <Button onClick={() => increase(PID)} icon={<PlusOutlined />} />
          </Button.Group>
        </>
      ),
    },
  ];

  function setPercent(PID) {
    let resultarrray = data.find((item) => item.propertyID == PID);
    return resultarrray.ProcessStatus;
  }
  return (
    <div>
      <Navbar />
      <div className="pt-[110px] rounded-2xl">
        <div className="w-[90%] shadow-2xl m-auto p-10 rounded-2xl">
          <Table
            className="mt-10"
            pagination={false}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default inspectordashboard;
