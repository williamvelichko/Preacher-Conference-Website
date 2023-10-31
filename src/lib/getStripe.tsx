import { loadStripe } from '@stripe/stripe-js';

const stripePublishableKey =
  'pk_test_51O75VEAtkvkkH2vrOvnN7tRST3WPZhgXgwMIy0OFP2C3XdR6LYh03L2DyeIrjHgYbIlSSqDIGsLplWh58YE0oDs100oKWic5UW' ||
  process.env.STRIPE_PUBLISHABLE_KEY; // Replace with your actual variable name

const getStripe = () => {
  if (!stripePublishableKey) {
    throw new Error('Stripe publishable key is not defined.');
  }
  return loadStripe(stripePublishableKey);
};

export default getStripe;
