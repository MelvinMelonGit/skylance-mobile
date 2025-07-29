import { useNavigationContainerRef } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { useEffect, useRef } from 'react';
import AuthProvider from "./context/AuthContext";

export default function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  useEffect(() => {
    const unsubscribe = navigationRef.addListener('state', () => {
      const currentRoute = navigationRef.getCurrentRoute()?.name;
      routeNameRef.current = currentRoute;
    });

    return unsubscribe;
  }, [navigationRef]);

  return (
    // <Stack>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    // </Stack>
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}