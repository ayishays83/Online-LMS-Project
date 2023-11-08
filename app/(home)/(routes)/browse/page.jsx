'use client'
import React, { useEffect, useState } from 'react'
import CategoryFilter from './_components/CategoryFilter'
import { getCourseList } from '@/app/_services'
import CourseLists from './_components/CourseLists'

function Browse() {
const [courses,setCourses]=useState([])

 useEffect(()=>{
  getCourses()
 },[])

  const getCourses=()=>{
    getCourseList().then(res=>{
      setCourses(res.courseLists)
    })
  }
  return (
    <div>
      <CategoryFilter/>
    {courses ? <CourseLists courses={courses}/>:null}
    </div>
  )
}

export default Browse