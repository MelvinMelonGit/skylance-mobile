import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonView from '../../../../components/ButtonView';
import ModalView from '../../../../components/ModalView';
import { useBooking } from '../../../../context/BookingContext';

export default function Index() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  const { isOverBooked } = useBooking()
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <SafeAreaView style={{flex : 1}}>
        <View style={styles.container}>
          <Text>Trip Details Here</Text>
          <ButtonView
            onPress={() => {
              isOverBooked &&
              router.push(`/trips/${id}/pending`)
            }}>
            Check In
          </ButtonView>
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
});