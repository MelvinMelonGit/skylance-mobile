import { color } from '@/styles/color';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function LinkText({children, href}) {
  return (
    <Link href={href} style={styles.container}>
          {children}
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    color: color.primary,
    fontWeight: 500,
    fontSize: 18
  }
})