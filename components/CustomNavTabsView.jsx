import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color } from '../styles/color';

export default function CustomNavTabsView({ activeTab, setActiveTab }) {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Upcoming Flights' && styles.activeTab]}
        onPress={() => setActiveTab('Upcoming Flights')}
      >
        <Text style={[styles.tabText, activeTab === 'Upcoming Flights' && styles.activeTabText]}>
          Upcoming Flights
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'Past Flights' && styles.activeTab]}
        onPress={() => setActiveTab('Past Flights')}
      >
        <Text style={[styles.tabText, activeTab === 'Past Flights' && styles.activeTabText]}>
          Past Flights
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 16,
    width: '100%',
    overflow: 'hidden', // keeps rounded corners clean
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  activeTab: {
    backgroundColor: color.primary,
  },
  tabText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  activeTabText: {
    color: 'white',
    fontWeight: '600',
  },
});
