import React, { useState } from 'react';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Payment Method 1: Credit Card */}
        <div 
          className={`payment-method ${selectedPayment === 'credit_card' ? 'selected' : ''}`}
          onClick={() => handlePaymentSelection('credit_card')}
        >
          <img src="/images/credit_card.png" alt="Credit Card" className="w-24 h-24 mx-auto mb-2" />
          <p className="text-center">Credit Card</p>
        </div>

        {/* Payment Method 2: PayPal */}
        <div 
          className={`payment-method ${selectedPayment === 'paypal' ? 'selected' : ''}`}
          onClick={() => handlePaymentSelection('paypal')}
        >
          <img src="/images/paypal.png" alt="PayPal" className="w-24 h-24 mx-auto mb-2" />
          <p className="text-center">PayPal</p>
        </div>

        {/* Payment Method 3: Bank Transfer */}
        <div 
          className={`payment-method ${selectedPayment === 'bank_transfer' ? 'selected' : ''}`}
          onClick={() => handlePaymentSelection('bank_transfer')}
        >
          <img src="/images/bank_transfer.png" alt="Bank Transfer" className="w-24 h-24 mx-auto mb-2" />
          <p className="text-center">Bank Transfer</p>
        </div>
      </div>

      {/* Button to Proceed */}
      <div className="mt-8">
        <button className="bg-pink-700 text-white font-bold py-2 px-6 mt-4 inline-block rounded-lg hover:bg-pink-900 ">Proceed</button>
      </div>
    </div>
  );
};

export default Payment;
