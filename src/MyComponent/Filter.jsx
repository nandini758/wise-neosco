import React, { useState } from 'react';

const Filter = ({ filters, setFilters }) => {

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    
    setFilters((prevFilters) => {
      const updatedFilter = prevFilters[name];
      if (checked) {
        
        return {
          ...prevFilters,
          [name]: [...updatedFilter, value],
        };
      } else {
        
        return {
          ...prevFilters,
          [name]: updatedFilter.filter((filterValue) => filterValue !== value),
        };
      }
    });
  };
  

  return (
    
    <div className="p-4 bg-white w-[70%] shadow-lg rounded-md">
        <div className="mb-4">
        <label className="block mb-2">Color</label>
        <div className='flex gap-2 items-center'>
        <input
              type="checkbox"
              name="color"
              value="Black"
              checked={filters.color.includes("Black")}
              onChange={handleCheckboxChange}
            />
          <label>
            
            Red
          </label>
        </div>
        <div className='flex gap-2 items-center'>
        <input
              type="checkbox"
              name="color"
              value="White"
              checked={filters.color.includes("White")}
              onChange={handleCheckboxChange}
            />
          <label>
            
            Blue
          </label>
        </div>
        <div className='flex gap-2 items-center'>
        <input
              type="checkbox"
              name="color"
              value="Grey"
              checked={filters.color.includes("Grey")}
              onChange={handleCheckboxChange}
            />
          <label>
           
            Green
          </label>
        </div>
        
      </div>
      <div className="mb-4">
        <label className="block mb-2">Gender</label>
        <div className='flex gap-2 items-center'>
        <input
              
              type="checkbox"
              name="gender"
              value="Men"
              checked={filters.gender.includes("Men")}
              onChange={handleCheckboxChange}
            />
          <label>
            Men
          </label>
          
        </div>
        <div className='flex gap-2 items-center'>
        <input
              type="checkbox"
              name="gender"
              value="Women"
              checked={filters.gender.includes("Women")}
              onChange={handleCheckboxChange}
            />
          <label>
           
            Women
          </label>
        </div>
      </div>

      

      <div className="mb-4">
        <label className="block mb-2">Price</label>
        <div className='flex gap-2 items-center'>
        <input
              type="checkbox"
              name="priceRange"
              value="0-300"
              checked={filters.priceRange.includes("0-300")}
              onChange={handleCheckboxChange}
            />
          <label>
            
            0 - 250 Rs
          </label>
        </div>
        <div className='flex gap-2 items-center'>
        <input
              type="checkbox"
              name="priceRange"
              value="0-300"
              checked={filters.priceRange.includes("0-300")}
              onChange={handleCheckboxChange}
            />
          <label>
            
            Rs 251 - 450
          </label>
        </div>
        <div className='flex gap-2 items-center'>
        <input
              type="checkbox"
              name="priceRange"
              value="301-600"
              checked={filters.priceRange.includes("301-600")}
              onChange={handleCheckboxChange}
            />
          <label>
            
            Rs 450
          </label>
        </div>
        
      </div>

      <div className="mb-4">
        <label className="block mb-2">Type</label>
        <div className='flex gap-2 items-center'>
        <input
              type="checkbox"
              name="type"
              value="Basic"
              checked={filters.type.includes("Basic")}
              onChange={handleCheckboxChange}
            />
          <label>
            
            Polo
          </label>
        </div>
        <div className='flex gap-2 items-center'>
        <input
              type="checkbox"
              name="type"
              value="Polo"
              checked={filters.type.includes("Polo")}
              onChange={handleCheckboxChange}
            />
          <label>
            
            Hoodle
          </label>
        </div>
        <div className='flex gap-2 items-center'>
        <input
              type="checkbox"
              name="type"
              value="Basic"
              checked={filters.type.includes("Basic")}
              onChange={handleCheckboxChange}
            />
          <label>
            
            Basic
          </label>
        </div>
      
      </div>
    </div>
  );
};

export default Filter;
