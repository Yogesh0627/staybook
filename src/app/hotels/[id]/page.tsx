'use client'
import { FormCard } from '@/components/FormCard'
import SingleHotel from '@/components/SingleHotel'
import SkeletonSingleHotel from '@/components/SkeletonSingleCard'
import UpdateForm from '@/components/UpdateForm'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { db } from '@/firebase/config'
import { deleteHotel } from '@/helper/deleteHotel'
import { hotelDetailsValidation } from '@/inputValidations/hotelDataValidation'
import { doc, getDoc } from 'firebase/firestore'
import { FilePenLine } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const initialState ={
  id:"",
  hotelName: "",
  hotelEmailId: "",
  hotelContactNumber: 0,
  hotelLandmark: "",
  hotelAddress: "",
  hotelStartingPrice: 0,
  hotelDescription: "",
  hotelStarRating: 0,
  hotelImageUrl: "",
  hotelState: "",
  hotelCity: "",
  hotelCountry: "",
  hotelRegion: "",
  hotelPincode: "",
  hotelSlugDetails: {
    hotel: "",
    hotelCity: "",
    hotelCountry: "",
    hotelRegion: "",
    hotelState: "",
  },
  hotelLatitude: "",
  hotelLongitude: "",
  hotelMapUrl: "",

  hotelPaymentOptions: {
    partialPayment: false,
    postpaidPayment: false,
    prepaidPayment: false,
  },
  hotelImageList: [
    
  ],
}
const Hotel = ({params}:{params:{id:string}}) => {
  const [hotelData,setHotelData] = useState(initialState)
  const [edit,setEdit] = useState<boolean>(false)
  const [loading,setLoading]=useState(false)
  const {id} = params
  const router = useRouter()
  const {toast} = useToast()

  const getHotel = async (id:string)=>{
    setLoading(true)
    try {
      const hotelDocRef = doc(db, 'HotelDataBase', id);
      const hotelDocSnapshot = await getDoc(hotelDocRef);
  
      if (hotelDocSnapshot.exists()) {
        
        setHotelData({...hotelDocSnapshot.data(), id:id }as typeof initialState);
        setLoading(false)
      } else {
        console.error('Hotel not found!');
        toast({
          title:"Hotel Not Found",
          description:"Hotel not found"
        })
        setLoading(false)
      }
    } catch (error) {
      toast({
        title:"Error Occured",
        description:"Some thing went wrong an error occured"
      })
      console.error('Error fetching hotel data:', error);
      setLoading(false)
    }
  }
  
const handleUpdate = (updatedData:any)=>{
  setHotelData(updatedData)
}

useEffect(()=>{
  getHotel(id)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[id])

// console.log(hotelData)
  const handleEdit = ()=>{
    setEdit(true)
  }

  const handleDelete =  async (id:string)=>{
    const result = await deleteHotel(id)
    router.back()
    // console.log(result, "after deleting the hotel")

  }
  if(loading || !hotelData.hotelAddress){
    return <SkeletonSingleHotel/>
  }
  return (
    <>
    
    <div className='mt-5 flex px-5 justify-between '>
      <Button title='Delete' onClick={()=>handleDelete(id)}>Delete Hotel</Button>
      {edit? "":(<div >
        <span title='Edit'><FilePenLine onClick={handleEdit} className='w-20 h-10 hover:cursor-pointer'/></span>
      </div>)}
    </div>
    {edit? (
          <div>
          <FormCard formDescription='Update your journey for us' 
          formTitle='Hotel Updation Form'>
            <UpdateForm
          formData={hotelData}
          editFalse={setEdit}
          handleUpdate={handleUpdate}
          id={id}
          />
          </FormCard>
          
        </div>
        
      ) : (
        <div >
          <SingleHotel hotelData={hotelData}/>
        </div>
      )}
    </>

    
  )
}

export default Hotel