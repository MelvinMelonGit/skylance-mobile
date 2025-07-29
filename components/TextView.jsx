import { StyleSheet, Text } from 'react-native';
import { color } from '../styles/color';

export default function TextView({children, marginVertical}) {
  return (
    <Text
        style={
          [
            styles.container,
          { 
            marginVertical: marginVertical ?? 0,
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
    fontSize: 14,
    alignSelf: 'flex-start',
  },
});