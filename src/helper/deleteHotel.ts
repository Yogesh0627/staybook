import { db } from './../firebase/config';
import { doc, deleteDoc } from "firebase/firestore";

export const deleteHotel = async(id:string)=>{

    try {
        const deleteRef =  doc(db,"HotelDataBase",id)
        const response = await deleteDoc(deleteRef)
        
        // console.log(response, "response from delete Hotel")
        return response
    } catch (error) {
        return error
    }
}