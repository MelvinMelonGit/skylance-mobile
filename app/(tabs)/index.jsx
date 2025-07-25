import { FlatList, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import CardView from '../../components/CardView';
import H1View from '../../components/H1View';
import LinkView from '../../components/LinkView';
import TextView from '../../components/TextView';
import { color } from '../../styles/color';

export default function Index() {
  return (
      <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.innerView}>
        <TextView title marginVertical={20}>Hey There!</TextView>
        <H1View>Begin Your Adventure Now!</H1View>
        <LinkView href="/">Search</LinkView>
      </View>
       <SectionList
        style={styles.list}
        sections={[
          { title: 'Find your next tickets with these flight deals!', data: ['Apple', 'Banana', 'Banana', 'Banana', 'Banana', 'Banana'] },
          { title: 'Selected tickets are on promotion!', data: ['Carrot', 'Lettuce', 'Banana', 'Banana', 'Banana', 'Banana'] },
          
        ]}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => (
          <>
            <Text style={{ color: color.gray, fontWeight: 'bold', marginTop: 30, textAlign: 'center' }}>{section.title}</Text>
            <FlatList
              data={section.data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <CardView />
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