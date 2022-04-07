import '../styles/globals.css'
import { HeadComp } from '../sharedComponents';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <HeadComp />
      <Component {...pageProps} />  
    </div>
  )
}

export default MyApp
