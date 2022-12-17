import React from 'react'

export default function index() {
  return (
    <>
      <div className="relative h-[100vh] bg-white w-full overflow-hidden flex flex-col items-center justify-start text-center text-base text-gray-300 font-open-sans sm:pl-[16px] sm:pr-[0px] sm:box-border">
        <div
          className="self-stretch h-full flex flex-col p-[96px_0px] 
              box-border items-center justify-start bg-[url(../public/assets/images/background@3x.png)]
         bg-cover bg-no-repeat bg-[top]"
        >
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="relative  w-[170px] h-[40px] shrink-0">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                alt=""
                src="../../assets/images/logo1@2x.png"
              />
            </div>
            <div className="rounded-[8px] bg-white shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] w-[512px] flex flex-col p-[32px] box-border items-start justify-center gap-[23px] sm:pl-[32px] sm:pr-[32px] sm:box-border sm:w-[100%!important] mq350small:pl-[8px] mq350small:pr-[8px] mq350small:box-border">
              <div className="self-stretch relative text-[24px] leading-[150%] font-extrabold inline-block sm:text-[18px]">
                Log in
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-left">
                <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[150%] font-medium inline-block">
                    Username
                  </div>
                  <input
                    className="outline-none [border:1px_solid_#d1d5db] font-open-sans text-base bg-gray-100 self-stretch rounded-[8px] box-border flex flex-row p-[12px_16px] items-start justify-start"
                    type="text"
                    placeholder="User Name"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                  <div className="self-stretch relative leading-[150%] font-medium inline-block">
                    Password
                  </div>
                  <input
                    className="outline-none [border:1px_solid_#d1d5db] bg-gray-100 self-stretch rounded-[8px] box-border flex flex-row p-[12px_16px] items-start justify-start"
                    type="text"
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0px] text-left text-sm text-gray-300">
                <div className="flex-1 flex flex-row items-start justify-start">
                  <div className="rounded-[4px] flex flex-row items-center justify-start gap-[8px]">
                    <div className="flex  ">
                      {/* <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-gray-100 w-[16px] h-[16px]" /> */}
                      <input
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="  leading-[150%] font-medium inline-block">
                      Remember me
                    </div>
                  </div>
                </div>
                <div className="relative leading-[150%] font-medium text-indigo text-right inline-block">
                  Forgot password?
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-indigo">
                <button className="transition-all cursor-pointer [border:none] p-[12px_20px] bg-green-100 self-stretch rounded-[8px] overflow-hidden flex flex-row box-border items-center justify-center hover:bg-orange">
                  <div className="relative text-[16px] leading-[150%] uppercase font-medium font-open-sans text-white text-left inline-block">
                    Submit
                  </div>
                </button>
                <div className="self-stretch relative leading-[150%] font-medium inline-block">
                  Don’t have an account yet?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
