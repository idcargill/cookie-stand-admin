import { LogInForm } from '../../sharedComponents';
import { CookieStandAdmin } from './components';

const Main = ({ data, isLoggedIn, updateStoreCount }) => {
  return (
    <>
    {isLoggedIn 
        ? <CookieStandAdmin 
            data={data}
            isLoggedIn={isLoggedIn}
            updateStoreCount={updateStoreCount}
          />
        : <LogInForm />
    }
    </>
  )
}

export default Main;
