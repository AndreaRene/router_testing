import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_AUTH_STATE = false; 

const AuthContext = createContext({
  isAuthenticated: INITIAL_AUTH_STATE,
  login: () => {},
  logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(INITIAL_AUTH_STATE);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const value = {
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
