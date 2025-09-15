import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const localData = getLocalStorage();
    if (localData) {
      const { employees = [], admins = [] } = localData;
      setUserData(employees);
    }
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
}; 

export default AuthProvider;
