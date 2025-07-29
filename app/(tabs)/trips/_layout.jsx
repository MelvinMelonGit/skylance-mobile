import { Stack } from 'expo-router';
import { color } from '../../../styles/color';
import { useAuth } from '../../context/AuthContext';

const screenOptions = {
  headerStyle: { backgroundColor: color.white },
  headerTintColor: color.primary,
  headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
  headerTitleAlign: 'center'
};

export default function LoginStackLayout() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack>
        <Stack.Screen name="index"
          options={{
            // title: 'Trips',
            headerTitle: 'Your Trips',
            headerStyle: screenOptions.headerStyle,
            headerTitleStyle: screenOptions.headerTitleStyle,
            headerTintColor: screenOptions.headerTintColor, 
            headerTitleAlign: screenOptions.headerTitleAlign
          }}
        />

      <Stack.Screen name="details"
        options={{
            // title: 'Register',
            headerTitle: 'Trip Details',
            headerStyle: screenOptions.headerStyle,
            headerTitleStyle: screenOptions.headerTitleStyle,
            headerTintColor: screenOptions.headerTintColor, 
            headerTitleAlign: screenOptions.headerTitleAlign 
          }}
      />
    </Stack> 
  );
}