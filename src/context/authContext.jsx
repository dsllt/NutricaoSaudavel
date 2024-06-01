import { React, createContext, useState } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authObj = {
    isAuthenticated,
    setIsAuthenticated,
    };

  return <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>;
}
