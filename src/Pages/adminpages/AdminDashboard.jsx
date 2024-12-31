import { Typography } from '@material-tailwind/react';
import React from 'react'
import
{
    UserGroupIcon,
    AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { GiTiedScroll } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa6";

function AdminDashboard() {
  return (
    <div className=' flex flex-col justify-center '>
        <h1 className='font-extrabold text-2xl mb-5 text-wrap'>Admin Dashboard</h1>
        <div className=' grid  grid-flow-rows grid-rows-2  gap-4'>
            <div className='bg-gradient-to-r from-gray-700 to-black col-span-2 items-center flex justify-between rounded-xl h-64 p-8'>
                <Typography color='white' className='text-3xl flex flex-col font-extrabold'>
                    <div className='mb-4'>9,567</div>
                    <div className='text-xl'>Students</div>
                </Typography>
                < UserGroupIcon color='lightgray' className='h-[120px] w-[115px] ' />
            </div>

            <div className='bg-gradient-to-r from-gray-700 to-black rounded-xl items-center flex justify-between col-span-2 sm:col-span-1 h-64 p-8'>
                <Typography color='white' className='text-3xl flex flex-col font-extrabold'>
                    <div className='mb-4'>2,345</div>
                    <div className='text-xl'>Courses</div>
                </Typography>
                <GiTiedScroll color='lightgray' className='h-[120px] w-[115px]' />
            </div>

            <div className='bg-gradient-to-r from-gray-700 to-black items-center rounded-xl col-span-2 sm:col-span-1 h-64 p-8 flex justify-between'>
                <Typography color='white' className='text-3xl flex flex-col font-extrabold'>
                    <div className='mb-4'>1,567</div>
                    <div className='text-xl'>Alumni</div>
                </Typography>
                <FaUserGraduate color='lightgray' className='h-[120px] w-[115px]' />
            </div>

            <div className='bg-gradient-to-r from-gray-700 to-black rounded-xl items-center flex justify-between col-span-2 h-64 p-8'>
                <Typography color='white' className=' text-3xl font-extrabold flex flex-col'>
                    <div className='mb-4'>467 </div>
                    <div className='text-xl'>Total Teachers</div>
                </Typography>
                <AcademicCapIcon color='lightgray' className='h-[120px] w-[115px]' />
            </div>

        </div>
    </div>
  );
}

export default AdminDashboard;