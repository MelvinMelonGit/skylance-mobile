import Constants from 'expo-constants';

export async function fetchData(path) {
    const { apiUrl } = Constants.expoConfig.extra

    try {
        const response = await fetch(`${apiUrl}/${path}`)

        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Fetch failed:', error.message)
        throw error
    }
}