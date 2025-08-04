import ButtonView from '@/components/ButtonView';
import { H1 } from '@/components/HeadingsView';
import { useAuth } from '@/context/AuthContext';
import { logoutUser } from '@/utils/AuthCheck';
import { useRouter } from 'expo-router';
import { useState } from 'react';

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
    <>
      <H1>Welcome { isLoggedIn && currentUser }!</H1>
      <ButtonView onPress={handleLogout}>Logout</ButtonView>
    </>
  )
}