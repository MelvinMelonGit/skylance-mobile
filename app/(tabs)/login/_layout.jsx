import { Stack } from 'expo-router';
import { useAuth } from '../../../context/AuthContext';
import { color } from '../../../styles/color';

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
      {isLoggedIn ?
        (
          <Stack.Screen name="index"
            options={{
                // title: 'Logout',
                headerTitle: 'Account',
                headerStyle: screenOptions.headerStyle,
                headerTitleStyle: screenOptions.headerTitleStyle,
                headerTintColor: screenOptions.headerTintColor, 
                headerTitleAlign: screenOptions.headerTitleAlign,
                headerBackVisible: false
              }}
          />
        ):
        (
          <Stack.Screen name="index"
            options={{
                // title: 'Login',
                headerTitle: 'Login',
                headerStyle: screenOptions.headerStyle,
                headerTitleStyle: screenOptions.headerTitleStyle,
                headerTintColor: screenOptions.headerTintColor, 
                headerTitleAlign: screenOptions.headerTitleAlign,
                headerBackVisible: false
              }}
          />
        )
      }
      <Stack.Screen name="register"
        options={{
            // title: 'Register',
            headerTitle: 'Register',
            headerStyle: screenOptions.headerStyle,
            headerTitleStyle: screenOptions.headerTitleStyle,
            headerTintColor: screenOptions.headerTintColor, 
            headerTitleAlign: screenOptions.headerTitleAlign 
          }}
      />
    </Stack> 
  );
}