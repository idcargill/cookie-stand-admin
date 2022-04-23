import { useState, useEffect } from 'react';
import { data } from '../utils/data/fakeData';
import { useAuth, useResource } from '../sharedComponents/auth';

import  Main from '../sections/Main/Main';
import { 
  Header,
  Footer
 } from '../sharedComponents';


export async function getStaticProps() {
  const fakeData = data;

  return {
    props: {
      fakeData,
    }
  }
}

export default function Home(pageProps) {
  const { user, tokens, logout } = useAuth();
  const { resource }  = useResource();

  const [ storeCount, setStoreCount ] = useState(0)
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const updateStoreCount = (num) => {
    setStoreCount(num);
  };

  useEffect(() => {
    if (user && tokens.access) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user, tokens])

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Header 
        user={user}
        logout={logout}
        isLoggedIn={isLoggedIn}
      />
      <Main
        isLoggedIn={isLoggedIn}
        data={resource}
        updateStoreCount={updateStoreCount}
      />
      <Footer 
        storeCount={storeCount}
      />
    </div>
  )
}
