import { StyleSheet, TextInput } from 'react-native';
import { color } from '../styles/color';

export default function EditTextView({placeholder, marginVertical, secure}) {
  return (
    <TextInput 
        style={
          [
            styles.container,
          { marginVertical: marginVertical ?? 10 }
          ]
        }
        placeholder={placeholder}
        secureTextEntry={secure}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 320,
    padding: 20,
    height: 60,
    borderRadius: 5,
    borderColor: color.gray,
    color: color.gray
  },
});