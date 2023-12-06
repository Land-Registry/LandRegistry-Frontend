import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import { useRouter } from 'next/router';
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
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
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  async function JoinAuction(PID) {
    try {
      const userId = 'user123';

      try {
        const url = `http://localhost:8000/auction/add-buyer/${PID}/${LoginUserData?.user?._id}`;
        const response = await axios.post(url);
        if (response.status === 200) {
          Router.push(`/${aadhar}/${PID}/bidboard`);
          console.log('Buyer added to auction successfully');
        } else {
          console.error('Error adding buyer to auction:', response.data.message);
        }
      } catch (error) {
        console.error('Error adding buyer to auction:', error.message);
      }
    } catch (error) {
      console.error('Error joining auction:', error.message);
    }
  }


  async function RemoveBuyer(auctionId, buyerId) {
    try {
      // Send a DELETE request to the backend route to remove the buyer
      const response = await fetch(`http://localhost:8000/auction/remove-buyer/${auctionId}/${buyerId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Buyer ID removed successfully
        console.log('Buyer ID removed from the auction successfully');
        // You can perform any additional actions or UI updates here
      } else {
        // Handle errors here, e.g., display an error message
        const data = await response.json();
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-100 text-black">
        <div className="pt-20">
          <div className="bg-white p-4 rounded-lg shadow-md m-2">
            <div className='flex justify-between'>
              <h2 className="text-xl font-semibold">Bid</h2>
              {AllData?.allAuctions?.map((land) => {
                if (land.propertyID == PID) {
                  let linkJSX;
                  if (land.aadhaar_number == aadhar) {
                    if (land.roomCreated == true) {
                      linkJSX = (
                        <Link href={`http://localhost:5173/${aadhar}#${land.propertyID}#livechats#${land.roomID}`} target='_blank' className='px-3 py-1 bg-green-400 rounded-lg font-bold hover:bg-green-600'>JOIN AUCTION ▶️</Link>
                      );
                    } else {
                      linkJSX = (
                        <Link href={`http://localhost:5173/${aadhar}#${land.propertyID}#livechats#room`} target='_blank' className='px-3 py-1 bg-green-400 rounded-lg font-bold hover-bg-green-600'>CREATE AUCTION ▶️</Link>
                      );
                    }
                  } else {
                    if (land.roomCreated == true) {
                      linkJSX = (
                        <Link href={`http://localhost:5173/${aadhar}#${land.propertyID}#livechats#${land.roomID}`} target='_blank' className='px-3 py-1 bg-green-400 rounded-lg font-bold hover:bg-green-600'>JOIN AUCTION ▶️</Link>
                      );
                    } else {
                      linkJSX = (
                        <Link href={`http://localhost:5173/${aadhar}#${land.propertyID}#livechats#room`} target='_blank' className='px-3 cursor-not-allowed py-1 bg-red-400 rounded-lg font-bold hover:bg-red-600'>AUCTION START SOON ▶️</Link>
                      );
                    }
                  }

                  return (
                    <div key={land.propertyID} className="mx-2">
                      {linkJSX}
                    </div>
                  );
                }
                return null; // Return null for non-matching land details
              })}
            </div>
            <div className='w-full flex'>
              <div className='w-2/3'>
                < div className=' h-[200px] bg-gray-100 my-4 rounded-md p-2'>
                  {AllData?.allAuctions?.map((auction) => {
                    if (auction.propertyID == PID) {
                      return (
                        <>
                          <div className="grid grid-cols-2 gap-4 mt-1">
                            <div className="col-span-1">
                              <p className="text-gray-600">Property ID:</p>
                              <p className="font-semibold">{auction.propertyID}</p>
                            </div>
                            <div className="col-span-1">
                              <p className="text-gray-600">Owner Name:</p>
                              <p className="font-semibold">{auction.owner}</p>
                            </div>

                            <div className="col-span-1">
                              <p className="text-gray-600">Starting Price:</p>
                              <p className="font-semibold text-red-500">
                                RS {auction.StartPrice}
                              </p>
                            </div>
                            <div className="col-span-1">
                              <p className="text-gray-600">Auction:</p>
                              <p className="font-semibold">{auction.status}</p>
                            </div>
                            <div className="col-span-1">
                              <p className="text-gray-600">Date and Time</p>
                              <p className="font-semibold">{new Date(auction.date).toLocaleDateString(undefined, options)}</p>
                            </div>
                            <div className="col-span-1">
                              <p className="text-gray-600">View Land Stats:</p>
                              <Link className="font-semibold text-blue-500" href={`/${aadhar}/processstatus/${auction.propertyID}`}>
                                Link
                              </Link>
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
                        {targetAuction?.aadhaar_number == aadhar ?
                          <button onClick={() => RemoveBuyer(targetAuction._id, buyerID)} className='bg-red-500 px-4 py-1 rounded-lg hover:bg-red-200'>Remove</button>
                          :
                          <button className='px-4 py-1 rounded-lg bg-red-200 cursor-not-allowed'>Remove</button>
                        }
                      </div>
                    ))}
                  </div>
                </div>

              </div>



              <div class="w-1/3 listofAuctions container m-4  h-[581px] ">
                {targetAuction && targetAuction.propertyID == PID && (
                  <div className='bg-gray-100 rounded-md p-3'>
                    {targetAuction.date && <ReverseTimer endTime={new Date(targetAuction.date)} />}
                    <div className='bg-white p-3 my-2 rounded-lg border shadow-md flex justify-between'>
                      <div>
                        <div>
                          DATE:{targetAuction.date && new Date(targetAuction.date).toLocaleDateString()}
                        </div>
                        <div>
                          TIME: {targetAuction.date && new Date(targetAuction.date).toLocaleTimeString()}
                        </div>
                      </div>
                      {targetAuction?.aadhaar_number == aadhar ?
                        <button className='bg-[#fc62b1] my-auto px-3 max-h-8 py-1 rounded-lg  hover:bg-[#ff81c2]'>Change Schedule</button>
                        :
                        <button className='bg-[#9a366a] my-auto px-3 max-h-8 py-1 rounded-lg  cursor-not-allowed'>Change Schedule</button>
                      }
                    </div>
                  </div>
                )}
                <div className='bg-gray-100 rounded-md p-3 overflow-y-auto no-scrollbar mt-4 flex-wrap justify-between h-[76.3%]'>
                  <h2>OTHER AUCTIONS</h2>
                  {AllData?.allAuctions?.length === 0 ? (
                    <p>No other auctions available.</p>
                  ) : (
                    AllData?.allAuctions?.map((auction) => {
                      // Check if auction.propertyID is equal to PID
                      const hasUserJoinedAuction = auction.buyerIDs.includes(LoginUserData?.user?._id);

                      return auction.propertyID != PID && !hasUserJoinedAuction ? (
                        <div key={auction._id} className="mt-2 auction-card w-full bg-white shadow-lg rounded-lg overflow-hidden border">
                          <div className="p-4 w-full">
                            <div className="flex justify-between">
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
                            <button onClick={() => JoinAuction(auction.propertyID)} className="bg-blue-500 flex justify-center text-white px-3 py-1 w-full rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
                              Join Auction
                            </button>
                          </div>
                        </div>
                      ) : null; // Render nothing if the condition is not met
                    })
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
