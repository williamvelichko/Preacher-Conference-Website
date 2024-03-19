import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, doc, getDoc } from 'firebase/firestore'; // Import necessary Firestore functions

interface props {
  formData: any;
}

const SuccessfullRegistration: React.FC<props> = ({ formData }) => {
  const [conferenceDetails, setConferenceDetails] = useState<any>(null);

  useEffect(() => {
    const fetchConferenceDetails = async () => {
      try {
        const conferenceRef = doc(db, 'conferences_Information'); // Create a reference to the conference document
        const conferenceSnapshot = await getDoc(conferenceRef); // Get the conference document
        if (conferenceSnapshot.exists()) {
          setConferenceDetails(conferenceSnapshot.data()); // Set the conference details state
        } else {
          console.log('No conference data available');
        }
      } catch (error) {
        console.error('Error fetching conference data:', error);
      }
    };

    fetchConferenceDetails();
  }, []);
  console.log(conferenceDetails);
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
          <strong>Event:</strong> FaithFull Steward Conference 2024
          <br />
          <strong>Date:</strong> April 13, 2024
          <br />
          <strong>Venue:</strong> Bible Babtist Church, Sacramento
        </p>
      </div>
    </div>
  );
};

export default SuccessfullRegistration;
