import { ScrollView, StyleSheet, View } from 'react-native';
import EditTextView from '../../components/EditTextView';
import LinkView from '../../components/LinkView';
import TextView from '../../components/TextView';

export default function Register() {
  return (
    <ScrollView
    contentContainerStyle={styles.container}>
        <View style={styles.inner}>
            <TextView>First Name</TextView>
            <EditTextView
                placeholder="Enter First Name"
            />
        </View>

        <View style={styles.inner}>
            <TextView>Last Name</TextView>
            <EditTextView
                placeholder="Enter Last Name"
            />
        </View>
        
        <View style={styles.inner}>
            <TextView>Email</TextView>
            <EditTextView
                placeholder="Enter Email"
            />
        </View>

        <View style={styles.inner}>
            <TextView>Country Code</TextView>
            <EditTextView
                placeholder="Enter Country Code"
            />
        </View>
        
        <View style={styles.inner}>
            <TextView>Mobile Number</TextView>
            <EditTextView
                placeholder="Enter Mobile Number"
            />
        </View>
        
        <View style={styles.inner}>
            <TextView>Enter Password</TextView>
            <EditTextView
                placeholder="Enter Password"
                secure
            />
        </View>
        
        <View style={styles.inner}>
            <TextView>Confirm Password</TextView>
            <EditTextView
                placeholder="Confirm Password"
                secure
            />
        </View>
        
        <LinkView href="/otp">Send OTP Via Email</LinkView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});