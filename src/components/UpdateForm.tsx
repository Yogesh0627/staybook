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

import { Loader2, X } from "lucide-react";


import { updateHotelDetails } from "@/helper/updateHotel";
import { Textarea } from "./ui/textarea";

interface UpdateFormProps{
    formData:z.infer<typeof hotelDetailsValidation>,
    editFalse:(a:boolean)=>void,
    id:string,
    handleUpdate:(data :z.infer<typeof hotelDetailsValidation> )=>void
}


const UpdateForm = ({formData,editFalse,id,handleUpdate}:UpdateFormProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof hotelDetailsValidation>>({
    resolver: zodResolver(hotelDetailsValidation),
     defaultValues: formData,
  });
  
  const onSubmit=async (data:z.infer<typeof hotelDetailsValidation>)=>{


    try {
        setIsUpdating(true)
        const response = await updateHotelDetails(id,data)
        setIsUpdating(false)
        handleUpdate(data)
        toast({title:"Successfully Updated Hotel",
            description:`Hotel details updated `,
        })
        
        form.reset(data)
        return
        }
          
        
    catch (error) {
        toast({title:"An Error Occured while Updating Hotel",
            description:`Something Went Wrong, ${error}`,
            
        })
        setIsUpdating(false)
    }
  }
  return (
    <div>
        <div  className="flex flex-row-reverse px-3 mt-5">
            <div title="close" className="w-fit "><X onClick={()=>editFalse(false)}  className='w-20 h-10 hover:cursor-pointer'/></div>
        </div>    
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-4/5">
        <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                Update Hotel Details
            </h1>
            <p className="mb-10">
                please carefully fill the fields need to update
            </p>
        </div>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-8 md:gap-4 md:grid md:grid-cols-2 ">   
             <FormField
                control={form.control}
                name="hotelName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-xl font-medium">Hotel Name</FormLabel>
                    <FormControl>
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel Name" {...field} />
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
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel Email Id" {...field} />
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
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel Address" {...field} />
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
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel Landmark" {...field} />
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
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel State" {...field} />
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
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel City" {...field} />
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
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel Country" {...field} />
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
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel Region" {...field} />
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
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel Pincode" {...field} />
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
                            placeholder="Enter Hotel  Starting Price"
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
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel Star Rating" {...field} 
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
                        <Input className="text-lg font-normal"  placeholder="Enter Hotel Image URL" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <div className="text-center flex justify-center items-center gap-10">
                <Button type="submit" disabled = {
                isUpdating} className="w-fit px-3 py-2 text-xl">{isUpdating? (<><Loader2 
                className="mr-2 h-4 w-4 animate-spin"/> 
                Please Wait</>):"Update"}
                </Button>
                
                <Button  onClick={()=>editFalse(false)} className="w-24 px-3 py-2 text-xl">Cancel</Button>
            </div>          
            </form>
        </Form>
      </div>
    </div>
    </div>

  );
};

export default UpdateForm;
