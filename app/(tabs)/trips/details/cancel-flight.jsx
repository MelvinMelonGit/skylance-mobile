import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H2, P } from '../../../../components/HeadingsView';

export default function CancelFlight() {
  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          <H2>Cancel Flight</H2>
          <P>Your flight is cancelled. Goodbye.</P>
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