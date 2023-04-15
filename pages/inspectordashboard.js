import { useState, useEffect } from "react";
import Navbar from '../components/navbar/Navbar';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Table, Tag } from 'antd';
import { Footer } from "../components/Footer";

const columns = [
    {
      title: 'PID',
      dataIndex: 'pid',
      key: 'pid',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Seller Name',
      dataIndex: 'sname',
      key: 'sname',
    },
    {
      title: 'Buyer Name',
      dataIndex: 'bname',
      key: 'bname',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Land View',
      key: 'landview',
      dataIndex: 'landview',
       
    },
    {
      title: 'Transfer Ownership',
      key: 'transfer',
      dataIndex: 'transfer',
    },
    
  ];
  const data = [
    {
      key: '1',
      pid: '1234',
      sname: 'Seller',
      bname: 'Buyer',
      price: '1000',
      landview: <Button type="primary" href="/processstatus/1234" className=" bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]">
      View
</Button>,
      transfer: <Button type="primary" href="/processstatus/1234" className="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 h-auto px-4 mx-2 rounded my-2 text-[16px]">
      Transfer</Button>,

    },
    
    
  ];

const inspectordashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
    

      <Navbar/>
      <div className="pt-[110px] rounded-2xl">

        <div className='w-[90%] shadow-2xl m-auto p-10 rounded-2xl'>
     
    <Table className="mt-10" pagination={false} columns={columns} dataSource={data} />
      </div>
      </div>

<Footer/>
    </div>
  );
}

export default inspectordashboard;
