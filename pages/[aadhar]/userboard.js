import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useRouter } from 'next/router';
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();
  const { aadhar, PID } = router.query;
  const [LoginUserData, setLoginUserData] = useState({});
  const [AllData, setAllData] = useState({});


  useEffect(() => {
    // Fetch user details and related data based on the aadhar value
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/getall/get-data-by-aadhar/${aadhar}`);
        const data = await response.json();
        console.log(data)
        setLoginUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (aadhar) {
      fetchData();
    }

    async function fetchAllData() {
      try {
        const allresponse = await fetch(`http://localhost:8000/getall/get-all-data`);
        const alldata = await allresponse.json();
        console.log(alldata)
        setAllData(alldata);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchAllData();

  }, [aadhar]);

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-100 text-black">
        <div className="pt-20">
          <div className="bg-white p-4  m-4  rounded-lg">
            <h2 className="text-xl font-semibold mb-2">User Details {PID}</h2>
            <div className='flex gap-4 h-[591px]'>
              <div class="w-1/2 container flex-col rounded-md justify-between bg-white">
                <div className="bg-gray-100 p-1  rounded-lg shadow-md">
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <div className="h-[30%] landDetails flex-1 px-4 py-1 bg-gray-100 rounded-md">
                        <p className="mt-1">
                          <span className="text-gray-500">Name:</span> {LoginUserData?.user?.full_name}
                        </p>
                        <p className="mt-2">
                          <span className="text-gray-500">Aadhar No:</span> {LoginUserData?.user?.aadhaar_number}
                        </p>
                        <p className="mt-2">
                          <span className="text-gray-500">Phone Number:</span> {LoginUserData?.user?.phoneNo}
                        </p>
                        <p className="mt-2">
                          <span className="text-gray-500">DOB:</span> {LoginUserData?.user?.dob}
                        </p>
                        <p className="mt-2">
                          <span className="text-gray-500">Gender:</span> {LoginUserData?.user?.gender}
                        </p>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="h-[30%] landDetails flex-1 px-4 py-2 bg-gray-100 rounded-md">
                        <p className="mt-1">
                          <span className="text-gray-500">Country:</span> {LoginUserData?.user?.address?.country}
                        </p>
                        <p className="mt-2">
                          <span className="text-gray-500">District:</span> {LoginUserData?.user?.address?.dist}
                        </p>
                        <p className="mt-2">
                          <span className="text-gray-500">State:</span> {LoginUserData?.user?.address?.state}
                        </p>
                        <p className="mt-2">
                          <span className="text-gray-500">Post Office:</span> {LoginUserData?.user?.address?.po}
                        </p>
                        <p className="mt-2">
          <span className="text-gray-500">Location:</span> {LoginUserData?.user?.address?.loc}
        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="h-[66.9%] landDetails mt-4 flex-1 p-4 bg-gray-100 rounded-lg shadow-md overflow-y-auto no-scrollbar">
                  <div className='bg-white text-[#e9499a] font-bold  p-2 text-center rounded-lg border shadow-md mb-2'>
                    MY LANDS
                  </div>
                  {LoginUserData?.landDetails?.map((land, index) => (
                    <div key={index} className='bg-white p-2 rounded-md border shadow-md mb-2'>
                      <div className='w-1/2'>propertyID:<span className="text-red-500 font-bold"> {land?.propertyID}</span></div>
                      <div className='w-full flex'>
                        <div className='w-1/2'>physicalSurveyNo: {land?.physicalSurveyNo}</div>
                        <div className='w-1/2'>pricePerSqFeet: {land?.pricePerSqFeet}</div>
                      </div>
                      <div className='w-full flex'>
                        <div className='w-1/2'>areaOfLand: {land?.areaOfLand}</div>
                        <div className='w-1/2'>location: {land?.location?.area}, {land?.location?.city}, {land?.location?.state}</div>
                      </div>
                      <Link href={`/${aadhar}/processstatus/`} className="my-4 bg-blue-500 flex justify-center text-white px-3 py-1 w-fit  rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                        Add land to auction
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div class="w-1/2 listofAuctions  container flex-wrap justify-between bg-gray-100 rounded-lg shadow-md p-3 overflow-y-auto no-scrollbar">
                <div className='bg-white text-[#e9499a] font-bold  p-2 text-center rounded-lg border shadow-md mb-2'>
                  SCHEDULE/PAST LANDS
                </div>
                {LoginUserData?.landDetails?.map((land, index) => (
                  <div key={index} className='bg-white p-2 rounded-md border shadow-md mb-2'>
                    <div className='w-1/2'>propertyID:<span className="text-red-500 font-bold"> {land?.propertyID}</span></div>
                    <div className='w-full flex'>
                      <div className='w-1/2'>physicalSurveyNo: {land?.physicalSurveyNo}</div>
                      <div className='w-1/2'>pricePerSqFeet: {land?.pricePerSqFeet}</div>
                    </div>
                    <div className='w-full flex'>
                      <div className='w-1/2'>areaOfLand: {land?.areaOfLand}</div>
                      <div className='w-1/2'>location: {land?.location?.area}, {land?.location?.city}, {land?.location?.state}</div>
                    </div>
                    <Link href={`/${aadhar}/processstatus/`} className="my-2 bg-blue-500 flex justify-center text-white px-3 py-1 w-full  rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                      Add land to auction
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Dashboard;
