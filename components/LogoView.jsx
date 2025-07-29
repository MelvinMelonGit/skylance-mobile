import { StyleSheet, Text } from 'react-native';
import { color } from '../styles/color';

export default function LogoView({children}) {
  return (
    <Text style={styles.logo}>
        {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    fontWeight: 900,
    textAlign: 'center',
    color: color.primary
  },
});