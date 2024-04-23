import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// Set this to true or false as needed for testing
const INITIAL_AUTH_STATE = false;

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(INITIAL_AUTH_STATE);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
