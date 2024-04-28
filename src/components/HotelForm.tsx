"use client";
// @ts-nocheck

import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { hotelDetailsValidation } from "@/inputValidations/hotelDataValidation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight,Loader2 } from "lucide-react";
import checkHotelExists from "@/helper/checkHotelExisting";
import { Textarea } from "./ui/textarea";
import { addHotel } from "@/helper/addHotel";

import { Checkbox } from "./ui/checkbox";
const HotelForm = () => {
    const [formStep,setformStep]=useState<number>(0)
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
      hotelSlugDetails: {
        hotel: "",
        hotelCity: "",
        hotelCountry: "",
        hotelRegion: "",
        hotelState: "",
      },
      hotelLatitude: "",
      hotelLongitude: "",
      hotelMapUrl: "",

      hotelPaymentOptions: {
        partialPayment: false,
        postpaidPayment: false,
        prepaidPayment: false,
      },
      hotelImageList: [
        
      ],
    },
  });
  const { fields, append, remove} = useFieldArray({
    name: "hotelImageList",
    control: form.control,
  });
  const defaultSlugDetails = {
    hotel: form.getValues("hotelName") || "",
    hotelCity: form.getValues("hotelCity") || "",
    hotelCountry: form.getValues("hotelCountry") || "",
    hotelRegion: form.getValues("hotelRegion") || "",
    hotelState: form.getValues("hotelState") || "",
  };

  form.setValue("hotelSlugDetails", defaultSlugDetails);
  const onSubmit = async (data: z.infer<typeof hotelDetailsValidation>) => {
    // console.log(data);
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
  };
 
  return (

    
    <div className="flex   items-center  h-full justify-center">
      <div className="w-full md:w-4/5">
        <div className="text-center">
          <p className="mb-10 text-lg font-medium">
            please carefully fill the fields required to register
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <div className="flex  flex-col">
                {/* hotel Details */}
                <div className={`${formStep===0? "visible":"hidden"} flex flex-col gap-y-6`}>
                <FormField
                    control={form.control}
                    name="hotelName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl font-medium">
                        Hotel Name
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Name"
                            {...field}
                        />
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
                        <FormLabel className="text-xl font-medium">
                        Hotel Email Id
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Email Id"
                            {...field}
                        />
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
                        <FormLabel className="text-xl font-medium">
                        Hotel Contact Number
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Contact Number"
                            {...field}
                            onChange={(event) => {
                            const input = event.target.value.trim(); // Remove leading/trailing spaces
                            const isValidNumber = /^\d*$/.test(input); // Check if input contains only digits or is empty
                            if (isValidNumber) {
                                field.onChange(input === "" ? "" : +input); // Convert valid input to number or keep it empty
                            }
                            }}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                    
                <div className={`${formStep===1? "visible":"hidden"} flex flex-col gap-y-6`}>
                <FormField
                    control={form.control}
                    name="hotelAddress"
                    render={({ field }) => (
                    <FormItem className="">
                        <FormLabel className="text-xl font-medium">
                        Hotel Address
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Address"
                            {...field}
                        />
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
                        <FormLabel className="text-xl font-medium">
                        Hotel Landmark
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Landmark"
                            {...field}
                        />
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
                        <FormLabel className="text-xl font-medium">
                        Hotel City
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel City"
                            {...field}
                        />
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
                        <FormLabel className="text-xl font-medium">
                        Hotel Pincode
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Pincode"
                            {...field}
                        />
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
                        <FormLabel className="text-xl font-medium">
                        Hotel State
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel State"
                            {...field}
                        />
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
                        <FormLabel className="text-xl font-medium">
                        Hotel Region
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Region"
                            {...field}
                        />
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
                        <FormLabel className="text-xl font-medium">
                        Hotel Country
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Country"
                            {...field}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                <div className={`${formStep===2? "visible":"hidden"} flex flex-col gap-y-6`}>
                <FormField
                    control={form.control}
                    name="hotelStartingPrice"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl font-medium">
                        Hotel Starting Price
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Starting Price"
                            {...field}
                            onChange={(event) => {
                            const input = event.target.value.trim(); // Remove leading/trailing spaces
                            const isValidNumber = /^\d*$/.test(input); // Check if input contains only digits or is empty
                            if (isValidNumber) {
                                field.onChange(input === "" ? "" : +input); // Convert valid input to number or keep it empty
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
                        <FormLabel className="text-xl font-medium">
                        Hotel Description
                        </FormLabel>
                        <FormControl>
                        <Textarea
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Description"
                            {...field}
                        />
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
                        <FormLabel className="text-xl font-medium">
                        Hotel Star Rating
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            placeholder="Enter Hotel Star Rating"
                            {...field}
                            onChange={(event) => {
                            const input = event.target.value.trim(); // Remove leading/trailing spaces
                            const isValidNumber = /^\d*$/.test(input); // Check if input contains only digits or is empty
                            if (isValidNumber) {
                                field.onChange(input === "" ? "" : +input); // Convert valid input to number or keep it empty
                            }
                            }}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                <div className={`${formStep===2? "visible":"hidden"} mt-10`}>
                <div className="mb-5 text-lg font-medium">* Please select all the payment options hotel accept.</div>
                <FormField
                    control={form.control}
                    name="hotelPaymentOptions.prepaidPayment"
                    render={({ field }) => (
                    <FormItem className="flex items-center">
                        <FormLabel className="text-xl font-medium">
                        Prepaid Payment
                        </FormLabel>
                        <FormControl>
                        <Checkbox
                            className="ml-10"
                            id="prepaidPayemnt"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="hotelPaymentOptions.partialPayment"
                    render={({ field }) => (
                    <FormItem className="flex items-center">
                        <FormLabel className="text-xl font-medium">
                        Partial Payment
                        </FormLabel>
                        <FormControl>
                        <Checkbox id="PartialPayment"
                         checked={field.value}
                        className="ml-12"
                        onCheckedChange={field.onChange}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="hotelPaymentOptions.postpaidPayment"
                    render={({ field }) => (
                    <FormItem className="flex items-center">
                        <FormLabel className="text-xl font-medium">
                        Post Payment
                        </FormLabel>
                        <FormControl>
                        <Checkbox id="postPayment"
                        className="ml-16"
                         checked={field.value}
                            onCheckedChange={field.onChange}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                <div className={`${formStep===3? "visible":"hidden"} flex flex-col gap-y-6`}>
                <FormField
                    control={form.control}
                    name="hotelLatitude"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl font-medium">
                        Hotel Latitude
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            pattern="^-?\d*\.?\d+$"
                            inputMode="numeric"
                            placeholder="Enter Hotel  Latitude"
                            {...field}
                            onChange={(event) => {
                            const input = event.target.value;
                            if (
                                /^[^a-zA-Z!@#$%^&*()_=\\|[\]{};:'",<>/?`~+]*$/.test(
                                input
                                )
                            ) {
                                field.onChange(input);
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
                    name="hotelLongitude"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl font-medium">
                        Hotel Longitude
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Longitude"
                            {...field}
                            onChange={(event) => {
                            const input = event.target.value;
                            if (
                                /^[^a-zA-Z!@#$%^&*()_+={}[\]|\\;:'",<>/?`~]*$/.test(
                                input
                                )
                            ) {
                                field.onChange(input);
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
                    name="hotelMapUrl"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl font-medium">
                        Hotel Map URL
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Map URL"
                            {...field}
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>

                <div className={`${formStep===3? "visible":"hidden"}  space-y-6 mt-10`}>
                <FormField
                    control={form.control}
                    name="hotelImageUrl"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-xl font-medium">
                        Hotel Image URL
                        </FormLabel>
                        <FormControl>
                        <Input
                            className="text-lg font-normal"
                            placeholder="Enter Hotel Image URL"
                            {...field}

                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                {fields.map(({id}, index) => (
                    <div key={id} className="space-y-4">
                    <FormField
                        control={form.control}
                        //@ts-ignore
                        name={`hotelImageList[${index}].imageId` as const}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl font-medium">
                            Hotel Image Id {index + 1}
                            </FormLabel>
                            <FormControl>
                                
                            <Input 
                                className="text-lg font-normal"
                                placeholder={`Enter Hotel Image Id ${index + 1}`}
                                {...field}
                                value={field.value as string}
                                onChange={field.onChange}

                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        //@ts-ignore
                        name={`hotelImageList[${index}].imageTitle` as const}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl font-medium">
                            Hotel Image Title {index + 1}
                            </FormLabel>
                            <FormControl>
                            <Input
                                className="text-lg font-normal" 
                                placeholder={`Enter Hotel Image Title ${index + 1}`}
                                {...field}
                                value={field.value as string}
                                onChange={field.onChange}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        //@ts-ignore
                        name={`hotelImageList[${index}].imageUrl` as const}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl font-medium">
                            Hotel Image Url {index + 1}
                            </FormLabel>
                            <FormControl>
                            <Input
                                className="text-lg font-normal"
                                placeholder={`Enter Hotel Image Url ${index + 1}`}
                                {...field}
                                value={field.value as string}
                                onChange={field.onChange}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <button type="button" className="font-semibold px-2 rounded-sm mt-2 py-0.5 bg-red-500 hover:bg-red-700 text-white text-lg" onClick={() => remove(index)}>
                        Remove Image
                    </button>
                    </div>
                ))}
                <button
                    type="button"
                    className="font-semibold px-2 rounded-sm mt-2 py-0.5 bg-blue-500 hover:bg-blue-700 text-white text-lg"
                    onClick={() => append({ imageId:fields.length > 0 ? fields[fields.length - 1].id:"733a701a-f5c6-4703-b4df-4be7ac901506"  , imageUrl: "", imageTitle: "" })}
                >
                    Add Image
                </button>
                </div>
            </div>
            <div className="flex flex-col  w-fit md:flex md:flex-row md:text-center gap-5 ">
            <Button type="button" disabled={formStep === 0} className={` text-xl ${formStep === 0 && "hidden"}`} onClick={()=>setformStep((prev)=>prev-1)}> <ArrowLeft className=" mr-2 w-6 h-6"/>Previous Step</Button>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-fit  text-xl ${formStep !== 3 && "hidden"}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 text-xl h-4 w-4 animate-spin" />
                    Please Wait
                  </>
                ) : (
                  "Submit"
                )}
              </Button>

              <Button type="button" disabled={formStep === 3} className={`w-fit text-xl ${formStep === 3&& "hidden"}`} onClick={()=>setformStep((prev)=>prev+1)}>Next Step <ArrowRight className="w-6 h-6 ml-2"/></Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default HotelForm;
