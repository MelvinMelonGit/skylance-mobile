import { color } from '@/styles/color';
import { StyleSheet, TextInput } from 'react-native';

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
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    minWidth: '100%',
    height: 48,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: color.gray,
    color: color.gray
  },
})