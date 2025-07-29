import { Stack } from 'expo-router';
import { useBooking } from '../../../context/BookingContext';
import { color } from '../../../styles/color';

const screenOptions = {
  headerStyle: { backgroundColor: color.white },
  headerTintColor: color.primary,
  headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
  headerTitleAlign: 'center'
};

export default function LoginStackLayout() {
  const { isOverBooked } = useBooking();

  return (
    <Stack>
        <Stack.Screen name="index"
          options={{
            // title: 'Trips',
            headerTitle: 'Your Trips',
            headerStyle: screenOptions.headerStyle,
            headerTitleStyle: screenOptions.headerTitleStyle,
            headerTintColor: screenOptions.headerTintColor, 
            headerTitleAlign: screenOptions.headerTitleAlign,
            headerBackVisible: false
          }}
        />

      <Stack.Screen name="details"
        options={{
            headerTitle: isOverBooked ? 'Pending Check-In' : 'Trip Details',
            headerStyle: screenOptions.headerStyle,
            headerTitleStyle: screenOptions.headerTitleStyle,
            headerTintColor: screenOptions.headerTintColor, 
            headerTitleAlign: screenOptions.headerTitleAlign 
          }}
      />
    </Stack> 
  );
}