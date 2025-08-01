import ButtonView from '@/components/ButtonView';
import FlightContainer from '@/components/FlightContainer';
import { H3 } from '@/components/HeadingsView';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AvailableFlight() {
  const { id } = useLocalSearchParams()

  const router = useRouter()

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            data={[{ name: 'Apple', overbooked: true }, { name: 'Banana', overbooked: false } , { name: 'Orange', overbooked: false }]}
            renderItem={({ item, index }) => <FlightContainer id={index} overbooked={item.overbooked}>{item.name}</FlightContainer>}
            keyExtractor={(item, index) => item + index}
          />
          <H3>Don't want to rebook?</H3>
          <ButtonView warning onPress={() => {
            router.push(`/trips/${id}/cancel-flight`)
          }}>Cancel Flight</ButtonView>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    alignItems: 'center'
  },
})