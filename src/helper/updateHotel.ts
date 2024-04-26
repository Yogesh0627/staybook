import { db } from "@/firebase/config"
import { hotelDetailsValidation } from "@/inputValidations/hotelDataValidation"
import { doc, updateDoc } from "firebase/firestore"
import { z } from "zod"

export const updateHotelDetails = async (id:string,newDetails:z.infer<typeof hotelDetailsValidation>)=>{

    console.log(id)
    // console.log("inside update")
    const updatedDetails = doc(db,"HotelDataBase",id)
    const response = await updateDoc(updatedDetails,newDetails)
    console.log(response)
    return response
}