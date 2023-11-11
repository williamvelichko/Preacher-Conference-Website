import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState, FormEvent } from 'react';

const PaymentForm: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'city') {
      setCity(value);
    } else if (name === 'state') {
      setState(value);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      setLoading(true);

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
            firstName,
            lastName,
            email,
            city,
            state,
          });

          if (response.data.success) {
            console.log('Successful payment');
            setSuccess(true);
          }
        } catch (error) {
          console.error('Error processing payment:', error);
          setError('Payment failed. Please try again.');
        } finally {
          setLoading(false);
        }
      } else {
        console.error('Stripe error:', error?.message);
        setError('Payment failed. Please check your card details and try again.');
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full mx-auto">
      {!success ? (
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-3xl text-center font-bold mb-8">Payment</h2>

          <div className="flex md:flex-row flex-col justify-center">
            <div className="md:w-1/3 w-full">
              <label className="block text-gray-700 text-sm font-bold " htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div className="md:w-1/3 w-full ">
              <label className="block text-gray-700 text-sm font-bold " htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div className="md:w-1/3 w-full">
              <label className="block text-gray-700 text-sm font-bold " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold " htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={handleInputChange}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold " htmlFor="state">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={state}
                onChange={handleInputChange}
                className="w-full border rounded py-2 px-3"
                required
              />
            </div>
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold " htmlFor="card">
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
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Pay'}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl">You Have Been Successfully Registered for Faithfull Steward Conference</h2>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
