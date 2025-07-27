import { Ionicons } from '@expo/vector-icons';
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

          if (route.name === 'trips') iconName = 'home';
          else if (route.name === 'login') iconName = 'person';

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