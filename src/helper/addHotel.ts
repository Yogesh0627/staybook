import { Hotels } from "@/firebase/config";
import { hotelDetailsValidation } from "@/inputValidations/hotelDataValidation";
import { addDoc } from "firebase/firestore";
import * as z from 'zod'



// Function to add a new hotel to Firestore
export const addHotel = async (data:z.infer<typeof hotelDetailsValidation>) => {
  try {
    const formDataWithNumbers = {
        ...data,
        hotelContactNumber: parseInt(data.hotelContactNumber, 10),
        hotelStartingPrice: parseInt(data.hotelStartingPrice, 10),
        hotelStarRating: parseInt(data.hotelStarRating, 10),
      };
    //   console.log(formDataWithNumbers)

    const docRef = await addDoc(Hotels,formDataWithNumbers);

    return docRef.id; // Return the ID of the newly added hotel
  } catch (error) {
    console.error('Error adding hotel:', error);
    throw new Error('Failed to add hotel');
  }
};