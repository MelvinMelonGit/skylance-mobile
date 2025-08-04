import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

export async function logoutUser() {
  const { apiUrl } = Constants.expoConfig.extra
  const token = await SecureStore.getItemAsync('authToken')

  if (!token) {
    console.warn('No auth token found to logout')
    return
  }

  try {
    const response = await fetch(`${apiUrl}/api/Auth/logout`, {
      method: 'POST',
      headers: {
        'Session-Token': token,
      },
    })

    if (!response.ok) {
      throw new Error(`Logout failed! status: ${response.status}`)
    }

    await SecureStore.deleteItemAsync('authToken')
    console.log('Logout successful')
  } catch (error) {
    console.error('Logout failed:', error.message)
    throw error
  }
}
