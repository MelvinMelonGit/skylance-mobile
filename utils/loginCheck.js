import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

export async function loginCheck(email, password) {
    const { apiUrl } = Constants.expoConfig.extra

    try {
        const response = await fetch(`${apiUrl}/api/Auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password }),
        })

        if (!response.ok) {
            throw new Error(`Login failed! status: ${response.status}`)
        }

        const data = await response.json()
        await SecureStore.setItemAsync('authToken', data.token)
        console.log(data)
        return data.token
    } catch (error) {
        console.error('Login failed:', error.message)
        throw error
    }
}