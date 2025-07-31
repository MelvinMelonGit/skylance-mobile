import ButtonView from '@/components/ButtonView';
import { H2, H3 } from '@/components/HeadingsView';
import { useSelectedFlight } from '@/context/SelectedFlightContext';
import { color } from '@/styles/color';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CheckIn() {
  const { id } = useLocalSearchParams();
  const router = useRouter()

  const { setCurrentFlight } = useSelectedFlight()

  return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={styles.container}>
          <View style={styles.infographic}>
            <View style={styles.infoView}>
              <Text style={styles.text}>SIN</Text>
              <Text>Singapore</Text>
            </View>
            <View style={styles.infoView}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='airplane-outline' size={30} color={color.gray} />
              <Text style={styles.flightPath}> - - - - - - - - -</Text>
              </View>
              <Text style={{ color: color.gray}}>18h 30min</Text>
            </View>
            <View style={styles.infoView}>
              <Text style={styles.text}>EWR</Text>
              <Text>USA</Text>
            </View>
          </View>
          <H2>Check In #{id}</H2>
          <H3>Not Permitted Anywhere</H3>
          <View style={styles.warnings}>
            <View style={styles.warningsInner}>
              <FontAwesome5 name="skull-crossbones" size={50} color={color.black} />
              <Text style={styles.iconText}>Toxic Chemicals</Text>
              <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>
           
          
            <View style={styles.warningsInner}>
              <FontAwesome5 name="fire" size={50} color={color.black} />
              <Text style={styles.iconText}>Flammable Items</Text>
              <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>
            
            <View style={styles.warningsInner}>
              <FontAwesome5 name="bomb" size={50} color={color.black} />
              <Text style={styles.iconText}>Explosive Goods</Text>
              <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>
            
            <View style={styles.warningsInner}>
              <FontAwesome5 name="spray-can" size={50} color={color.black} />
              <Text style={styles.iconText}>Aerosols & Sprays</Text>
              <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>
            
            <View style={styles.warningsInner}>
              <Ionicons name="warning" size={50} color={color.black} />
              <Text style={styles.iconText}>Corrosive Materials</Text>
              <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>

            <View style={styles.warningsInner}>
               <MaterialCommunityIcons name="propane-tank" size={50} color={color.black} />
               <Text style={styles.iconText}>Propane Gas</Text>
               <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>
            
          </View>
          <ButtonView onPress={() => {
            setCurrentFlight(id)
            router.push('/boarding')
          }}>Check In</ButtonView>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infographic: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  infoView :{
    alignItems: 'center'
  },
  flightPath: {
    color: color.gray,
    fontSize: 30
  },
  text: {
    fontSize: 30,
    fontWeight: 400
  },
  warnings: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: color.white,
    width: '100%',
    gap: 30,
    padding: 20,
    paddingVertical: 30,

    borderRadius: 10,
    shadowColor: color.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  warningsInner: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 70,
    position: 'relative',
    overflow: 'visible', 
  },
  warningsIcons: {
    position: 'absolute',
    top: -10
  },
  iconText: {
    textAlign: 'center',
    fontWeight: 500
  }
});