import PassengerData from '@/components/PassengerData';
import { useAuth } from '@/context/AuthContext';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ManageTrip() {
  const { currentUser } = useAuth()
  
  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          <PassengerData currentUser={currentUser}/>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    justifyContent: 'center',
  },
})