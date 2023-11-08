"use client"
import { Layout, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


function SideBarNav() {
    const menuList=[
        {
            id:1,
            name:'Browse',
            icon:Search,
            path:'/browse'
        },
        {
            id:2,
            name:'Dashboard',
            icon:Layout,
            path:'/dashboard'
        },
    ]
    const [activIndex, setActiveIndex]=useState(0)
    const router=useRouter();
    return (
        
        <div className='h-full b-hiwte border-r flex flex-col overflow-y-auto shadow-md' >
            <div className='p-5 border-b z-50'>
                <Image src='/logo.jpg' 
                alt='logo'
                width={170}
                height={50} />
            </div>
            <div className='flex flex-col'>
                {menuList.map((item,index)=>(
                    
                    <div className={`flex gap-2 items-center p-4 px-6 hover:bg-slate-200 cursor-pointer ${activIndex===index?'bg-blue-50 text-blue-800 font-semibold':null}`}
                    onClick={()=>{setActiveIndex(index); router.push(item.path)}}>
                        <item.icon/>
                        <h2>{item.name}</h2>
                    </div>
                    
                ))}
            </div>
    
        </div>
    )
}

export default SideBarNav