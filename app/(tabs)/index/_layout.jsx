import { useAuth } from '@/context/AuthContext';
import { color } from '@/styles/color';
import { Stack } from 'expo-router';

const screenOptions = {
  headerStyle: { backgroundColor: color.white },
  headerTintColor: color.intermediate,
  headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
  headerTitleAlign: 'center'
}

export default function HomeStackLayout() {
  const { currentUser, isLoggedIn } = useAuth()

  return (
    <Stack screenOptions={screenOptions}>
        <Stack.Screen name="index"
          options={{
            // title: 'Home',
            headerTitle: `Hey ${ isLoggedIn ? currentUser : 'There' }!`,
            headerBackVisible: false
          }}
        />
    </Stack> 
  )
}