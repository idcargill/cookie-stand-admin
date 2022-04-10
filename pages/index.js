import { useState } from 'react';
import { CookieStandAdmin as MainContent } from '../sections/HomePage';
import getMockData from '../utils/getMockData';
import { 
  Header, 
  Footer,
  useUserContext,
  useUpdateUserContext } from '../sharedComponents';

import { data } from '../data/fakeData';

export async function getStaticProps() {
  const mockData = getMockData();
  const fakeData = data;

  return {
    props: {
      mockData,
      fakeData,
    }
  }
}

export default function CookieStandAdmin(pageProps) {
  const [ isData, setIsData ] = useState(false);
  const [ storeCount, setStoreCount ] = useState(0)

  const isLoggedIn = useUserContext();
  const toggleLoggedIn = useUpdateUserContext();

  const updateStoreCount = (num) => {
    setStoreCount(num);
  }

  const toggleData = () => {
    setIsData(!isData);
  }

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Header 
        toggleLogin={toggleLoggedIn}
        isLoggedIn={isLoggedIn}
      />
      <MainContent 
        mockData={pageProps?.fakeData}
        isLoggedIn={isLoggedIn}
        updateStoreCount={updateStoreCount}
      />
      <Footer 
        storeCount={storeCount}
      />
    </div>
  )
}
