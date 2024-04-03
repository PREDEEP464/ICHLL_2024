import React from 'react'

export default function Top() {
  return (
    <div>
        <div className='bg-blue-950 flex flex-row gap-12 p-3'>
        <div className='flex flex-row gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d5d500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <h1 className=' text-gray-300 font-medium'>
            Coimbatore | TamilNadu | India</h1>
        </div>
         <div className='flex flex-row gap-2'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d5d500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
         <h1 className=' text-gray-300'>ichll@sece.ac.in</h1>
          
         </div>
        
        </div>
        
    </div>
  )
}