import CardView from '@/components/CardView';
import GradientText from '@/components/GradientText';
import { H1, H3 } from '@/components/HeadingsView';
import LogoView from '@/components/LogoView';
import { FlatList, SectionList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  { country: 'japan', price: 1000 },
  { country: 'maldives', price: 1400 },
  { country: 'shanghai', price: 500 },
  { country: 'singapore', price: 2000 },
  { country: 'thailand', price: 600 },
]

const promoImages = {
  'japan' : require('@/assets/images/promo/japan.jpg'),
  'maldives' : require('@/assets/images/promo/maldives.jpg'),
  'shanghai' : require('@/assets/images/promo/shanghai.jpg'),
  'singapore' : require('@/assets/images/promo/singapore.jpg'),
  'thailand' : require('@/assets/images/promo/thailand.jpg')
}

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerView}>
        <LogoView>Skylance</LogoView>
        <GradientText style={{ fontSize: 32, fontWeight: 'bold' }}>
          <H1>Begin your adventure now!</H1>
        </GradientText>
        {/* <LinkView href="/_modal/chooseOptionModal">Choose Options</LinkView> */}
      </View>
       <SectionList
        style={styles.list}
        sections={[
          { title: 'Plan your next trip with these deals!', data: DATA },
          { title: 'Selected trips on a discount!', data: DATA },
        ]}
        keyExtractor={(item, index) => item.country + index}
        renderSectionHeader={({ section }) => (
          <>
            <H3 marginVertical={10}>{section.title}</H3>
            <FlatList
              style= {{ marginLeft: 10, marginBottom: 20,  overflow: 'visible'}}
              data={section.data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item.country + index}
              renderItem={({ item }) => (
                <CardView item={item} image={promoImages[item.country]}/>
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
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
  }
})