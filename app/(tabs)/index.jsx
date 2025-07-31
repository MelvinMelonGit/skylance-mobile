import ButtonView from '@/components/ButtonView';
import CardView from '@/components/CardView';
import { H1 } from '@/components/HeadingsView';
import LogoView from '@/components/LogoView';
import { useBooking } from '@/context/BookingContext';
import { color } from '@/styles/color';
import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const { isOverBooked, setOverbooking } = useBooking()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerView}>
        <LogoView>Skylance</LogoView>
        <H1>Begin Your Adventure Now!</H1>
        <ButtonView onPress={() => setOverbooking(!isOverBooked)}>Set Overbooking Status</ButtonView>
        {/* <LinkView href="/_modal/chooseOptionModal">Choose Options</LinkView> */}
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
              style= {{ marginHorizontal: '2%'}}
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
    flex: 1
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