import { CookieForm, JsonTable} from './index'

const MainContent = () => {

  return (
    <main>
    <CookieForm />
    <JsonTable 
      location="Seattle"
      min={0}
      max={0}
      avg={0}
    />
  </main>
  )
}

export default MainContent;
