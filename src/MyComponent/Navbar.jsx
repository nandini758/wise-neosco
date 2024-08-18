import React, { useState } from 'react';
import { PiShoppingCartThin } from "react-icons/pi";
import CartList from './CartList';
import ShoppingCarts from './ShoppingCarts';
import SearchBox from './SearchBox';
import Filter from './Filter';
function Navbar() {
  const[searchItem, setSearchItem]= useState('')
  const [activeSection, setActiveSection] = useState('products'); // default to products
  const[isOpen, setIsOpen]= useState(false)
  const[search, setSearch]= useState('')
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    priceRange: [],
    type: [],
});

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      if (existingItem.quantity + 1 > item.quantity) {
        alert("Cannot add more items than available stock.");
        return;
      }
      setCart(
        cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const handleRemoveItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex justify-between pl-5 items-center bg-gray-200'>
        <div>
          TeeRex Store
        </div>
        <div className='flex justify-between items-center mr-5 w-[150px] h-[50px]'>
          <div
            onClick={() => handleSectionChange('products')}
            className={`cursor-pointer ${activeSection === 'products' ? 'border-b-2 border-gray-500' : ''}`}
          >
            Products
          </div>
          <div
            onClick={() => handleSectionChange('cart')}
            className={`relative pl-2 text-4xl items-center bg-gray-400 w-[50px] cursor-pointer ${activeSection === 'cart' ? 'border-b-2 border-gray-500' : ''}`}
          >
            <PiShoppingCartThin />
            {cart.length > 0 && (
              <span className="absolute top-0 right-[-5px] text-black rounded-full h-2 w-6 flex items-center justify-center text-sm font-bold">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Conditional rendering based on the active section */}
      <SearchBox isOpen={isOpen} setIsOpen={setIsOpen} search={search} setSearch={setSearch} searchItem={searchItem} setSearchItem={setSearchItem}/>
      {isOpen && <div className="w-full">
        <Filter filters={filters} setFilters={setFilters} />
      </div>}
      
      <div className='p-4'>
        {activeSection === 'products' && <CartList  addToCart={addToCart} searchItem={searchItem}/>}
        {activeSection === 'cart' && <div><ShoppingCarts cart={cart} handleRemoveItem={handleRemoveItem}/></div>}
      </div>
    </div>
  );
}

export default Navbar;
