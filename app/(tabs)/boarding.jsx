import { SafeAreaView, StyleSheet, Text } from 'react-native';
import LinkView from '../../components/LinkView';

export default function Boarding() {
  return (
      <SafeAreaView style={styles.container}>
          <Text>Boarding Pass Here</Text>
          <LinkView href="/">Go To Home</LinkView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});