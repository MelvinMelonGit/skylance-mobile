import { color } from '@/styles/color';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomNavTabsView({ activeTab, setActiveTab }) {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Upcoming Flights' && styles.activeTab]}
        onPress={() => setActiveTab('Upcoming Flights')}
      >
        <Text style={[styles.tabText, activeTab === 'Upcoming Flights' && styles.activeTabText]}>
          Upcoming
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
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: color.primary,
    marginHorizontal: 20,
    marginBottom: 16,
    padding: 4,
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
    borderRadius: 50
  },
  tabText: {
    fontSize: 18,
    color: color.primary,
    fontWeight: '500',
    padding: 5,
  },
  activeTabText: {
    color: color.white,
    fontWeight: '500',
  },
})
