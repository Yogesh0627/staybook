import { initializeApp } from "firebase/app";
import { collection, getFirestore, query, where } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAfQDJxX4BsaA3m0bmn8zLVL5JxlUpW5so",
    authDomain: "staybook-30f04.firebaseapp.com",
    projectId: "staybook-30f04",
    storageBucket: "staybook-30f04.appspot.com",
    messagingSenderId: "953617499765",
    appId: "1:953617499765:web:a28fa6f90b231282851a3c",
    measurementId: "G-V6C3GH9Q81",
    dataBaseUrl : "https://staybook-30f04-default-rtdb.firebaseio.com/"
  };


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()


// Collection Reference

export const Hotels = collection(db,"HotelDataBase")

// queries 

// const q = query(Hotels,where("hotelEmailId","hotelEmailId"))
export default firebaseConfig