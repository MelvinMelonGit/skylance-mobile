import ButtonView from '@/components/ButtonView';
import FlightData from '@/components/FlightData';
import FlightInfographic from '@/components/FlightInfographic';
import FlightPathData from '@/components/FlightPathData';
import { H2 } from '@/components/HeadingsView';
import { useCheckedInFlights } from '@/context/CheckedInFlightsContext';
import { useSelectedFlight } from '@/context/SelectedFlightContext';
import { fetchFlightValidate } from '@/utils/fetchFlight';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const { id } = useLocalSearchParams()
  // const isOverbooked = overbooked === 'true'

  const router = useRouter()

  const { checkedInFlights } = useCheckedInFlights()

  const { currentFlight, currentBooking } = useSelectedFlight()
  const [checkIn, setCheckIn] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchAndSetFlight = async () => {
      try {
        const data = await fetchFlightValidate(`/Trip/${currentFlight.flightBookingDetailId}/checkin/validate`)
        setCheckIn(data)
      } catch (err) {
        setError(err.message)
      }
  }

  fetchAndSetFlight()
}, [])

  // if (error) {
  //   return <Text>Error: {error}</Text>
  // }

  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          <FlightInfographic currentBooking={currentBooking} />
          <H2>Booking #{currentBooking.bookingReferenceNumber}</H2>
          <FlightData flight={currentFlight} />
          <FlightPathData currentBooking={currentBooking} />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {/* <ButtonView
              onPress={() => {
                router.push(`/trips/${id}/manage-trip`)
              }}
              clear>Manage Trip</ButtonView> */}
            <ButtonView
              onPress={() => {
              if (checkIn.status === "Allowed")
                  router.push(`/trips/${id}/check-in`)
              else if (checkIn.status === "AlreadyCheckedIn")
                  router.push(`/boarding`)
              else
                  router.push(`/trips/${id}/pending`)
              }}>
              { checkIn.status === "AlreadyCheckedIn" ? 'View Boarding Pass' : 'Check In' }
            </ButtonView>
          </View>
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
  }
})