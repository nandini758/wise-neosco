import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
const SearchBox = ({isOpen, setIsOpen ,search, setSearch}) => {
    
    const handlebutton=()=>{
        setIsOpen(!isOpen)
    }

const handleSearch=()=>{
    // alert('click')
   setSearch(search)
   
}

  return (
    <div className='flex gap-2 justify-center mt-8 mb-3 '>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" placeholder='Search for products...' className=' border-b border-black py-1 outline-none md:w-[250px] '/>
      <button onClick={handleSearch} className='border bg-gray-900 text-white rounded-md px-3'><IoMdSearch /></button>
      <button onClick={handlebutton} className='border bg-gray-900 text-white rounded-md px-3 sm:hidden'><CiFilter /></button>

    
    </div>
  )
}

export default SearchBox
