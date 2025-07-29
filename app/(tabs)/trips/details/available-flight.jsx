import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H2, P } from '../../../../components/HeadingsView';

export default function AvailableFlight() {
  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          <H2>Available Flights</H2>
            <P>Please select a flight below.</P>
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