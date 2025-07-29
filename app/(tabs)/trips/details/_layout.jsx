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
    <Stack
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="[id]"
         options={{ headerShown: false }}
      />
      <Stack.Screen
        name="pending"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}