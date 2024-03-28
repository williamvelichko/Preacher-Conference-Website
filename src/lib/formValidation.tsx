// import { useState, useEffect } from 'react';

// const useFormValidation = (
//   formData: any,
//   setError: any,
//   setLoading: any,
//   setValidation: any,
//   cardElement: any,
//   cardExp: any,
//   cardCvc: any,
// ) => {
//   const [isEmpty, setIsEmpty] = useState({
//     cardNumber: false,
//     cardExp: false,
//     cvc: false,
//   });

//   const validateElement = (element: any, isEmpty: any, type: any) => {
//     if (element) {
//       element.on('change', (event: any) => {
//         const { empty } = event;
//         setIsEmpty((prev) => ({ ...prev, [type]: empty }));
//       });
//     }
//   };

//   useEffect(() => {
//     validateElement(cardElement, isEmpty, 'cardNumber');
//     validateElement(cardExp, isEmpty, 'cardExp');
//     validateElement(cardCvc, isEmpty, 'cvc');
//   }, [cardElement, cardExp, cardCvc, isEmpty]);

//   const { firstName, lastName, email, phoneNumber, streetAddress, city, state, zipCode } = formData;

//   if (
//     !firstName.trim() ||
//     !lastName.trim() ||
//     !email.trim() ||
//     !phoneNumber.trim() ||
//     !streetAddress.trim() ||
//     !city.trim() ||
//     !state.trim() ||
//     !zipCode.trim() ||
//     isEmpty.cardNumber ||
//     isEmpty.cardExp ||
//     isEmpty.cvc
//   ) {
//     setError('All fields are required');
//     setLoading(false);
//     setValidation((prev: any) => ({
//       ...prev,
//       firstName: !firstName.trim(),
//       lastName: !lastName.trim(),
//       email: !email.trim(),
//       phoneNumber: !phoneNumber.trim(),
//       streetAddress: !streetAddress.trim(),
//       city: !city.trim(),
//       state: !state.trim(),
//       zipCode: !zipCode.trim(),
//       cardNumber: isEmpty.cardNumber,
//       cardExp: isEmpty.cardExp,
//       cvc: isEmpty.cvc,
//     }));
//     return;
//   }

//   return;
// };

// export default useFormValidation;
