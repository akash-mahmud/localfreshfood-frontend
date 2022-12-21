import React from 'react'
import Accrodion from '@/components/seller/Accordion'
import { NextPage } from 'next'
import MainLayout from '@/layouts/MainLayout'
const index: NextPage = () => {
  return (
    <>
      <MainLayout>
        <div className="relative w-full  flex flex-col items-center justify-start gap-[48px] text-left text-6xl text-white font-inter">
          <main className="self-stretch flex flex-col items-center justify-start gap-[18px] text-center text-6xl text-white font-inter md:flex-col sm:flex mq834:flex-col">
            <div className="self-stretch rounded-[24px_24px_0px_0px] bg-green-100 flex flex-row p-[16px] box-border items-center justify-center md:w-full sm:pl-[12px] sm:pr-[12px] sm:box-border">
              <b className="relative inline-block w-[1168px] h-[44px] shrink-0 sm:text-4xl">
                STORE NAME
              </b>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-center gap-[0px] text-left text-4xl text-gray-600 font-changa-one md:flex-col mq834:flex-col">
              <img
                className="relative rounded-[8px_8px_0px_0px] w-[528px] h-[358.11px] shrink-0 object-cover sm:w-[100%!important] sm:h-[auto!important]"
                alt=""
                src="../../assets/images/unsplashrezbvcvaspi@2x.png"
              />
              <div className="flex-1 rounded-[0px_0px_8px_8px] bg-white flex flex-col p-[14px_24px] box-border items-start justify-start md:flex-[unset] md:self-stretch mq834:flex-[unset] mq834:self-stretch">
                <div className="self-stretch flex flex-row items-center justify-start sm:flex-row">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
                    <div className="flex flex-row items-start justify-start gap-[3px]">
                      <img
                        className="relative w-[32px] h-[32px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/star@2x.png"
                      />
                      <img
                        className="relative w-[32px] h-[32px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/star@2x.png"
                      />
                      <img
                        className="relative w-[32px] h-[32px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/star@2x.png"
                      />
                      <img
                        className="relative w-[32px] h-[32px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/star@2x.png"
                      />
                      <img
                        className="relative w-[32px] h-[32px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/star@2x.png"
                      />
                    </div>
                    <div className="self-stretch relative leading-[36px] inline-block">
                      Street
                    </div>
                    <div className="self-stretch relative leading-[36px] inline-block">
                      City
                    </div>
                    <div className="self-stretch relative leading-[36px] inline-block">
                      County
                    </div>
                    <div className="self-stretch relative leading-[36px] inline-block">
                      Post Code
                    </div>
                    <div className="self-stretch relative text-2xl leading-[26px] font-roboto text-gray-400 inline-block lg:text-4xl md:text-2xl">
                      Marvel on the beauty of the iconic Matterhorn. Find the
                      best places to stay that has the best views of this
                      peak...
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[12px]">
                      <img
                        className="relative w-[24px] h-[25px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/-icon-social-instagram@2x.png"
                      />
                      <img
                        className="relative w-[24px] h-[21px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/-icon-social-twitter@2x.png"
                      />
                      <img
                        className="relative w-[24px] h-[25px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/-icon-social-facebook@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="self-stretch rounded-[8px] bg-white flex flex-row p-[10px_11px] box-border items-start justify-start gap-[20px] text-4xl text-gray-600 font-poppins md:flex-col sm:flex-col mq834:flex-col">
            <iframe
              className="[border:none] flex-1 relative h-[300px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch mq834:flex-[unset] mq834:self-stretch"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.7564023984223!2d-4.317687984266095!3d50.520099179484994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c88d396668d6b%3A0xfd7b259768c6b549!2s39%20Harris%20Cl%2C%20Kelly%20Bray%2C%20Callington%20PL17%208QT!5e0!3m2!1sen!2suk!4v1670487125023!5m2!1sen!2suk"
            />
            <div className="self-stretch flex-1 rounded-[12px] bg-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col p-[28px_30px] box-border items-start justify-start gap-[17px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch mq834:flex-[unset] mq834:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <b className="self-stretch relative leading-[36px] inline-block">
                  Enquiry Form
                </b>
                <div className="self-stretch relative text-3xl leading-[30px] font-roboto text-gray-400 inline-block">
                  Do you need help with anything? Send us and enquiry using the
                  form below.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                {/* <input
                className="[border:none] font-roboto text-2xl bg-[transparent] self-stretch flex flex-row items-start justify-start"
                type="text"
                placeholder="First name"
              /> */}
                <form className="w-full">
                  <div className="self-stretch rounded-[12px] mb-5 bg-gray-100 [border:1px_solid_rgba(0,_0,_0,_0.41)] box-border h-[56px] shrink-0 overflow-hidden flex flex-row p-[16px_12px] items-center justify-start gap-[6px] hover:[border:1px_solid_rgba(51,_50,_50,_0.41)] hover:box-border">
                    <input
                      className="[border:none] font-roboto text-2xl bg-[transparent] flex-1 relative tracking-[0.15px] text-gray-500 text-left inline-block [outline:none]"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="self-stretch rounded-[12px] mb-5 bg-gray-100 [border:1px_solid_rgba(0,_0,_0,_0.41)] box-border h-[56px] shrink-0 overflow-hidden flex flex-row p-[16px_12px] items-center justify-start gap-[6px] hover:[border:1px_solid_rgba(51,_50,_50,_0.41)] hover:box-border">
                    <img
                      className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                      alt=""
                      src="../../assets/images/mailopen.svg"
                    />
                    <input
                      className="[border:none] font-roboto text-2xl bg-[transparent] flex-1 relative tracking-[0.15px] text-gray-500 text-left inline-block [outline:none]"
                      type="text"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="self-stretch rounded-[12px] mb-5 bg-gray-100 [border:1px_solid_rgba(0,_0,_0,_0.41)] box-border h-20 shrink-0 overflow-hidden flex flex-row p-[16px_12px] items-center justify-start gap-[6px] hover:[border:1px_solid_rgba(51,_50,_50,_0.41)] hover:box-border">
                    <textarea
                      className=" bg-[transparent] outline-none border-gray-200 font-roboto text-2xl self-stretch flex flex-col items-start justify-start w-full"
                      placeholder="Enquiry Title"
                      required
                    />
                  </div>
                  <div className="self-stretch rounded-[12px] bg-gray-100 [border:1px_solid_rgba(0,_0,_0,_0.41)] box-border h-40 shrink-0 overflow-hidden flex flex-row p-[16px_12px] items-center justify-start gap-[6px] hover:[border:1px_solid_rgba(51,_50,_50,_0.41)] hover:box-border w-full">
                    <textarea
                      className="[border:none]   bg-[transparent] outline-none font-roboto text-2xl self-stretch flex flex-col items-start justify-start overflow-hidden w-full"
                      placeholder="Message"
                    />
                  </div>
                </form>
              </div>
              <button className="cursor-pointer [border:none] p-[0] bg-green-100 relative rounded-[4px] w-[222px] h-[46px] shrink-0 hover:bg-orange lg:bg-green">
                <div className="absolute w-[calc(100%_-_18.88px)] top-[13.5px] left-[9.52px] text-2xl font-roboto text-white text-center inline-block">
                  Submit
                </div>
              </button>
            </div>
          </div>

          {/* Test Accordion Using raw tailwind css */}

          <Accrodion />
          <div className="bg-gray-200 shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] [border:1px_solid_#c1c1c1] box-border flex flex-col items-center justify-start gap-[0px] text-center md:flex-col sm:flex-col">
            <div className="self-stretch rounded-[16px_16px_0px_0px] bg-green-100 h-[99px] shrink-0 flex flex-row p-[10px] box-border items-start justify-center">
              <div className="relative tracking-[-0.01em] leading-[125%] font-extrabold inline-block md:text-4xl md:leading-[100px] md:text-center">
                Recently Added
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-[0px] text-left text-2xl font-arial md:flex-col">
              <div className="flex flex-row items-start justify-start gap-[0px] mq350small:flex-col">
                <div className="bg-white shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-[10px] box-border items-center justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[0px]">
                    <div className="flex flex-col items-start justify-start gap-[0px]">
                      <div className="self-stretch rounded-[8px_8px_0px_0px] bg-green-100 overflow-hidden flex flex-row p-[2px_6px] box-border items-start justify-center">
                        <div className="relative leading-[18px] inline-block">
                          Store Name
                        </div>
                      </div>
                      <img
                        className="relative w-[150px] h-[150px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/550212011-0-150x150jpg@2x.png"
                      />
                      <div className="relative w-[150px] h-[20px] shrink-0 overflow-hidden text-center text-xs text-gray-300">
                        <div className="absolute top-[1px] left-[calc(50%_-_25.08px)] rounded-[2px] bg-white [border:1px_solid_#c4c4c4] box-border flex flex-row p-[3px_4.15625px_4px_5px] items-start justify-start">
                          <div className="relative leading-[12px] inline-block">
                            LIFE 3d+
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[4px] text-center text-base text-gray-700">
                      <div className="flex flex-row p-[0px_6px] box-border items-start justify-start">
                        <div className="relative leading-[15px] flex items-center justify-center w-[147.62px] shrink-0">
                          Ocado Organic Beef Mince 15% Fat
                        </div>
                      </div>
                      <div className="relative text-sm leading-[18px] text-gray-300 flex items-center justify-center w-[26.65px] h-[14px] shrink-0">
                        400g
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0px] text-center text-base text-brown">
                    <div className="w-[178px] flex flex-col items-center justify-start gap-[0px]">
                      <div className="self-stretch flex flex-row p-[6px_32px] box-border items-start justify-start">
                        <div className="relative leading-[14px] inline-block">
                          Buy any 3 for £12 ❯
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row p-[2px_12px] box-border items-center justify-center gap-[0px] text-lg text-gray-700 mq350small:ml-[-30]">
                        <div className="w-[165px] shrink-0 flex flex-row items-start justify-center gap-[0px]">
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg.svg"
                          />
                          <img
                            className="relative w-[77px] h-[13px] shrink-0"
                            alt=""
                            src="../../assets/images/span-wrapper.svg"
                          />
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg1.svg"
                          />
                        </div>
                        <div className="relative leading-[18px] flex items-center justify-center w-[24.06px] h-[16px] shrink-0">
                          (80)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[0px_45px] box-border items-center justify-start gap-[3px] text-3xl text-gray-700">
                      <div className="flex flex-row p-[10px] box-border items-start justify-start">
                        <b className="relative leading-[18px] inline-block">
                          £5.25
                        </b>
                      </div>
                      <div className="flex flex-row p-[10px] box-border items-start justify-start text-sm text-gray-300">
                        <div className="relative leading-[22px] inline-block">
                          £13.13 per kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col p-[0px_18px] box-border items-center justify-start">
                    <button className="cursor-pointer [border:1px_solid_#f1c500] p-[9px_20px] bg-green-100 self-stretch rounded-[5px] box-border flex flex-row items-center justify-center hover:bg-orange lg:pl-[20px] lg:box-border sm:w-full mq350small:[border:1px_solid_#34ad54] mq350small:box-border">
                      <div className="relative text-xl leading-[18px] font-arial text-white text-center inline-block">
                        Add to trolley
                      </div>
                    </button>
                  </div>
                </div>
                <div className="bg-white shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-[10px] box-border items-center justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[0px]">
                    <div className="flex flex-col items-start justify-start gap-[0px]">
                      <div className="self-stretch rounded-[8px_8px_0px_0px] bg-green-100 overflow-hidden flex flex-row p-[2px_6px] box-border items-start justify-center">
                        <div className="relative leading-[18px] inline-block">
                          Store Name
                        </div>
                      </div>
                      <img
                        className="relative w-[150px] h-[150px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/550212011-0-150x150jpg@2x.png"
                      />
                      <div className="relative w-[150px] h-[20px] shrink-0 overflow-hidden text-center text-xs text-gray-300">
                        <div className="absolute top-[1px] left-[calc(50%_-_25.08px)] rounded-[2px] bg-white [border:1px_solid_#c4c4c4] box-border flex flex-row p-[3px_4.15625px_4px_5px] items-start justify-start">
                          <div className="relative leading-[12px] inline-block">
                            LIFE 3d+
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[4px] text-center text-base text-gray-700">
                      <div className="flex flex-row p-[0px_6px] box-border items-start justify-start">
                        <div className="relative leading-[15px] flex items-center justify-center w-[147.62px] shrink-0">
                          Ocado Organic Beef Mince 15% Fat
                        </div>
                      </div>
                      <div className="relative text-sm leading-[18px] text-gray-300 flex items-center justify-center w-[26.65px] h-[14px] shrink-0">
                        400g
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0px] text-center text-base text-brown">
                    <div className="w-[178px] flex flex-col items-center justify-start gap-[0px]">
                      <div className="self-stretch flex flex-row p-[6px_32px] box-border items-start justify-start">
                        <div className="relative leading-[14px] inline-block">
                          Buy any 3 for £12 ❯
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row p-[2px_12px] box-border items-center justify-center gap-[0px] text-lg text-gray-700 mq350small:ml-[-30]">
                        <div className="w-[165px] shrink-0 flex flex-row items-start justify-center gap-[0px]">
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg2.svg"
                          />
                          <img
                            className="relative w-[77px] h-[13px] shrink-0"
                            alt=""
                            src="../../assets/images/span-wrapper1.svg"
                          />
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg3.svg"
                          />
                        </div>
                        <div className="relative leading-[18px] flex items-center justify-center w-[24.06px] h-[16px] shrink-0">
                          (80)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[0px_45px] box-border items-center justify-start gap-[3px] text-3xl text-gray-700">
                      <div className="flex flex-row p-[10px] box-border items-start justify-start">
                        <b className="relative leading-[18px] inline-block">
                          £5.25
                        </b>
                      </div>
                      <div className="flex flex-row p-[10px] box-border items-start justify-start text-sm text-gray-300">
                        <div className="relative leading-[22px] inline-block">
                          £13.13 per kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col p-[0px_18px] box-border items-center justify-start">
                    <button className="cursor-pointer [border:1px_solid_#f1c500] p-[9px_20px] bg-green-100 self-stretch rounded-[5px] box-border flex flex-row items-center justify-center hover:bg-orange lg:pl-[20px] lg:box-border sm:w-full mq350small:[border:1px_solid_#34ad54] mq350small:box-border">
                      <div className="relative text-xl leading-[18px] font-arial text-white text-center inline-block">
                        Add to trolley
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-center gap-[0px] mq350small:flex-col">
                <div className="bg-white shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-[10px] box-border items-center justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[0px]">
                    <div className="flex flex-col items-start justify-start gap-[0px]">
                      <div className="self-stretch rounded-[8px_8px_0px_0px] bg-green-100 overflow-hidden flex flex-row p-[2px_6px] box-border items-start justify-center">
                        <div className="relative leading-[18px] inline-block">
                          Store Name
                        </div>
                      </div>
                      <img
                        className="relative w-[150px] h-[150px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/550212011-0-150x150jpg@2x.png"
                      />
                      <div className="relative w-[150px] h-[20px] shrink-0 overflow-hidden text-center text-xs text-gray-300">
                        <div className="absolute top-[1px] left-[calc(50%_-_25.08px)] rounded-[2px] bg-white [border:1px_solid_#c4c4c4] box-border flex flex-row p-[3px_4.15625px_4px_5px] items-start justify-start">
                          <div className="relative leading-[12px] inline-block">
                            LIFE 3d+
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[4px] text-center text-base text-gray-700">
                      <div className="flex flex-row p-[0px_6px] box-border items-start justify-start">
                        <div className="relative leading-[15px] flex items-center justify-center w-[147.62px] shrink-0">
                          Ocado Organic Beef Mince 15% Fat
                        </div>
                      </div>
                      <div className="relative text-sm leading-[18px] text-gray-300 flex items-center justify-center w-[26.65px] h-[14px] shrink-0">
                        400g
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0px] text-center text-base text-brown">
                    <div className="w-[178px] flex flex-col items-center justify-start gap-[0px]">
                      <div className="self-stretch flex flex-row p-[6px_32px] box-border items-start justify-start">
                        <div className="relative leading-[14px] inline-block">
                          Buy any 3 for £12 ❯
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row p-[2px_12px] box-border items-center justify-center gap-[0px] text-lg text-gray-700 mq350small:ml-[-30]">
                        <div className="w-[165px] shrink-0 flex flex-row items-start justify-center gap-[0px]">
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg4.svg"
                          />
                          <img
                            className="relative w-[77px] h-[13px] shrink-0"
                            alt=""
                            src="../../assets/images/span-wrapper2.svg"
                          />
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg5.svg"
                          />
                        </div>
                        <div className="relative leading-[18px] flex items-center justify-center w-[24.06px] h-[16px] shrink-0">
                          (80)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[0px_45px] box-border items-center justify-start gap-[3px] text-3xl text-gray-700">
                      <div className="flex flex-row p-[10px] box-border items-start justify-start">
                        <b className="relative leading-[18px] inline-block">
                          £5.25
                        </b>
                      </div>
                      <div className="flex flex-row p-[10px] box-border items-start justify-start text-sm text-gray-300">
                        <div className="relative leading-[22px] inline-block">
                          £13.13 per kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col p-[0px_18px] box-border items-center justify-start">
                    <button className="cursor-pointer [border:1px_solid_#f1c500] p-[9px_20px] bg-green-100 self-stretch rounded-[5px] box-border flex flex-row items-center justify-center hover:bg-orange lg:pl-[20px] lg:box-border sm:w-full mq350small:[border:1px_solid_#34ad54] mq350small:box-border">
                      <div className="relative text-xl leading-[18px] font-arial text-white text-center inline-block">
                        Add to trolley
                      </div>
                    </button>
                  </div>
                </div>
                <div className="bg-white shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-[10px] box-border items-center justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[0px]">
                    <div className="flex flex-col items-start justify-start gap-[0px]">
                      <div className="self-stretch rounded-[8px_8px_0px_0px] bg-green-100 overflow-hidden flex flex-row p-[2px_6px] box-border items-start justify-center">
                        <div className="relative leading-[18px] inline-block">
                          Store Name
                        </div>
                      </div>
                      <img
                        className="relative w-[150px] h-[150px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/550212011-0-150x150jpg@2x.png"
                      />
                      <div className="relative w-[150px] h-[20px] shrink-0 overflow-hidden text-center text-xs text-gray-300">
                        <div className="absolute top-[1px] left-[calc(50%_-_25.08px)] rounded-[2px] bg-white [border:1px_solid_#c4c4c4] box-border flex flex-row p-[3px_4.15625px_4px_5px] items-start justify-start">
                          <div className="relative leading-[12px] inline-block">
                            LIFE 3d+
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[4px] text-center text-base text-gray-700">
                      <div className="flex flex-row p-[0px_6px] box-border items-start justify-start">
                        <div className="relative leading-[15px] flex items-center justify-center w-[147.62px] shrink-0">
                          Ocado Organic Beef Mince 15% Fat
                        </div>
                      </div>
                      <div className="relative text-sm leading-[18px] text-gray-300 flex items-center justify-center w-[26.65px] h-[14px] shrink-0">
                        400g
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0px] text-center text-base text-brown">
                    <div className="w-[178px] flex flex-col items-center justify-start gap-[0px]">
                      <div className="self-stretch flex flex-row p-[6px_32px] box-border items-start justify-start">
                        <div className="relative leading-[14px] inline-block">
                          Buy any 3 for £12 ❯
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row p-[2px_12px] box-border items-center justify-center gap-[0px] text-lg text-gray-700 mq350small:ml-[-30]">
                        <div className="w-[165px] shrink-0 flex flex-row items-start justify-center gap-[0px]">
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg6.svg"
                          />
                          <img
                            className="relative w-[77px] h-[13px] shrink-0"
                            alt=""
                            src="../../assets/images/span-wrapper3.svg"
                          />
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg7.svg"
                          />
                        </div>
                        <div className="relative leading-[18px] flex items-center justify-center w-[24.06px] h-[16px] shrink-0">
                          (80)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[0px_45px] box-border items-center justify-start gap-[3px] text-3xl text-gray-700">
                      <div className="flex flex-row p-[10px] box-border items-start justify-start">
                        <b className="relative leading-[18px] inline-block">
                          £5.25
                        </b>
                      </div>
                      <div className="flex flex-row p-[10px] box-border items-start justify-start text-sm text-gray-300">
                        <div className="relative leading-[22px] inline-block">
                          £13.13 per kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col p-[0px_18px] box-border items-center justify-start">
                    <button className="cursor-pointer [border:1px_solid_#f1c500] p-[9px_20px] bg-green-100 self-stretch rounded-[5px] box-border flex flex-row items-center justify-center hover:bg-orange lg:pl-[20px] lg:box-border sm:w-full mq350small:[border:1px_solid_#34ad54] mq350small:box-border">
                      <div className="relative text-xl leading-[18px] font-arial text-white text-center inline-block">
                        Add to trolley
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-[17px] font-arial">
            <div className="self-stretch flex flex-row items-start justify-center gap-[20px] mq600:flex-col">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start relative gap-[0px] mq600:flex-[unset] mq600:self-stretch">
                <div className="absolute m-[0_!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[4px] overflow-hidden z-[0]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="../../assets/images/div@2x.png"
                  />
                </div>
                <div className="relative w-[477px] h-[400px] shrink-0 overflow-hidden z-[1]">
                  <div className="absolute top-[39px] left-[8.39%] leading-[30px] text-gold inline-block">
                    Localfreshfoods.co.uk
                  </div>
                  <b className="absolute top-[77px] left-[8.39%] text-5xl leading-[36px] inline-block">{'Fresh & Natural'}</b>
                  <div className="absolute top-[118px] left-[8.39%] text-xl leading-[20px] inline-block">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">{'Bursting with all the flavor of '}</p>
                    <p className="m-[0]"> the season</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-[400px] overflow-hidden flex flex-row items-start justify-start relative gap-[0px] text-xl mq600:flex-[unset] mq600:self-stretch">
                <div className="absolute m-[0_!important] h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[4px] overflow-hidden z-[0]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="../../assets/images/div1@2x.png"
                  />
                </div>
                <div className="overflow-hidden flex flex-col p-[40px_270px_239px_40px] box-border items-start justify-start gap-[20px] z-[1]">
                  <b className="relative text-5xl leading-[36px] inline-block">
                    <p className="[margin-block-start:0] [margin-block-end:0px]">{'Eat Healthy '}</p>
                    <p className="m-[0]">{' & Live Well'}</p>
                  </b>
                  <div className="relative leading-[22px] inline-block">
                    FARM SHOP, BUTCHERS, FISHMONGERS, BAKERIES
                  </div>
                  <div className="relative leading-[22px] inline-block">
                    LocalFreshfoods.co.uk
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] [border:1px_solid_#c1c1c1] box-border flex flex-col items-center justify-start gap-[0px] text-center md:flex-col sm:flex-col">
            <div className="self-stretch rounded-[16px_16px_0px_0px] bg-green-100 h-[99px] shrink-0 flex flex-row p-[10px] box-border items-start justify-center">
              <div className="relative tracking-[-0.01em] leading-[125%] font-extrabold inline-block md:text-4xl md:leading-[100px] md:text-center">
                Popular Porducts
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-[0px] text-left text-2xl font-arial md:flex-col">
              <div className="flex flex-row items-start justify-start gap-[0px] mq350small:flex-col">
                <div className="bg-white shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-[10px] box-border items-center justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[0px]">
                    <div className="flex flex-col items-start justify-start gap-[0px]">
                      <div className="self-stretch rounded-[8px_8px_0px_0px] bg-green-100 overflow-hidden flex flex-row p-[2px_6px] box-border items-start justify-center">
                        <div className="relative leading-[18px] inline-block">
                          Store Name
                        </div>
                      </div>
                      <img
                        className="relative w-[150px] h-[150px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/550212011-0-150x150jpg@2x.png"
                      />
                      <div className="relative w-[150px] h-[20px] shrink-0 overflow-hidden text-center text-xs text-gray-300">
                        <div className="absolute top-[1px] left-[calc(50%_-_25.08px)] rounded-[2px] bg-white [border:1px_solid_#c4c4c4] box-border flex flex-row p-[3px_4.15625px_4px_5px] items-start justify-start">
                          <div className="relative leading-[12px] inline-block">
                            LIFE 3d+
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[4px] text-center text-base text-gray-700">
                      <div className="flex flex-row p-[0px_6px] box-border items-start justify-start">
                        <div className="relative leading-[15px] flex items-center justify-center w-[147.62px] shrink-0">
                          Ocado Organic Beef Mince 15% Fat
                        </div>
                      </div>
                      <div className="relative text-sm leading-[18px] text-gray-300 flex items-center justify-center w-[26.65px] h-[14px] shrink-0">
                        400g
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0px] text-center text-base text-brown">
                    <div className="w-[178px] flex flex-col items-center justify-start gap-[0px]">
                      <div className="self-stretch flex flex-row p-[6px_32px] box-border items-start justify-start">
                        <div className="relative leading-[14px] inline-block">
                          Buy any 3 for £12 ❯
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row p-[2px_12px] box-border items-center justify-center gap-[0px] text-lg text-gray-700 mq350small:ml-[-30]">
                        <div className="w-[165px] shrink-0 flex flex-row items-start justify-center gap-[0px]">
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg8.svg"
                          />
                          <img
                            className="relative w-[77px] h-[13px] shrink-0"
                            alt=""
                            src="../../assets/images/span-wrapper4.svg"
                          />
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg9.svg"
                          />
                        </div>
                        <div className="relative leading-[18px] flex items-center justify-center w-[24.06px] h-[16px] shrink-0">
                          (80)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[0px_45px] box-border items-center justify-start gap-[3px] text-3xl text-gray-700">
                      <div className="flex flex-row p-[10px] box-border items-start justify-start">
                        <b className="relative leading-[18px] inline-block">
                          £5.25
                        </b>
                      </div>
                      <div className="flex flex-row p-[10px] box-border items-start justify-start text-sm text-gray-300">
                        <div className="relative leading-[22px] inline-block">
                          £13.13 per kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col p-[0px_18px] box-border items-center justify-start">
                    <button className="cursor-pointer [border:1px_solid_#f1c500] p-[9px_20px] bg-green-100 self-stretch rounded-[5px] box-border flex flex-row items-center justify-center hover:bg-orange lg:pl-[20px] lg:box-border sm:w-full mq350small:[border:1px_solid_#34ad54] mq350small:box-border">
                      <div className="relative text-xl leading-[18px] font-arial text-white text-center inline-block">
                        Add to trolley
                      </div>
                    </button>
                  </div>
                </div>
                <div className="bg-white shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-[10px] box-border items-center justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[0px]">
                    <div className="flex flex-col items-start justify-start gap-[0px]">
                      <div className="self-stretch rounded-[8px_8px_0px_0px] bg-green-100 overflow-hidden flex flex-row p-[2px_6px] box-border items-start justify-center">
                        <div className="relative leading-[18px] inline-block">
                          Store Name
                        </div>
                      </div>
                      <img
                        className="relative w-[150px] h-[150px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/550212011-0-150x150jpg@2x.png"
                      />
                      <div className="relative w-[150px] h-[20px] shrink-0 overflow-hidden text-center text-xs text-gray-300">
                        <div className="absolute top-[1px] left-[calc(50%_-_25.08px)] rounded-[2px] bg-white [border:1px_solid_#c4c4c4] box-border flex flex-row p-[3px_4.15625px_4px_5px] items-start justify-start">
                          <div className="relative leading-[12px] inline-block">
                            LIFE 3d+
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[4px] text-center text-base text-gray-700">
                      <div className="flex flex-row p-[0px_6px] box-border items-start justify-start">
                        <div className="relative leading-[15px] flex items-center justify-center w-[147.62px] shrink-0">
                          Ocado Organic Beef Mince 15% Fat
                        </div>
                      </div>
                      <div className="relative text-sm leading-[18px] text-gray-300 flex items-center justify-center w-[26.65px] h-[14px] shrink-0">
                        400g
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0px] text-center text-base text-brown">
                    <div className="w-[178px] flex flex-col items-center justify-start gap-[0px]">
                      <div className="self-stretch flex flex-row p-[6px_32px] box-border items-start justify-start">
                        <div className="relative leading-[14px] inline-block">
                          Buy any 3 for £12 ❯
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row p-[2px_12px] box-border items-center justify-center gap-[0px] text-lg text-gray-700 mq350small:ml-[-30]">
                        <div className="w-[165px] shrink-0 flex flex-row items-start justify-center gap-[0px]">
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg10.svg"
                          />
                          <img
                            className="relative w-[77px] h-[13px] shrink-0"
                            alt=""
                            src="../../assets/images/span-wrapper5.svg"
                          />
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg11.svg"
                          />
                        </div>
                        <div className="relative leading-[18px] flex items-center justify-center w-[24.06px] h-[16px] shrink-0">
                          (80)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[0px_45px] box-border items-center justify-start gap-[3px] text-3xl text-gray-700">
                      <div className="flex flex-row p-[10px] box-border items-start justify-start">
                        <b className="relative leading-[18px] inline-block">
                          £5.25
                        </b>
                      </div>
                      <div className="flex flex-row p-[10px] box-border items-start justify-start text-sm text-gray-300">
                        <div className="relative leading-[22px] inline-block">
                          £13.13 per kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col p-[0px_18px] box-border items-center justify-start">
                    <button className="cursor-pointer [border:1px_solid_#f1c500] p-[9px_20px] bg-green-100 self-stretch rounded-[5px] box-border flex flex-row items-center justify-center hover:bg-orange lg:pl-[20px] lg:box-border sm:w-full mq350small:[border:1px_solid_#34ad54] mq350small:box-border">
                      <div className="relative text-xl leading-[18px] font-arial text-white text-center inline-block">
                        Add to trolley
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-center gap-[0px] mq350small:flex-col">
                <div className="bg-white shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-[10px] box-border items-center justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[0px]">
                    <div className="flex flex-col items-start justify-start gap-[0px]">
                      <div className="self-stretch rounded-[8px_8px_0px_0px] bg-green-100 overflow-hidden flex flex-row p-[2px_6px] box-border items-start justify-center">
                        <div className="relative leading-[18px] inline-block">
                          Store Name
                        </div>
                      </div>
                      <img
                        className="relative w-[150px] h-[150px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/550212011-0-150x150jpg@2x.png"
                      />
                      <div className="relative w-[150px] h-[20px] shrink-0 overflow-hidden text-center text-xs text-gray-300">
                        <div className="absolute top-[1px] left-[calc(50%_-_25.08px)] rounded-[2px] bg-white [border:1px_solid_#c4c4c4] box-border flex flex-row p-[3px_4.15625px_4px_5px] items-start justify-start">
                          <div className="relative leading-[12px] inline-block">
                            LIFE 3d+
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[4px] text-center text-base text-gray-700">
                      <div className="flex flex-row p-[0px_6px] box-border items-start justify-start">
                        <div className="relative leading-[15px] flex items-center justify-center w-[147.62px] shrink-0">
                          Ocado Organic Beef Mince 15% Fat
                        </div>
                      </div>
                      <div className="relative text-sm leading-[18px] text-gray-300 flex items-center justify-center w-[26.65px] h-[14px] shrink-0">
                        400g
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0px] text-center text-base text-brown">
                    <div className="w-[178px] flex flex-col items-center justify-start gap-[0px]">
                      <div className="self-stretch flex flex-row p-[6px_32px] box-border items-start justify-start">
                        <div className="relative leading-[14px] inline-block">
                          Buy any 3 for £12 ❯
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row p-[2px_12px] box-border items-center justify-center gap-[0px] text-lg text-gray-700 mq350small:ml-[-30]">
                        <div className="w-[165px] shrink-0 flex flex-row items-start justify-center gap-[0px]">
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg12.svg"
                          />
                          <img
                            className="relative w-[77px] h-[13px] shrink-0"
                            alt=""
                            src="../../assets/images/span-wrapper6.svg"
                          />
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg13.svg"
                          />
                        </div>
                        <div className="relative leading-[18px] flex items-center justify-center w-[24.06px] h-[16px] shrink-0">
                          (80)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[0px_45px] box-border items-center justify-start gap-[3px] text-3xl text-gray-700">
                      <div className="flex flex-row p-[10px] box-border items-start justify-start">
                        <b className="relative leading-[18px] inline-block">
                          £5.25
                        </b>
                      </div>
                      <div className="flex flex-row p-[10px] box-border items-start justify-start text-sm text-gray-300">
                        <div className="relative leading-[22px] inline-block">
                          £13.13 per kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col p-[0px_18px] box-border items-center justify-start">
                    <button className="cursor-pointer [border:1px_solid_#f1c500] p-[9px_20px] bg-green-100 self-stretch rounded-[5px] box-border flex flex-row items-center justify-center hover:bg-orange lg:pl-[20px] lg:box-border sm:w-full mq350small:[border:1px_solid_#34ad54] mq350small:box-border">
                      <div className="relative text-xl leading-[18px] font-arial text-white text-center inline-block">
                        Add to trolley
                      </div>
                    </button>
                  </div>
                </div>
                <div className="bg-white shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-col p-[10px] box-border items-center justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-center justify-start gap-[0px]">
                    <div className="flex flex-col items-start justify-start gap-[0px]">
                      <div className="self-stretch rounded-[8px_8px_0px_0px] bg-green-100 overflow-hidden flex flex-row p-[2px_6px] box-border items-start justify-center">
                        <div className="relative leading-[18px] inline-block">
                          Store Name
                        </div>
                      </div>
                      <img
                        className="relative w-[150px] h-[150px] shrink-0 object-cover"
                        alt=""
                        src="../../assets/images/550212011-0-150x150jpg@2x.png"
                      />
                      <div className="relative w-[150px] h-[20px] shrink-0 overflow-hidden text-center text-xs text-gray-300">
                        <div className="absolute top-[1px] left-[calc(50%_-_25.08px)] rounded-[2px] bg-white [border:1px_solid_#c4c4c4] box-border flex flex-row p-[3px_4.15625px_4px_5px] items-start justify-start">
                          <div className="relative leading-[12px] inline-block">
                            LIFE 3d+
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[4px] text-center text-base text-gray-700">
                      <div className="flex flex-row p-[0px_6px] box-border items-start justify-start">
                        <div className="relative leading-[15px] flex items-center justify-center w-[147.62px] shrink-0">
                          Ocado Organic Beef Mince 15% Fat
                        </div>
                      </div>
                      <div className="relative text-sm leading-[18px] text-gray-300 flex items-center justify-center w-[26.65px] h-[14px] shrink-0">
                        400g
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0px] text-center text-base text-brown">
                    <div className="w-[178px] flex flex-col items-center justify-start gap-[0px]">
                      <div className="self-stretch flex flex-row p-[6px_32px] box-border items-start justify-start">
                        <div className="relative leading-[14px] inline-block">
                          Buy any 3 for £12 ❯
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row p-[2px_12px] box-border items-center justify-center gap-[0px] text-lg text-gray-700 mq350small:ml-[-30]">
                        <div className="w-[165px] shrink-0 flex flex-row items-start justify-center gap-[0px]">
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg14.svg"
                          />
                          <img
                            className="relative w-[77px] h-[13px] shrink-0"
                            alt=""
                            src="../../assets/images/span-wrapper7.svg"
                          />
                          <img
                            className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                            alt=""
                            src="../../assets/images/ratinginactive56bf3svg15.svg"
                          />
                        </div>
                        <div className="relative leading-[18px] flex items-center justify-center w-[24.06px] h-[16px] shrink-0">
                          (80)
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col p-[0px_45px] box-border items-center justify-start gap-[3px] text-3xl text-gray-700">
                      <div className="flex flex-row p-[10px] box-border items-start justify-start">
                        <b className="relative leading-[18px] inline-block">
                          £5.25
                        </b>
                      </div>
                      <div className="flex flex-row p-[10px] box-border items-start justify-start text-sm text-gray-300">
                        <div className="relative leading-[22px] inline-block">
                          £13.13 per kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col p-[0px_18px] box-border items-center justify-start">
                    <button className="cursor-pointer [border:1px_solid_#f1c500] p-[9px_20px] bg-green-100 self-stretch rounded-[5px] box-border flex flex-row items-center justify-center hover:bg-orange lg:pl-[20px] lg:box-border sm:w-full mq350small:[border:1px_solid_#34ad54] mq350small:box-border">
                      <div className="relative text-xl leading-[18px] font-arial text-white text-center inline-block">
                        Add to trolley
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default index
