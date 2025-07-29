import { useState } from 'react';
import { FlatList, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import ButtonView from '../../components/ButtonView';
import CardView from '../../components/CardView';
import { H1 } from '../../components/HeadingsView';
import LinkView from '../../components/LinkView';
import LogoView from '../../components/LogoView';
import ModalView from '../../components/ModalView';
import { color } from '../../styles/color';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <SafeAreaView style={styles.container}>
      <View style={styles.innerView}>
        <LogoView>Skylance</LogoView>
        <H1>Begin Your Adventure Now!</H1>
        <LinkView href="/">Search</LinkView>
        {/* <LinkView href="/_modal/chooseOptionModal">Choose Options</LinkView> */}
        <ButtonView onPress={() => setModalVisible(true)}>Click Me Modal</ButtonView>
        <ModalView
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
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