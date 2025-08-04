import { H2 } from '@/components/HeadingsView';
import { color } from '@/styles/color';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function BoardingPass({currentUser, currentFlight, id}) {
    return (
        <View style={styles.container}>
            <H2>{currentUser} - #{currentFlight.bookingReferenceNumber}</H2>
            <View style={styles.pass}>

                <View style={styles.inner}>
                <Text style={styles.text}>Departure Airport</Text>
                </View>
            
                <View style={styles.inner}>
                <Text style={styles.text}>Flight Number</Text>
                </View>
                
                <View style={styles.inner}>
                <Text style={styles.text}>Arrival Airport</Text>
                </View>
                
                <View style={styles.inner}>
                <Text style={styles.text}>Seat</Text>
                </View>
                
                <View style={styles.inner}>
                <Text style={styles.text}>Boarding Time</Text>
                </View>

                <View style={styles.inner}>
                <Text style={styles.text}>Gate</Text>
                </View>
                <Text>Please show this Pass when boarding</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth - 40,
        backgroundColor: color.white,
        paddingTop: 20,
        borderRadius: 10,
        shadowColor: color.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 2,
    },
    pass: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: 30,
        padding: 20,
        paddingVertical: 30,
    },
    inner: {
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 70,
    },
    text: {
        textAlign: 'center',
        fontWeight: 500
    }
})