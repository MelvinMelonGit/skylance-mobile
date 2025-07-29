import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomNavTabsView from '../../../components/CustomNavTabsView';
import LinkView from '../../../components/LinkView';
import LogoView from '../../../components/LogoView';

export default function Index() {
  const [activeTab, setActiveTab] = useState('Upcoming Flights');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.innerView}>
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
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18 }}>Login Tab Content</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  innerView: {
    height: 280,
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