import { StyleSheet, Text } from 'react-native';
import { color } from '../styles/color';

export default function TextView({children}) {
  return (
    <Text
        style={styles.container}
    >
        {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    color: color.primary
  },
});