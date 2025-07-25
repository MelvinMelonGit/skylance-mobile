import { Stack } from 'expo-router';

export default function LoginStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
    </Stack> 
  );
}