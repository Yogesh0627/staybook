import React from 'react';

const SkeletonCard = () => {
    return (
        <div className='flex mt-10 flex-col w-full md:flex-row shadow-xl p-4'>
            <div className='w-full md:w-96 rounded-xl bg-gray-200 animate-pulse'></div>
            <div className='w-3/5 p-2'>
                <div className='font-semibold text-4xl bg-gray-200 animate-pulse h-10 mb-4 w-3/4'></div>
                <div className='font-medium text-lg bg-gray-200 animate-pulse h-8 mb-2 w-2/3'></div>
                <div className='bg-gray-200 animate-pulse h-6 w-36 mb-2'></div>
                <div className='bg-gray-200 animate-pulse h-6 w-28'></div>
            </div>
            <div className='flex flex-col space-y-10'>
                <div className='bg-gray-200 text-gray-400 w-40 h-10 font-bold rounded-full px-4 py-1 text-sm animate-pulse'></div>
                <div className='flex flex-col space-y-2'>
                    <div className='md:flex md:flex-row-reverse'>
                        <div className='font-medium text-2xl text-gray-400 line-through bg-gray-200 animate-pulse h-12 w-24'></div>
                    </div>
                    <div className='md:flex md:flex-row-reverse'>
                        <div className='flex mt-4 gap-4'>
                            <div className='bg-gray-200 font-bold text-gray-400 rounded-full px-1 py-1 text-sm w-20 animate-pulse'></div>
                            <div className='font-medium text-2xl bg-gray-200 animate-pulse h-12 w-24'></div>
                        </div>
                    </div>
                    <div className='md:flex md:flex-row-reverse'>
                        <div>
                            <div className='font-normal text-sm w-fit md:ml-9 text-left bg-gray-200 animate-pulse h-6'></div>
                            <div className='font-normal text-sm bg-gray-200 animate-pulse h-6'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;

