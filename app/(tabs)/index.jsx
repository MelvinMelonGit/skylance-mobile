import { Image } from 'expo-image';
import { FlatList, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import H1View from '../../components/H1View';
import LinkView from '../../components/LinkView';
import TextView from '../../components/TextView';

const placeholderImage = require('@/assets/images/splash-icon.png');

export default function Index() {
  return (
      <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.innerView}>
        <TextView title>Hey There!</TextView>
        <H1View>Begin Your Adventure Now!</H1View>
        <LinkView href="/">Search</LinkView>
      </View>
       <SectionList
       style={styles.list}
  sections={[
    { title: 'Fruits', data: ['Apple', 'Banana', 'Banana', 'Banana', 'Banana', 'Banana'] },
    { title: 'Vegetables', data: ['Carrot', 'Lettuce', 'Banana', 'Banana', 'Banana', 'Banana'] },
    
  ]}
  keyExtractor={(item, index) => item + index}
  renderSectionHeader={({ section }) => (
    <>
      <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
      <FlatList
        data={section.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={placeholderImage} style={styles.image} />
            <Text>Hi</Text>
          </View>
        )}
      />
    </>
  )}
  renderItem={() => null}  // Don't render individual items vertically
/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    // justifyContent: 'center',
  },
  innerView: {
    height: 280,
    width: 340,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  list: {
    flex: 3,
    borderWidth: 1,
    width: 340,
  },
  row: {
    marginRight: 12,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 18,
  },
});