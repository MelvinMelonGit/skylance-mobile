import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonView from '../../../components/ButtonView';
import EditTextView from '../../../components/EditTextView';
import TextView from '../../../components/TextView';

function handlePress() {
    alert('Alert Title', 'This is the alert message');
}

export default function Register() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
                <TextView>Nationality</TextView>
                <EditTextView
                    placeholder="Enter Nationality"
                />
            </View>
            
             <View style={styles.inner}>
                <TextView>Mobile Country Code</TextView>
                <EditTextView
                    placeholder="Enter Mobile Country Code"
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
            
            {/* <LinkView href="/login/otp">Send OTP Via Email</LinkView> */}
            <ButtonView onPress={handlePress}>Register</ButtonView>
        </ScrollView>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inner: {
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});