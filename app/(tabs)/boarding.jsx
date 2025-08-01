import BoardingPass from '@/components/BoardingPass';
import { useAuth } from '@/context/AuthContext';
import { useCheckedInFlights } from '@/context/CheckedInFlightsContext';
import { useSelectedFlight } from '@/context/SelectedFlightContext';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonView from '../../components/ButtonView';

export default function Boarding() {
  const { currentUser, isLoggedIn } = useAuth()

  const { currentFlight } = useSelectedFlight()

  const { checkedInFlights } = useCheckedInFlights()

  const router = useRouter()

  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          { isLoggedIn ? (
            <>
            { /* Need to add a check with the current sessionId also */}
              { currentFlight === -1 ? (
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
                      <BoardingPass currentUser={currentUser} id={checkedInFlights[index]}/>
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
              }}>Check In</ButtonView>
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