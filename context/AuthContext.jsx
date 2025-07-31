import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const login = () =>  {
    setIsLoggedIn(true) 
    setCurrentUser('Chan Meng Tuck')
  }
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ currentUser, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}