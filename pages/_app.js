import '../styles/globals.css'
import { HtmlHead, ThemeProvider } from '../sharedComponents';

function MyApp({ Component, pageProps }) {
  
  return (
    <div className="bg-emerald-100 min-h-screen">
      <ThemeProvider>
        <HtmlHead />
        <Component {...pageProps} />  
      </ThemeProvider>
    </div>
  )
}

export default MyApp
