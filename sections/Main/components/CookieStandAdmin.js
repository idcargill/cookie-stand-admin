import { useState } from 'react';
import { CreateForm, ReportTable } from '.'
import { objectEqual } from '../../../utils/objectEqual';
import { useUpdateSalesContext} from '../../../sharedComponents'
import {locationSales } from '../../../utils/data/fakeData';
import useResource from '../../../sharedComponents/auth/useResource';
import { useAuth } from '../../../sharedComponents/auth/auth';

const CookieStandAdmin = ({ data, isLoggedIn }) => {
  const [ location, setLocation ] = useState('');
  const [ minCustomer, setMinCustomer] = useState(0);
  const [ maxCustomer, setMaxCustomer] = useState(0);
  const [ avgSales, setAvgSales ] = useState(0);

  const [ showTable, setShowTable ] = useState(false);
  const updateReports = useUpdateSalesContext();
  const staticSales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
  const [ hourlySales, setHourlySales ] = useState(staticSales)
  
  const { createResource, deleteResource, updateResource, error, loading, resources } = useResource();
  const { user } = useAuth();


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

  const handleDelete = async (id) => {
    deleteResource(id)
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const blankForm = {
      location: '',
      minCustomer: 0,
      maxCustomer: 0,
      avgSales: 0,
      hourlySales: hourlySales,
    }

    const updatedForm = {
      name: user?.username,
      location: location,
      description: '',
      hourly_sales: hourlySales,
      minimum_customers_per_hour: minCustomer,
      maximum_customers_per_hour: maxCustomer,
      average_cookies_per_sale: avgSales,
    }

    const locationCheck = location.toLowerCase();

    try {
      if (!objectEqual(updatedForm, blankForm)) {
        await createResource(updatedForm)

        if (locationSales[locationCheck]) {
          updateReports(updatedForm)
        } else {
          updateReports(updatedForm);
        }
        setShowTable(true);
      }
    } catch(e) {
      console.warn(e.message);
    }

    setLocation('');
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
      reports={data}
      showTable={showTable}
      handleDelete={handleDelete}
    />
  </main>
  )
}

export default CookieStandAdmin;
