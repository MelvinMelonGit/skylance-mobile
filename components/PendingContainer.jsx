import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useBooking } from '../context/BookingContext';
import { color } from '../styles/color';
import { H3 } from './HeadingsView';

export default function PendingContainer({title, text, id}) {
    const router = useRouter();

    const { isOverBooked } = useBooking()

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
              
            }}
            >
            <View style={styles.inner}>
                <View style={styles.innerCol}>
                    <H3>
                        {title}
                    </H3>
                    <Text style={styles.text}>
                        {text}
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
    borderWidth: 1,
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