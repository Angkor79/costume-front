import React from "react";
import { Link } from 'react-router-dom';

const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Product 1 */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">ชุดนอน</h2>
          <p className="text-gray-600 mb-2">Price: $10.99</p>

          <img src="/src/img/images1.jpg" alt="img" className="w-[400px] h-[400px] mr-4" />
          <Link to="/product-details" className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900">
            Details
          </Link>
        </div>

        {/* Product 2 */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">ชุดนอน</h2>
          <p className="text-gray-600 mb-2">Price: $10.99</p>

          <img src="/src/img/im.jpg" alt="img" className="w-[400px] h-[400px] mr-4" />
          <Link to="/product-details" className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900">
            Details
          </Link>
        </div>

        {/* Product 3 */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">ชุดนอน</h2>
          <p className="text-gray-600 mb-2">Price: $10.99</p>

          <img src="/src/img/im2.jpg" alt="img" className="w-[400px] h-[400px] mr-4" />
          <Link to="/product-details" className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900">
            Details
          </Link>
        </div>
     
      </div>
    </div>
  );
};

export default ProductPage;
