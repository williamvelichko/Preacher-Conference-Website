import React, { useState } from 'react';
import StripeContainer from '../StripeContainer';
import TitleComponent from '../smaller-components/TitleComponent';

const RegistrationPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full">
      <TitleComponent title={'Registration'} />
      <div className="flex rounded px-8 pt-6 pb-8 mb-4 w-full h-full border justify-center">
        <div className="flex flex-col md:w-9/12 justify-center w-full h-full">
          <StripeContainer />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
