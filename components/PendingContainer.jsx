import { useBooking } from '@/context/BookingContext';
import { color } from '@/styles/color';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { H3 } from './HeadingsView';

export default function PendingContainer({choice, id}) {
    const router = useRouter();

    const { isOverBooked } = useBooking()

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
              choice === 1 ?
              router.push(`/trips/${id}/cancel-flight`) :
              router.push(`/trips/${id}/available-flight`)
            }}
            >
            <View style={styles.inner}>
                <View style={styles.innerCol}>
                    <H3>
                        { choice === 1 ? "Option 1 - Cancel flight" : "Option 2 - Rebook at no cost" }
                    </H3>
                    <Text style={styles.text}>
                        { choice === 1 ? "Full Compensation: $" : "Compensation: $" }
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