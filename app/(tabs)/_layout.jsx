import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { color } from '../../styles/color';
import { useAuth } from '../context/AuthContext';

const screenOptions = {
  headerStyle: { backgroundColor: color.white },
  headerTintColor: color.primary,
  headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
  headerTitleAlign: 'center',
};

export default function TabLayout() {
  const { isLoggedIn } = useAuth();

  return (
      <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: color.primary,     
        tabBarInactiveTintColor: '#8e8e93',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'trips') iconName = 'airplane';
          else if (route.name === 'boarding') iconName = 'ticket';
          else if (route.name === 'login' && isLoggedIn) iconName = 'person-circle-sharp';
          else if (route.name === 'login' && !isLoggedIn) iconName = 'person';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      >
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
            options={{ title: 'Trips', headerShown: false }}
        />
        {/* <Tabs.Screen name="otp" options={{ title: 'OTP', headerShown: false, href: null }}/> */}
        <Tabs.Screen name="boarding"
          options={{
            title: 'Boarding Pass',
            headerTitle: 'Boarding Pass',
            headerStyle: screenOptions.headerStyle,
            headerTitleStyle: screenOptions.headerTitleStyle,
            headerTintColor: screenOptions.headerTintColor, 
            headerTitleAlign: screenOptions.headerTitleAlign 
          }}
         />
         {isLoggedIn ? (
            <Tabs.Screen name="login"
            options={{ title: 'Account', headerShown: false }}
          />
         ) : (
            <Tabs.Screen name="login"
            options={{ title: 'Login', headerShown: false }}
          />
         )}
    </Tabs>
  );
}