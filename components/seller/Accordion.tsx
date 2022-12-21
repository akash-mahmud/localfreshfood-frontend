import React from 'react';

export default function Accrodion() {
  return (
    <div className="container">
      <div className="flex items-center  justify-center align-middle text-gray-700">
        <div className="w-1/2">
          <details
            style={{
              boxShadow:
                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            }}
            className=" rounded-lg mb-6"
          >
            <summary className="font-semibold bg-blue-200 px-4 py-2     cursor-pointer text-black text-4xl	">
              About the Store
            </summary>
            <div className=" bg-blue-100 transition-all	ease-in-out delay-500">
              <p className="leading-6 px-3 py-2 text-gray-800 text-xl font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget nunc vel dui porta ultrices dictum at diam. Proin vitae
                ligula eu tortor gravida aliquam. Proin accumsan malesuada nisl
                at viverra. Curabitur a pulvinar ante. Cras vulputate purus
                elit, sed vehicula ante mollis vitae. Etiam tellus ligula,
                aliquet aliquam mollis eget, suscipit imperdiet metus.
                Suspendisse potenti. Maecenas tristique sapien et erat varius,
                vitae porta eros blandit. Duis sodales ligula mollis nisl
                porttitor cursus. Suspendisse potenti. Integer non dui in orci
                faucibus fringilla. Pellentesque pellentesque a metus nec
                hendrerit. Nulla ac ipsum aliquet, finibus nunc vitae, sodales
                augue. Curabitur at feugiat eros. In et ullamcorper sapien.
                Donec non nibh nisl. Morbi malesuada eleifend velit bibendum
                fermentum. Etiam quis ante varius, pharetra ligula quis,
                hendrerit nisi. Nunc pretium vitae neque volutpat faucibus.
                Curabitur lobortis libero massa, ac egestas magna placerat eget.
                Etiam posuere purus vitae nunc semper, eu fringilla massa
                volutpat.
              </p>
            </div>
          </details>
          <details
            style={{
              boxShadow:
                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            }}
            className=" rounded-lg mb-6"
          >
            <summary className="font-semibold bg-blue-200 px-4 py-2   cursor-pointer text-4xl">
              Store Products
            </summary>
            <div className="bg-blue-100">
              <div className="relative bg-gray-200 shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] [border:1px_solid_#c1c1c1] box-border w-full flex flex-col items-center justify-start gap-[0px] text-center text-6xl text-white font-inter md:flex-col sm:flex-col">
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
                            src="../550212011-0-150x150jpg@2x.png"
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
                                src="../ratinginactive56bf3svg.svg"
                              />
                              <img
                                className="relative w-[77px] h-[13px] shrink-0"
                                alt=""
                                src="../span-wrapper.svg"
                              />
                              <img
                                className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                                alt=""
                                src="../ratinginactive56bf3svg1.svg"
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
                            src="../550212011-0-150x150jpg@2x.png"
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
                                src="../ratinginactive56bf3svg2.svg"
                              />
                              <img
                                className="relative w-[77px] h-[13px] shrink-0"
                                alt=""
                                src="../span-wrapper1.svg"
                              />
                              <img
                                className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                                alt=""
                                src="../ratinginactive56bf3svg3.svg"
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
                            src="../550212011-0-150x150jpg@2x.png"
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
                                src="../ratinginactive56bf3svg4.svg"
                              />
                              <img
                                className="relative w-[77px] h-[13px] shrink-0"
                                alt=""
                                src="../span-wrapper2.svg"
                              />
                              <img
                                className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                                alt=""
                                src="../ratinginactive56bf3svg5.svg"
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
                            src="../550212011-0-150x150jpg@2x.png"
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
                                src="../ratinginactive56bf3svg6.svg"
                              />
                              <img
                                className="relative w-[77px] h-[13px] shrink-0"
                                alt=""
                                src="../span-wrapper3.svg"
                              />
                              <img
                                className="relative w-[13px] h-[12.07px] shrink-0 overflow-hidden"
                                alt=""
                                src="../ratinginactive56bf3svg7.svg"
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
          </details>
          <details
            style={{
              boxShadow:
                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            }}
            className=" rounded-lg mb-6"
          >
            <summary className="font-semibold bg-blue-200 px-4 py-2  cursor-pointer text-4xl">
              Store Reviews
            </summary>
            <div className=" bg-blue-100 transition-all	ease-in-out delay-500">
              <div className="relative w-full flex flex-col p-[12px_12px_12px_160px] box-border items-center justify-start gap-[12px] text-left text-base text-black font-roboto">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative inline-block">39 Reviews</div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="relative inline-block">
                        {'Average of 4.6 stars '}
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[375px] h-[28px] shrink-0">
                    <div className="absolute top-[0px] left-[0px] inline-block w-[375px] h-[28px]">
                      Help other customers like you
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-[8px_16px] bg-green-100 rounded-[10px] flex flex-row box-border items-start justify-start">
                    <a
                      className="relative text-base font-roboto text-white text-center flex items-center justify-center w-[112px] h-[30px] shrink-0 [text-decoration:none]"
                      href="https://www.tesco.com/groceries/en-GB/reviews/submission/252193004?from=%2Fproducts%2F252193004"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Write a review
                    </a>
                  </button>
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative inline-block">
                      Help other customers like you
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 relative inline-block">
                      Reviews are submitted by our customers directly through
                      our website. We also share reviews from other retailers'
                      websites to help you make an informed decision
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden h-[10px] shrink-0 object-cover"
                    alt=""
                    src="../line-1@2x.png"
                  />
                </div>
                <div className="flex flex-col items-center justify-start gap-[12px] text-sm">
                  <div className="bg-white w-[291px] overflow-hidden flex flex-col p-[10px] box-border items-start justify-start gap-[16px]">
                    <div className="self-stretch bg-gray-100 [backdrop-filter:blur(100px)] flex flex-row p-[4px] box-border items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[25px] h-[36px] shrink-0 object-cover"
                        alt=""
                        src="../image-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[3px]">
                        <div className="relative font-medium inline-block">
                          Good Will Hunting
                        </div>
                        <div className="relative text-xs text-gray-300 inline-block">
                          {'1997 · Plot / Love '}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-center text-indigo font-inter">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <div className="flex flex-row items-center justify-start gap-[4px]">
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star.svg"
                            />
                          </div>
                          <div className="rounded-[4px] bg-gray-200 h-[20px] flex flex-row p-[2px_10px] box-border items-center justify-center">
                            <div className="relative leading-[150%] font-medium inline-block">
                              5.0
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch relative text-base font-roboto text-black text-left inline-block">
                          Towering performance by Matt Damon as a troubled
                          working class who needs to address his creative genius
                          elevates this drama way above its therapeutic
                          approach, resulting in a zeitgeist film that may touch
                          chord with young viewers the way The Graduate did
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between text-left text-xs text-gray-400 font-roboto">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="relative w-[10px] h-[10px] shrink-0 object-cover"
                            alt=""
                            src="../avatar-enx@2x.png"
                          />
                          <div className="relative inline-block">
                            Nguyen Shane
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start text-gray-300">
                          <div className="relative inline-block">
                            Oct 13, 2017
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white w-[291px] overflow-hidden flex flex-col p-[10px] box-border items-start justify-start gap-[16px]">
                    <div className="self-stretch bg-gray-100 [backdrop-filter:blur(100px)] flex flex-row p-[4px] box-border items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[25px] h-[36px] shrink-0 object-cover"
                        alt=""
                        src="../image-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[3px]">
                        <div className="relative font-medium inline-block">
                          Good Will Hunting
                        </div>
                        <div className="relative text-xs text-gray-300 inline-block">
                          {'1997 · Plot / Love '}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-center text-indigo font-inter">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <div className="flex flex-row items-center justify-start gap-[4px]">
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star.svg"
                            />
                          </div>
                          <div className="rounded-[4px] bg-gray-200 h-[20px] flex flex-row p-[2px_10px] box-border items-center justify-center">
                            <div className="relative leading-[150%] font-medium inline-block">
                              5.0
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch relative text-base font-roboto text-black text-left inline-block">
                          Towering performance by Matt Damon as a troubled
                          working class who needs to address his creative genius
                          elevates this drama way above its therapeutic
                          approach, resulting in a zeitgeist film that may touch
                          chord with young viewers the way The Graduate did
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between text-left text-xs text-gray-400 font-roboto">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="relative w-[10px] h-[10px] shrink-0 object-cover"
                            alt=""
                            src="../avatar-enx@2x.png"
                          />
                          <div className="relative inline-block">
                            Nguyen Shane
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start text-gray-300">
                          <div className="relative inline-block">
                            Oct 13, 2017
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white w-[291px] overflow-hidden flex flex-col p-[10px] box-border items-start justify-start gap-[16px]">
                    <div className="self-stretch bg-gray-100 [backdrop-filter:blur(100px)] flex flex-row p-[4px] box-border items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[25px] h-[36px] shrink-0 object-cover"
                        alt=""
                        src="../image-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[3px]">
                        <div className="relative font-medium inline-block">
                          Good Will Hunting
                        </div>
                        <div className="relative text-xs text-gray-300 inline-block">
                          {'1997 · Plot / Love '}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-center text-indigo font-inter">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <div className="flex flex-row items-center justify-start gap-[4px]">
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star10.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star10.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star10.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star10.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star10.svg"
                            />
                          </div>
                          <div className="rounded-[4px] bg-gray-200 h-[20px] flex flex-row p-[2px_10px] box-border items-center justify-center">
                            <div className="relative leading-[150%] font-medium inline-block">
                              5.0
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch relative text-base font-roboto text-black text-left inline-block">
                          Towering performance by Matt Damon as a troubled
                          working class who needs to address his creative genius
                          elevates this drama way above its therapeutic
                          approach, resulting in a zeitgeist film that may touch
                          chord with young viewers the way The Graduate did
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between text-left text-xs text-gray-400 font-roboto">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="relative w-[10px] h-[10px] shrink-0 object-cover"
                            alt=""
                            src="../avatar-enx@2x.png"
                          />
                          <div className="relative inline-block">
                            Nguyen Shane
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start text-gray-300">
                          <div className="relative inline-block">
                            Oct 13, 2017
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-white h-[1px] shrink-0 overflow-hidden flex flex-col p-[10px] box-border items-start justify-start gap-[16px]">
                      <div className="self-stretch bg-gray-100 [backdrop-filter:blur(100px)] flex flex-row p-[4px] box-border items-center justify-start gap-[6px]">
                        <img
                          className="relative w-[25px] h-[36px] shrink-0 object-cover"
                          alt=""
                          src="../image-13@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start gap-[3px]">
                          <div className="relative font-medium inline-block">
                            Good Will Hunting
                          </div>
                          <div className="relative text-xs text-gray-300 inline-block">
                            {'1997 · Plot / Love '}
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-center text-indigo font-inter">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                          <div className="flex flex-row items-center justify-start gap-[12px]">
                            <div className="flex flex-row items-center justify-start gap-[4px]">
                              <img
                                className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                                alt=""
                              />
                              <img
                                className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                                alt=""
                              />
                              <img
                                className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                                alt=""
                              />
                              <img
                                className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                                alt=""
                              />
                              <img
                                className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                                alt=""
                              />
                            </div>
                            <div className="rounded-[4px] bg-gray-200 h-[20px] flex flex-row p-[2px_10px] box-border items-center justify-center">
                              <div className="relative leading-[150%] font-medium inline-block">
                                5.0
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch relative text-base font-roboto text-black text-left inline-block">
                            Towering performance by Matt Damon as a troubled
                            working class who needs to address his creative
                            genius elevates this drama way above its therapeutic
                            approach, resulting in a zeitgeist film that may
                            touch chord with young viewers the way The Graduate
                            did
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between text-left text-xs text-gray-400 font-roboto">
                          <div className="flex flex-row items-center justify-start gap-[4px]">
                            <img
                              className="relative w-[10px] h-[10px] shrink-0 object-cover"
                              alt=""
                              src="../avatar-enx3@2x.png"
                            />
                            <div className="relative inline-block">
                              Nguyen Shane
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start text-gray-300">
                            <div className="relative inline-block">
                              Oct 13, 2017
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white w-[291px] overflow-hidden flex flex-col p-[10px] box-border items-start justify-start gap-[16px]">
                    <div className="self-stretch bg-gray-100 [backdrop-filter:blur(100px)] flex flex-row p-[4px] box-border items-center justify-start gap-[6px]">
                      <img
                        className="relative w-[25px] h-[36px] shrink-0 object-cover"
                        alt=""
                        src="../image-1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[3px]">
                        <div className="relative font-medium inline-block">
                          Good Will Hunting
                        </div>
                        <div className="relative text-xs text-gray-300 inline-block">
                          {'1997 · Plot / Love '}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-center text-indigo font-inter">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <div className="flex flex-row items-center justify-start gap-[12px]">
                          <div className="flex flex-row items-center justify-start gap-[4px]">
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star10.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star10.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star10.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star10.svg"
                            />
                            <img
                              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
                              alt=""
                              src="../star10.svg"
                            />
                          </div>
                          <div className="rounded-[4px] bg-gray-200 h-[20px] flex flex-row p-[2px_10px] box-border items-center justify-center">
                            <div className="relative leading-[150%] font-medium inline-block">
                              5.0
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch relative text-base font-roboto text-black text-left inline-block">
                          Towering performance by Matt Damon as a troubled
                          working class who needs to address his creative genius
                          elevates this drama way above its therapeutic
                          approach, resulting in a zeitgeist film that may touch
                          chord with young viewers the way The Graduate did
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between text-left text-xs text-gray-400 font-roboto">
                        <div className="flex flex-row items-center justify-start gap-[4px]">
                          <img
                            className="relative w-[10px] h-[10px] shrink-0 object-cover"
                            alt=""
                            src="../avatar-enx@2x.png"
                          />
                          <div className="relative inline-block">
                            Nguyen Shane
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start text-gray-300">
                          <div className="relative inline-block">
                            Oct 13, 2017
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>

          <details
            style={{
              boxShadow:
                '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            }}
            className=" rounded-lg mb-6"
          >
            <summary className="font-semibold bg-blue-200 px-4 py-2 text-4xl    cursor-pointer text-black">
              Terms & Returns
            </summary>
            <div className=" bg-blue-100 transition-all	ease-in-out delay-500">
              <p className="leading-6 px-3 py-2 text-gray-800 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget nunc vel dui porta ultrices dictum at diam. Proin vitae
                ligula eu tortor gravida aliquam. Proin accumsan malesuada nisl
                at viverra. Curabitur a pulvinar ante. Cras vulputate purus
                elit, sed vehicula ante mollis vitae. Etiam tellus ligula,
                aliquet aliquam mollis eget, suscipit imperdiet metus.
                Suspendisse potenti. Maecenas tristique sapien et erat varius,
                vitae porta eros blandit. Duis sodales ligula mollis nisl
                porttitor cursus. Suspendisse potenti. Integer non dui in orci
                faucibus fringilla. Pellentesque pellentesque a metus nec
                hendrerit. Nulla ac ipsum aliquet, finibus nunc vitae, sodales
                augue. Curabitur at feugiat eros. In et ullamcorper sapien.
                Donec non nibh nisl. Morbi malesuada eleifend velit bibendum
                fermentum. Etiam quis ante varius, pharetra ligula quis,
                hendrerit nisi. Nunc pretium vitae neque volutpat faucibus.
                Curabitur lobortis libero massa, ac egestas magna placerat eget.
                Etiam posuere purus vitae nunc semper, eu fringilla massa
                volutpat.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
