import CustomNavTabsView from '@/components/CustomNavTabsView';
import FlightContainer from '@/components/FlightContainer';
import LinkView from '@/components/LinkView';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const { isLoggedIn } = useAuth();
  const [activeTab, setActiveTab] = useState('Upcoming Flights');

  return (
    <SafeAreaView style={styles.container}>
        {isLoggedIn ? (
        <>
        <View style={styles.outerView}>
           <CustomNavTabsView activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
          {activeTab === 'Upcoming Flights' ? (
            <View style={styles.innerView}>
              <FlatList
                data={['Apple', 'Banana', 'Orange']}
                renderItem={({ item, index }) => <FlightContainer id={index}>{item}</FlightContainer>}
                keyExtractor={(item, index) => item + index}
              />
            </View>
          ) : (
            <View style={styles.innerView}>
              <FlatList
                data={['1', '2', '3']}
                renderItem={({ item, index }) => <FlightContainer id={index}>{item}</FlightContainer>}
                keyExtractor={(item, index) => item + index}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  outerView: {
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
  innerView: {
    width: '100%',
    paddingHorizontal: '10%',
    alignItems: 'center',
  },
  list: {
    flex: 2,
    width: '100%',
  },
  centered: {
    flex: 1,
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});