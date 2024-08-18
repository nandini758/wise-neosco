import React from 'react';

const Cart = ({ imageURL,currency, name, price, onAddToCart }) => {
  return (
    <div className=' p-4 bg-white shadow-lg'>
      <div className=' flex justify-center items-center relative'>
        <img src={imageURL} alt={name} className=' h-auto w-[140px]' />
        <div className='absolute top-2 left-0 z-10 text-black p-1 rounded font-semibold'>
          {name}
        </div>
      </div>
      <div className='flex justify-between pt-2'>
        <div>{price} {currency}</div>
        <button
          onClick={onAddToCart}
          className='bg-black text-white p-1 rounded'
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
