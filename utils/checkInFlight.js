import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

export async function checkInFlight(path) {
    const { apiUrl } = Constants.expoConfig.extra
    const token = await SecureStore.getItemAsync('authToken')

    try {
        const response = await fetch(`${apiUrl}${path}`, {
            method: 'POST',
            // headers: { 
            //     'Content-Type': 'application/json', 
            //     'Session-Token': token 
            // },
        })

        if (!response.ok) {
            throw new Error(`Check In failed! status: ${response.status}`)
        }

        const data = await response.text()
        console.log(data)
        return data
    } catch (error) {
        console.error('Check In failed:', error.message)
        throw error
    }
}

export async function rebookingCheckInFlight(path) {
    const { apiUrl } = Constants.expoConfig.extra
    const token = await SecureStore.getItemAsync('authToken')

    try {
        const response = await fetch(`${apiUrl}${path}`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                'Session-Token': token 
            },
            body: JSON.stringify({
                appUserId,
                flightDetailId,
                baggageAllowance,
                seatNumber,
                requireSpecialAssistance,
                fareamount,
                checkInTime,
                boardingTime,
                gate,
                terminal,
                isOverbooking,
                overbookingDetailId,
                finalCompensationAmount
            }),
        })

        if (!response.ok) {
            throw new Error(`Check In failed! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Check In failed:', error.message)
        throw error
    }
}