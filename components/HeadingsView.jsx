import { color } from '@/styles/color';
import { StyleSheet, Text } from 'react-native';

export function H1({children}) {
  return (
    <Text style={styles.h1}>
        {children}
    </Text>
  );
}

export function H2({children}) {
  return (
    <Text style={styles.h2}>
        {children}
    </Text>
  );
}

export function H3({children}) {
  return (
    <Text style={styles.h3}>
        {children}
    </Text>
  );
}


export function P({children}) {
  return (
    <Text style={styles.p}>
        {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
    color: color.primary
  },
  h2: {
    fontSize: 24,
    fontWeight: 500,
    textAlign: 'center',
    color: color.primary
  },
  h3: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    color: color.primary
  },
  p: {
    fontSize: 18,
    fontWeight: 400,
    marginVertical: 20,
    color: color.gray
  },
});