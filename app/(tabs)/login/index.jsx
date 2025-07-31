import ButtonView from '@/components/ButtonView';
import EditTextView from '@/components/EditTextView';
import { H1 } from '@/components/HeadingsView';
import LinkView from '@/components/LinkView';
import LogoView from '@/components/LogoView';
import TextView from '@/components/TextView';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const { currentUser, isLoggedIn, login, logout } = useAuth()

  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.container}>
        <LogoView>Skylance</LogoView>
        {isLoggedIn ?
          (
          <>
            <H1>Welcome { isLoggedIn && currentUser }!</H1>
            <ButtonView onPress={logout}>Logout</ButtonView>
          </>
          ): (
          <>
            <H1>Welcome Back!</H1>
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
            <View style={{ flexDirection: 'row', gap: 10 }}>
               <LinkView href="/login/register" clear>Sign Up</LinkView>
                <ButtonView onPress={() => {
                  login()
                  router.push("/")
                 }}>Login</ButtonView>
            </View>
            {/* <P>Don't have an account?</P> */}
            {/* <LinkText href="/login/register">Register</LinkText> */}
          </>
        )}
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})