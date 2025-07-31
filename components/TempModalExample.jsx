import ButtonView from '@/components/ButtonView';
import ModalView from '@/components/ModalView';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TempModalExample() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
      <SafeAreaView style={{ flex: 1}}>
          <ButtonView onPress={() => setModalVisible(true)}>Click Me Modal</ButtonView>
          <ModalView
             visible={modalVisible}
             onClose={() => setModalVisible(false)}
          />
      </SafeAreaView>
  )
}