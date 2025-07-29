import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H2, P } from '../../../../components/HeadingsView';
import PendingContainer from '../../../../components/PendingContainer';

export default function Pending() {
  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          <H2>Hey Firstname,</H2>
          <P>We apologize that your flight is overbooked. Sorry for the inconvenience caused. Please select one of the following compensation options.</P>
          <PendingContainer title="Option 1 - Cancel flight" text="Full Compensation: $ " />
          <PendingContainer title="Option 2 - Rebook at no cost" text="Compensation: $ "/>
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