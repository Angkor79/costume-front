import React from 'react';



const PurchaseSuccess = () => {


  return (
    <div className="container mx-auto px-4 py-8 "  style={{ height: '600px' }}>
      <h1 className="text-2xl font-bold mb-4">ยืนยันสำเร็จ</h1>

      <div className="bg-white shadow-md rounded-lg p-8">
        <p className="text-gray-700 mb-4">Thank you for your purchase!</p>
        <p className="text-gray-700 mb-4">Your order has been successfully placed.</p>
        <p className="text-gray-700 mb-4">You will receive an email confirmation shortly.</p>
      </div>

      <div className="mt-8">
        <a href="/" className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 ">Back to Home</a>
      </div>
    </div>
  );
};

export default PurchaseSuccess;
