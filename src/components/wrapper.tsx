import React from 'react'

const Wrapper = ({title,description}:{title:string,description:string}) => {
  return (
    <div className='bg-[#005250] text-white h-64 pt-16 flex items-center'>
        <div className='bg-[#005250] text-white px-4 py-6'>
            <h1 className='text-6xl font-serif'>{title}</h1>
            <h2 className='text-[22px] mt-2 tracking-tight '>{description}</h2>
        </div>
    </div>
  )
}

export default Wrapper

                    
                    
                    
                    
