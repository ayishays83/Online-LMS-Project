'use client'
import React, { useState } from "react";

function CategoryFilter() {
    const [activIndex,setActiveIndex]=useState(0);

  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "Python",
      value: "python",
    },
    {
      id: 3,
      name: ".NET",
      value: ".net",
    },
    {
      id: 4,
      name: "Java",
      value: "java",
    },
    {
      id: 5,
      name: "React Js",
      value: "reactjs",
    },
  ];
  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button key={index} onClick={()=>setActiveIndex(index)} className={`border p-2 px-4 text-sm rounded-md hover:border-slate-800 cursor-pointer font-semibold ${activIndex===index?'bg-blue-50 text-blue-800':null} `}>
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
