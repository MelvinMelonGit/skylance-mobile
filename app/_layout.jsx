import AuthProvider from "@/context/AuthContext";
import CheckedInFlightsProvider from "@/context/CheckedInFlightsContext";
import SelectedFlightProvider from "@/context/SelectedFlightContext";
import { useNavigationContainerRef } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { useEffect, useRef } from 'react';

export default function RootLayout() {
  const navigationRef = useNavigationContainerRef()
  const routeNameRef = useRef()

  useEffect(() => {
    const unsubscribe = navigationRef.addListener('state', () => {
      const currentRoute = navigationRef.getCurrentRoute()?.name
      routeNameRef.current = currentRoute
    })

    return unsubscribe
  }, [navigationRef])

  return (
    // <Stack>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    // </Stack>
    <AuthProvider>
      <CheckedInFlightsProvider>
        <SelectedFlightProvider>
          <Slot />
        </SelectedFlightProvider>
      </CheckedInFlightsProvider>
    </AuthProvider>
  )
}