import { Hotels } from "@/firebase/config";
import { query, where, onSnapshot, getDocs } from "firebase/firestore";

const checkHotelExists = async (email: string) => {
    

    const hotels:any=[]
    const q = query(Hotels,where('hotelEmailId', '==', email));
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      hotels.push({...doc.data(),id:doc.id})
    })
    console.log("Checking if hotel already Exist or not ",hotels)
    return hotels
  };

export default checkHotelExists