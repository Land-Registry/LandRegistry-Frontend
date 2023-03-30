import { useState, useEffect } from "react";
import { Button, Modal, Card } from "antd";
import Navbar from "../components/navbar/Navbar";
import { Select } from 'antd';
import { Footer } from "../components/Footer";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const lands = () => {
  const [open, setOpen] = useState(false);
  const [songs, setSongs] = useState([]);

  function processstatus(params) {
    window.location='/processstatus';
  }
  return (
    <div className="  ">
      <Navbar />

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

<div className="pt-[130px]">
      <div class="flex flex-col m-auto p-auto w-[90%] shadow-2xl rounded-2xl">
        <div className="flex items-center flex-none px-4 bg-gradient-to-r from-[#240146] via-[#741760]  to-[#f63d8d] rounded-b-none h-11 rounded-xl">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 border-2 border-[#dc2626] bg-[#dc2626] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#eab308] bg-[#eab308] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#22c55e] bg-[#22c55e] rounded-full"></div>
          <div className="w-96 h-3 -mt-2.5 pl-4">
          <Select
    showSearch
    placeholder="Select a City"
    optionFilterProp="children"
    defaultValue="Nagpur"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Nagpur',
        label: 'Nagpur',
      },
      {
        value: 'Mumbai',
        label: 'Mumbai',
      },
      {
        value: 'Pune',
        label: 'Pune',
      },
    ]}
  />
          </div>
          </div>
        </div>
        <div className="p-8">
          <h1 class="flex pb-5  font-bold text-4xl text-gray-800">
            Selling Land Gallary
          </h1>
          <div class="flex overflow-x-scroll pb-10 scrollbar-hide ">
            <div class="flex flex-nowrap ">

              <div               class="inline-block px-3 cursor-pointer"              >
                <div class="w-[500px] h-[410px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3SI5bhu0nhSe6xiB08qoNEOPmNYpT05ODRoxxn_8Xg&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">

                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} class="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button class="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded my-2">
Request Land Document
</button>
                
                  </div>
                </div>
              </div>

              <div               class="inline-block px-3 cursor-pointer"              >
                <div class="w-[500px] h-[410px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgp7aWgs3y16pdSdukJcmPrKn2vFp_f-Mms_PiF5eHXQ&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">

                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} class="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button class="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded my-2">
Request Land Document
</button>
                
                  </div>
                </div>
              </div>

              <div               class="inline-block px-3 cursor-pointer"              >
                <div class="w-[500px] h-[410px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1I0AfGRSj-3WqexUhRL4TeFbTmGU11LTxaHVPbH7QkA&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">

                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} class="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button class="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded my-2">
Request Land Document
</button>
                
                  </div>
                </div>
              </div>

              <div               class="inline-block px-3 cursor-pointer"              >
                <div class="w-[500px] h-[410px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9G2rNCbd0Putgz-ybp5IjT5QXpZ-nrp2dmo2lONj1Q&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">

                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} class="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button class="bg-blue-500 w-[46%] hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded my-2">
Request Land Document
</button>
                
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="flex flex-col m-auto p-auto w-[90%] shadow-2xl  mt-10 rounded-2xl mb-10">
        <div className="flex items-center flex-none px-4 bg-gradient-to-r from-[#240146] via-[#741760]  to-[#f63d8d] rounded-b-none h-11 rounded-xl">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 border-2 border-[#dc2626] bg-[#dc2626] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#eab308] bg-[#eab308] rounded-full"></div>
            <div className="w-3 h-3 border-2 border-[#22c55e] bg-[#22c55e] rounded-full"></div>
          <div className="w-96 h-3 -mt-2.5 pl-4">
          <Select
    showSearch
    placeholder="Select a City"
    optionFilterProp="children"
    defaultValue="Nagpur"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Nagpur',
        label: 'Nagpur',
      },
      {
        value: 'Mumbai',
        label: 'Mumbai',
      },
      {
        value: 'Pune',
        label: 'Pune',
      },
    ]}
  />
          </div>
          </div>
        </div>
        <div className="p-8">
          <h1 class="flex pb-5  font-bold text-4xl text-gray-800">
          Land under Registry Process
          </h1>
          <div class="flex overflow-x-scroll pb-10 scrollbar-hide ">
            <div class="flex flex-nowrap ">

              <div               class="inline-block px-3 cursor-pointer"              >
                <div class="w-[500px] h-[470px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9G2rNCbd0Putgz-ybp5IjT5QXpZ-nrp2dmo2lONj1Q&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">

                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} class="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed w-[46%] hover:bg-blue-700  mx-2 my-2 ">
Request Land Document
</button>
<button onClick={processstatus} class="bg-red-500  text-white font-bold py-2 px-4 rounded   w-[96%] hover:bg-red-700  mx-2 my-2 ">
Process Status
</button>
                
                  </div>
                </div>
              </div>

              <div               class="inline-block px-3 cursor-pointer"              >
                <div class="w-[500px] h-[470px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1I0AfGRSj-3WqexUhRL4TeFbTmGU11LTxaHVPbH7QkA&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">

                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} class="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed w-[46%] hover:bg-blue-700  mx-2 my-2 ">
Request Land Document
</button>
<button class="bg-red-500  text-white font-bold py-2 px-4 rounded   w-[96%] hover:bg-red-700  mx-2 my-2 ">
Process Status
</button>
                
                  </div>
                </div>
              </div>

              <div               class="inline-block px-3 cursor-pointer"              >
                <div class="w-[500px] h-[470px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                   
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3SI5bhu0nhSe6xiB08qoNEOPmNYpT05ODRoxxn_8Xg&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">

                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} class="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed w-[46%] hover:bg-blue-700  mx-2 my-2 ">
Request Land Document
</button>
<button class="bg-red-500  text-white font-bold py-2 px-4 rounded   w-[96%] hover:bg-red-700  mx-2 my-2 ">
Process Status
</button>
                
                  </div>
                </div>
              </div>

              <div               class="inline-block px-3 cursor-pointer"              >
                <div class="w-[500px] h-[470px] max-w-xl overflow-hidden rounded-lg shadow-md bg-white  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                  onClick={() => setOpen(true)}
                    className="p-2 w-[500px] h-48 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgp7aWgs3y16pdSdukJcmPrKn2vFp_f-Mms_PiF5eHXQ&usqp=CAU&ec=48665698"
                    alt=""
                  />
                  <div className="p-2 px-4">

                  <h1 className="mt-0  font-bold">Area: 50 sq.m.</h1>
                  <h3 className="">Loaction: Nagpur, Maharashtra</h3>
                  <h3 className="">Price: Rs. 1,00,000</h3>
                  <h3>PID: 12345</h3>
                  <h3>Survey no: 123</h3>
                  <h3>Owner: XYZ</h3>
                  </div>
                  <div className="m-auto text-center">

                  <button onClick={() => setOpen(true)} class="bg-blue-500 w-[46%]  hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 my-2 rounded">
                  3D Land View
</button>
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed w-[46%] hover:bg-blue-700  mx-2 my-2 ">
Request Land Document
</button>
<button class="bg-red-500  text-white font-bold py-2 px-4 rounded   w-[96%] hover:bg-red-700  mx-2 my-2 ">
Process Status
</button>
                
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default lands;
