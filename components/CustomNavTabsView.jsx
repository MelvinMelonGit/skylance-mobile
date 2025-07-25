import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { color } from '../styles/color';

export default function CustomNavTabsView({ activeTab, setActiveTab }) {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'home' && styles.activeTab]}
        onPress={() => setActiveTab('home')}
      >
        <Text style={[styles.tabText, activeTab === 'home' && styles.activeTabText]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, activeTab === 'login' && styles.activeTab]}
        onPress={() => setActiveTab('login')}
      >
        <Text style={[styles.tabText, activeTab === 'login' && styles.activeTabText]}>
          Login
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
