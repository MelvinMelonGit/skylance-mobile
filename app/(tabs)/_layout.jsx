import { Tabs } from 'expo-router';
import { color } from '../../styles/color';

const screenOptions = {
  headerStyle: { backgroundColor: color.white },
  headerTintColor: color.primary,
  headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
  headerTitleAlign: 'center',
};

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="index"
          options={{
            title: 'Home',
            headerTitle: 'Hey There!',
            headerStyle: screenOptions.headerStyle,
            headerTitleStyle: screenOptions.headerTitleStyle,
            headerTintColor: screenOptions.headerTintColor, 
            headerTitleAlign: screenOptions.headerTitleAlign 
          }}
        />
        <Tabs.Screen name="trips"
          options={{
            title: 'Trips',
            headerTitle: 'Your Trips',
            headerStyle: screenOptions.headerStyle,
            headerTitleStyle: screenOptions.headerTitleStyle,
            headerTintColor: screenOptions.headerTintColor, 
            headerTitleAlign: screenOptions.headerTitleAlign 
          }}
        />
        {/* <Tabs.Screen name="otp" options={{ title: 'OTP', headerShown: false, href: null }}/> */}
        <Tabs.Screen name="login" options={{ title: 'Login', headerShown: false }} />
    </Tabs>
  );
}