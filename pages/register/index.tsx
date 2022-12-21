import Customer from '@/components/register/customer'
import Seller from '@/components/register/seller'
import { NextPage } from 'next'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const index: NextPage = () => {
  return (
    <>
      <div
        className="relative
       bg-white w-full h-[100vh]  flex flex-col items-center justify-start text-center text-base text-gray-800 font-open-sans sm:pl-[16px] sm:pr-[0px] sm:box-border"
      >
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
              <Tabs className="w-full ">
                <TabList className="flex align-middle items-center justify-around">
                  <Tab className=" outline-none text-lg font-semibold p-4 cursor-pointer bg-gray-200 shadow-md">
                    Register as customer
                  </Tab>

                  <Tab className="outline-none text-lg font-semibold p-4 cursor-pointer bg-gray-200 shadow-md">
                    Register as seller
                  </Tab>
                </TabList>
                <div className="tab-content mt-4">
                  <TabPanel>
                    <Customer />
                  </TabPanel>

                  <TabPanel>
                    <Seller />
                  </TabPanel>
                </div>
              </Tabs>

              {/* <div className="self-stretch relative text-[24px] leading-[150%] font-extrabold inline-block sm:text-[18px]">
                Log in
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default index
