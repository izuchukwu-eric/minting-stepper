import Image from 'next/image'
import React from 'react'
import Logo from "../../assests/biconomy.png"

const Finished = () => {
  return (
    <div className="flex justify-center my-2 w-full md:mx-0">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow p-6">
        <div className="flex flex-col items-center -mx-3 mb-6">
          <span className='mx-auto text-black md:text-xl text-base p-3 font-bold'>BICO token created successfully!</span>
          <Image 
            src={Logo}
            objectFit="cover"
            height={90}
            width={90}
            className="rounded-2xl mt-20"
          />
          <span className='text-black text-xl p-3 font-bold'>BICONOMY</span>
          <span className='text-gray-400 font-medium md:text-xl text-xs'>0x30557BF7a8586592aD51b04bD582749c8E2D5a17</span>
        </div>
          <div className='border-b border-gray-200 my-5' />
          <button type="button" className="items-center md:ml-40 ml-6 rounded-full border border-transparent bg-indigo-900 px-12 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-2">Create schedule</button>
      </div>
    </div>
  )
}

export default Finished