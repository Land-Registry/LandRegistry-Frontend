import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/navbar';
import { useRouter } from 'next/router';
import Link from "next/link";
import ReverseTimer from '../../../utils/reverseTimer'

const Dashboard = () => {
  const router = useRouter();
  const { aadhar, PID } = router.query;
  const [LoginUserData, setLoginUserData] = useState({});
  const [AllData, setAllData] = useState({});
  const targetAuction = AllData?.allAuctions?.find((auction) => auction.propertyID == PID);
  const buyerIDs = targetAuction?.buyerIDs || [];

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
          <div className="bg-white p-4 rounded-lg shadow-md m-2">
            <div className='flex justify-between'>
              <h2 className="text-xl font-semibold ">Bid</h2>
              <button className='px-3 py-1 bg-green-400 rounded-lg font-bold hover:bg-green-600'>START AUCTION ▶️</button>
              {/* <button className='px-3 py-1 bg-red-300 rounded-lg font-bold'>JOIN AUCTION ▶️</button> */}
            </div>
            <div className='w-full flex'>
              <div className='w-2/3'>
                < div className=' h-[200px] bg-gray-100 my-4 rounded-md p-2'>
                  {AllData?.allLandDetails?.map((land) => {
                    if (land.propertyID == PID) {
                      return (
                        <>
                          <div className="grid grid-cols-2 gap-4 mt-1">
                            <div className="col-span-1">
                              <p className="text-gray-600">Property ID:</p>
                              <p className="font-semibold">{land.propertyID}</p>
                            </div>
                            <div className="col-span-1">
                              <p className="text-gray-600">Owner Name:</p>
                              <p className="font-semibold">{land.owner}</p>
                            </div>
                            <div className="col-span-1">
                              <p className="text-gray-600">Location:</p>
                              <p className="font-semibold">
                                {land.location?.area}, {land.location?.city}, {land.location?.state}
                              </p>
                            </div>
                            <div className="col-span-1">
                              <p className="text-gray-600">Starting Price:</p>
                              <p className="font-semibold text-red-500">
                                RS {land.CurrentPrice}
                              </p>
                            </div>
                            <div className="col-span-1">
                              <p className="text-gray-600">Area of Land:</p>
                              <p className="font-semibold">{land.areaOfLand} sq. feet</p>
                            </div>
                            <div className="col-span-1">
                              <p className="text-gray-600">Price per Sq. Feet:</p>
                              <p className="font-semibold">Rs. {land.pricePerSqFeet}</p>
                            </div>
                          </div>
                        </>
                      );
                    }
                    return null; // Return null for non-matching land details
                  })}
                </div>
                <div className="h-[365px] bg-gray-100 my-4 rounded-md p-2 overflow-y-auto no-scrollbar">
                  <div className="flex justify-between">
                    <h2 className='bg-white px-3 py-2 rounded-md font-bold'>LIST OF BUYERS</h2>
                    <span className="bg-white px-3 py-2 rounded-md">Total: {buyerIDs.length}</span>
                  </div>
                  <div className="my-2">
                    {buyerIDs.map((buyerID, index) => (
                      <div key={index} className="mt-4 p-2 bg-white rounded-md justify-between flex">
                        <div>
                          Buyer No. {index + 1}
                        </div>
                        <div>
                          Buyer ID: {buyerID}
                        </div>
                        <button className='bg-red-500 px-4 py-1 rounded-lg hover:bg-red-200'>Remove</button>
                        {/* <button className='px-4 py-1 rounded-lg bg-red-200 cursor-not-allowed'>Remove</button> */}
                      </div>
                    ))}
                  </div>
                </div>

              </div>



              <div class="w-1/3 listofAuctions container m-4  h-[581px] ">
                {targetAuction && targetAuction.propertyID == PID && (
                  <div className='bg-gray-100 rounded-md p-3'>
                   {targetAuction.date && <ReverseTimer initialTime={new Date(targetAuction.date)} />}
                    <div className='bg-white p-3 rounded-lg border shadow-md flex justify-between'>
                      <div>
                        <div>
                          DATE:{targetAuction.date && new Date(targetAuction.date).toLocaleDateString()}
                        </div>
                        <div>
                          TIME: {targetAuction.date && new Date(targetAuction.date).toLocaleTimeString()}
                        </div>
                      </div>
                      <button className='bg-[#fc62b1] my-auto px-3 max-h-8 py-1 rounded-lg hover:bg-[#9a366a] '>Change Schedule</button>
                    </div>
                  </div>
                )}
                <div className='bg-gray-100 rounded-md p-3 overflow-y-auto no-scrollbar mt-4 flex-wrap justify-between h-[76.3%]'>
                  <h2>OTHER AUCTIONS</h2>
                  {AllData?.allAuctions?.length === 0 ? (
                    <p>No other auctions available.</p>
                  ) : (
                    AllData?.allAuctions?.map((auction) => (
                      // Check if auction.propertyID is equal to PID
                      auction?.propertyID != PID ? (
                        <div key={auction._id} className="mt-2 auction-card w-full bg-white shadow-lg rounded-lg overflow-hidden border">
                          <div className="p-4 w-full">
                            <div className='flex justify-between'>
                              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Auction <span className="text-red-500 font-bold">{auction?.propertyID}</span>
                              </h3>
                              <p className="text-sm p-1 px-3 bg-slate-200 rounded-full text-gray-600 mb-2">
                                {auction.status === 'scheduled' ? 'Scheduled' : 'Completed'}
                              </p>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                              Time: {new Date(auction.date).toLocaleString()}
                            </p>
                            <Link href={`/${aadhar}/land/${auction.propertyID}`} className="bg-blue-500 flex justify-center text-white px-3 py-1 w-full rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                              Join Auction
                            </Link>
                          </div>
                        </div>
                      ) : null // Render nothing if the condition is not met
                    ))
                  )}
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
