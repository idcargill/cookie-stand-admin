import '../styles/globals.css'
import { HtmlHead, ThemeProvider } from '../sharedComponents';
import { AuthProvider } from '../sharedComponents/auth/auth';

function MyApp({ Component, pageProps }) {
  
  return (
    <div className="bg-emerald-100 min-h-screen">
      <AuthProvider >
        <ThemeProvider>
          <HtmlHead />
          <Component {...pageProps} />  
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default MyApp
