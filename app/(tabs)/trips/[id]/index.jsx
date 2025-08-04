import ButtonView from '@/components/ButtonView';
import FlightData from '@/components/FlightData';
import FlightPathData from '@/components/FlightPathData';
import { useCheckedInFlights } from '@/context/CheckedInFlightsContext';
import { useSelectedFlight } from '@/context/SelectedFlightContext';
import { color } from '@/styles/color';
import { fetchFlight } from '@/utils/fetchFlight';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
          <View style={styles.infographic}>
            <View style={styles.infoView}>
              <Text style={styles.text}>{currentFlight.originAirportCode}</Text>
              <Text style={styles.textSmall}>{currentFlight.originAirportName}</Text>
            </View>
            <View style={styles.flightPathContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='airplane-outline' size={30} color={color.gray} />
              <Text style={styles.flightPath}> - - - - - - - - - - -</Text>
              </View>
              <Text style={{ color: color.gray}}>{currentFlight.flightDuration}</Text>
            </View>
            <View style={styles.infoView}>
              <Text style={styles.text}>{currentFlight.destinationAirportCode}</Text>
              <Text style={styles.textSmall}>{currentFlight.destinationAirportName}</Text>
            </View>
          </View>
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
  },
  infographic: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  flightPathContainer: {
    alignItems: 'center'
  },
  infoView :{
    alignItems: 'center',
    width: '20%',
    flexWrap: 'wrap'
  },
  flightPath: {
    color: color.gray,
    fontSize: 30
  },
  text: {
    fontSize: 30,
    fontWeight: 400
  },
  textSmall: {
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'center'
  }
})