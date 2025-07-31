import { color } from '@/styles/color';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { H3 } from './HeadingsView';

export default function PendingContainer({choice, id}) {
    const router = useRouter();

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
                    <H3 textColor={color.primary}>
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
    minWidth: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
    padding: 30,

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
  innerCol: {
    alignItems: 'flex-start'
  },
  text: {
    color: color.gray
  }
});