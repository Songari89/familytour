import React, { createContext,useState } from 'react';

export const IdContext = createContext();

export default function IdProvider({children}) {
  const [id, setId] = useState();
  console.log(id)

  return (
    <IdContext.Provider value={{id, setId}}>
      {children}
    </IdContext.Provider>
  );
}

