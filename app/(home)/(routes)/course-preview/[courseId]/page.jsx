'use client'
import { getCourseById } from '@/app/_services';
import React, { useEffect, useState } from 'react'
import VedioPlayer from './_components/VedioPlayer';
import CourseDetails from './_components/CourseDetails';
import OptionSection from './_components/OptionSection';
import EntrollmentSection from './_components/EntrollmentSection';
import { useUser } from '@clerk/nextjs';

function CoursePreview({params}) {
  const [courseDetail,setCourseDetails]=useState([]);
  const [userCourse,setUserCourse]=useState([]);
  const {user}=useUser();
  useEffect(()=>{
    params.courseId? getCourse(params.courseId):null
  },[user])

  const getCourse=()=>{
    getCourseById(params.courseId,user?.primaryEmailAddress?.emailAddress).then(res=>{
    console.log('course preview',res.userEntrollCourses);
    setCourseDetails(res.courseList)
    setUserCourse(res.userEntrollCourses[0])

    })
  }

  return courseDetail?.name&& (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className='col-span-2'>
          <VedioPlayer
          videoUrl={courseDetail?.chapter[0]?.video.url}/>
          <CourseDetails courseDetails={courseDetail}/>
        </div>
        <div className='mx-5 md:mt-0'> 
        <OptionSection/>
        <EntrollmentSection courseDetails={courseDetail}
        userCourse={userCourse}/>
        </div>
      </div>
    </div>
  )
}

export default CoursePreview