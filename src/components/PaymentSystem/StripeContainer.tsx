import React, { useState, useEffect, Suspense } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { Stripe } from '@stripe/stripe-js';
import Loader from '../smaller-components/Loader';

export default function StripeContainer() {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    const initializeStripe = async () => {
      try {
        const getStripeModule = await import('~/lib/getStripe');
        const stripeInstance = await getStripeModule.default(); // Call the function
        setStripe(stripeInstance); // Set the Stripe object in state
        console.log('Stripe lazy loading successful!');
      } catch (error) {
        console.error('Error initializing Stripe:', error);
      }
    };

    initializeStripe(); // Call the initialization function
  }, []);
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

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Suspense fallback={<Loader />}>
        {stripe && (
          <div>
            <Elements stripe={stripe}>
              <PaymentForm formData={formData} handleInputChange={handleInputChange} />
            </Elements>
          </div>
        )}
      </Suspense>
      {!stripe && <Loader />}
    </div>
  );
}
