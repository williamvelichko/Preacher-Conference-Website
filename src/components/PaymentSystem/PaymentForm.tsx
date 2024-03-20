import { useElements, useStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState, FormEvent } from 'react';
import addUserToFirestore from '../smaller-components/addUserToFirebase';
import SuccessfullRegistration from './SuccessfullRegistration';
import MicroForm from './MicroForm';
import { useFetchData } from '../store/FetchData';

interface PaymentFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ formData, handleInputChange }) => {
  const { conferenceData } = useFetchData();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    streetAddress: false,
    city: false,
    state: false,
    zipCode: false,
    cardNumber: false,
    cardExp: false,
    cvc: false,
  });

  const stripe = useStripe();
  const elements = useElements();

  const validateElement = (element: any, isEmpty: any, type: any) => {
    if (element) {
      element.on('change', (event: any) => {
        const { empty } = event;
        isEmpty[type] = empty;
      });
    } else {
      isEmpty[type] = true; // Mark the field as empty if element is not available
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    const { firstName, lastName, email, phoneNumber, streetAddress, city, state, zipCode } = formData;

    if (!stripe || !elements) {
      setError('Stripe.js has not loaded yet. Please try again.');
      setLoading(false);
      return;
    }
    const cardElement = elements.getElement(CardNumberElement);
    const cardExp = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);

    validateElement(cardElement, validation, 'cardNumber');
    validateElement(cardExp, validation, 'cardExp');
    validateElement(cardCvc, validation, 'cvc');

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phoneNumber.trim() ||
      !streetAddress.trim() ||
      !city.trim() ||
      !state.trim() ||
      !zipCode.trim()
    ) {
      setError('All fields are required');
      setLoading(false);
      setValidation((prev: any) => ({
        ...prev,
        firstName: !firstName.trim(),
        lastName: !lastName.trim(),
        email: !email.trim(),
        phoneNumber: !phoneNumber.trim(),
        streetAddress: !streetAddress.trim(),
        city: !city.trim(),
        state: !state.trim(),
        zipCode: !zipCode.trim(),
      }));
      return;
    }

    if (!cardElement) {
      setError('Card information is incomplete. Please check again.');
      setLoading(false);
      return;
    }

    try {
      const paymentMethodResult = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          address: {
            postal_code: zipCode,
          },
        },
      });

      if (paymentMethodResult.error || !paymentMethodResult.paymentMethod) {
        setError('Payment method creation failed. Please check card details.');
        setLoading(false);
        return;
      }

      const paymentMethodId = paymentMethodResult.paymentMethod.id;

      const Data = {
        id: paymentMethodId,
        amount: conferenceData.Price * 100,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        streetAddress: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
      };

      const response = await axios.post('https://faithfull-steward-server-368f84d7a4ff.herokuapp.com/payment', Data);
      //const response = await axios.post('http://localhost:4000/payment', Data);

      if (response.data.success) {
        setSuccess(true);
        addUserToFirestore(formData);
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (error) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center">
      {!success ? (
        <MicroForm
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formData={formData}
          validation={validation}
          error={error}
          loading={loading}
          CardNumberElement={CardNumberElement}
          CardCvcElement={CardCvcElement}
          CardExpiryElement={CardExpiryElement}
        />
      ) : (
        <SuccessfullRegistration formData={formData} />
      )}
    </div>
  );
};

export default PaymentForm;
