import React from 'react';

export default function College() {
  return (
    <div className='mt-12 shadow-sm  pb-10 '>
      <div className='flex flex-col md:flex-row justify-around items-center text-center ml-10 md:items-center'>
        <img src="https://icaccs.sece.ac.in/images/logo-head.png" className='w-72 h-20 mb-8 md:mb-0' alt="logo" />
        
        <div className='flex flex-col gap-8 font-bold text-2xl text-sky-700 items-center md:text-left'>
          <p className='text-center ml-20'>
            First International Conference on Hybridity in Language Learning (ICHLL 2024)
          </p>
          <p className='md:ml-20'>December 2024</p> 
        </div>
        
        <div className='flex flex-col md:flex-row items-center md:ml-20 text-center md:text-left'>
          <p className='ml-0 md:ml-10 text-gray-700 font-semibold mb-4 md:mb-0'>Technically Sponsored by </p>
          <div className='flex flex-row gap-1 mr-36 '>
            <img src="https://icaccs.sece.ac.in/images/logo-head.png" className='w-80 h-20 mb-8 md:mb-0' alt="" />
            {/* <img src="https://icaccs.sece.ac.in/images/ieee_madras.png" className='h-12 w-32' alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
