import ButtonView from '@/components/ButtonView';
import CustomNavTabsView from '@/components/CustomNavTabsView';
import FlightContainer from '@/components/FlightContainer';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useAuth } from '@/context/AuthContext';
import { useSelectedFlight } from '@/context/SelectedFlightContext';
import { fetchData } from '@/utils/fetchData';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  const { isLoggedIn } = useAuth()
  const [activeTab, setActiveTab] = useState('UpcomingFlights')

  const insets = useSafeAreaInsets()

  const router = useRouter()

  const { setCurrentFlight } = useSelectedFlight()

  const [flights, setFlights] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isLoggedIn) {
      fetchData(`/api/Flights/${activeTab}`)
        .then(setFlights)
        .catch(err => setError(err.message))
    }
  }, [activeTab, isLoggedIn])

  // if (error) {
  //   return <Text>Error: {error}</Text>
  // }

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? (
        <>
          <View style={styles.outerView}>
              <CustomNavTabsView activeTab={activeTab} setActiveTab={setActiveTab} />
          </View>
          { !flights && <LoadingSpinner /> }
          <View style={[styles.innerView, { paddingBottom: insets.bottom + 50}]}>
            <FlatList
              data={flights}
              renderItem={({ item, index }) => {
                return (
                  <FlightContainer
                    flight={item}
                    onPress={() => {
                      if (activeTab === 'UpcomingFlights') {
                        setCurrentFlight(item)
                        router.push({pathname: `/trips/${item.flightNumber}`})
                      }
                    }}
                  />
                )
              }}
              keyExtractor={(item, index) => item + index}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      ) : (
        <View style={styles.centered}>
          <Text>Login to see your trips!</Text>
          <ButtonView onPress={() => {
              router.push('/login')
          }}>Login</ButtonView>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  outerView: {
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  innerView: {
    width: '100%',
    paddingHorizontal: '5%',
    alignItems: 'center'
  },
  list: {
    flex: 2,
    width: '100%',
  },
  centered: {
    flex: 1,
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})