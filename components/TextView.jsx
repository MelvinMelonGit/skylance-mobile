import { StyleSheet, Text } from 'react-native';
import { color } from '../styles/color';

export default function TextView({children, marginVertical, title}) {
  return (
    <Text
        style={
          [
            styles.container,
          { marginVertical: marginVertical ?? 0,
            fontSize: title ? 26 : 14,
            alignSelf: title ? 'center' : 'flex-start'
          }
          ]
        }
    >
        {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    color: color.black,
  },
});