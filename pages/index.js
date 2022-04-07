import { Header, Footer } from '../sharedComponents';
import MainContent from '../sections/HomePage/HomePageContent';
 
export default function Home() {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
