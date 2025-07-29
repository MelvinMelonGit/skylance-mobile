import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import ButtonView from '../../../components/ButtonView';
import LinkView from '../../../components/LinkView';
import ModalView from '../../../components/ModalView';

export default function Details() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <SafeAreaView style={styles.container}>
          <Text>Trip Details Here</Text>
          <LinkView href="/">Go To Home</LinkView>
          <ButtonView onPress={() => setModalVisible(true)}>Click Me Modal</ButtonView>
          <ModalView
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
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