import { useState } from 'react';
import { CookieForm, JsonTable } from './components'

const MainContent = () => {
  const [ location, setLocation ] = useState('Barcelona');
  const [ minCustomer, setMinCustomer] = useState(0);
  const [ maxCustomer, setMaxCustomer] = useState(0);
  const [ avgSales, setAvgSales ] = useState(0);
  const [ lastSubmission, setLastSubmission ] = useState({})

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'location':
        setLocation(e.target.value);
        break;
      case 'minCustomer':
        setMinCustomer(Number(e.target.value));
        break;
      case 'maxCustomer':
        setMaxCustomer(Number(e.target.value));
        break;
      case 'avgSales':
        setAvgSales(Number(e.target.value));
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const updatedForm = {
      location: location,
      minCustomer: minCustomer,
      maxCustomer: maxCustomer,
      avgSales: avgSales,
    }
    console.log(updatedForm)
    setLastSubmission(updatedForm);
    e.target.reset()
  };

  return (
    <main className="mx-60 mt-8 h-full">
    <CookieForm 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
    <JsonTable
      location={lastSubmission?.location}
      min={lastSubmission?.minCustomer}
      max={lastSubmission?.maxCustomer}
      avg={lastSubmission?.avgSales}
    />
  </main>
  )
}

export default MainContent;
