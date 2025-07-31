import ButtonView from '@/components/ButtonView';
import FlightContainer from '@/components/FlightContainer';
import { H3 } from '@/components/HeadingsView';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AvailableFlight() {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            data={[{ name: 'Apple', overbooked: true }, { name: 'Banana', overbooked: false } , { name: 'Orange', overbooked: false }]}
            renderItem={({ item, index }) => <FlightContainer id={index} overbooked={item.overbooked}>{item.name}</FlightContainer>}
            keyExtractor={(item, index) => item + index}
          />
          <H3>Don't want to rebook?</H3>
          <ButtonView clear>Back</ButtonView>
          <ButtonView warning>Cancel Flight</ButtonView>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
  },
});