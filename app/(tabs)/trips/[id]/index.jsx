import ButtonView from '@/components/ButtonView';
import FlightData from '@/components/FlightData';
import FlightPathData from '@/components/FlightPathData';
import { H2 } from '@/components/HeadingsView';
import { useCheckedInFlights } from '@/context/CheckedInFlightsContext';
import { useSelectedFlight } from '@/context/SelectedFlightContext';
import { fetchFlight } from '@/utils/fetchFlight';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlightInfographic from '../../../../components/FlightInfographic';

export default function Index() {
  const { id } = useLocalSearchParams()
  // const isOverbooked = overbooked === 'true'

  const router = useRouter()

  const { checkedInFlights } = useCheckedInFlights()

  const { currentFlight, setCurrentFlight } = useSelectedFlight()
  const [error, setError] = useState('')

  useEffect(() => {
  const fetchAndSetFlight = async () => {
    try {
      const data = await fetchFlight(`/Trip/${currentFlight.flightBookingDetailId}`)
      setCurrentFlight(data)
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
          <FlightInfographic currentFlight={currentFlight} />
          <H2>Booking #{currentFlight.bookingReferenceNumber}</H2>
          <FlightData id={id} />
          <FlightPathData currentFlight={currentFlight} />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <ButtonView
              onPress={() => {
                router.push(`/trips/${id}/manage-trip`)
              }}
              clear>Manage Trip</ButtonView>
            <ButtonView
              onPress={() => {
                // if (isOverbooked) 
                //   router.push(`/trips/${id}/pending`)
                // else
                if (checkedInFlights.includes(id))
                  router.push(`/boarding`)
                else {  
                  router.push(`/trips/${id}/check-in`)
                } 
              }}>
              { checkedInFlights.includes(id) ? 'View Boarding Pass' : 'Check In' }
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