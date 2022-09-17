
interface Props {
  handleClick: any
}

const Details = ({ handleClick }: Props) => {
  return (
    <div className='mt-5 md:mt-10 md:w-[150%] md:absolute md:left-64 md:right-0 md:max-w-6xl'>
      <div className="flex md:flex-row flex-col space-x-10">
        <div className="overflow-hidden max-h-2xl w-[120%] md:mx-0 -mx-7 md:w-[60%] shadow rounded-3xl mb-10 sm:rounded-3xl">
          <form action="#" method="POST" className=''>

            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <div className='flex flex-row space-x-1'>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Token name</label>
                    <label className='text-orange-600'>*</label>
                  </div>
                  <input className="block w-full md:w-64 text-gray-900 font-medium border border-gray-400 rounded-full py-3 px-3 leading-tight focus:outline-none" placeholder='Biconomy' type='text' required />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <div className='flex flex-row space-x-1'>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Token symbol</label>
                    <label className='text-orange-600'>*</label>
                  </div>
                  <input className="block w-full md:w-64 text-gray-900 font-medium border border-gray-400 rounded-full py-3 px-3 leading-tight focus:outline-none" type='text' placeholder='BICO' required />
                </div>
              </div>
            </div>

            <div className='border-b border-gray-200 mb-5 mx-6' />

            <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4">
              <div className="sm:col-span-6 mx-6">
                <div className='flex flex-row space-x-1'>
                  <label className="block text-sm font-medium text-gray-700">Token logo</label>
                  <label className='text-orange-600'>*</label>
                </div>
                <div className="mt-1 flex justify-center rounded-3xl border-2 border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Click to upload</span>
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB (max. 512*512px)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='border-b border-gray-200 p-3 mx-6' />

            <div className='p-6'>
              <div className='flex flex-row space-x-1'>
                <label className="text-base font-medium text-gray-900">Supply cap</label>
                <label className='text-orange-600'>*</label>
              </div>
              <fieldset className="mt-4">
                <div className="space-y-4">
                  <div className='relative flex flex-col items-start'>
                    <div className="flex items-center">
                      <input name="supply-cap" type="radio" checked className="h-4 w-4 accent-red-600 focus:accent-red-600" />
                      <label className="ml-2 block text-sm font-medium text-gray-700">Unlimited</label>
                    </div>
                    <div className="ml-3 text-sm">
                      <p className="text-gray-400 text-sm font-medium ml-3">No limit on the amount of tokens in circulation</p>
                    </div>
                  </div>

                  <div className='relative flex flex-col items-start'>
                    <div className="flex items-center">
                      <input name="supply-cap" type="radio" checked className="h-4 w-4 accent-red-600 focus:accent-red-600" />
                      <label className="ml-2 block text-sm font-medium text-gray-700">Limited</label>
                    </div>
                    <div className="ml-3 text-sm">
                      <p className=" text-gray-400 text-sm font-medium ml-3">Fixed amount of tokens ever in circulation</p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className='border-b border-gray-200 mb-5 mx-6' />

            <div className="mb-6 mx-6">
              <div className='flex flex-row space-x-1'>
                <label className="block tracking-wide text-gray-900 text-base font-medium mb-2">Amount to mint</label>
                <label className='text-orange-600'>*</label>
              </div>
              <label className="block tracking-wide text-gray-400 text-sm font-medium mb-2">Token supply must be greater than zero.</label>
              <div className='flex flex-row justify-between border w-full border-gray-400 rounded-full py-3 px-3 leading-tight '>
                <input className="appearance-none block w-full bg-white text-gray-900 font-medium focus:outline-none" type='text' placeholder='500,000' required />
                <span>BICO</span>
              </div>
            </div>

            <div className='border-b border-gray-200 mx-6' />

            <button type="button" onClick={() => handleClick("next")} className="inline-flex m-6 float-right items-center rounded-full border border-transparent bg-indigo-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-2">Continue</button>
          </form>
        </div>

        <div className="flex flex-col mt-10 md:mt-0 md:w-80 float-right">
          <p className="text-orange-500 text-base font-medium">Support</p>
          <p className="text-black text-xl my-3 font-bold">FAQ<small>S</small></p>
          <p className="text-gray-400">Everything you need to know about token minting. Can&apos;t find the answer you&apos;re looking for? Please <u>chat to our friendly team</u></p>
          <div className="flex flex-row mt-10">
            <p className="font-medium">What&apos;s the difference between an unlimited and limited supply cap?</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
            <p className="mt-5 text-gray-400"><b>Unlimited supply cap</b> indicates that there isn&apos;t a cap on the total supply. Whereas a fixed supply cap is a fixed number of total tokens that have been(or will be) created.</p>
          <div className="flex flex-row justify-between mt-8">
            <p className="font-medium">What&apos;s is the maximum character length of token symbol?</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex flex-row justify-between mt-8">
            <p className="font-medium">What&apos;s is supply type?</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Details