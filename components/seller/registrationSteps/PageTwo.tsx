import url from '@/config/url';
import Link from 'next/link';
import React from 'react';
interface IPropType {
  onButtonClick: (page: string) => void;
}
export default function PageTwo({ onButtonClick }: IPropType): JSX.Element {
  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-left">
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <div className="self-stretch relative leading-[150%] font-medium inline-block">
            Password
          </div>
          <input
            className="outline-none [border:1px_solid_#d1d5db] font-open-sans text-base bg-gray-100 self-stretch rounded-[8px] box-border flex flex-row p-[12px_16px] items-start justify-start"
            type="text"
            placeholder="User Name"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <div className="self-stretch relative leading-[150%] font-medium inline-block">
            Confirm Password
          </div>
          <input
            className="outline-none [border:1px_solid_#d1d5db] bg-gray-100 self-stretch rounded-[8px] box-border flex flex-row p-[12px_16px] items-start justify-start"
            type="text"
            placeholder="******"
          />
        </div>
      </div>

      <div className="self-stretch flex flex-col  mt-5 justify-start gap-[16px] text-indigo">
        <div className="flex flex-row justify-between align-middle items-center">
          <button
            onClick={() => onButtonClick('pageone')}
            className="transition-all cursor-pointer [border:none] p-[12px_20px] bg-green-100 self-stretch rounded-[8px] overflow-hidden flex flex-row box-border items-center justify-center hover:bg-orange"
          >
            <div className="relative text-[16px] leading-[150%] uppercase font-medium font-open-sans text-white text-left inline-block">
              previous
            </div>
          </button>
          <button
            onClick={() => onButtonClick('pagethree')}
            className="transition-all cursor-pointer [border:none] p-[12px_20px] bg-green-100 self-stretch rounded-[8px] overflow-hidden flex flex-row box-border items-center justify-center hover:bg-orange"
          >
            <div className="relative text-[16px] leading-[150%] uppercase font-medium font-open-sans text-white text-left inline-block">
              Next
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
