import { createContext, useContext } from 'react';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
