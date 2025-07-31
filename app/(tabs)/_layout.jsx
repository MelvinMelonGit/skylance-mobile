import { useAuth } from '@/context/AuthContext';
import { color } from '@/styles/color';
import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';

const screenOptions = {
  headerStyle: { backgroundColor: color.white },
  headerTintColor: color.primary,
  headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
  headerTitleAlign: 'center',
}

export default function TabLayout() {
  const { currentUser, isLoggedIn } = useAuth()
  const router = useRouter()

  return (
      <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: color.primary,     
        tabBarInactiveTintColor: color.gray,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home'

          if (route.name === 'trips') iconName = 'airplane'
          else if (route.name === 'boarding') iconName = 'ticket'
          else if (route.name === 'login' && isLoggedIn) iconName = 'person-circle-sharp'
          else if (route.name === 'login' && !isLoggedIn) iconName = 'person'

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      >
        <Tabs.Screen name="index"
          options={{
            title: 'Home',
            headerTitle: `Hey ${ isLoggedIn ? currentUser : 'There' }!`,
            headerStyle: screenOptions.headerStyle,
            headerTitleStyle: screenOptions.headerTitleStyle,
            headerTintColor: screenOptions.headerTintColor, 
            headerTitleAlign: screenOptions.headerTitleAlign ,
            headerBackVisible: false, // <-- hide back button
          }}
          listeners={{
              tabPress: (e) => {
              e.preventDefault() // Prevent default tab behavior
              router.push('/') // Always go to /login/index
            },
          }}
        />
        <Tabs.Screen name="trips"
            options={{ title: 'Trips', headerShown: false }}
            listeners={{
              tabPress: (e) => {
              e.preventDefault() // Prevent default tab behavior
              router.push('/trips') // Always go to /login/index
            },
          }}
        />
        {/* <Tabs.Screen name="otp" options={{ title: 'OTP', headerShown: false, href: null }}/> */}
        <Tabs.Screen name="boarding"
          options={{
            title: 'Boarding Pass',
            headerTitle: 'Boarding Pass',
            headerStyle: screenOptions.headerStyle,
            headerTitleStyle: screenOptions.headerTitleStyle,
            headerTintColor: screenOptions.headerTintColor, 
            headerTitleAlign: screenOptions.headerTitleAlign ,
            headerBackVisible: false, // <-- hide back button
          }}
          listeners={{
              tabPress: (e) => {
              e.preventDefault() // Prevent default tab behavior
              router.push('/boarding') // Always go to /login/index
            },
          }}
         />
         <Tabs.Screen
            name="login"
            options={{
              title: isLoggedIn ? 'Account' : 'Login',
              headerShown: false,
            }}
            listeners={{
              tabPress: (e) => {
              e.preventDefault() // Prevent default tab behavior
              router.push('/login') // Always go to /login/index
            },
        }}
      />
    </Tabs>
  )
}