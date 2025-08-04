import ButtonView from '@/components/ButtonView';
import EditTextView from '@/components/EditTextView';
import { H1 } from '@/components/HeadingsView';
import LogoView from '@/components/LogoView';
import TextView from '@/components/TextView';
import { useAuth } from '@/context/AuthContext';
import { loginCheck } from '@/utils/loginCheck';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Account from './account';

export default function Index() {
  const { isLoggedIn, login } = useAuth()

  const router = useRouter()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async () => {
    const emptyFields = Object.entries(form)
      .filter(([_, value]) => value.trim() === '')
      .map(([key]) => key)

    if (emptyFields.length > 0) {
      Alert.alert('Missing Fields', `Please fill in: ${emptyFields.join(', ')}`)
      return
    }

    try {
      const data = await loginCheck(form.email, form.password)
      setForm({ email: '', password: ''})
      if (data.token) {
        login(data)
        router.push('/')
      }
    } catch (err) {
      setError(err.message)
      Alert.alert('Login Error', err.message)
    }
}
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.container}>
        <LogoView>Skylance</LogoView>
        {isLoggedIn ?
          (
          <Account />
          ): (
          <>
            <H1>Welcome Back!</H1>
            <View style={styles.inner}>
                <TextView>Email</TextView>
                <EditTextView
                    placeholder="Enter Email"
                    value={form.email}
                    onChangeText={(text) => handleChange('email', text)}
                />
            </View>
            
            <View style={styles.inner}>
                <TextView>Enter Password</TextView>
                <EditTextView
                    placeholder="Enter Password"
                    value={form.password}
                    onChangeText={(text) => handleChange('password', text)}
                    secure
                />
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
               <ButtonView clear onPress={() => {
                  router.push('/login/register')
                }}>Sign Up</ButtonView>
                <ButtonView onPress={() => {
                  handleSubmit()
                 }}>Login</ButtonView>
            </View>
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