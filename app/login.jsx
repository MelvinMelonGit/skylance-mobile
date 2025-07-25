import { ScrollView } from 'react-native';
import ButtonView from '../components/ButtonView';
import EditTextView from '../components/EditTextView';
import TextView from '../components/TextView';

export default function Login() {
  return (
    <ScrollView
    contentContainerStyle={{ marginVertical: 50 }}>
        <TextView>First Name</TextView>
        <EditTextView
            placeholder="Enter First Name"
        />
        <TextView>Last Name</TextView>
        <EditTextView
            placeholder="Enter Last Name"
        />
        <TextView>Email</TextView>
        <EditTextView
            placeholder="Enter Email"
        />
        <TextView>Country Code</TextView>
        <EditTextView
            placeholder="Enter Country Code"
        />
        <TextView>Mobile Number</TextView>
        <EditTextView
            placeholder="Enter Mobile Number"
        />
        <TextView>Enter Password</TextView>
        <EditTextView
            placeholder="Enter Password"
            secure
        />
        <TextView>Confirm Password</TextView>
        <EditTextView
            placeholder="Confirm Password"
            secure
        />
        <ButtonView>Send OTP Via Email</ButtonView>
    </ScrollView>
  );
}