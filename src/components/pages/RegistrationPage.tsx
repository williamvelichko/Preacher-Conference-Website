import React, { FormEvent } from 'react';
import getStripe from '~/lib/getStripe';

const RegistrationPage: React.FC = () => {
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleCheckout}>
        <h2 className="text-3xl text-center font-bold mb-8">Registration</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
