import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
  'pk_test_51O75VEAtkvkkH2vrOvnN7tRST3WPZhgXgwMIy0OFP2C3XdR6LYh03L2DyeIrjHgYbIlSSqDIGsLplWh58YE0oDs100oKWic5UW';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
