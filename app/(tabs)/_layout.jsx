import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false }} />
        <Tabs.Screen name="register" options={{ title: 'Register', headerShown: false }} />
        <Tabs.Screen name="otp" options={{ title: 'OTP', headerShown: false, href: null }}/>
        <Tabs.Screen name="login" options={{ title: 'Login', headerShown: false }}/>
    </Tabs>
  );
}