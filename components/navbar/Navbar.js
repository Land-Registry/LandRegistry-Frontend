import React, { useEffect, useState } from 'react';
import Metamask from '../metamask';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {

  const router = useRouter();
  const { aadhar, PID } = router.query;
  const [LoginUserData, setLoginUserData] = useState({});

  useEffect(() => {
    // Fetch user details and related data based on the aadhar value
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/getall/get-data-by-aadhar/${aadhar}`);
        const data = await response.json();
        // console.log(data)
        setLoginUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (aadhar) {
      fetchData();
    }

  })
  return (

    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow-lg fixed w-full z-50 bg-opacity-80">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/dashboard" className="flex items-center">
          <div className="flex flex-row items-center gap-1">
            {/* <Image src="/images/logo.png" alt="Vivid logo" height="40" width="40" /> */}
            <div className="text-3xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">
                LAND REGISTRY
              </span>
            </div>
          </div>
        </a>
        <div className="flex md:order-2">
          {(!<Metamask />) ? (
            <>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">Wallet Connect</button>
            </>
          ) : (
            <>
              <a type="button" href="/request" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4">Requests</a>
              <Link href={`/${aadhar}/land/${PID}`} className="text-white  m-auto py-1 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-5 text-center mr-3 md:mr-0 ">{LoginUserData?.user?.userName} <div className='border' />  {<Metamask />}</Link>
            </>
          )}


        </div>

      </div>
    </nav>
  );
}

export default Navbar;
