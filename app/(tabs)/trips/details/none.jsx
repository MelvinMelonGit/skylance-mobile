import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinkView from '../../../../components/LinkView';

export default function None() {
  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
            <Text>None!</Text>
            <LinkView href="/login">Go To Login</LinkView>
        </View>
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