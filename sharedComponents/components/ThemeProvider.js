import React, { useContext, useState } from 'react';

const UserContext = React.createContext();
const UpdateUserContext = React.createContext();

const SalesRecordContext = React.createContext();
const UpdateSalesContext = React.createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function useUpdateUserContext() {
  return useContext(UpdateUserContext);
}

export function useSalesContext() {
  return useContext(SalesRecordContext);
}

export function useUpdateSalesContext() {
  return useContext(UpdateSalesContext);
}

const ThemeProvider = ({ children }) => {
  const [ isLoggedIn, setLoggedIn ] = useState(false);
  const [ reports, setReports ] = useState([])

  function toggleLogin() {
    setLoggedIn(!isLoggedIn)
  }

  function updateReports(data) {
    setReports([...reports, data]);
  }

  return (
    <UserContext.Provider value={isLoggedIn}>
      <UpdateUserContext.Provider value={toggleLogin}>
        <SalesRecordContext.Provider value={reports}>
          <UpdateSalesContext.Provider value={updateReports}>
            {children}
          </UpdateSalesContext.Provider>
        </SalesRecordContext.Provider>
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  )
}

export default ThemeProvider;
