import ButtonView from '@/components/ButtonView';
import { H1 } from '@/components/HeadingsView';
import { useAuth } from '@/context/AuthContext';
import { logoutUser } from '@/utils/logoutUser';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Account() {
  const { currentUser, isLoggedIn, logout } = useAuth()

  const [error, setError] = useState('')

  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logoutUser()
      logout()
      router.push('/')
    } catch (err) {
      setError(err.message)
      Alert.alert('Logout Error', err.message)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
        <H1>Welcome { isLoggedIn && currentUser }!</H1>
        <ButtonView onPress={handleLogout}>Logout</ButtonView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})