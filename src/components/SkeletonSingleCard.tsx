import React from 'react';

const SkeletonSingleHotel = () => {
    return (
        <div className='px-5 py-10 w-full'>
            <div className='flex flex-col md:flex-row w-full  flex-center gap-10'>
                <div className='w-full h-56 md:h-96 md:w-2/5 rounded-lg bg-gray-200 animate-pulse'></div>

                <div className='w-full md:w-3/5'>
                    <div className='w-full '>
                        <h1 className=' font-bold bg-gray-200 animate-pulse h-16 w-full mb-4'></h1>
                        <div className='flex flex-col  md:flex-row  items-center gap-6 mt-3'>
                            <p className=' bg-gray-200 animate-pulse h-8 w-96'></p>
                            <p className='bg-gray-200 animate-pulse h-8 w-96'></p>
                        </div>
                    </div>
                    <div className='mt-16 w-full  flex justify-between items-center'>
                        <p className='bg-gray-200 animate-pulse h-28 md:h-40 w-full'></p>
                    </div>

                    <div className='mt-20 flex flex-col space-y-5 md:flex-row md:items-center md:space-x-8'>
                        <p className=' bg-gray-200 animate-pulse h-12 w-48'></p>
                        <p className='bg-gray-200 animate-pulse h-6 w-24'></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonSingleHotel;


