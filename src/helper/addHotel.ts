import { Hotels } from "@/firebase/config";
import { hotelDetailsValidation } from "@/inputValidations/hotelDataValidation";
import { addDoc } from "firebase/firestore";
import * as z from 'zod'



// Function to add a new hotel to Firestore
export const addHotel = async (data:z.infer<typeof hotelDetailsValidation>) => {
  try {

    const docRef = await addDoc(Hotels,data);

    return docRef.id;
  } catch (error) {
    // console.error('Error adding hotel:', error);
    throw new Error('Failed to add hotel');
  }
};