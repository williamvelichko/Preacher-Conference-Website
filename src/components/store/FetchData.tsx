import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, collection } from 'firebase/firestore';

interface ConferenceData {
  name: string;
  date: string;
  venue: string;
}

interface FetchDataContext {
  conferenceData: ConferenceData | null;
  loading: boolean;
}

const FetchDataContext = createContext<FetchDataContext>({
  conferenceData: null,
  loading: true,
});

export const useFetchData = () => {
  return useContext(FetchDataContext);
};

interface FetchDataProviderProps {
  children: React.ReactNode;
}

export const FetchDataProvider: React.FC<FetchDataProviderProps> = ({ children }) => {
  const [conferenceData, setConferenceData] = useState<ConferenceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchConferenceData = async () => {
      try {
        // Fetch conference data from Firebase
        // Assuming 'conferences' is the collection and 'conferenceId' is the document ID
        // let conferenceRef = await collection(db, 'Conference_Information');
        // if (conferenceRef.exists()) {
        //   setConferenceData(conferenceRef.data() as ConferenceData);
        // } else {
        //   console.log('No conference data available');
        // }
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
