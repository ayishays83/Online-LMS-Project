"use client";
import React from "react";
import SearchBar from "./SearchBar";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function Header() {
  const router=useRouter();
  const { user } = useUser();
  return (
    <div
      className="ml-64 p-6 border-b
    flex items-center justify-between"
    >
      <SearchBar />
      {!user ? <button onClick={()=>router.push('/sign-in')} className="p-2 w-20 font-semibold cursor-pointer hover:bg-blue-50 rounded ">Login</button> : <UserButton />}
    </div>
  );
}

export default Header;
