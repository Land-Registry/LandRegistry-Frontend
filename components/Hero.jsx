import { useState } from "react";
import axios from "axios";
import Image from "next/image";

import { ScatteredSpheres } from "../svg/ScatteredSpheres";
import MacBarSrc from "../public/images/mac-bar.png";
import Img from "../public/images/landmeasure.jpg"

// Built with Vivid (https://vivid.lol) ⚡️

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
    const res = await axios.post("/api/waitlist", { email });
    setEmail("");
    window.alert(`Email "${res.data.email}" submitted!`);
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-[#151414]">
      <div className="absolute inset-0 z-10 backdrop-blur-[200px]" />
      <div className="md:-left-[28rem] -left-40 -top-40 md:-top-[28rem] bg-[#333F71] absolute opacity-50 dark:opacity-70 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
      <div className="md:-right-[28rem] -right-40 -bottom-40 md:-bottom-[28rem] bg-[#333F71] absolute opacity-50 dark:opacity-70 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
      <div className="relative z-20 px-12 py-24 mx-auto flex flex-col max-w-7xl items-center justify-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16 md:flex-row">
        <div
          className="absolute inset-0 translate-y-32 pointer-events-none dark:invert dark:brightness-90"
          aria-hidden="true"
        >
          <ScatteredSpheres />
        </div>
        {/* Text */}
        <div className="z-10 flex flex-col gap-4 text-center md:text-left">
          <h1
            data-aos="zoom-y-out"
            className="text-5xl font-bold leading-tight tracking-tighter text-gray-800 md:text-7xl dark:text-gray-100"
          >
            SECURING{" "}
            <span className="bg-gradient-to-l from-rose-500 via-violet-600 to-blue-700 bg-clip-text text-transparent">
              INDIA'S.
            </span>
            <br />
            PROPERTY RIGHTS{" "}
            <span className="bg-gradient-to-r from-rose-500 via-violet-600 to-blue-700 bg-clip-text text-transparent">
              TOGETHER.
            </span>
          </h1>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg text-gray-600 md:text-xl dark:text-gray-400"
          >
            Land registry using blockchain enables secure, transparent, and tamper-proof recording of land ownership and transactional history.
          </p>
          <div
            className="flex flex-col"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <a
                href='/dashboard'
                className="px-4 py-2 font-bold rounded-lg text-gray-50 bg-[#004E89] hover:bg-[#003A66]  w-fit"
              >
                GET STARTED
              </a>
          </div>
        </div>
        {/* Image */}
        <div
          data-aos="fade-left"
          className="relative flex flex-col justify-center w-full max-w-2xl overflow-hidden rounded-lg shadow-lg md:rounded-xl"
        >
          <Image
            src={MacBarSrc}
            className="rounded-t-lg md:rounded-t-xl"
            alt="Mac window bar"
          />
          {/* <Image
            src={Img}
            className="rounded-t-lg md:rounded-t-xl"
            alt="Mac window bar"
          /> */}
          <Image
            src={Img}
            className=""
            alt="Mac window bar"
          />
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="A video showing Vivid's functionality including command palette, style preview, code pane, and mouse resizing"
            tabIndex={-1}
          > */}
            {/* Need both for Safari compatibility */}
            {/* <source src="/videos/total.webm" type="video/webm" />
            <source src="/videos/total.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </section>
  );
};
