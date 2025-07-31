import { color } from '@/styles/color';
import { Stack, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ChooseOptionModal() {
  const router = useRouter()

  return (
    <>
      <Stack.Screen options={{ presentation: 'modal', title: 'Choose Option' }} />

      <View style={styles.container}>
        <Text style={styles.title}>Choose an Option</Text>

        <Pressable style={styles.button} onPress={() => alert('Option 1')}>
          <Text style={styles.buttonText}>Option 1</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => alert('Option 2')}>
          <Text style={styles.buttonText}>Option 2</Text>
        </Pressable>

        <Pressable onPress={() => router.back()}>
          <Text style={styles.closeText}>Close</Text>
        </Pressable>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // the modal screen itself
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: color.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  closeText: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
})
