import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { color } from '../styles/color';

export default function ButtonView({children}) {
  return (
    <TouchableOpacity
        style={styles.container}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 50,
  },
  text: {
    color: color.white
  }
});