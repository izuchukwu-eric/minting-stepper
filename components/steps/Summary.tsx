import Image from 'next/image'
import React from 'react'
import Logo from "../../assests/biconomy.png"


interface Props {
  handleClick: any
}

const Summary = ({ handleClick }: Props) => {
  return (
    <div className="flex justify-center my-2 mx-4 md:mx-0">
        <div className="w-full max-w-xl bg-white rounded-3xl shadow p-6">
          <div className="flex flex-wrap items-center -mx-3 mb-6">
            <Image 
              src={Logo}
              objectFit="cover"
              height={50}
              width={50}
              className="rounded-2xl"
              alt="biconomy"
            />
            <span className='text-black text-3xl p-3 font-bold'>Biconomy</span>
            <div className='bg-gray-300 rounded-full'>
              <span className='p-2 font-medium text-gray-600'>BICO</span>
            </div>
          </div>
          <div>
            <span>Contract Address</span>
            <div className='w-full bg-gray-300 my-5 h-6' />
            <div className='border-b border-gray-200 mb-5' />
          </div>
          <div className='flex flex-row justify-between space-x-2'>
            <div className='flex flex-col'>
              <span className='text-gray-600 text-base font-semibold'>Supply cap</span>
              <span className='text-gray-400 font-medium'>Unlimited</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-gray-600 text-base font-semibold'>Initail supply</span>
              <span className='text-gray-400 font-medium'>500,000</span>
            </div>
            <div className='flex flex-col'>
              <span className='text-gray-600 text-base font-semibold'>Maximum supply</span>
              <span className='text-gray-400 font-medium'>1,000,000,000</span>
            </div>
          </div>
          <div className='border-b border-gray-200 my-5' />
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row space-x-3 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              <span onClick={() => handleClick()} className='cursor-pointer text-gray-400 font-medium'>Return to details</span>
            </div>
            <button type="button" onClick={() => handleClick("next")} className="m-6 float-right items-center md:rounded-full rounded-lg border border-transparent bg-indigo-900 md:px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-2">Create token</button>
          </div>
        </div>
      </div>
  )
}

export default Summary