import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomNavTabsView from '../../components/CustomNavTabsView';
import H1View from '../../components/H1View';
import LinkView from '../../components/LinkView';

export default function Trips() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.innerView}>
        <CustomNavTabsView activeTab={activeTab} setActiveTab={setActiveTab} />
        <H1View>Begin Your Adventure Now!</H1View>
        <LinkView href="/">Search</LinkView>
      </View>
        {/* Show different content based on tab */}
      {activeTab === 'home' ? (
        <FlatList
          data={['Apple', 'Banana', 'Orange']}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => item + index}
        />
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