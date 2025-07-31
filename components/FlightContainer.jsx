import { color } from '@/styles/color';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { H3 } from './HeadingsView';

export default function FlightContainer({children, id}) {
    const router = useRouter();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
              router.push(`/trips/${id}`)
            }}
            >
            <View style={styles.inner}>
                <View style={styles.innerCol}>
                    <H3>
                        {children}
                    </H3>
                    <Text style={styles.text}>
                        FIG
                    </Text>
                </View>
                <View style={styles.innerCol}>
                    <Text style={styles.text}>
                        23 May
                    </Text>
                    <Text style={styles.text}>
                        23 May
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    minWidth: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    height: 100,
    borderRadius: 5,
    borderColor: color.primary,
    marginVertical: 10
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  innerCol: {
    margin: 10
  },
  text: {
    color: color.gray
  }
});