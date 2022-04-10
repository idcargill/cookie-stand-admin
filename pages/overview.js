import { Header, useUpdateUserContext, useUserContext } from '../sharedComponents'
import { DescriptionText } from '../sections/Overview/DescriptionText';

const Overview = () => {

  const toggleLogin = useUpdateUserContext();
  const isLoggedIn = useUserContext();

  return (
    <>
    <Header 
      isLoggedIn={isLoggedIn}
      toggleLogin={toggleLogin}  
    />
    <div className="container p-5 m-auto">
      <div className="text-center mt-6" >
        <DescriptionText />
      </div>
    </div>
    </>
  )
}

export default Overview;
