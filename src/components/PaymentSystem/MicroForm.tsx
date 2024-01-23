import React from 'react';

interface props {
  handleSubmit: any;
  formData: any;
  handleInputChange: any;
  validation: any;
  loading: any;
  error: any;
  CardNumberElement: any;
  CardExpiryElement: any;
  CardCvcElement: any;
}

const MicroForm: React.FC<props> = ({
  handleSubmit,
  formData,
  handleInputChange,
  validation,
  loading,
  error,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex sm:flex-row flex-col w-full">
        <div className="mb-4 sm:w-1/2 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
focus:outline-none focus:shadow-outline ${validation.firstName && 'border-red-500'}`}
            placeholder={`Your First Name`}
          />
        </div>
        <div className="mb-4 sm:w-1/2 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
        focus:outline-none focus:shadow-outline ${validation.lastName && 'border-red-500'}`}
            placeholder="Your Last Name"
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col w-full">
        <div className="mb-4 sm:w-1/2 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
        focus:outline-none focus:shadow-outline ${validation.email && 'border-red-500'}`}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4 sm:w-1/2 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
        focus:outline-none focus:shadow-outline ${validation.phoneNumber && 'border-red-500'}`}
            placeholder="Your Phone Number"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetAddress">
          Street Address
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleInputChange}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline ${validation.streetAddress && 'border-red-500'}`}
          placeholder="Your Street Address"
        />
      </div>
      <div className="flex sm:flex-row flex-col w-full">
        <div className="mb-4 sm:w-1/3 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
        focus:outline-none focus:shadow-outline ${validation.city && 'border-red-500'}`}
            placeholder="Your City"
          />
        </div>
        <div className="mb-4 sm:w-1/3 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
        focus:outline-none focus:shadow-outline ${validation.state && 'border-red-500'}`}
            placeholder="Your State"
          />
        </div>
        <div className="mb-4 sm:w-1/3 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
        focus:outline-none focus:shadow-outline ${validation.zipCode && 'border-red-500'}`}
            placeholder="Your Zip Code"
          />
        </div>
      </div>

      <div className="mb-4 sm:flex sm:flex-col">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card">
          Card Information
        </label>

        <div className="flex sm:flex-row flex-col gap-4">
          <CardNumberElement
            className={`sm:w-2/3 w-full rounded border ${
              validation.cardNumber ? 'border-red-500' : 'border-gray-300'
            } focus:border-blue-500 focus:ring focus:ring-blue-200 p-2`}
          />
          <div className="flex flex-row sm:w-1/3 w-full gap-4">
            <CardExpiryElement
              className={`w-full w-1/2 rounded border ${
                validation.cardExp ? 'border-red-500' : 'border-gray-300'
              } focus:border-blue-500 focus:ring focus:ring-blue-200 p-2`}
            />
            <CardCvcElement
              className={`w-full w-1/2 rounded border ${
                validation.cvc ? 'border-red-500' : 'border-gray-300'
              } focus:border-blue-500 focus:ring focus:ring-blue-200 p-2`}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay $40'}
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </form>
  );
};

export default MicroForm;
