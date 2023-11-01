import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState, FormEvent } from 'react';

const PaymentForm: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (!error && paymentMethod) {
        try {
          const { id } = paymentMethod;
          const response = await axios.post('http://localhost:4000/payment', {
            amount: 1000,
            id,
          });

          if (response.data.success) {
            console.log('Successful payment');
            setSuccess(true);
          }
        } catch (error) {
          console.log('Error', error);
        }
      } else {
        console.log(error?.message);
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full">
      {!success ? (
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl text-center font-bold mb-8">Payment</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card">
              Card Information
            </label>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Pay
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl">
            You just bought a sweet spatula. Congrats, this is the best decision of your life!
          </h2>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
