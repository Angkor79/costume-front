import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Product 1 */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">ชุดนอน</h2>
          <img src="/src/img/images1.jpg" alt="logo" className="w-[300px] h-[300px] mr-4" />
          <p className="text-gray-600 mb-2">Price: $10.99</p>
          <p className="text-gray-600 mb-4">Quantity: 1</p>
          <button className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 ">Remove</button>
        </div>

    
      </div>

      {/* Cart Summary */}
      <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold">$10.99</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Tax:</span>
          <span className="font-semibold">$5.10</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Total:</span>
          <span className="font-semibold">$16.09</span>
        </div>
        <Link to="/check-out" className=" bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 ">Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
