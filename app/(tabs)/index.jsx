import CardView from '@/components/CardView';
import { H1, H3 } from '@/components/HeadingsView';
import LogoView from '@/components/LogoView';
import { FlatList, SectionList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  'japan', 
  'highway',
  'japan', 
  'highway',
  'japan', 
  'highway'
]

const promoImages = {
  'japan' : require('@/assets/images/promo/japan.jpg'),
  'highway' : require('@/assets/images/promo/highway.jpg')
}

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerView}>
        <LogoView>Skylance</LogoView>
        <H1>Begin Your Adventure Now!</H1>
        {/* <LinkView href="/_modal/chooseOptionModal">Choose Options</LinkView> */}
      </View>
       <SectionList
        style={styles.list}
        sections={[
          { title: 'Find your next tickets with these flight deals!', data: DATA },
          { title: 'Selected tickets are on promotion!', data: DATA },
        ]}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => (
          <>
            <H3>{section.title}</H3>
            <FlatList
              style= {{ marginLeft: 10, marginBottom: 20,  overflow: 'visible'}}
              data={section.data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <CardView name={item} image={promoImages[item]}/>
              )}
            />
          </>
        )}
        renderItem={() => null}  // Don't render individual items vertically
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerView: {
    width: '100%',
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  }
})