import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Profile = () => {
  const router = useRouter();
  const { aadhar } = router.query;
  const [LoginUserData, setLoginUserData] = useState({});
  const [lands, setLands] = useState([]);

  useEffect(() => {
    // Fetch user details and related data based on the aadhar value
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/getall/get-data-by-aadhar/${aadhar}`);
        const data = await response.json();
        console.log(data);
        setLoginUserData(data?.user);
        setLands(data?.sellingLand);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (aadhar) {
      fetchData();
    }
  }, [aadhar]);

  return (
    <>
      <Navbar />
      <div className=" pt-24 bg-gray-100 text-black pb-6">
        <div className="pt-12 pb-4  px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold mb-6">User Profile</h1> <div className="-mt-6"> <Link href={'/'} className='-mt-6 text-base  px-3 font-bold text-white py-2 bg-blue-500 rounded-md shadow-lg mx-2'>EDIT</Link>  <Link href={'#mylands'} className='-mt-6 text-base font-bold text-white px-3 py-2 bg-blue-500 rounded-md shadow-lg mx-2'>MY LANDS</Link></div>
          </div>

          <div className="flex justify-between mb-8">
            <div className=" bg-gray-100 p-3 rounded-lg shadow-inner w-2/3">
              <p className="my-2"><strong>Full Name:</strong> {LoginUserData?.full_name}</p>
              <p className="my-2"><strong>Aadhaar Number:</strong> {LoginUserData?.aadhaar_number}</p>
              <p className="my-2"><strong>Metamask Address:</strong> {LoginUserData?.metamaskAddress}</p>
              <p className="my-2"><strong>Date of Birth:</strong> {LoginUserData?.dob}</p>
              <p className="my-2"><strong>Gender:</strong> {LoginUserData?.gender}</p>
            </div>
            {LoginUserData?.profile_image && (
              <div className="mr-16">
                <div className="h-52  border-4  overflow-hidden">
                  <img
                    src={`data:image/jpeg;base64,${LoginUserData?.profile_image}`}
                    alt="Profile Image"
                    className="w-full transform scale-105 transition-transform hover:scale-110"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" pt-2 bg-gray-100 text-black pb-6">
        <div className="pt-6 pb-2   px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">

          <div className='mb-8'>
            <h2 className="text-xl font-semibold mb-2">Address Information</h2>
            <div className='bg-gray-100 p-3 rounded-lg shadow-inner'>
              <p className="my-2.5"><strong>Address:</strong> {LoginUserData?.address?.house}, {LoginUserData?.address?.street}, {LoginUserData?.address?.vtc}, {LoginUserData?.address?.dist}, {LoginUserData?.address?.state}, {LoginUserData?.address?.country}</p>
              <p className="my-2.5"><strong>Zip Code:</strong> {LoginUserData?.zip}</p>
              <p className="my-2.5"><strong>Care Of:</strong> {LoginUserData?.care_of}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-2 bg-gray-100 text-black pb-6" id='mylands'>
        <div className="pt-6 pb-2 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">My Lands</h2>
            <div className='bg-gray-100 p-2 rounded-lg shadow-inner'>
              {lands.length > 0 ? (
                <ul>
                  {lands.map((land, index) => (

                    <li key={index} className='bg-white px-2 rounded-lg my-2 p-3'>
                      <Link href={`/${aadhar}/processstatus/${land.propertyID}`}>
                        <div className='flex justify-between'>
                      <strong>Land: <b className='text-red-500'>{land.propertyID}</b></strong> <br />   {land.auctioncreated ?
                            <Link href={`/${aadhar}/${land.propertyID}/bidboard`} className="bg-gray-200 px-3 rounded-lg">Auction Scheduled</Link>:null}
                            </div>
                      <p className="my-1"><strong>Area:</strong> {land.Area}</p>
                      <p className="my-1"><strong>City:</strong> {land.City}</p>
                      <p className="my-1"><strong>Owner Name:</strong> {land.ownerName}</p>
                      <p className="my-1"><strong>Price:</strong> {land.Price}</p>
                      
                      {/* Add more land details as needed */}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No lands listed.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
