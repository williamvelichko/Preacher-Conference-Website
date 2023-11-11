import React, { useState } from 'react';
import StripeContainer from '../StripeContainer';
import TitleComponent from '../smaller-components/TitleComponent';

const RegistrationPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    setFirstNameError('');
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    setLastNameError('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate input fields
    if (!firstName.trim()) {
      setFirstNameError('First name is required');
    }

    if (!lastName.trim()) {
      setLastNameError('Last name is required');
    }

    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
    }

    // Perform further actions (e.g., submit the form) if validation passes
    if (firstName && lastName && email && isValidEmail(email)) {
      // Your form submission logic here
      console.log('Form submitted:', { firstName, lastName, email });
    }
  };

  const isValidEmail = (value: string) => {
    // Basic email validation (you can enhance this based on your requirements)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen w-full">
      <TitleComponent title={'Registration'} />
      <div className="flex rounded px-8 pt-6 pb-8 mb-4 w-full h-full border justify-center">
        <div className="flex flex-col md:w-9/12 w-11/12 bg-gray-100 shadow-md w-full h-full p-6">
          <form onSubmit={handleSubmit} className="">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  firstNameError ? 'border-red-500' : ''
                }`}
                id="firstName"
                type="text"
                placeholder="Your First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              {firstNameError && <p className="text-red-500 text-xs italic">{firstNameError}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  lastNameError ? 'border-red-500' : ''
                }`}
                id="lastName"
                type="text"
                placeholder="Your Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
              {lastNameError && <p className="text-red-500 text-xs italic">{lastNameError}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  emailError ? 'border-red-500' : ''
                }`}
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
            </div>
          </form>
          <StripeContainer />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
