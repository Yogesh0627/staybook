/* eslint-disable @next/next/no-img-element */
import { hotelDetailsValidation } from '@/inputValidations/hotelDataValidation'
import { ImagesList } from '@/lib/HotelDetails'
import { Divide, Hotel, Map } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import * as z  from 'zod'

const SingleHotel = ({hotelData}:{hotelData:z.infer<typeof hotelDetailsValidation>}) => {


    
    return (
    <div className='px-5 py-10 w-full '>
        <div className='flex flex-col md:flex-row w-full  flex-center gap-10'>
            <div className='w-full md:w-2/5 flex-col h-fit rounded-lg object-cover'>
                {/* <Image src={hotelData.hotelImageUrl}
                width={1000}
                height={1000}
                alt={hotelData.hotelName} /> */}
                <img className='w-full rounded-lg' src={hotelData.hotelImageUrl} alt={hotelData.hotelName} />

                {hotelData.hotelImageList?.map((item :ImagesList)=> <div key={item.imageId}><img className='w-full rounded-lg' src={item.imageUrl} alt={item.imageTitle} /></div>)}
            </div>

            <div className='w-full md:w-3/5'>
                <div className='w-full '>
                    <h1 className='text-4xl md:text-6xl font-bold'>{hotelData.hotelName}</h1>
                    <div className='flex flex-col  gap-6 mt-3'>
                        <p className='text-xl w-4/5 font-semibold'>Hotel Address{" "}:-{ " "} <span  className='text-xl font-medium'>{hotelData.hotelAddress + ", " + hotelData.hotelLandmark + ", " + hotelData.hotelCity + ", " + hotelData.hotelState + ", " + hotelData.hotelRegion + ", " + hotelData.hotelCountry}</span></p>
                        <p  className='text-xl font-semibold'>Contact Details :- <span  className='text-xl font-medium'>{`${hotelData.hotelEmailId} ||   ${hotelData.hotelContactNumber}`} </span> </p>
                    </div>
                </div>
                <div className='mt-16 w-full md:w-full  text-xl font-normal flex justify-between '>
                    <p className='text-justify w-full md:w-4/5'>{hotelData.hotelDescription}</p>
                </div>

                <div className='mt-20 flex flex-col md:flex-row md:items-center md:space-x-8'>
                    <p className='text-4xl font-semibold'>Price:- ₹{" " + hotelData.hotelStartingPrice} </p>
                    <p className='font-bold text-lg '>{"Hotel Ratings :-  " }<span className='font-bold'>{hotelData.hotelStarRating}</span></p>
                </div>
                
                <div className='mt-5'>
                    <p>Payment Modes :-  {hotelData.hotelPaymentOptions.partialPayment? " Partial Payment":""} { hotelData.hotelPaymentOptions.postpaidPayment? " Postpaid Payment":""} {hotelData.hotelPaymentOptions.prepaidPayment? " Prepaid Payment":""}</p>
                    <div className='mt-4 '>
                        <h2 className='text-lg flex gap-3 items-center font-medium w-full '>Location :- <Link className='text-md font-normal text-blue-500' href={hotelData.hotelMapUrl} target='_blank'><Hotel className='w-8 h-8'/></Link> </h2>
                        <div className='mt-5'>
                            <h2 className='text-lg font-medium'>Hotel Latitude :- {hotelData.hotelLatitude} </h2>
                            <h2 className='text-lg font-medium'>Hotel Longitude :- {hotelData.hotelLongitude} </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default SingleHotel