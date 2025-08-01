import ButtonView from '@/components/ButtonView';
import CheckBox from '@/components/CheckBox';
import { H2, H3, P } from '@/components/HeadingsView';
import { color } from '@/styles/color';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CancelFlight() {
  const { id } = useLocalSearchParams()

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