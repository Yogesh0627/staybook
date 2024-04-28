
import * as z from "zod"

export const hotelImageListSchema = z.object({
  imageId:z.string(),
  imageUrl: z.string().url(),
  imageTitle: z.string()
})

export const hotelDetailsValidation =   z.object({
    id:z.string().optional(),
    hotelName: z.string().min(1, 'Hotel name is required').toLowerCase().trim(),
    hotelEmailId: z.string().email('Email address is required').min(6, 'Email is required').toLowerCase().trim(),
    hotelContactNumber: z.number().min(1, 'Contact number is required').max(9999999999 , 'Contact Number should be max 10 numbers'),
    hotelLandmark: z.string().min(3, 'Landmark is required').toLowerCase().trim(),
    hotelAddress: z.string().min(6, 'Minimum 6 character should be in address').toLowerCase().trim(),
    hotelStartingPrice: z.number().positive().min(1, 'Starting price is required'),
    hotelDescription: z.string().min(1, 'Description is required').max(500,"Description must be with in 500 characters").toLowerCase().trim(),
    hotelStarRating: z.number().positive().min(1, 'Star rating must be at least 1').max(5, 'Star rating cannot exceed 5').min(1, 'Star rating is required'),
    hotelImageUrl: z.string().url('Invalid image URL').min(1, 'Image URL is required').toLowerCase().trim(),
    hotelState: z.string().min(1, 'State is required').toLowerCase().trim(),
    hotelCity: z.string().min(1, 'City is required').toLowerCase().trim(),
    hotelCountry: z.string().min(1, 'Country is required').toLowerCase().trim(),
    hotelRegion: z.string().min(1, 'Region is required').toLowerCase().trim(),
    hotelPincode: z.string().length(6,"Pincode should be six digits").trim(),
    hotelSlugDetails:z.object({
      hotel: z.string().min(1, 'Hotel name is required').toLowerCase().trim(),
      hotelCity: z.string().min(1, 'City is required').toLowerCase().trim(),
      hotelRegion: z.string().min(1, 'Region is required').toLowerCase().trim(),
      hotelState: z.string().min(1, 'State is required').toLowerCase().trim(),
      hotelCountry: z.string().min(1, 'Country is required').toLowerCase().trim(),
    }),
    hotelLongitude: z.string().min(1,"Longitude Cordinates required").regex(/^[^a-zA-Z!@#$%^&*()_+={}[\]|\\;:'",<>/?`~]*$/,"Longitude should be required"),
    hotelLatitude: z.string().min(1,"Longitude Cordinates required").regex(/^[^a-zA-Z!@#$%^&*()_+={}[\]|\\;:'",<>/?`~]*$/,"Latitude should be required"),
    hotelMapUrl : z.string().url("URL can not be empty"),
    
    hotelPaymentOptions:z.object({
      postpaidPayment: z.boolean().default(false),
      prepaidPayment: z.boolean().default(false),
      partialPayment: z.boolean().default(false),
    }),
    
    hotelImageList : z.array(hotelImageListSchema)
  });

    
export type hotelValidations = z.infer<typeof hotelDetailsValidation>