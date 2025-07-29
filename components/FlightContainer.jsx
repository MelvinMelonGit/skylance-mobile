import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { color } from '../styles/color';

export default function FlightContainer({children, id}) {
    const router = useRouter();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => router.push(`/trips/details/${id}`)}
            >
            <Text>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 100,
    borderRadius: 5,
    borderColor: color.gray,
    marginVertical: 10
  },
});