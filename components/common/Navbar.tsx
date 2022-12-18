import Link from "next/link";
import React from "react";
import url from "@/config/url";



export default function NavBar() {



  return (
    <>
      <div className="relative w-full flex flex-col p-[12px] box-border items-start justify-start gap-[1px] border-b-[1px] [border-bottom-style:solid] border-b-gray-400">
        <div className="self-stretch rounded-[16px_16px_0px_0px] bg-green-100 flex flex-col p-[8px_12px] box-border items-start justify-start gap-[0px]">
          <div className="self-stretch flex flex-row p-[0px_16px] box-border items-center justify-start">
            <div className="flex-1 rounded-[16px_16px_0px_0px] flex flex-row items-start justify-start gap-[16px] sm:flex-col">
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <button
                  className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[32px] h-[32px] shrink-0 overflow-hidden lg:hidden md:flex mq834:flex"
                  // onClick={openMenuPopup}
                >
                  <img
                    className="absolute h-[60%] w-[70%] top-[20%] right-[15%] bottom-[20%] left-[15%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="../../assets/images/vector.svg"
                  />
                </button>
                <img
                  className="relative w-[32px] h-[33px] shrink-0 object-cover"
                  alt=""
                  src="../../assets/images/logo@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-row items-center justify-start gap-[24px] sm:flex-col sm:flex-[unset] sm:self-stretch mq350small:flex-col">
                <input
                  className="[border:none] font-open-sans outline-none
                   text-xs bg-gray-300 flex-1 rounded-[8px] flex flex-row 
                   
                   p-[12px_16px] box-border items-center justify-start sm:flex-[unset]
                    sm:self-stretch mq350small:flex-[unset]
                   mq350small:self-stretch"
                  type="search"
                  placeholder="Search"
                />
                <button className="cursor-pointer [border:none] p-[12px] bg-[transparent] h-[19px] flex flex-row box-border items-center justify-end gap-[6px]">
                  <img
                    className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                    alt=""
                    src="../../assets/images/login.svg"
                  />
                  <div className="relative text-xs leading-[150%] font-medium font-open-sans text-gray-100 text-center inline-block">
                    <Link href={url.auth.login}>Login/Register</Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[1px] shrink-0 hidden flex-row items-center justify-start">
            <div className="flex-1 relative bg-gray-200 h-[1px]" />
          </div>
        </div>
        <div className="self-stretch [background:linear-gradient(180deg,_#34ad54_5.73%,_rgba(52,_173,_84,_0.63)_50%,_#34ad54)] flex flex-col p-[24px_0px] box-border items-center justify-center">
          <div className="self-stretch h-[48px] shrink-0 overflow-hidden flex flex-row p-[0px_16px] box-border items-center justify-start gap-[32px]">
            <div className="bg-white w-[160px] shrink-0 overflow-hidden flex flex-col p-[8px] box-border items-start justify-start">
              <img
                className="relative w-[144px] h-[36px] shrink-0 object-cover"
                alt=""
                src="../../assets/images/logo1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-row items-center justify-end gap-[2px] md:hidden">
              <button className="cursor-pointer [border:none] p-[4px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center hover:bg-orange active:bg-tan">
                <a className="[text-decoration:none] relative text-base leading-[150%] font-semibold font-inter text-white text-center inline-block mq960:font-medium mq960:font-inter mq960:text-sm">
                  Home
                </a>
              </button>
              <button className="cursor-pointer [border:none] p-[4px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center hover:bg-orange active:bg-tan">
                <a className="[text-decoration:none] relative text-base leading-[150%] font-semibold font-inter text-white text-center inline-block mq960:font-medium mq960:font-inter mq960:text-sm">
                  Shop
                </a>
              </button>
              <button className="cursor-pointer [border:none] p-[4px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center hover:bg-orange active:bg-tan">
                <a className="[text-decoration:none] relative text-base leading-[150%] font-semibold font-inter text-white text-center inline-block mq960:font-medium mq960:font-inter mq960:text-sm">
                  Sellers
                </a>
              </button>
              <button className="cursor-pointer [border:none] p-[4px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center hover:bg-orange active:bg-tan">
                <a className="[text-decoration:none] relative text-base leading-[150%] font-semibold font-inter text-white text-center inline-block mq960:font-medium mq960:font-inter mq960:text-sm">
                  Recipes
                </a>
              </button>
              <button className="cursor-pointer [border:none] p-[4px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center hover:bg-orange active:bg-tan">
                <a className="[text-decoration:none] relative text-base leading-[150%] font-semibold font-inter text-white text-center inline-block mq960:font-medium mq960:font-inter mq960:text-sm">
                  Marketing
                </a>
              </button>
              <button className="cursor-pointer [border:none] p-[4px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center hover:bg-orange active:bg-tan">
                <a className="[text-decoration:none] relative text-base leading-[150%] font-semibold font-inter text-white text-center inline-block mq960:font-medium mq960:font-inter mq960:text-sm">
                  About
                </a>
              </button>
              <button className="cursor-pointer [border:none] p-[4px] bg-[transparent] flex-1 flex flex-col box-border items-center justify-center hover:bg-orange active:bg-tan">
                <a className="[text-decoration:none] relative text-base leading-[150%] font-semibold font-inter text-white text-center inline-block mq960:font-medium mq960:font-inter mq960:text-sm">
                  Contact
                </a>
              </button>
            </div>
            <button className="cursor-pointer [border:none] p-[0] bg-[transparent] flex flex-row items-center justify-end md:ml-[auto!important]">
              <img
                className="relative w-[24px] h-[26.67px] shrink-0"
                alt=""
                src="../../assets/images/group-6.svg"
              />
            </button>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-[12px] bg-green-100 self-stretch flex flex-row box-border items-center justify-center gap-[10px] hover:bg-orange active:bg-tan">
          <div className="relative w-[31.02px] h-[31.78px] shrink-0">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <img
                className="absolute h-[72.13%] w-[91%] top-[0%] right-[9%] bottom-[27.87%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="../../assets/images/path1582.svg"
              />
              <div className="absolute h-[75.52%] w-[48.23%] top-[24.48%] right-[0%] bottom-[0%] left-[51.77%]">
                <img
                  className="absolute h-[61.81%] w-[107.11%] top-[22.93%] right-[-3.55%] bottom-[15.26%] left-[-3.55%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../../assets/images/path1636.svg"
                />
                <b className="absolute top-[0%] left-[12.05%] text-[20.1px] inline-block font-roboto text-gray-600 text-left">
                  +
                </b>
              </div>
            </div>
          </div>
          <a className="[text-decoration:none] relative text-base font-roboto text-white text-center inline-block sm:text-[18px]">
            Create Your Online Shop Today
          </a>
        </button>
      </div>
    </>
  );
};


