import ButtonView from '@/components/ButtonView';
import { H2 } from '@/components/HeadingsView';
import ModalView from '@/components/ModalView';
import { useBooking } from '@/context/BookingContext';
import { color } from '@/styles/color';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { isOverBooked } = useBooking();

  const [modalVisible, setModalVisible] = useState(false);

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
              <Text style={styles.flightPath}> - - - - - - - - -</Text>
              </View>
              <Text style={{ color: color.gray}}>18h 30min</Text>
            </View>
            <View style={styles.infoView}>
              <Text style={styles.text}>EWR</Text>
              <Text>USA</Text>
            </View>
          </View>
          <H2>Check In Trip #{id}</H2>
          <ButtonView
            onPress={() => {
              isOverBooked ?
              router.push(`/trips/${id}/pending`) :
              router.push(`/trips/${id}/check-in`)
            }}>
            Check In
          </ButtonView>
          <ButtonView clear>Manage Booking</ButtonView>
          <ButtonView onPress={() => setModalVisible(true)}>Click Me Modal {id}</ButtonView>
           <ModalView
             visible={modalVisible}
             onClose={() => setModalVisible(false)}
           />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10%',
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
});