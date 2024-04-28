import * as React from "react"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



type formCardProps={
    children:React.ReactNode,
    formTitle:string,
    formDescription:string,

}

export function FormCard({children,formDescription,formTitle}:formCardProps) {
  return (
    <Card className="w-full mt-16 md:w-3/5 m-auto h-fit">
      <CardHeader>
        <CardTitle className=" text-center tracking-tight text-3xl md:text-5xl">{formTitle}</CardTitle>
        <CardDescription className="text-lg font-semibold text-center">{formDescription}</CardDescription>
      </CardHeader>
      <CardContent>
          <div className=" w-full  h-full p-2">
            <div>
                {children}
            </div>
          </div>
        
      </CardContent>
    </Card>
  )
}
