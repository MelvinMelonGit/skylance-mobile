import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import { color } from '../styles/color';

export default function LinkView({children, href}) {
  return (
    <Link href={href} style={styles.container}>
          {children}
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 50,
    color: color.white
  }
});