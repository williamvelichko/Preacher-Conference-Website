import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import { PaymentElement } from '@stripe/react-stripe-js';
require('dotenv').config();
const stripePublicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

if (!stripePublicKey) {
  throw new Error('Stripe public key not found in environment variables.');
}

const stripeTestPromise = loadStripe(stripePublicKey);

export default function StripeContainer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm formData={formData} handleInputChange={handleInputChange} />
    </Elements>
  );
}
