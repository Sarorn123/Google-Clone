import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 py-5 lg:mt-10 w-full mt-5'>
        <div className='w-[90%] lg:w-[70%] mx-auto'>
            <div className='flex items-center border-b border-b-slate-400 py-2'>
                <h1 className='pr-4 border-r  border-r-slate-400 text-gray-500'>Cambodia</h1>
                <h1 className='text-sm ml-4 lg:text-md font-bold text-gray-500'>Sangkat Tuek Thla, Phnom Penh - <span className='text-blue-900 font-normal cursor-pointer'>Based on your past activity - Update location</span></h1>
            </div>

            <div className='flex mt-2'>
                <h1 className='mr-3 lg:mr-5'><a href='' className='text-gray-500 text-sm'>Help</a> </h1>
                <h1 className='mr-3 lg:mr-5'><a href='' className='text-gray-500 text-sm'>Sent Feedback</a> </h1>
                <h1 className='mr-3 lg:mr-5'><a href='' className='text-gray-500 text-sm'>Privacy</a> </h1>
                <h1 className='mr-3 lg:mr-5'><a href='' className='text-gray-500 text-sm'>Terms</a> </h1>
            </div>

            <h1 className='mt-5 text-gray-400'>All Reserved - Rorn Tech x Google</h1>

        </div>
    </div>
  )
}

export default Footer;