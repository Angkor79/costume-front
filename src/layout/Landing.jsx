import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
     <h1 className="text-red-500 font-bold text-3xl mb-4">Products New</h1>


      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Product 1 */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-lg font-semibold mb-2">ชุดนอน</h2>
          <p className="text-gray-600 mb-2">Price: $10.99</p>

          <img src="/src/img/images1.jpg" alt="logo" className="w-[400px] h-[400px] mr-4" />
<Link to="/product-details" className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 ">
  Details
</Link>
        </div>

       
      </div>
    </div>
  );
};
export default LandingPage;
