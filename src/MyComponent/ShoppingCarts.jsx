import React from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
const ShoppingCarts = ({ cart, handleQuantityChange, handleRemoveItem }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className='m-5'>
    <div>Shopping Cart</div>
    <div className='p-4 ml-20'>
        
      {cart.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <div className='flex flex-col gap-4 w-[40%]'>
          {cart.map((item) => (
            <div key={item.id} className='flex items-center bg-white p-4'>
              <img src={item.imageURL} alt={item.name} className='h-20 w-20 object-cover' />
              <div className='flex-1 mx-4'>
                <div className='font-semibold'>{item.name}</div>
                <div className='text-gray-600'>{item.price} {item.currency}</div>
              </div>
              <div className='flex items-center'>
                <button 
                className='flex items-center bg-gray-300 text-black border p-1 rounded ml-4 w-[80px]'>qty: 
                <span className='mx-2'>{item.quantity}</span>
                <span><MdOutlineArrowDropDown /></span>
                </button>
                

                <button
                  onClick={() => handleRemoveItem(item.id)}
                   className='bg-white text-black border border-gray-300 p-1 rounded ml-4 w-[80px]'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
           <hr className='' />
            {/* Total Price Display */}
            <div className='flex items-center justify-center'>
              <div className='font-semibold text-xl mr-3'>Total amount</div>
              <div className='text-xl '>
                {totalPrice.toFixed(2)} {cart[0]?.currency}
              </div>
            </div>
          </div>
      )}
    </div>
    </div>
  );
};

export default ShoppingCarts;
