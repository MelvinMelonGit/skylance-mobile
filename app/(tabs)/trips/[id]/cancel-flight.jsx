import ButtonView from '@/components/ButtonView';
import CheckBox from '@/components/CheckBox';
import FlightInfographic from '@/components/FlightInfographic';
import { H2, H3, P } from '@/components/HeadingsView';
import { useSelectedFlight } from '@/context/SelectedFlightContext';
import { color } from '@/styles/color';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CancelFlight() {
  const { id } = useLocalSearchParams()

  const { currentFlight, currentBooking } = useSelectedFlight()

  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          <FlightInfographic currentBooking={currentBooking}/>
          <H2>Flight #{id}</H2>
          <H3>Full Compensation $1,624</H3>
          <Text style={{color: color.red, fontSize: 18}}>This action is permanent and cannot be undone.</Text>
          <H3>What's next?</H3>
          <P>The compensation amount will be credited into your designated bank account within three weeks upon the cancellation.</P>
          <CheckBox>I acknowledge that this is not reversible.</CheckBox>
          <ButtonView warning>Cancel Flight</ButtonView>
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
  text: {
    fontSize: 30,
    fontWeight: 400
  }
})