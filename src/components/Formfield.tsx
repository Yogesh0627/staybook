'use client'
import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

interface FormProps{
    fieldName:string,
    type? : string,
    form:any,
    placeholder:string,
    label:string,
    control?:any
}

const Formfield = ({fieldName,control,form,type,placeholder,label}:FormProps) => {
  return (
    <>
        <FormField
            control={control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input type={type} placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
        />
    </>
  )
}

export default Formfield