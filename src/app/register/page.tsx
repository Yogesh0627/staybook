'use client'
import { FormCard } from '@/components/FormCard'
import HotelForm from '@/components/HotelForm'
import React from 'react'

const page = () => {
  return (
    <div>
      <FormCard formDescription='Start your journey with us' 
      formTitle='Hotel Registration Form'>
        <HotelForm/>
      </FormCard>
      
    </div>
  )
}

export default page