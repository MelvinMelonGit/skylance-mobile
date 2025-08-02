import { color } from '@/styles/color';
import { formatDate, formatTime } from '@/utils/formatDateTime';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { H3 } from './HeadingsView';

export default function FlightContainer({flight, onPress}) {
  return (
    <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        >
        <View style={styles.inner}>
            <View style={styles.innerLeftCol}>
                <H3 textColor={color.intermediate}>
                    {flight.flightNumber}
                </H3>
                <Text style={styles.text}>
                    {flight.origin}
                </Text>
            </View>
            { flight.departureTime && (
              <View style={styles.innerRightCol}>
                <Text style={styles.text}>
                    {formatDate(flight.departureTime)}
                </Text>
                <Text style={styles.text}>
                    {formatTime(flight.departureTime)}
                </Text>
              </View>
            )}
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    maxWidth: '100%',
    borderRadius: 5,
    marginVertical: 10,
    padding: 20,

    backgroundColor: color.white,
    shadowColor: color.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  innerLeftCol: {
    alignItems: 'flex-start'
  },
  innerRightCol: {
    alignItems: 'flex-end'
  },
  text: {
    color: color.gray
  },
  overbooked: {
    backgroundColor: color.red,
    color: color.white,
    fontWeight: 500,
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  safe: {
    backgroundColor: color.green,
    color: color.white,
    fontWeight: 500,
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  }
})