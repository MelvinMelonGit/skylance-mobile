// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext(null);

// export default function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = () => setIsLoggedIn(true);
//   const logout = () => setIsLoggedIn(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error('useAuth must be used within AuthProvider');
//   return context;
// }

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load login state from AsyncStorage on mount
  useEffect(() => {
    const loadLoginState = async () => {
      try {
        const stored = await AsyncStorage.getItem('isLoggedIn');
        if (stored === 'true') setIsLoggedIn(true);
      } catch (err) {
        console.error('Error loading login state:', err);
      } finally {
        setLoading(false);
      }
    };
    loadLoginState();
  }, []);

  const login = async () => {
    try {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    } catch (err) {
      console.error('Error saving login state:', err);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    } catch (err) {
      console.error('Error clearing login state:', err);
    }
  };

  if (loading) return null; // or a loading screen

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}