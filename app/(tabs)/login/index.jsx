import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ButtonView from '../../../components/ButtonView';
import EditTextView from '../../../components/EditTextView';
import H1View from '../../../components/H1View';
import LinkText from '../../../components/LinkText';
import TextView from '../../../components/TextView';
import { color } from '../../../styles/color';
import { useAuth } from '../../context/AuthContext';

export default function Index() {
  const { isLoggedIn, login, logout } = useAuth()

  return (
    <ScrollView
        contentContainerStyle={styles.container}>
        <H1View>Skylance</H1View>
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
        {isLoggedIn ?
          (<ButtonView onPress={logout}>Logout</ButtonView>):
          (<ButtonView onPress={login}>Login</ButtonView>)
        }

        <Text style={styles.text}>Don't have an account?</Text>
        <LinkText href="/login/register">Register</LinkText>

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
  },
  text: {
    color: color.gray,
    fontWeight: 500,
  }
});