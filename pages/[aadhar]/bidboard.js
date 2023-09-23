import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();
  const { aadhar } = router.query;
  return (
    <>
      <Navbar/>
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="pt-20">
        <div className="bg-white p-4 rounded-lg shadow-md m-4">
          <h2 className="text-xl font-semibold mb-2">User Details ({aadhar})</h2>
          <ul>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md m-4">
          <h2 className="text-xl font-semibold mb-2">Bid</h2>

        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
