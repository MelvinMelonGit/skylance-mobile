import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H2 } from '../../../../components/HeadingsView';
import { color } from '../../../../styles/color';

export default function CheckIn() {
  const { id } = useLocalSearchParams();

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
          <View style={styles.warnings}>
            <View style={styles.warningsInner}>
              <FontAwesome5 name="skull-crossbones" size={50} color={color.black} />
              <Text>HAHA</Text>
              <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>
           
          
            <View style={styles.warningsInner}>
              <FontAwesome5 name="fire" size={50} color={color.black} />
              <Text>HAHA</Text>
              <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>
            
            <View style={styles.warningsInner}>
              <FontAwesome5 name="bomb" size={50} color={color.black} />
              <Text>HAHA</Text>
              <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>
            
            <View style={styles.warningsInner}>
              <FontAwesome5 name="spray-can" size={50} color={color.black} />
              <Text>HAHA</Text>
              <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>
            
            <View style={styles.warningsInner}>
              <Ionicons name="warning" size={50} color={color.black} />
              <Text>HAHA</Text>
              <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>

            <View style={styles.warningsInner}>
               <MaterialCommunityIcons name="propane-tank" size={50} color={color.black} />
               <Text>HAHA</Text>
               <MaterialCommunityIcons name="block-helper" size={70} color={color.red} style={styles.warningsIcons}/>
            </View>
            
          </View>
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
    justifyContent: 'space-between',
    gap: 50,
    marginTop: 50
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
  }
});