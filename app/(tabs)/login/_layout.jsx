import { Stack } from 'expo-router';

export default function LoginStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login'}}/>
      <Stack.Screen name="register" options={{ title: 'Register'}}/>
      <Stack.Screen name="otp" options={{ title: 'OTP'}}/>
    </Stack> 
  );
}