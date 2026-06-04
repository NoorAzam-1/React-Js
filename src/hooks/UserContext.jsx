"use client";

import { createContext } from "react";
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {

  const name = "Noor Azam";

  return (
    <UserContext.Provider value={name}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;