import React from 'react'

function PlaceHeader() {
  return (
    <div>
        <div className='relative bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[17px] flex justify-between m-[10px] h-40 sm:h-72 mb-8 sm:p-8 '>
            <div className='flex justify-center items-center'>
                <h1 className='text-white font-bold text-3xl ml-5'> Student&apos;s Page</h1>
            </div>
            <div className=' flex  items-center '>
                <img 
                src="/elearning3d.png" 
                className='h-[150px] sm:h-[300px] sm:-mr-28 w-auto' 
                alt="Elearn image"/>
                <img 
                src="/3dboy.png"
                className='h-[300px] hidden sm:block sm:-ml-11 w-auto' 
                alt="" />
            </div>    

        </div>
    </div>
  )
}

export default PlaceHeader;