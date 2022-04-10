import Link from 'next/link';

const RouteMap = [
  ['Home', '/'],
  ['Overview', '/overview'],
]

const NavBar = () => (
  <div className="flex">
    {RouteMap.map((i, idx) => (
      <Link href={i[1]} key={idx+i[0]}>{i[0]}</Link>
    ))}
  </div>
)

export default NavBar;
