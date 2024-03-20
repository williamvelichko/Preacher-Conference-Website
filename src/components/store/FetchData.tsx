import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../../firebase';
import { doc, getDocs, collection } from 'firebase/firestore';

const FetchDataContext = createContext<any>(null);

export const useFetchData = () => {
  return useContext(FetchDataContext);
};

interface FetchDataProviderProps {
  children: React.ReactNode;
}

export const FetchDataProvider: React.FC<FetchDataProviderProps> = ({ children }) => {
  const [conferenceData, setConferenceData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchConferenceData = async () => {
      try {
        const conferenceCollectionRef = collection(db, 'Conference_Information');
        const querySnapshot = await getDocs(conferenceCollectionRef);

        if (!querySnapshot.empty) {
          const conferenceData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setConferenceData(conferenceData[0]);
        } else {
          console.log('No conference data available');
        }
      } catch (error) {
        console.error('Error fetching conference data:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or an error occurs
      }
    };

    fetchConferenceData();
  }, []);

  return <FetchDataContext.Provider value={{ conferenceData, loading }}>{children}</FetchDataContext.Provider>;
};
