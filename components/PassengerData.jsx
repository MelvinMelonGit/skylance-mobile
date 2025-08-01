import { H3 } from '@/components/HeadingsView';
import { color } from '@/styles/color';
import { StyleSheet, Text, View } from 'react-native';

export default function PassengerData({currentUser}) {

    return (
        <View style={styles.inner}>
            <View style={styles.innerLeftCol}>
                <H3>{currentUser}</H3>
                <Text style={styles.text}>
                    FIG
                </Text>
            </View>
            <View style={styles.innerRightCol}>
                <Text style={styles.text}>
                    23 May
                </Text>
                <Text style={styles.text}>
                    23 May
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