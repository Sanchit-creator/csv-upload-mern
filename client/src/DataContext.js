import { createContext, useEffect, useState } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('data');
    return storedData ? JSON.parse(storedData) : 'Default Value';
  });


  useEffect(() => {
    // Update the local storage when the data changes
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };