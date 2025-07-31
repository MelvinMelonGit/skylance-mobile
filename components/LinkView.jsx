import { color } from '@/styles/color';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

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
    marginVertical: 10,
    borderRadius: 50,
    fontSize: 18,
    fontWeight: 500,
    color: color.white
  }
});