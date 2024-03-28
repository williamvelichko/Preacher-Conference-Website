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

import { Elements } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import PaymentForm from './PaymentForm';
import getStripe from '~/lib/getStripe'; // Import the getStripe function
import { Stripe } from '@stripe/stripe-js'; // Import Stripe type if necessary

export default function StripeContainer() {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    const initializeStripe = async () => {
      try {
        const stripeInstance = await getStripe(); // Load Stripe asynchronously
        setStripe(stripeInstance); // Set the Stripe object in state
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
      {stripe && ( // Render only if Stripe is loaded
        <Elements stripe={stripe}>
          <PaymentForm formData={formData} handleInputChange={handleInputChange} />
        </Elements>
      )}
    </div>
  );
}
