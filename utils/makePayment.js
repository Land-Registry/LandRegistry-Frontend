import Web3 from "web3";
import { Paymentabi, PaymentcontractAddress } from "./abi";
import { UpdateData } from "./updateData";

export const MakePayment = async (PID, fromaddress, toaddress, amount) => {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask first.");
  }

  window.addEventListener("load", async () => {
    try {
      await ethereum.enable();
    } catch (error) {}
  });
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(Paymentabi, PaymentcontractAddress);
  const balanceOf = await contract.methods.balanceOf(fromaddress).call();

  if (amount * 10 ** 18 <= balanceOf) {
    const MakePayment = await contract.methods
      .transferFrom(fromaddress, toaddress, BigInt((parseInt(amount)*0.95) * 10 ** 18))
      .send({ from: fromaddress });

    if (MakePayment != "") {
      console.log(MakePayment);
      console.log(MakePayment["transactionHash"]);
        UpdateData(
          {
            PaymentStatus: true,
            TransactionHash: MakePayment["transactionHash"],
          },
          PID
        );
      alert("Payment Done");
    }
  } else {
    alert("Insufficient Balance");
  }
};

export const MaketokenPayment = async (PID, fromaddress, toaddress, amount) => {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask first.");
  }

  window.addEventListener("load", async () => {
    try {
      await ethereum.enable();
    } catch (error) {}
  });
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(Paymentabi, PaymentcontractAddress);
  const balanceOf = await contract.methods.balanceOf(fromaddress).call();

  if (amount * 10 ** 18 <= balanceOf) {
    const MakePayment = await contract.methods
      .transferFrom(fromaddress, toaddress, BigInt(parseInt(amount) * 10 ** 18))
      .send({ from: fromaddress });

    if (MakePayment != "") {
      console.log(MakePayment);
      console.log(MakePayment["transactionHash"]);
        UpdateData(
          {
            StampDutyTokenStatus: true,
          },
          PID
        );
      alert("Payment Done");
    }
  } else {
    alert("Insufficient Balance");
  }
};

export const PaymentBuyertoSeller = async (PID, fromaddress, toaddress, amount) => {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask first.");
  }

  window.addEventListener("load", async () => {
    try {
      await ethereum.enable();
    } catch (error) {}
  });
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(Paymentabi, PaymentcontractAddress);
  const balanceOf = await contract.methods.balanceOf(fromaddress).call();

  if (amount * 10 ** 18 <= balanceOf) {
    const MakePayment = await contract.methods
      .transferFrom(fromaddress, toaddress, BigInt((parseInt(amount)*0.05) * 10 ** 18))
      .send({ from: fromaddress });
      if (MakePayment != "") {
        console.log(MakePayment);
        console.log(MakePayment["transactionHash"]);
        const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+3).padStart(2,"0");

let currentYear = date.getFullYear();
let DurationDate = `${currentDay}-${currentMonth}-${currentYear}`
          UpdateData(
            {
              StampDutyTokenStatus: true,
              ProcessStatus:4,
              PaymentDuration:DurationDate
            },
            PID
          );
        alert("Payment Done");
        // window.location.href = "/inspectorDashboard";
      }


  } else {
    alert("Insufficient Balance");
  }
};

export const CheckBalance = async () => {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask first.");
  }
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const toaddress = accounts[0];

  window.addEventListener("load", async () => {
    try {
      await ethereum.enable();
    } catch (error) {}
  });
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(Paymentabi, PaymentcontractAddress);

  const Balance = await contract.methods.balanceOf(toaddress).call();

  alert(`${Balance / 10 ** 18} LR`);

  return Balance / 10 ** 18;
};

export const TokenApprove = async (spender, value) => {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask first.");
  }
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const walletaddress = accounts[0];

  window.addEventListener("load", async () => {
    try {
      await ethereum.enable();
    } catch (error) {}
  });
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(Paymentabi, PaymentcontractAddress);

  const approve = await contract.methods
    .approve(spender, value)
    .send({ from: walletaddress });

  return approve;
};
