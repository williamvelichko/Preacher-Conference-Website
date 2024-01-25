import React from 'react';

const NewRegistrationForm: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">New Registration Form</h2>

      <div className="border rounded-lg overflow-hidden">
        <iframe
          title="Stripe Payment Form"
          src="https://buy.stripe.com/test_bIY6pgfD380BaysdQQ"
          width="100%"
          height="800"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default NewRegistrationForm;
