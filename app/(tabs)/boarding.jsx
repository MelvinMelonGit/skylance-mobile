import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinkView from '../../components/LinkView';
import { useAuth } from '../../context/AuthContext';

export default function Boarding() {
  const { isLoggedIn } = useAuth()

  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          { isLoggedIn ? (
            <>
              <Text>Boarding Pass here!</Text>
            </>
          ) : (
            <>
              <Text>Login to see your boarding pass!</Text>
              <LinkView href="/login">Go To Login</LinkView>
            </>
          )}
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