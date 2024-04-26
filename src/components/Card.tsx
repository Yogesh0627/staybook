/* eslint-disable @next/next/no-img-element */
import { HotelInfoDetails } from '@/lib/HotelDetails'
import { z } from 'zod'


interface CardProps{
    hotelName:string,
    hotelAddress:string,
    hotelLandmark:string,
    hotelCity :string,
    hotelImageUrl :string,
    hotelStartingPrice:number,
    hotelState:string,
    hotelStarRating:number,
    hotelPincode:string

}
const Card = ({hotelName,hotelAddress,hotelLandmark,hotelImageUrl,hotelStartingPrice,hotelCity,hotelState,hotelStarRating,hotelPincode}:CardProps) => {
  return (
    <div className='flex mt-10 flex-col  w-full md:flex-row shadow-xl p-4'>
        <div className='w-full md:w-96 rounded-xl '>
            {/* <Image src={hotelImageUrl}
            width={1000}
            height={1000}
            alt={hotelName}
            className='w-full rounded-xl'
            /> */}
            <img src={hotelImageUrl}
            alt={hotelName}
            className='w-full rounded-xl'
            />
        </div>
        <div className='w-full md:w-3/5 p-2' >
            <h2 className='font-semibold text-4xl'>{hotelName}</h2>
            <p className='font-medium text-lg mt-2'>{`${hotelAddress}, ${hotelLandmark}, ${hotelCity}, ${hotelPincode}, ${hotelState}}`}</p>
            <p>Hotel Ratings :- {hotelStarRating}</p>
        </div>
        <div className='flex flex-col space-y-10'>
            <div className='bg-[#FFEFD7] text-[#EEBB6F] w-fit font-bold rounded-full px-4 py-1 text-sm'>Cancellation Policy</div>
            <div className='flex flex-col space-y-2'>
                <div>
                    <div className='md:flex md:flex-row-reverse'>
                        <div className='font-medium text-2xl text-gray-400 line-through'>2090</div>
                    </div>
                <div className='md:flex md:flex-row-reverse'>
                    <div className='flex  mt-4 gap-4 '>
                        <div className='bg-[#FFEFD7] font-bold text-[#EEBB6F] rounded-2xl px-4 py-1 text-sm w-fit flex items-center'><p>30 % off</p></div>
                        <div className='font-medium text-2xl'>₹{" "}{hotelStartingPrice}</div>
                    </div>
                </div>
                </div>
                <div className='md:flex md:flex-row-reverse'>
                    <div className=''>
                        <div className='font-normal text-sm w-fit md:ml-9 text-left '>+ 215 Taxes</div>
                        <div className='font-normal text-sm'>1 Room per Night</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card