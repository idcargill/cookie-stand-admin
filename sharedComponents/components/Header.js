import Link from 'next/link';
import { useRouter } from 'next/router';


const LogInButton = ({ isLoggedIn, toggleLogin }) => (
  <button 
    className="self-center rounded bg-emerald-50 mr-12 p-2 active:bg-pink-300"
    onClick={toggleLogin}
    >
    {isLoggedIn ? 'Log Out' : 'Log In'}
  </button>
);

const OverviewButton = () => {
  const router = useRouter();

  return (
    <div className="self-center w-{200} rounded bg-emerald-50 mr-12 active:bg-pink-300">
      <Link 
        href={router.asPath == '/overview' ? '/' : '/overview'}
        >
        <a className="text-sm p-2">{router.asPath == '/overview' ? 'Go back' : 'Overview'}</a>
      </Link>
    </div>
  )
}

const Header = ({ isLoggedIn, toggleLogin }) => {

  return (
    <div className="flex bg-emerald-500">
      <h1 className="p-4 text-2xl font-normal grow">
        Cookie Stand Admin
      </h1>

      <OverviewButton />
        {/* <LogInButton 
        toggleLogin={toggleLogin}
        isLoggedIn={isLoggedIn}
      />  */}
    </div>
  )
}

export default Header;
