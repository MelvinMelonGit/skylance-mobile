import BoardingPass from '@/components/BoardingPass';
import LinkView from '@/components/LinkView';
import { useAuth } from '@/context/AuthContext';
import { useSelectedFlight } from '@/context/SelectedFlightContext';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Boarding() {
  const { currentUser, isLoggedIn } = useAuth()

  const { currentFlight } = useSelectedFlight()

  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          { isLoggedIn ? (
            <>
            { /* Need to add a check with the current sessionId also */}
              { currentFlight === -1 ? (
                <>
                  <Text>No Boarding Pass!</Text>
                  <LinkView href="/trips">Check In</LinkView>
                </>
              ) : (
                <>
                  <Text>Boarding Pass here! {currentFlight}</Text>
                  <BoardingPass currentUser={currentUser}/>
                </>
              )}
            </>
          ) : (
            <>
              <Text>Login to see your boarding pass!</Text>
              <LinkView href="/login">Go To Login</LinkView>
            </>
          )}
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})