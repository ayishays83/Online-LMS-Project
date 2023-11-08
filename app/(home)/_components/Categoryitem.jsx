import { Book } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Categoryitem({course}) {
   if(course)
  return (
    <div 
            className='border rounded-lg p-2 cursor-pointer hover:border-blue-300'> 
                <Image src={course?.banner.url}
                alt={course?.name}
                width={1000}
                height={500}
                className='rounded-lg'/>
                <div className='mt-4'>
                    <h2 className='text-[18px] md:text-[16px] font-medium'>{course?.name}</h2>
                </div>
                <div className='flex items-center gap-2 mt-3'> 
                    <Book className='h-6 w-6 text-blue-600 rounded-full bg-blue-100 p-1'/>
                    <h2 className='text-[12px] text-gray-400'>{course?.totalChapters} Chapters</h2>
                </div>
            </div>  )
}

export default Categoryitem