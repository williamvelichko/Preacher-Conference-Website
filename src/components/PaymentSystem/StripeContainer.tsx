// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React, { useState } from 'react';
// import PaymentForm from './PaymentForm';
// import { PaymentElement } from '@stripe/react-stripe-js';

// const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

// if (!stripePublicKey) {
//   throw new Error('Stripe public key not found in environment variables.');
// }

// const stripeTestPromise = loadStripe(stripePublicKey);

// export default function StripeContainer() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     streetAddress: '',
//     city: '',
//     state: '',
//     zipCode: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <Elements stripe={stripeTestPromise}>
//       <PaymentForm formData={formData} handleInputChange={handleInputChange} />
//     </Elements>
//   );
// }

// StripeContainer.js

import React, { useState, useEffect, Suspense } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { Stripe } from '@stripe/stripe-js';

export default function StripeContainer() {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    const initializeStripe = async () => {
      try {
        // Dynamically import getStripe function
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
      <Suspense fallback={<div>Loading Stripe...</div>}>
        {stripe && (
          <div>
            <Elements stripe={stripe}>
              <PaymentForm formData={formData} handleInputChange={handleInputChange} />
            </Elements>
          </div>
        )}
      </Suspense>
      {!stripe && <div>Loading Stripe...</div>}
    </div>
  );
}
