import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import ButtonView from './components/ButtonView';

export default function ModalView({ visible, onClose }) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Choose an Option</Text>
          
          <View>
            <ButtonView onPress={() => alert('Option 1')}>Option 1</ButtonView>
            <ButtonView onPress={() => alert('Option 2')}>Option 2</ButtonView>
          </View>

          <Pressable onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)', // dark overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 280,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: { fontSize: 20, marginBottom: 20 },
  closeText: { marginTop: 15, color: 'gray' },
})
