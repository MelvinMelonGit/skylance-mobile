import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { color } from '../styles/color';

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

          <Pressable style={styles.button} onPress={() => alert('Option 1')}>
            <Text style={styles.buttonText}>Option 1</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => alert('Option 2')}>
            <Text style={styles.buttonText}>Option 2</Text>
          </Pressable>

          <Pressable onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
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
  button: {
    backgroundColor: color.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    width: '100%',
  },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
  closeText: { marginTop: 15, color: 'gray' },
});
