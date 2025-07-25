import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import ButtonView from '../../../components/ButtonView';
import EditTextView from '../../../components/EditTextView';
import LinkView from '../../../components/LinkView';
import TextView from '../../../components/TextView';

function handleClick() {
    Alert.alert('Alert Title', 'This is the alert message');
}

export default function Index() {
  return (
        <ScrollView
            contentContainerStyle={styles.container}>
            <TextView title>Welcome Back!</TextView>
            <View style={styles.inner}>
                <TextView>Email</TextView>
                <EditTextView
                    placeholder="Enter Email"
                />
            </View>
            
            <View style={styles.inner}>
                <TextView>Enter Password</TextView>
                <EditTextView
                    placeholder="Enter Password"
                    secure
                />
            </View>
            <LinkView href="/login/register">Register</LinkView>
            <ButtonView onPress={handleClick}>Login</ButtonView>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});