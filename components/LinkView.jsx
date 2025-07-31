import { color } from '@/styles/color';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function LinkView({children, href, warning, clear}) {

  let buttonColor = color.primary
  if (warning) buttonColor = color.red
  else if (clear) buttonColor = color.transparent
  
  let buttonTextColor = color.white
  if (clear) buttonTextColor = color.primary

  return (
    <Link
      href={href}
      style={
              [
                styles.container,
              { 
                backgroundColor: buttonColor,
                borderColor: clear && color.primary,
                borderWidth: clear && 2,
                color: buttonTextColor
              }
              ]
            }>
      {children}
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.primary,
    width: '50%',
    textAlign: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 50,
    fontSize: 16,
    fontWeight: 500,
  }
})