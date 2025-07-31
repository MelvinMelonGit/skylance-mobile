import CustomNavTabsView from '@/components/CustomNavTabsView';
import FlightContainer from '@/components/FlightContainer';
import LinkView from '@/components/LinkView';
import PastFlightContainer from '@/components/PastFlightContainer';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  const { isLoggedIn } = useAuth()
  const [activeTab, setActiveTab] = useState('Upcoming Flights')

  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={styles.container}>
        {isLoggedIn ? (
        <>
        <View style={styles.outerView}>
           <CustomNavTabsView activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
          {activeTab === 'Upcoming Flights' ? (
            <View style={[styles.innerView, { paddingBottom: insets.bottom + 50}]}>
              <FlatList
                data={[{ name: 'Bangkok', overbooked: false }, { name: 'New York', overbooked: false } , { name: 'Kuala Lumpur', overbooked: true }, { name: 'Ho Chi Minh', overbooked: true }, { name: 'Berlin', overbooked: false }, { name: 'Shanghai', overbooked: false }]}
                renderItem={({ item, index }) => <FlightContainer id={index} overbooked={item.overbooked}>{item.name}</FlightContainer>}
                keyExtractor={(item, index) => item + index}
                showsVerticalScrollIndicator={false}
              />
            </View>
          ) : (
            <View style={[styles.innerView, { paddingBottom: insets.bottom + 50}]}>
              <FlatList
                data={['1', '2', '3']}
                renderItem={({ item, index }) => <PastFlightContainer id={index}>{item}</PastFlightContainer>}
                keyExtractor={(item, index) => item + index}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}
        </>
      ) : (
        <View style={styles.centered}>
          <Text>Login to see your trips!</Text>
          <LinkView href="/login">Go To Login</LinkView>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  outerView: {
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  innerView: {
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center'
  },
  list: {
    flex: 2,
    width: '100%',
  },
  centered: {
    flex: 1,
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})