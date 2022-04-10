import { useState, useEffect } from 'react';
import { CreateForm, ReportTable } from '..'
import { objectEqual } from '../../../utils/objectEqual';
import { useUpdateSalesContext} from '../../../sharedComponents'
import { locationMapper, locationSales, locations } from '../../../data/fakeData';

const CookieStandAdmin = ({ mockData, isLoggedIn }) => {
  const [ location, setLocation ] = useState('Barcelona');
  const [ minCustomer, setMinCustomer] = useState(0);
  const [ maxCustomer, setMaxCustomer] = useState(0);
  const [ avgSales, setAvgSales ] = useState(0);

  const [ showTable, setShowTable ] = useState(false);
  const updateReports = useUpdateSalesContext();
  const staticSales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
  const [ hourlySales, setHourlySales ] = useState(staticSales)

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'location':
        setLocation(e.target.value);
        const lowerCheck = e.target.value.toLowerCase();
        if (locationSales[lowerCheck]) {
          setHourlySales(locationSales[lowerCheck])
        }
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
    
    const blankForm = {
      location: 'Barcelona',
      minCustomer: 0,
      maxCustomer: 0,
      avgSales: 0,
      hourlySales: hourlySales,
    }

    let updatedForm = {
      location: location,
      minCustomer: minCustomer,
      maxCustomer: maxCustomer,
      avgSales: avgSales,
      hourlySales: hourlySales,
    }

    const locationCheck = location.toLowerCase();

    if (!objectEqual(updatedForm, blankForm)) {
      if (locationSales[locationCheck]) {
        updateReports(updatedForm)
      } else {
        updateReports(updatedForm);
      }
      setShowTable(true);
    }

    setLocation('Barcelona');
    setMinCustomer(0);
    setMaxCustomer(0);
    setAvgSales(0);
    setHourlySales(staticSales);
    e.target.reset();
  };

  return (
    <main className="mx-60 mt-8 h-full">
    <CreateForm 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
    <ReportTable 
      mockData={mockData}
      isLoggedIn={isLoggedIn}
      showTable={showTable}
    />
  </main>
  )
}

export default CookieStandAdmin;
