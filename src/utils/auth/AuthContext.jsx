import { createContext, useContext, useState } from 'react';

// Properly define INITIAL_AUTH_STATE at the top of the file
const INITIAL_AUTH_STATE = true; // Adjust this based on your default authentication state needs

const AuthContext = createContext({
  isAuthenticated: INITIAL_AUTH_STATE,  // Initialize with INITIAL_AUTH_STATE
  login: () => {},
  logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(INITIAL_AUTH_STATE);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    // Provide a stable shape of the context value, including function stubs for safety
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

// It's typically better to use named exports for hooks and components
export default { AuthProvider, useAuth };
