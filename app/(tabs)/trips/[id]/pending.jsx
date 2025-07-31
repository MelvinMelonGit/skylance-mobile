import { H2, P } from '@/components/HeadingsView';
import PendingContainer from '@/components/PendingContainer';
import { useAuth } from '@/context/AuthContext';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Pending() {
  const { currentUser, isLoggedIn } = useAuth();
  
  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          <H2 textAlign='left'>Hey { isLoggedIn && currentUser },</H2>
          <P>We apologize that your flight is overbooked. Sorry for the inconvenience caused. Please select one of the following compensation options.</P>
          <PendingContainer choice={1} />
          <PendingContainer choice={2} />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10%',
    justifyContent: 'center',
  },
});