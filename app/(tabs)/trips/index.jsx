import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomNavTabsView from '../../../components/CustomNavTabsView';
import FlightContainer from '../../../components/FlightContainer';
import LogoView from '../../../components/LogoView';

export default function Index() {
  const [activeTab, setActiveTab] = useState('Upcoming Flights');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerView}>
        <LogoView>Skylance</LogoView>
        <CustomNavTabsView activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>
        {/* Show different content based on tab */}
      {activeTab === 'Upcoming Flights' ? (
        <View style={styles.innerView}>
          <FlatList
            data={['Apple Aplly lwifbeiuvkrbfeq', 'Banana', 'Orange']}
            renderItem={({ item, index }) => <FlightContainer id={index}>{item}</FlightContainer>}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      ) : (
        <View style={styles.innerView}>
          <FlatList
            data={['1', '2', '3']}
            renderItem={({ item }) => <FlightContainer id={index}>{item}</FlightContainer>}
            keyExtractor={(item, index) => item + index}
          />
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