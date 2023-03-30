import { useState, useEffect } from "react";
import Navbar from '../components/navbar/Navbar';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps,Col, Row,Modal,Space, Table, Tag } from 'antd';
import { Footer } from "../components/Footer";

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'SELLER') {
              color = 'volcano';
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
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: '0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7',
      tags: ['SELLER'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: '0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7',
      tags: ['BUYER'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: '-',
      tags: ['LAND INSPECTOR'],
    },
    
  ];

const inspectordashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
              <Modal
        title="Land"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
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
          src="https://kuula.co/share/collection/7vzxT?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
        ></iframe>
      </Modal>

      <Navbar/>
      <div className="pt-[110px] rounded-2xl">

        <div className='w-[90%] shadow-2xl m-auto p-10 rounded-2xl'>
      <Row className='mb-10'>
      <Col span={12}><div className="p-2 px-4">
         <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} className="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed w-[46%] hover:bg-blue-700  mx-2 my-2 ">
Request Land Document
</button>
<button className="bg-red-500  text-white font-bold py-2 px-4 rounded   w-[94%] hover:bg-red-700  mx-2 my-2 ">
Process Status
</button>  </div></Col>
      <Col span={12}>  
<img
                  onClick={() => setOpen(true)}
                    className="m-auto w-[500px] h-48 rounded-2xl cursor-pointer hover:blur-sm"
                    
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9G2rNCbd0Putgz-ybp5IjT5QXpZ-nrp2dmo2lONj1Q&usqp=CAU&ec=48665698"
                    alt=""
                  /></Col>
    </Row>
  
      <Steps
    items={[
      {
        title: 'Login',
        status: 'finish',
        icon: <UserOutlined />,
      },
      {
        title: 'Token Send',
        status: 'finish',
        icon: <SolutionOutlined />,
      },
      {
        title: 'Document Verification',
        status: 'finish',
        icon: <SolutionOutlined />,
      },
      {
        title: 'Transaction',
        status: 'process',
        icon: <LoadingOutlined />,
      },
      {
        title: 'Ownership Transfered',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
    
  />
  <Table className="mt-10" columns={columns} dataSource={data} />
      </div>
      </div>

<Footer/>
    </div>
  );
}

export default inspectordashboard;
