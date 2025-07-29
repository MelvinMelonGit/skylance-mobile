import { Stack } from 'expo-router';
import { color } from '../../../styles/color';

const screenOptions = {
  headerStyle: { backgroundColor: color.white },
  headerTintColor: color.primary,
  headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
  headerTitleAlign: 'center'
};

export default function LoginStackLayout() {
  return (
    <Stack screenOptions={screenOptions}>
        <Stack.Screen name="index"
          options={{
            // title: 'Trips',
            headerTitle: 'Your Trips',
            headerBackVisible: false
          }}
        />

      <Stack.Screen name="details"
        options={{
            headerShown: false,
          }}
      />
    </Stack> 
  );
}