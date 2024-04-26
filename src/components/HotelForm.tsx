"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { hotelDetailsValidation } from "@/inputValidations/hotelDataValidation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import checkHotelExists from "@/helper/checkHotelExisting";
import { Textarea } from "./ui/textarea";
import { addHotel } from "@/helper/addHotel";
const HotelForm = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof hotelDetailsValidation>>({
    resolver: zodResolver(hotelDetailsValidation),
     defaultValues: {
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
    },
  });
  
  const onSubmit=async (data:z.infer<typeof hotelDetailsValidation>)=>{

    try {
        setIsSubmitting(true)
        const ifExist = await checkHotelExists(data.hotelEmailId);
         if(ifExist[0]){
            toast({
                title:"Hotel Already Exist thus can not add it again",
                description:"This Hotel Already Exist however if you want to update the data than please go in edit and update section"
            })
            setIsSubmitting(false)
            return
        }
          
        const response = await addHotel(data)
        setIsSubmitting(false)
        toast({title:"Successfully Registered Hotel",
            description:`Hotel Registered with id:- ${response}`
        })
       form.reset()
        router.replace('/hotels')
    } catch (error) {
        toast({title:"An Error Occured while Adding Hotel",
            description:`Something Went Wrong, ${error}`,
            
        })
        setIsSubmitting(false)
    }
    
  }
  return (
    <div className="flex mt-20 items-center justify-center min-h-screen">
      <div className=" w-4/5">
        <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                Register New Hotel
            </h1>
            <p className="mb-10">
                please carefully fill the fields required to register
            </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-8 md:gap-4 md:grid md:grid-cols-2 ">   
             <FormField
                control={form.control}
                name="hotelName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Name</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal" placeholder="Enter Hotel Name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="hotelEmailId"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Email Id</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal" placeholder="Enter Hotel Email Id" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="hotelContactNumber"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Contact Number</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal"
                        placeholder="Enter Hotel Contact Number"
                        {...field}
                        
                        onChange={(event) => {
                            const input = event.target.value.trim(); // Remove leading/trailing spaces
                            const isValidNumber = /^\d*$/.test(input); // Check if input contains only digits or is empty
                            if (isValidNumber) {
                              field.onChange(input === '' ? '' : +input); // Convert valid input to number or keep it empty
                            }
                          }}/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="hotelAddress"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Address</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal" placeholder="Enter Hotel Address" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="hotelLandmark"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Landmark</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal" placeholder="Enter Hotel Landmark" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="hotelState"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel State</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal" placeholder="Enter Hotel State" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="hotelCity"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel City</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal" placeholder="Enter Hotel City" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="hotelCountry"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Country</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal" placeholder="Enter Hotel Country" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="hotelRegion"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Region</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal" placeholder="Enter Hotel Region" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="hotelPincode"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Pincode</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal" placeholder="Enter Hotel Pincode" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="hotelStartingPrice"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Starting Price</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal"
                            placeholder="Enter Hotel Starting Price"
                            {...field}
                            onChange={(event) => {
                                const input = event.target.value.trim(); // Remove leading/trailing spaces
                                const isValidNumber = /^\d*$/.test(input); // Check if input contains only digits or is empty
                                if (isValidNumber) {
                                field.onChange(input === '' ? '' : +input); // Convert valid input to number or keep it empty
                                }
                            }}               
                        />  
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="hotelDescription"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Description</FormLabel>
                    <FormControl>
                        <Textarea className="text-lg font-normal" placeholder="Enter Hotel Description" {...field} />
                        {/* <Input className="text-lg font-normal" placeholder="Enter Hotel Description" {...field} /> */}
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="hotelStarRating"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Star Rating</FormLabel>
                    <FormControl>
                        <Input  className="text-lg font-normal"               
                            pattern="[0-9]*"
                            inputMode="numeric"
                            placeholder="Enter Hotel Star Rating" 
                            {...field}
                            onChange={(event) => {
                                const input = event.target.value.trim(); // Remove leading/trailing spaces
                                const isValidNumber = /^\d*$/.test(input); // Check if input contains only digits or is empty
                                if (isValidNumber) {
                                field.onChange(input === '' ? '' : +input); // Convert valid input to number or keep it empty
                                }
                            }}               
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="hotelImageUrl"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Image URL</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal" placeholder="Enter Hotel Image URL" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
             <div className="text-center">
                <Button type="submit" disabled = {
                isSubmitting} className="w-32 text-xl">{isSubmitting? (<><Loader2 
                className="mr-2 h-4 w-4 animate-spin"/> 
                Please Wait</>):"Submit"}
                </Button>  
            </div>        
            </form>
        </Form>
      </div>
    </div>
  );
};

export default HotelForm;
