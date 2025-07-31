import { color } from '@/styles/color';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ButtonView({children, onPress, warning, clear}) {

  let buttonColor = color.primary
  if (warning) buttonColor = color.red
  else if (clear) buttonColor = color.transparent
  
  let buttonTextColor = color.white
  if (clear) buttonTextColor = color.primary

  return (
    <TouchableOpacity
        onPress={onPress}
        style={
          [
            styles.container,
          { 
            backgroundColor: buttonColor,
            borderColor: clear && color.primary,
            borderWidth: clear && 2
          }
          ]
        }
    >
      <Text style={[styles.text, { color: buttonTextColor}]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 50,
  },
  text: {
    color: color.white,
    fontSize: 18,
    fontWeight: 500
  }
})