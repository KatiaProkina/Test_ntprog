import React, { useState } from "react";
export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(null);

  return (
    <AuthContext.Provider value={{ newUser, setNewUser }}>
      {children}
    </AuthContext.Provider>
  );
};
