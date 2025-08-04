import ButtonView from '@/components/ButtonView';
import FlightData from '@/components/FlightData';
import FlightPathData from '@/components/FlightPathData';
import { H2 } from '@/components/HeadingsView';
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
  const { id, overbooked } = useLocalSearchParams()
  const isOverbooked = overbooked === 'true'

  const router = useRouter()

  const { checkedInFlights } = useCheckedInFlights()

  const { currentFlight } = useSelectedFlight()
  const [error, setError] = useState('')

  useEffect(() => {
    fetchFlight(`/Trip/${currentFlight.flightBookingDetailId}`)
      // .then(setFlights)
      .catch(err => setError(err.message))
  }, [currentFlight])

  // if (error) {
  //   return <Text>Error: {error}</Text>
  // }

  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          <View style={styles.infographic}>
            <View style={styles.infoView}>
              <Text style={styles.text}>SIN</Text>
              <Text>Singapore</Text>
            </View>
            <View style={styles.infoView}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='airplane-outline' size={30} color={color.gray} />
              <Text style={styles.flightPath}> - - - - - - - - - - -</Text>
              </View>
              <Text style={{ color: color.gray}}>18h 30min</Text>
            </View>
            <View style={styles.infoView}>
              <Text style={styles.text}>EWR</Text>
              <Text>USA</Text>
            </View>
          </View>
          <H2>Flight #{id}</H2>
          <FlightData id={id} />
          <FlightPathData />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <ButtonView
              onPress={() => {
                router.push(`/trips/${id}/manage-trip`)
              }}
              clear>Manage Trip</ButtonView>
            <ButtonView
              onPress={() => {
                if (isOverbooked) 
                  router.push(`/trips/${id}/pending`)
                else if (checkedInFlights.includes(id))
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
  infoView :{
    alignItems: 'center'
  },
  flightPath: {
    color: color.gray,
    fontSize: 30
  },
  text: {
    fontSize: 30,
    fontWeight: 400
  }
})