import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text>Hihfffi</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});