import "aos/dist/aos.css";
import "../styles/globals.css";
import { useRouter } from 'next/router';
import React, {useState } from 'react';
import AOS from "aos";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { useDarkMode, useEffectOnce } from "usehooks-ts";
import Link from "next/link";

// // Initialize Vivid (https://vivid.lol)
// if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
//   import("vivid-studio").then((v) => v.run());
//   import("vivid-studio/style.css");
// }

const siteTitle = "Land Registry";
const siteDescription =
  "Make CSS styling a breeze with Vivid's in-browser visual editor that automatically updates your code.";

const App = ({ Component, pageProps }) => {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();
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

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  }, [isDarkMode]);

  // Initialize animations
  useEffectOnce(() => {
    AOS.init({
      once: true,
      // Animations always disabled in dev mode; disabled on phones in prod
      disable: process.env.NODE_ENV === "development" ? true : "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className="bg-white">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta
          property="og:image"
          content="https://vivid.lol/images/landing-page.png"
        />
      </Head>
      <NextSeo
        title={siteTitle}
        description={siteDescription}
        themeColor={isDarkMode ? "#fafafa" : "#fafafa"}
        openGraph={{
          title: siteTitle,
          description: siteDescription,
        }}
      />
      <Component
        {...pageProps}
        className="bg-white"
      />
      
<div id="container-floating">
  <Link href={`/${LoginUserData?.user?.aadhaar_number}/profile`} class="nd4 nds"><img class="reminder"/>
    <p class="letter">P</p>
  </Link>

  <Link href={`/${LoginUserData?.user?.aadhaar_number}/lands`} class="nd3 nds"><img class="reminder"/>
    <p class="letter">G</p>
  </Link>

  <Link href={`/${LoginUserData?.user?.aadhaar_number}/form#Addland`} class="nd2 nds"><img class="reminder"/>
    <p class="letter">A</p>
  </Link>
  
  <Link href={`/${LoginUserData?.user?.aadhaar_number}/mylands`} class="nd1 nds"><img class="reminder"/>
    <p class="letter">M</p>
  </Link>
  
  <div id="floating-button">
    <p class="plus" style={{ fontSize: '25px' }}>🔗</p>
    <img class="edit" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"/>
  </div>
</div>

    </div>
  );
};

export default App;
