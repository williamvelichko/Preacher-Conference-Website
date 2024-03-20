import React from 'react';
import { useFetchData } from '../store/FetchData';

interface props {
  formData: any;
}

const SuccessfullRegistration: React.FC<props> = ({ formData }) => {
  const { conferenceData } = useFetchData();

  return (
    <div className="text-center mt-12 ">
      <h2 className="sm:text-4xl text-2xl font-bold text-blue-900 mb-4">Registration Confirmed</h2>
      <p className="sm:text-lg text-md text-gray-700 mb-6">
        Dear {formData.firstName} {formData.lastName}
      </p>
      <p className="text-base text-gray-700 mb-6 ">
        Thank you for registering for the FaithFull Steward Conference.
        <br />
        We're thrilled to have you join us.
      </p>
      <div className="text-left border border-gray-200 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Your Conference Details:</h3>
        <p className=" text-sm text-gray-700">
          <strong>Event:</strong> FaithFull Steward Conference {conferenceData.Year}
          <br />
          <strong>Date:</strong> {conferenceData.Date}
          <br />
          <strong>Venue:</strong> {conferenceData.Venue}
        </p>
      </div>
    </div>
  );
};

export default SuccessfullRegistration;
