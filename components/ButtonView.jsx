import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { color } from '../styles/color';

export default function ButtonView({children, onPress}) {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={styles.container}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 50,
  },
  text: {
    color: color.white
  }
});