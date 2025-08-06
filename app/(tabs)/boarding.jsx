import BoardingPass from '@/components/BoardingPass';
import ButtonView from '@/components/ButtonView';
import { useAuth } from '@/context/AuthContext';
import { useCheckedInFlights } from '@/context/CheckedInFlightsContext';
import { useSelectedFlight } from '@/context/SelectedFlightContext';
import { fetchCheckedInFlights } from '@/utils/checkInFlight';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Boarding() {
  const { currentUser, isLoggedIn } = useAuth()

  const { currentFlight } = useSelectedFlight()

  const { checkedInFlights, setCheckedInFlights, checkedInFlightId } = useCheckedInFlights()

  const router = useRouter()

  const [error, setError] = useState('')

  useEffect(() => {
      const fetchCheckedInFlightsInfo = async () => {
        try {
          const data = await fetchCheckedInFlights(`/api/ConfirmFlight/${currentFlight.flightBookingDetailId}/boardingPass`, checkedInFlightId)
          setCheckedInFlights([...checkedInFlights, data])
        } catch (err) {
          setError(err.message)
        }
    }
  
    fetchCheckedInFlightsInfo ()
  }, [])

  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          { isLoggedIn ? (
            <>
            { /* Need to add a check with the current sessionId also */}
              { checkedInFlights.length === 0 ? (
                <>
                  <Text>No Boarding Pass!</Text>
                  <ButtonView onPress={() => {
                    router.push('/trips')
                  }}>Check In</ButtonView>
                </>
              ) : (
                <FlatList
                  data={checkedInFlights}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item, index }) => (
                    <View style={{ marginRight: index === checkedInFlights.length - 1 ? 0 : 20 }}>
                      <BoardingPass currentUser={currentUser} currentFlight={currentFlight} id={checkedInFlights[index]}/>
                    </View>
                  )}
                />
              )}
            </>
          ) : (
            <>
              <Text>Login to see your boarding pass!</Text>
              <ButtonView onPress={() => {
                router.push('/login')
              }}>Login</ButtonView>
            </>
          )}
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
})