import { SafeAreaView, StyleSheet, Text } from 'react-native';
import LinkView from '../../components/LinkView';

export default function OTP() {
  return (
      <SafeAreaView style={styles.container}>
          <Text>Hihfffi</Text>
          <LinkView href="/">Go To Home</LinkView>
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