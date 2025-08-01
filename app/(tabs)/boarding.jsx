import BoardingPass from '@/components/BoardingPass';
import { useAuth } from '@/context/AuthContext';
import { useSelectedFlight } from '@/context/SelectedFlightContext';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonView from '../../components/ButtonView';

export default function Boarding() {
  const { currentUser, isLoggedIn } = useAuth()

  const { currentFlight } = useSelectedFlight()

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
                <>
                  <Text>Boarding Pass here! {currentFlight}</Text>
                  <BoardingPass currentUser={currentUser}/>
                </>
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
    justifyContent: 'center',
  },
})