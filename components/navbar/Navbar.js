import React from 'react';
import Metamask from '../metamask';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Navbar = () => {
  
  const router = useRouter()
  const path = `/${router.pathname}`

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
            {/* <button
             type="button" href={path} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4">Relaod</button> */}
            <Link type="button" href="/request" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4">Requests</Link>
           <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">{<Metamask />}</button>
          </>
        )}



      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page"></a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "></a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "></a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "></a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  );
}

export default Navbar;
