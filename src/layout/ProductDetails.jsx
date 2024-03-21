import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(''); // State สำหรับเก็บขนาดที่ถูกเลือก
  const [selectedColor, setSelectedColor] = useState(''); // State สำหรับเก็บสีที่ถูกเลือก
  const [quantity, setQuantity] = useState(1); // State สำหรับจำนวนสินค้าที่เลือก

  const handleAddToCart = () => {
  
  };

  const handleBuyNow = () => {
   
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>

      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-2">ชุดนอน</h2>
        <p className="text-gray-600 mb-2">Price: $10.99</p>
        <p className="text-gray-600 mb-2">Pajamas</p>
        <p className="text-gray-600 mb-4">Description: ชุดนอนผ้านุ่ม ใส่สบาย ซักง่ายดูแลง่าย สีสันสวยงาม</p>
        
        {/* Product Image */}
        <div className="mb-4">
        <img src="/src/img/images1.jpg" alt="logo" className="w-[400px] h-[400px] mr-4" />
        </div>

        {/* Product Options */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
            Size
          </label>
          <select
            className="border rounded-md px-2 py-1 w-full"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">Select size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
            Color
          </label>
          <select
            className="border rounded-md px-2 py-1 w-full"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="">Select color</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            className="border rounded-md px-2 py-1 w-full"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <p className="text-gray-600 mb-2">Stock Quantity: 100</p>
          <p className="text-gray-600 mb-2">Total: ${quantity * 10.99}</p>
        </div>

        {/* Buttons */}
        <div className="flex">
          <Link to="/cart"
            onClick={handleAddToCart}
            className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 "
          >
            Add to Cart
          </Link>
          <Link to="/check-out"
            onClick={handleBuyNow}
            className="bg-pink-500 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 "
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
