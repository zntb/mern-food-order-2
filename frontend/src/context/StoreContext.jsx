import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = props => {
  const url = 'http://localhost:5000';
  const [token, setToken] = useState('');

  const contextValue = {
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
