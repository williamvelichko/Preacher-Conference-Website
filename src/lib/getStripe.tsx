import { loadStripe } from '@stripe/stripe-js';

const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY; // Replace with your actual variable name

const getStripe = () => {
  if (!stripePublishableKey) {
    throw new Error('Stripe publishable key is not defined.');
  }
  return loadStripe(stripePublishableKey);
};

export default getStripe;
