/* eslint-disable @next/next/no-img-element */
import { hotelDetailsValidation } from '@/inputValidations/hotelDataValidation'
import { HotelInfoDetails } from '@/lib/HotelDetails'
import Image from 'next/image'
import React from 'react'
import * as z  from 'zod'

const SingleHotel = ({hotelData}:{hotelData:z.infer<typeof hotelDetailsValidation>}) => {
  return (
    <div className='px-5 py-10 w-full'>
        <div className='flex flex-col md:flex-row w-full  flex-center gap-10'>
            <div className='w-full md:w-2/5 h-fit rounded-lg object-cover'>
                {/* <Image src={hotelData.hotelImageUrl}
                width={1000}
                height={1000}
                alt={hotelData.hotelName} /> */}
                <img className='w-full rounded-lg' src={hotelData.hotelImageUrl} alt={hotelData.hotelName} />
            </div>

            <div className='w-full md:w-3/5'>
                <div className='w-full '>
                    <h1 className='text-6xl font-bold'>{hotelData.hotelName}</h1>
                    <div className='flex flex-col md:flex-row items-center gap-6 mt-3'>
                        <p className='text-xl font-semibold'>Hotel Address{" "}:-{ " "} <span  className='text-xl font-medium'>{hotelData.hotelAddress}</span></p>
                        <p  className='text-xl font-semibold'>Contact Details :- <span  className='text-xl font-medium'>{`${hotelData.hotelEmailId} ||   ${hotelData.hotelContactNumber}`} </span> </p>
                    </div>
                </div>
                <div className='mt-16 w-full md:w-full  text-xl font-normal flex justify-between '>
                    <p className='text-justify w-4/5'>{hotelData.hotelDescription}</p>
                </div>

                <div className='mt-20 flex flex-col md:flex-row md:items-center space-x-8'>
                    <p className='text-4xl font-semibold'>Price:- ₹{" " + hotelData.hotelStartingPrice}</p>
                    <p className=' text-center font-bold text-lg '>{"Hotel Ratings :-  " }<span className='font-bold'>{hotelData.hotelStarRating}</span></p>

                </div>
            </div>
        </div>


    </div>
  )
}

export default SingleHotel