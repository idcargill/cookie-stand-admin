import Link from 'next/link';
import { useRouter } from 'next/router';

const OverviewButton = () => {
  const router = useRouter();
  return (
    <div className="self-center w-{200} rounded bg-emerald-50 active:bg-pink-300">
      <Link 
        href={router.asPath == '/overview' ? '/' : '/overview'}
        >
        <a className="text-sm p-2">{router.asPath == '/overview' ? 'Go back' : 'Overview'}</a>
      </Link>
    </div>
  )
}

const Header = ({ isLoggedIn, user, logout }) => {

  const SignOut = () => (
    <button 
      className="self-center rounded bg-emerald-50 p-1 active:bg-pink-300"
      onClick={logout}
      >
      {isLoggedIn ? 'Sign Out' : 'Sign In'}
    </button>
  );

  return (
    <div className="flex bg-emerald-500">
      <h1 className="p-4 text-2xl font-normal grow">
        Cookie Stand Admin
      </h1>

    <div className="flex basis-1/6 justify-between mr-12 text-sm">
        {isLoggedIn 
          ? <p className="bg-emerald-50 rounded p-1 self-center">{user?.username}</p>
          : null
        }
        {isLoggedIn ? <SignOut/> : null } 
        <OverviewButton />
      </div>
    </div>
  )
}

export default Header;
