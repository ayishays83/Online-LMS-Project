import Categoryitem from '@/app/(home)/_components/Categoryitem'
import { Book } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CourseLists({courses}) {
  return (
    <div className='mt-5 grid grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-5'>
        {courses.map((course,index)=>(
            <Link href={'/course-preview/'+course.id} key={index}>
            <Categoryitem course={course}/>
            </Link>
        ))}
    </div>
  )
}

export default CourseLists