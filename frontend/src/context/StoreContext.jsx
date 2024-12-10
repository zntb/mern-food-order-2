import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = props => {
  const url = 'http://localhost:5000';
  const [token, setToken] = useState('');

  const [food_list, setFoodList] = useState([]);
  console.log(food_list);

  const fetchFoodList = async () => {
    const response = await axios.get(url + '/api/food/list');
    setFoodList(response.data.data);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    url,
    token,
    food_list,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
