import MainLayout from '@/layouts/MainLayout'

export default function Home () {
  return (
    <>
      <MainLayout>
        <main className="relative w-full flex flex-col items-center justify-start gap-[0px] text-center text-2xs text-white font-roboto">
          {/* <div className="self-stretch bg-gray-1300 flex flex-row p-[20px] box-border items-center justify-start gap-[314px] border-b-[1px] [border-bottom-style:solid] border-b-gray-1200">
          <img
            className="relative w-[250px] h-[40px] shrink-0 object-cover"
            alt=""
            src="../../assets/images/localfreshfoods-logo1@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[30px] md:hidden">
            <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative text-2xs font-roboto text-orange-300 text-center inline-block w-[51.82px] shrink-0">
              Home
            </button>
            <div className="relative inline-block w-[105.18px] shrink-0">
              Getting a Taxi
            </div>
            <a className="[text-decoration:none] relative text-[inherit] inline-block w-[92.74px] shrink-0">
              Mobile App
            </a>
            <div className="relative inline-block w-[89.46px] shrink-0">
              Contact Us
            </div>
          </div>

        </div> */}
          <div className="self-stretch flex flex-row items-start justify-start gap-[21px] text-left text-sm text-gray-2200 lg:flex-col">
            <div className="flex-1 rounded-[10.52px] bg-gray-200 h-[1175px] overflow-hidden flex flex-col p-[21px] box-border items-start justify-start gap-[21px] lg:w-full lg:flex-[unset] lg:self-stretch">
              <img
                className="relative rounded-[5.26px] w-[671.09px] h-[686px] shrink-0 object-cover sm:w-[100%!important] sm:h-[auto!important]"
                alt=""
                src="../../assets/images/unsplashrezbvcvaspi@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch relative text-2xl leading-[43.63px] font-changa-one text-gray-2100 inline-block">
                  localfreshfoods.co.uk
                </div>
                <div className="self-stretch relative leading-[31.51px] text-center inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Sell your products online
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    SUPPORTING LOCAL PRODUCE
                  </p>
                  <p className="m-[0]">
                    FARM SHOP, BUTCHERS, FISHMONGERS, LOCAL FARMERS MARKETS
                  </p>
                </div>
                <div className="self-stretch relative leading-[31.51px] inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    <b>LOCAL PRODUCE:</b>
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    <span>
                      Locally produced Fresh Foods. Fresh food suppliers
                    </span>
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    <span>Buy local fresh foods</span>
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    <span>
                      Local Fresh Foods online. Meat, Poultry, Fish, Fruit and
                      Vegetable
                    </span>
                  </p>
                  <p className="m-[0]">
                    <span>eCommerce Solutions</span>
                  </p>
                </div>
                <div className="self-stretch relative leading-[31.51px] inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    <b>Start Selling Online</b>
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    <span>Grow Your Business With Our Unified Platform</span>
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    <span>SELLING BRITISH PRODUCE</span>
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    <span>BUY BRITISH PRODUCE</span>
                  </p>
                  <p className="m-[0]">
                    <span>SUPPORT LOCAL PRODUCE</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[15px] text-2xl text-gray-1100 font-changa-one lg:flex-[unset] lg:self-stretch">
              <div className="self-stretch rounded-[10.52px] bg-gray-200 overflow-hidden flex flex-row p-[16px_22px] box-border items-start justify-start gap-[24px] md:flex-col">
                <img
                  className="self-stretch relative rounded-[5.26px] max-h-full w-[225px] shrink-0 object-cover md:w-full"
                  alt=""
                  src="../../assets/images/tuscany-card-image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0px] md:flex-[unset] md:self-stretch">
                  <div className="self-stretch relative leading-[43.63px] inline-block">
                    The UK's Best Farm Shops
                  </div>
                  <div className="self-stretch relative text-sm leading-[31.51px] font-roboto text-gray-700 inline-block">
                    We have a Comprehensive Farm shop directory to all farm
                    shops across Britain. Find your local Farm Shop at
                    localfreshfoods.co.uk.
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-[10.52px] bg-gray-200 overflow-hidden flex flex-row p-[16px_22px] box-border items-start justify-start gap-[24px] md:flex-col">
                <img
                  className="self-stretch relative rounded-[5.26px] max-h-full w-[225px] shrink-0 object-cover md:w-full"
                  alt=""
                  src="../../assets/images/tuscany-card-image1@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0px] md:flex-[unset] md:self-stretch">
                  <div className="self-stretch relative leading-[43.63px] inline-block">
                    List of Top Butchers in the UK
                  </div>
                  <div className="self-stretch relative text-sm leading-[31.51px] font-roboto text-gray-700 inline-block">
                    Our database consists of over 6000+ Butchers across the
                    counties and regions of UK. The list contains business
                    names, addresses, phone numbers, emails and map at
                    localfreshfoods.co.uk.
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-[10.52px] bg-gray-200 overflow-hidden flex flex-row p-[16px_22px] box-border items-start justify-start gap-[24px] md:flex-col">
                <img
                  className="self-stretch relative rounded-[5.26px] max-h-full w-[224px] shrink-0 object-cover md:w-full"
                  alt=""
                  src="../../assets/images/image-6@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0px] md:flex-[unset] md:self-stretch">
                  <div className="self-stretch relative leading-[43.63px] inline-block">
                    Top of British Fishmongers
                  </div>
                  <div className="self-stretch relative text-sm leading-[31.51px] font-roboto text-gray-700 inline-block">
                    Extensive list of Seafood Mongers throughout the Scotland,
                    England, Ireland and Wales | Seafood at
                    localfreshfoods.co.uk.
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-[10.52px] bg-gray-200 overflow-hidden flex flex-row p-[16px_22px] box-border items-start justify-start gap-[24px] md:flex-col">
                <img
                  className="self-stretch relative rounded-[5.26px] max-h-full w-[224px] shrink-0 object-cover md:w-full"
                  alt=""
                  src="../../assets/images/image-5@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0px] md:flex-[unset] md:self-stretch">
                  <div className="self-stretch relative leading-[43.63px] inline-block">{'UK\'s bakeries & cake shops'}</div>
                  <div className="self-stretch relative text-sm leading-[31.51px] font-roboto text-gray-700 inline-block">
                    Search For Bakeries Near Me. Online supermarket shopping is
                    easy at localfreshfoods.co.uk.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="self-stretch bg-white overflow-hidden flex
           flex-row p-[16px] box-border items-start justify-center gap-[16px]
            text-4xl font-source-code-pro md:flex-col mq834:flex-col"
          >
            <div
              className="flex-1 flex flex-col items-center
             justify-start gap-[0px] text-2xs font-roboto md:flex-[unset]
              md:self-stretch mq834:flex-[unset] mq834:self-stretch"
            >
              <div className="self-stretch rounded-[16px_16px_0px_0px] bg-green-100 flex flex-row p-[10px] box-border items-start justify-center">
                <div className="relative tracking-[0.15px] leading-[24px] uppercase inline-block">
                  Search by:
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <input
                  className="[border:1px_solid_rgba(0,_0,_0,_0.23)] text-gray-900 outline-none font-roboto text-2xs bg-[transparent] self-stretch rounded-[4px] box-border flex flex-col p-[0px_12px] items-start
                   justify-start"
                  type="text"
                  placeholder="County"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <input
                  className="[border:1px_solid_rgba(0,_0,_0,_0.23)] text-gray-900 outline-none font-roboto text-2xs bg-[transparent] self-stretch rounded-[4px] box-border flex flex-col p-[0px_12px] items-start justify-start"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <input
                  className="[border:1px_solid_rgba(0,_0,_0,_0.23)] text-gray-900 outline-none font-roboto text-2xs bg-[transparent] self-stretch rounded-[4px] box-border flex flex-col p-[0px_12px] items-start justify-start"
                  type="text"
                  placeholder="Post Code"
                />
              </div>
            </div>
            <div className="flex-1 rounded-[10px] bg-white [border:0.7px_solid_#dee3eb] box-border overflow-hidden flex flex-col items-center justify-start gap-[16px] md:w-[100%!important] md:h-[auto!important] md:flex-[unset] md:self-stretch mq834:flex-[unset] mq834:self-stretch">
              <div className="self-stretch rounded-[16px_16px_0px_0px] bg-green-100 flex flex-row items-start justify-center">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative tracking-[-0.04em] uppercase font-semibold inline-block">
                    Store Name
                  </div>
                </div>
              </div>
              <img
                className="self-stretch max-w-full overflow-hidden h-[287px] shrink-0 object-cover"
                alt=""
                src="../../assets/images/frame-7662@2x.png"
              />
              <div className="self-stretch flex flex-col p-[16px] box-border items-start justify-start gap-[13px] text-left text-xs text-gray-900">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[20px] h-[19px] shrink-0 object-cover"
                    alt=""
                    src="../../assets/images/star-15@2x.png"
                  />
                  <img
                    className="relative w-[20px] h-[19px] shrink-0 object-cover"
                    alt=""
                    src="../../assets/images/star-15@2x.png"
                  />
                  <img
                    className="relative w-[20px] h-[19px] shrink-0 object-cover"
                    alt=""
                    src="../../assets/images/star-15@2x.png"
                  />
                  <img
                    className="relative w-[20px] h-[19px] shrink-0 object-cover"
                    alt=""
                    src="../../assets/images/star-15@2x.png"
                  />
                  <img
                    className="relative w-[20px] h-[19px] shrink-0 object-cover"
                    alt=""
                    src="../../assets/images/star-15@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.04em] font-semibold inline-block w-[145.47px]">
                      (40)
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl text-gray-1400 font-alegreya">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="self-stretch relative tracking-[0.02em] leading-[34px] inline-block">
                      39 Harris Close, Kelly Bray, Callington CORNWALL PL17 8QT
                    </b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-2xs font-roboto">
                    <div className="self-stretch relative tracking-[0.01em] leading-[28px] inline-block">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec vel lacus turpis. Praesent pharetra ex sed nibh
                      malesuada, eget tempor leo consectetur. Integ
                    </div>
                  </div>
                  <input
                    className="[border:1px_solid_rgba(0,_0,_0,_0.3)] p-2 rounded-sm font-roboto outline-none text-2xs bg-[transparent] self-stretch box-border flex flex-col items-start justify-start"
                    type="email"
                    placeholder="example@localfreshfoods.co.uk"
                  />
                  <input
                    className="[border:1px_solid_rgba(0,_0,_0,_0.3)] p-2 rounded-sm outline-none font-roboto text-2xs bg-[transparent] self-stretch box-border flex flex-row items-start justify-start"
                    type="tel"
                    placeholder="0123 456 78 90"
                  />
                  <button
                    className="cursor-pointer transition-all  [border:1px_solid_rgba(0,_0,_0,_0.5)] p-[0] bg-orange-500 self-stretch rounded-[4px] box-border h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-center hover:[background:linear-gradient(#34ad54,_#34ad54),_rgba(52,_173,_84,_0)] sm:w-full sm:hover:bg-orange-400"
                    // onClick={openMapPopup}
                  >
                    <div className="overflow-hidden flex flex-col p-[8px_22px] box-border items-start justify-start">
                      <div className="relative text-3xs tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-gray-1000 text-left inline-block">
                        ClIck for map
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] transition-all  p-[0] bg-green-100 self-stretch rounded-[4px] h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-center hover:bg-orange-200 sm:w-full sm:hover:bg-orange-400">
                    <div className="overflow-hidden flex flex-col p-[8px_22px] box-border items-start justify-start">
                      <div className="relative text-3xs tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white text-left inline-block">
                        Visit Store
                      </div>
                    </div>
                  </button>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative border-t-[0.7px_solid_#ecf0f6] box-border w-[396.7px] h-[0.7px] shrink-0" />
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-[10px] bg-white [border:0.7px_solid_#dee3eb] box-border overflow-hidden flex flex-col items-center justify-start gap-[16px] md:w-[100%!important] md:h-[auto!important] md:flex-[unset] md:self-stretch mq834:flex-[unset] mq834:self-stretch">
              <div className="self-stretch rounded-[16px_16px_0px_0px] bg-green-100 flex flex-row items-start justify-center">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative tracking-[-0.04em] uppercase font-semibold inline-block">
                    Store Name
                  </div>
                </div>
              </div>
              <img
                className="self-stretch max-w-full overflow-hidden h-[287px] shrink-0 object-cover"
                alt=""
                src="../../assets/images/frame-76621@2x.png"
              />
              <div className="self-stretch flex flex-col p-[16px] box-border items-start justify-start gap-[13px] text-left text-xs text-gray-900">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-[20px] h-[19px] shrink-0 object-cover"
                    alt=""
                    src="../../assets/images/star-151@2x.png"
                  />
                  <img
                    className="relative w-[20px] h-[19px] shrink-0 object-cover"
                    alt=""
                    src="../../assets/images/star-151@2x.png"
                  />
                  <img
                    className="relative w-[20px] h-[19px] shrink-0 object-cover"
                    alt=""
                    src="../../assets/images/star-151@2x.png"
                  />
                  <img
                    className="relative w-[20px] h-[19px] shrink-0 object-cover"
                    alt=""
                    src="../../assets/images/star-151@2x.png"
                  />
                  <img
                    className="relative w-[20px] h-[19px] shrink-0 object-cover"
                    alt=""
                    src="../../assets/images/star-151@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.04em] font-semibold inline-block w-[145.47px]">
                      (40)
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl text-gray-1400 font-alegreya">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="self-stretch relative tracking-[0.02em] leading-[34px] inline-block">
                      39 Harris Close, Kelly Bray, Callington CORNWALL PL17 8QT
                    </b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-2xs font-roboto">
                    <div className="self-stretch relative tracking-[0.01em] leading-[28px] inline-block">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec vel lacus turpis. Praesent pharetra ex sed nibh
                      malesuada, eget tempor leo consectetur. Integ
                    </div>
                  </div>
                  <input
                    className="[border:1px_solid_rgba(0,_0,_0,_0.3)] p-2 rounded-sm font-roboto outline-none text-2xs bg-[transparent] self-stretch box-border flex flex-col items-start justify-start"
                    type="email"
                    placeholder="example@localfreshfoods.co.uk"
                  />
                  <input
                    className="[border:1px_solid_rgba(0,_0,_0,_0.3)] p-2 rounded-sm font-roboto outline-none text-2xs bg-[transparent] self-stretch box-border flex flex-row items-start justify-start"
                    type="tel"
                    placeholder="0123 456 78 90"
                  />
                  <button
                    className="cursor-pointer transition-all [border:1px_solid_rgba(0,_0,_0,_0.5)] p-[0] bg-orange-500 self-stretch rounded-[4px] box-border h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-center hover:[background:linear-gradient(#34ad54,_#34ad54),_rgba(52,_173,_84,_0)] sm:w-full sm:hover:bg-orange-400"
                    // onClick={openMapPopup1}
                  >
                    <div className="overflow-hidden flex flex-col p-[8px_22px] box-border items-start justify-start">
                      <div className="relative text-3xs tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-gray-1000 text-left inline-block">
                        ClIck for map
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] transition-all  p-[0] bg-green-100 self-stretch rounded-[4px] h-[56px] shrink-0 overflow-hidden flex flex-col items-center justify-center hover:bg-orange-200 sm:w-full sm:hover:bg-orange-400">
                    <div className="overflow-hidden flex flex-col p-[8px_22px] box-border items-start justify-start">
                      <div className="relative text-3xs tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white text-left inline-block">
                        Visit Store
                      </div>
                    </div>
                  </button>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative border-t-[0.7px_solid_#ecf0f6] box-border w-[396.7px] h-[0.7px] shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  )
}
