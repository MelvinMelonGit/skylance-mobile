import { color } from '@/styles/color';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { H3 } from './HeadingsView';

export default function FlightContainer({children, id, overbooked}) {
    const router = useRouter()

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
              router.push({pathname: `/trips/${id}`, params: { overbooked }})
            }}
            >
            <View style={styles.inner}>
                <View style={styles.innerLeftCol}>
                    <H3 textColor={color.primary}>
                        {children}
                    </H3>
                    <Text style={styles.text}>
                        FIG
                    </Text>
                </View>
                <View style={styles.innerRightCol}>
                    <Text style={styles.text}>
                        23 May
                    </Text>
                    { overbooked ? (
                    <Text style={styles.overbooked}>
                        Overbooked
                    </Text>
                    ) : (
                    <Text style={styles.safe}>
                        Available
                    </Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
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
  },
  inner: {
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