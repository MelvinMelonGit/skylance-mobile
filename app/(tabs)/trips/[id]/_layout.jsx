import { Stack } from 'expo-router';
import { color } from '../../../../styles/color';

const screenOptions = {
  headerStyle: { backgroundColor: color.white },
  headerTintColor: color.primary,
  headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
  headerTitleAlign: 'center',
};

export default function DetailsStackLayout() {
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen
        name="index"
         options={{ headerTitle: 'Trip Details' }}
      />
      <Stack.Screen
        name="pending"
        options={{ headerTitle: 'Pending Check-In' }}
      />
      <Stack.Screen
        name="cancel-flight"
        options={{ headerTitle: 'Cancel Flight' }}
      />
      <Stack.Screen
        name="available-flight"
        options={{ headerTitle: 'Available Flights' }}
      />
    </Stack>
  );
}