import React from 'react'

const Details = () => {
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div className="overflow-hidden max-w-xl max-h-2xl shadow rounded-3xl sm:rounded-3xl">

          <div className="bg-white px-4 py-5 sm:p-6 sm:border-b sm:border-gray-200 sm:pt-5">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-3">Token name</label>
                <input className="block w-full md:w-64 bg-white text-gray-900 font-medium border border-gray-400 rounded-full py-3 px-3 leading-tight focus:outline-none" placeholder='Biconomy' type='text' required />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-3">Token symbol</label>
                <input className="block w-full md:w-64 bg-white text-gray-900 font-medium border border-gray-400 rounded-full py-3 px-3 leading-tight focus:outline-none" type='text' placeholder='BICO' required />
              </div>
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <div className="sm:col-span-6 mx-6">
              <label className="block text-sm font-medium text-gray-700">Token logo</label>
              <div className="mt-1 flex justify-center rounded-3xl  border-2 border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Click to upload</span>
                      {/* <input id="file-upload" name="file-upload" type="file" /> */}
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className='p-6'>
            <label className="text-base font-medium text-gray-900">Supply cap</label>
            <fieldset className="mt-4">
              <div className="space-y-4">
                <div className='relative flex flex-col items-start'>
                  <div className="flex items-center">
                    <input id="email" name="notification-method" type="radio" checked className="h-4 w-4 border-gray-300  text-orange-500	 focus:ring-orange-500" />
                    <label className="ml-2 block text-sm font-medium text-gray-700">Unlimited</label>
                  </div>
                  <div className="ml-3 text-sm">
                    <p className="text-gray-500 text-sm ml-3">No limit on the amount of tokens in circulation</p>
                  </div>
                </div>

                <div className='relative flex flex-col items-start'>
                  <div className="flex items-center">
                    <input id="email" name="notification-method" type="radio" checked className="h-4 w-4 border-gray-300  text-orange-500	 focus:ring-orange-500" />
                    <label className="ml-2 block text-sm font-medium text-gray-700">Limited</label>
                  </div>
                  <div className="ml-3 text-sm">
                    <p className="text-gray-500 text-sm ml-3">Fixed amount of tokens ever in circulation</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="mb-6 mx-6">
            <label className="block tracking-wide text-black text-base font-normal mb-2">Amount to mint</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-full py-3 px-3 leading-tight focus:outline-none" type='email' required />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Details