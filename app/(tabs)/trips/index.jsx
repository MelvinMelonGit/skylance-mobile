import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomNavTabsView from '../../../components/CustomNavTabsView';
import { H2 } from '../../../components/HeadingsView';
import LinkView from '../../../components/LinkView';
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
          <LinkView href="/trips/details">Details</LinkView>
          <FlatList
            data={['Apple', 'Banana', 'Orange']}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item, index) => item + index}
          />
        </View>
      ) : (
        <View style={styles.innerView}>
          <H2>Past Flights</H2>
          <FlatList
            data={['1', '2', '3']}
            renderItem={({ item }) => <Text>{item}</Text>}
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