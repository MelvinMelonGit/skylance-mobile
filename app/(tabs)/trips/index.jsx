import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomNavTabsView from '../../../components/CustomNavTabsView';
import FlightContainer from '../../../components/FlightContainer';
import LogoView from '../../../components/LogoView';
import { useAuth } from '../../context/AuthContext';

export default function Index() {
  const { isLoggedIn } = useAuth();
  const [activeTab, setActiveTab] = useState('Upcoming Flights');

  return (
    <SafeAreaView style={styles.container}>
      <LogoView>Skylance</LogoView>
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
        <View style={styles.outerView}>
          <Text>
            Login to see your trips!
          </Text>
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
    justifyContent: 'center',
  },
  list: {
    flex: 2,
    width: '100%',
  }
});