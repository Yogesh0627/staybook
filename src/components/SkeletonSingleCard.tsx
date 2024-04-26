import React from 'react';

const SkeletonSingleHotel = () => {
    return (
        <div className='px-5 py-10'>
            <div className='flex flex-center gap-10'>
                <div className='max-w-2xl h-96 w-96 rounded-lg bg-gray-200 animate-pulse'></div>

                <div>
                    <div>
                        <h1 className='text-6xl font-bold bg-gray-200 animate-pulse h-16 w-96 mb-4'></h1>
                        <div className='flex justify-center items-center space-x-10'>
                            <p className='text-xl font-medium bg-gray-200 animate-pulse h-8 w-96'></p>
                            <p className='bg-gray-200 animate-pulse h-8 w-96'></p>
                        </div>
                    </div>
                    <div className='mt-16 text-xl font-normal flex justify-between items-center'>
                        <p className='bg-gray-200 animate-pulse h-12 w-full'></p>
                        <p className='bg-gray-200 animate-pulse h-12 w-24'></p>
                    </div>

                    <div className='mt-20'>
                        <p className='text-4xl font-semibold bg-gray-200 animate-pulse h-12 w-48'></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonSingleHotel;


