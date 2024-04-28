import React from 'react';

const SkeletonCard = () => {
    return (
        <div className='flex mt-10 flex-col w-full md:flex-row shadow-xl p-4'>
            <div className='w-full md:w-96  rounded-xl bg-gray-200 animate-pulse'></div>
            <div className='w-full md:w-3/5 p-2'>
                <div className=' bg-gray-200 animate-pulse h-56 md:h-10 mb-4 w-full md:w-3/4'></div>
                <div className=' bg-gray-200 animate-pulse h-16 mb-2 md:h-8 w-full md:w-2/3'></div>
                <div className='bg-gray-200 animate-pulse h-6 w-full mt-5 md:w-36 mb-2'></div>
            </div>
            <div className='flex flex-col space-y-10'>
                <div className='bg-gray-200  w-40 h-8 font-bold rounded-full px-4 py-1  animate-pulse'></div>
                <div className='flex flex-col space-y-2'>
                    <div className='md:flex md:flex-row-reverse'>
                        <div className=' text-gray-400 line-through bg-gray-200 animate-pulse h-8 w-24'></div>
                    </div>
                    <div className='md:flex md:flex-row-reverse'>
                        <div className='flex mt-4 gap-4'>
                            <div className='bg-gray-200  rounded-full px-4 py-1  w-20 animate-pulse'></div>
                            <div className=' bg-gray-200 animate-pulse h-8 w-24'></div>
                        </div>
                    </div>
                    <div className='md:flex mt-1 md:flex-row-reverse'>
                        <div className=''>
                            <div className=' w-24 md:ml-24  text-left bg-gray-200 animate-pulse h-6'></div>
                            <div className=' md:ml-16  w-32 mt-3 bg-gray-200 animate-pulse h-6'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;

 