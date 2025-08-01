import { color } from '@/styles/color';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function FlightPathData() {

    return (
        <View style={styles.inner}>
            <View style={styles.innerLeftCol}>
                <Text style={styles.text}>
                   06:15am
                </Text>
                <Text style={styles.pathLine}> - - - - - - </Text>
                <Text style={{ backgroundColor: color.primary, color: color.white, padding: 10, borderRadius: 5 }}>18h 30min</Text>
                <Text style={styles.pathLine}> - - - - - - </Text>
                <Text style={styles.text}>
                    08:45am
                </Text>
            </View>
            <View style={styles.innerRightCol}>
                <Text style={styles.text}>
                    Singapore (SIN)
                </Text>
                <Ionicons name='ticket' size={70} color={color.gray} />
                <Text style={styles.text}>
                    New York City, USA (EWR)
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  inner: {
    minWidth: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
    padding: 20,

    backgroundColor: color.white,
    shadowColor: color.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,

    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  innerLeftCol: {
    alignItems: 'center',
  },
  pathLine: {
    transform: [{ rotate: '-90deg'}],
    margin: 20
  },
  innerRightCol: {
    minHeight: 200,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: color.gray
  },
  overbooked: {
    backgroundColor: color.red,
    color: color.white,
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  safe: {
    backgroundColor: color.intermediate,
    color: color.white,
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  }
})