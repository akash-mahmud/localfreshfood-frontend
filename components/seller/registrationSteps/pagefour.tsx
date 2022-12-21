import url from '@/config/url';
import Link from 'next/link';
import React from 'react';
interface IPropType {
  onButtonClick: (page: string) => void;
}
export default function Pagefour({ onButtonClick }: IPropType): JSX.Element {
  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-left">
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <div className="self-stretch relative leading-[150%] font-medium inline-block">
            Niche
          </div>
          <input
            className="outline-none [border:1px_solid_#d1d5db] font-open-sans text-base bg-gray-100 self-stretch rounded-[8px] box-border flex flex-row p-[12px_16px] items-start justify-start"
            type="text"
            placeholder="User Name"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <div className="self-stretch relative leading-[150%] font-medium inline-block">
            About yourself
          </div>
          <input
            className="outline-none [border:1px_solid_#d1d5db] font-open-sans text-base bg-gray-100 self-stretch rounded-[8px] box-border flex flex-row p-[12px_16px] items-start justify-start"
            type="text"
            placeholder="User Name"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center mt-3 justify-start gap-[0px] text-left text-sm text-gray-800">
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
        <div className="relative leading-[150%] font-medium text-indigo-200 text-right inline-block">
          Forgot password?
        </div>
      </div>
      <div className="self-stretch flex flex-col  mt-5 justify-start gap-[16px] text-indigo">
        <div className="flex flex-row justify-between align-middle items-center">
          <button
            onClick={() => onButtonClick('pagethree')}
            className="transition-all cursor-pointer [border:none] p-[12px_20px] bg-green-100 self-stretch rounded-[8px] overflow-hidden flex flex-row box-border items-center justify-center hover:bg-orange"
          >
            <div className="relative text-[16px] leading-[150%] uppercase font-medium font-open-sans text-white text-left inline-block">
              previous
            </div>
          </button>
          <button className="transition-all cursor-pointer [border:none] p-[12px_20px] bg-green-100 self-stretch rounded-[8px] overflow-hidden flex flex-row box-border items-center justify-center hover:bg-orange">
            <div className="relative text-[16px] leading-[150%] uppercase font-medium font-open-sans text-white text-left inline-block">
              Submit
            </div>
          </button>
        </div>
        <div className="self-stretch relative leading-[150%] font-medium inline-block">
          Already have an account?{' '}
          <Link className="text-indigo-200" href={url.auth.login}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
