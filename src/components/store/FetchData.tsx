import React, { createContext, useContext, useState, useEffect } from 'react';
// import { db } from '../../firebase';
// import { getDocs, collection } from 'firebase/firestore';

interface ConferenceData {
  Address: string;
  Date: string;
  PhoneNumber: string;
  Price: number;
  Title: string;
  Venue: string;
  Year: string;
}
const FetchDataContext = createContext<any>(null);

export const useFetchData = () => {
  return useContext(FetchDataContext);
};

interface FetchDataProviderProps {
  children: React.ReactNode;
}

export const FetchDataProvider: React.FC<FetchDataProviderProps> = ({ children }) => {
  const [conferenceData, setConferenceData] = useState<ConferenceData>({
    Address: '7635 Auburn Blvd, Citrus Heights, CA 95610',
    Date: 'June 29. 2024',
    PhoneNumber: '(916) 825-3828',
    Price: 40,
    Title: 'Faithful Preaching',
    Venue: 'Bible Babtist Church, Sacramento',
    Year: '2024',
  });
  const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   const fetchConferenceData = async () => {
  //     try {
  //       const conferenceCollectionRef = collection(db, 'Conference_Information');
  //       const querySnapshot = await getDocs(conferenceCollectionRef);

  //       if (!querySnapshot.empty) {
  //         const [firstDocument] = querySnapshot.docs;
  //         const conferenceDataFromFirestore = firstDocument.data() as ConferenceData;
  //         setConferenceData(conferenceDataFromFirestore);
  //       } else {
  //         console.log('No conference data available');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching conference data:', error);
  //     } finally {
  //       setLoading(false); // Set loading to false once data is fetched or an error occurs
  //     }
  //   };

  //   fetchConferenceData();
  // }, []);

  return <FetchDataContext.Provider value={{ conferenceData, loading }}>{children}</FetchDataContext.Provider>;
};
