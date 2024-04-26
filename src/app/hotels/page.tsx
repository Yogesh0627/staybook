"use client";
import Card from "@/components/Card";
import SkeletonCard from "@/components/SkeletonCard";
import Wrapper from "@/components/wrapper";
import { Hotels } from "@/firebase/config";
import { HotelInfoDetails } from "@/lib/HotelDetails";
import { getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllHotels = () => {
  const [hotels, setHotels] = useState<HotelInfoDetails[]>([]);

  const fetchHotels = async () => {
    try {
      const snapshot = await getDocs(Hotels);
      const hotelsData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })); 
      // ignoring ts error as it is not accepting id in hotels so additionally adding it
      //@ts-ignore
      setHotels(hotelsData);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };


  useEffect(() => {
    fetchHotels();
  }, []);

  if(!hotels.length){
    return <div>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
    </div>
  }
  return (
    <>
      <div>
        <Wrapper
          title="Explore Hotels"
          description="Where Every Stay Tells a Story. Premium Hotels, Travel Packages, Your Chapter of Luxury"
        />
      </div>
      {hotels?.map((hotel) => (
        <Link key={hotel.hotelContactNumber} href={`/hotels/${hotel.id}`}>
          <Card
            hotelAddress={hotel.hotelAddress}
            hotelCity={hotel.hotelCity}
            hotelLandmark={hotel.hotelLandmark}
            hotelState={hotel.hotelState}
            hotelPincode={hotel.hotelPincode}
            hotelStartingPrice={hotel.hotelStartingPrice}
            hotelName={hotel.hotelName}
            hotelStarRating={hotel.hotelStarRating}
            hotelImageUrl={hotel.hotelImageUrl}
          />
        </Link>
      ))}
    </>
  );
};

export default AllHotels;
