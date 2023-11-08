'use client'
import { GetUserCourseList } from '@/app/_services'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import Categoryitem from '../../_components/Categoryitem';

function Dashboard() {
    const {user}=useUser();
    const [userCourseList,setUserCourseList]=useState([]);
    useEffect(()=>{
        user?getUserCourse():null;
    },[user])
    const getUserCourse=async()=>{
        await GetUserCourseList(user.primaryEmailAddress.emailAddress).then(res=>{
            console.log(res?.userEntrollCourses);
            if(res)
                setUserCourseList(res?.userEntrollCourses)
        })
    }
  return (
    <div>
        <h2 className='text-[20px] font-medium'>My Enrolled Courses</h2>
        <div>
            {userCourseList&&userCourseList.map((course)=>(

            <div>
            <Categoryitem course={course?.courseList}/>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Dashboard