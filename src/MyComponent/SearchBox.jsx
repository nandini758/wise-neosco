import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

const SearchBox = ({ isOpen, setIsOpen, search, setSearch,searchItem, setSearchItem }) => {
  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the search action (e.g., filtering products)
    setSearchItem(search); // Or perform the search action here
    // Reset the search value after submitting
    
  };
  

  return (
    <div className='flex gap-2 justify-center mt-8 mb-3'>
      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          type="search" 
          placeholder='Search for products...' 
          className='border-b border-black py-1 outline-none md:w-[250px]' 
        />
        <button 
          type='submit' 
          className='border bg-gray-900 text-white rounded-md px-3'
        >
          <IoMdSearch />
        </button>
        <button 
          type='button' 
          onClick={handleButton} 
          className='border bg-gray-900 text-white rounded-md px-3 sm:hidden'
        >
          <CiFilter />
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
