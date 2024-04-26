'use client'
import SingleHotel from '@/components/SingleHotel'
import SkeletonSingleHotel from '@/components/SkeletonSingleCard'
import UpdateForm from '@/components/UpdateForm'
import { useToast } from '@/components/ui/use-toast'
import { db } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import { FilePenLine } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const initialState ={
  id: "",
  hotelName: "",
  hotelEmailId:"",
  hotelContactNumber:0,
  hotelLandmark:  "",
  hotelAddress: "",
  hotelStartingPrice:  0,
  hotelDescription: "",
  hotelStarRating:  0,
  hotelImageUrl:  "",
  hotelState:  "",
  hotelCity: "",
  hotelCountry: "",
  hotelRegion:  "",
  hotelPincode: ""
}
const Hotel = ({params}:{params:{id:string}}) => {
  const [hotelData,setHotelData] = useState(initialState)
  const [edit,setEdit] = useState<boolean>(false)
  const {id} = params

  const {toast} = useToast()

  const getHotel = async (id:string)=>{
    try {
      const hotelDocRef = doc(db, 'HotelDataBase', id);
      const hotelDocSnapshot = await getDoc(hotelDocRef);
  
      if (hotelDocSnapshot.exists()) {
        setHotelData({...hotelDocSnapshot.data(), id:id }as typeof initialState);
      } else {
        console.error('Hotel not found!');
        toast({
          title:"Hotel Not Found",
          description:"Hotel not found"
        })
      }
    } catch (error) {
      toast({
        title:"Error Occured",
        description:"Some thing went wrong an error occured"
      })
      console.error('Error fetching hotel data:', error);
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

  if(!hotelData.hotelAddress){
    return <SkeletonSingleHotel/>
  }
  return (
    <>
    {edit? "":(<div className='flex flex-row-reverse px-3 mt-5'>
      <span title='Edit'><FilePenLine onClick={handleEdit} className='w-20 h-10 hover:cursor-pointer'/></span>
    </div>)}
    {edit ? (
        <UpdateForm
          formData={hotelData}
          editFalse={setEdit}
          handleUpdate={handleUpdate}
          id={id}
        />
      ) : (
        <div>
          <SingleHotel hotelData={hotelData}/>
        </div>
      )}
    </>

    
  )
}

export default Hotel