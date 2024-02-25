import React, { createContext,useEffect,useState } from 'react';
import {useLocation} from 'react-router-dom';

export const IdContext = createContext();

const family = {
  grandparents: "할아버지, 할머니",
  parents: "아빠, 엄마",
  aunt: "이모",
  uncle: "삼촌",
};

export default function IdProvider({children}) {
  const [id, setId] = useState();
  const strId = family[id]
  const location = useLocation();
  const pathname = location.pathname;
  
  useEffect(() => {
    if(pathname === '/'){
      setId(null);
    }
  },[id, pathname])



  return (
    <IdContext.Provider value={{id, setId, strId}}>
      {children}
    </IdContext.Provider>
  );
}

