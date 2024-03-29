import { loadStripe } from '@stripe/stripe-js';

const stripePublishableKey =
  'pk_test_51O75VEAtkvkkH2vrOvnN7tRST3WPZhgXgwMIy0OFP2C3XdR6LYh03L2DyeIrjHgYbIlSSqDIGsLplWh58YE0oDs100oKWic5UW' ||
  process.env.STRIPE_PUBLISHABLE_KEY;

const getStripe = async () => {
  if (!stripePublishableKey) {
    throw new Error('Stripe publishable key is not defined.');
  }

  // Load Stripe.js asynchronously
  const stripe = await loadStripe(stripePublishableKey);

  return stripe;
};

export default getStripe;
