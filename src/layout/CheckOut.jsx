import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckOut = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [editing, setEditing] = useState(false);
  const [address, setAddress] = useState('123 Main St, City, Country');

 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">CheckOut</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Product 1 */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">ชุดนอน</h2>
          <img src="/src/img/images1.jpg" alt="logo" className="w-[300px] h-[300px] mr-4" />
          <p className="text-gray-600 mb-2">Price: $10.99</p>
          <p className="text-gray-600 mb-4">Quantity: 1</p>
          
        </div>

     
      </div>

      {/* Shipping Address */}
      <div className="bg-white shadow-md rounded-lg p-4 my-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        {editing ? (
          <input
            type="text"
            className="border rounded-md px-2 py-1 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        ) : (
          <p className="text-gray-900">{address}</p>
        )}
        <button
          onClick={() => setEditing(!editing)}
          className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 "
        >
          {editing ? 'Save' : 'Edit'}
        </button>
      </div>

      {/* Payment */}
      <div className="bg-white shadow-md rounded-lg p-4 my-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payment">
            Payment
          </label>
          <select
            className="border rounded-md px-2 py-1 w-full"
            value={selectedPayment}
            onChange={(e) => setSelectedPayment(e.target.value)}
          >
            <option value="">Select payment</option>
            
            <option value="M">โอนจ่าย</option>
          </select>
        </div>
        {/* Conditionally render image based on selected payment method */}
        {selectedPayment === 'M' && (
          <img src="/src/img/pay_qrcode.png" alt="qr" className="w-[200px] h-[200px] mr-4" />
        )}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
        
        {/* Cart summary details go here */}
        <Link to="/purchase-success" className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 ">
          Submit Order
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
