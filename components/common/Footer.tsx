import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-green-200 w-full flex flex-row p-[33px_84px] box-border items-start justify-start gap-[44px] text-left text-[18px] text-white font-roboto lg:p-[40px] lg:box-border md:flex-col md:p-[40px_24px_30px] md:box-border sm:p-[30px_24px] sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
        <div className="bg-gray-100 h-[36px] shrink-0 flex flex-col p-[8px_12px] box-border items-center justify-center">
          <img
            className="relative w-[174px] h-[33px] shrink-0 object-cover"
            alt=""
            src="../../assets/images/symbols@2x.png"
          />
        </div>
        <div className="self-stretch relative leading-[27px] inline-block text-black">
          Opening an online store has never been easier. localfreshfoods is a
          leading choice for small business merchants to easily set up a store
          and start selling fast.
        </div>
        <img
          className="relative w-[130px] h-[30px] shrink-0"
          alt=""
          src="../../assets/images/social-icons.svg"
        />
      </div>
      <div className="relative border-r-[1px_solid_rgba(255,_255,_255,_0.2)] box-border w-[1px] h-[157.87px] shrink-0 md:hidden" />
      <div className="flex-1 flex flex-row items-start justify-start gap-[10px] text-base md:flex-[unset] md:self-stretch sm:flex-col">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:mb-[40px!important] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-lg leading-[27px] font-medium inline-block">
            Company
          </div>
          <div className="self-stretch relative inline-block">About Us</div>
          <div className="self-stretch relative inline-block">News</div>
          <div className="self-stretch relative inline-block">Marketing</div>
          <div className="self-stretch relative inline-block">How we work</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:mb-[40px!important] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-lg leading-[27px] font-medium inline-block">
            Support
          </div>
          <div className="self-stretch relative inline-block">Account</div>
          <div className="self-stretch relative inline-block">
            Seller Registration
          </div>
          <div className="self-stretch relative inline-block">
            Accessibility
          </div>
          <div className="self-stretch relative inline-block">FAQ</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch relative text-lg leading-[27px] font-medium inline-block">
            Legal
          </div>
          <div className="self-stretch relative inline-block">
            Private Policy
          </div>
          <div className="self-stretch relative inline-block">{`Terms & Conditions`}</div>
          <div className="self-stretch relative inline-block">
            Cookie Policy
          </div>
          <div className="self-stretch relative inline-block">Site Map</div>
        </div>
      </div>
    </footer>
  );
}
