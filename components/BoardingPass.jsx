import { H2 } from '@/components/HeadingsView';
import { color } from '@/styles/color';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function BoardingPass({ boardingPass }) {
    return (
        <View style={styles.container}>
            <H2>#{boardingPass.flightNumber}</H2>
            <View style={styles.pass}>

                <View style={styles.inner}>
                    <Text style={styles.text}>Origin Airport</Text>
                    <Text style={styles.content}>{boardingPass.originAirportName}</Text>
                </View>
            
                <View style={styles.inner}>
                    <Text style={styles.text}>Aircraft</Text>
                    <Text style={styles.content}>{boardingPass.terminal}</Text>
                </View>
                
                <View style={styles.inner}>
                    <Text style={styles.text}>Destination Airport</Text>
                    <Text style={styles.content}>{boardingPass.destinationAirportName}</Text>
                </View>
                
                <View style={styles.inner}>
                    <Text style={styles.text}>Seat</Text>
                    {/* <Text style={styles.content}>{boardingPass.seatNumber}</Text> */}
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
        gap: 80,
        padding: 20,
        paddingVertical: 30,
    },
    inner: {
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
    },
    text: {
        textAlign: 'center',
        fontWeight: 500
    },
    content: {
        textAlign: 'center',
    }
})

// {
//   "status": "Success",
//   "count": 2,
//   "boardingPasses": [
//     {
//       "flightNumber": "SQ12",
//       "originAirportCode": "SIN",
//       "originAirportName": "Singapore Changi Airport",
//       "destinationAirportCode": "CBR",
//       "destinationAirportName": "Canberra International Airport",
//       "airline": "Singapore Airlines",
//       "aircraftModel": null,
//       "boardingTime": "2025-08-06T12:28:51.571715",
//       "gate": "7",
//       "seat": {
//         "id": "1694f848-03b4-48a9-9a34-9c9b268f4f21",
//         "flightDetail": {
//           "id": 6,
//           "aircraft": {
//             "id": "89c55497-5441-4488-91ac-109eff9ed6c1",
//             "airline": "Singapore Airlines",
//             "flightNumber": "SQ12",
//             "aircraftBrand": "Airbus",
//             "aircraftModel": "A350-900",
//             "seatCapacity": 303,
//             "seats": []
//           },
//           "originAirport": {
//             "id": "54624ace-44d8-4c04-9e06-443a8850bc3d",
//             "iataCode": "SIN",
//             "name": "Singapore Changi Airport",
//             "city": {
//               "id": "e2c72a25-4576-4f1a-ae77-46cb66166cd0",
//               "country": {
//                 "id": "354be882-0e6e-42e9-8a06-cb15b1d8d513",
//                 "name": "Singapore",
//                 "countryCode": "SG",
//                 "mobileCode": 65
//               },
//               "name": "Singapore"
//             },
//             "timeZone": "Asia/Singapore"
//           },
//           "destinationAirport": {
//             "id": "96df482a-877e-47aa-a68a-a0634b06f35c",
//             "iataCode": "CBR",
//             "name": "Canberra International Airport",
//             "city": {
//               "id": "bde3c37c-0420-4029-80a0-d643114d973a",
//               "country": {
//                 "id": "e3e9044c-e6a6-49de-960f-a412c7f2eaf8",
//                 "name": "Australia",
//                 "countryCode": "AU",
//                 "mobileCode": 61
//               },
//               "name": "Canberra"
//             },
//             "timeZone": "Australia/Sydney"
//           },
//           "departureTime": "2025-08-05T08:00:00",
//           "arrivalTime": "2025-08-05T17:00:00",
//           "isHoliday": false,
//           "flightStatus": "Scheduled",
//           "checkInCount": 201,
//           "seatsSold": 250,
//           "distance": 6300,
//           "numberOfCrew": 22,
//           "prediction": null,
//           "compensation": 1575,
//           "rebookingCompensation": 2362.5
//         },
//         "seatNumber": "40F",
//         "isAssigned": false
//       },
//       "terminal": "3"
//     },
//     {
//       "flightNumber": "KE85",
//       "originAirportCode": "ICN",
//       "originAirportName": "Incheon International Airport",
//       "destinationAirportCode": "CBR",
//       "destinationAirportName": "Canberra International Airport",
//       "airline": "Korean Air",
//       "aircraftModel": null,
//       "boardingTime": "2025-08-06T12:22:09.331248",
//       "gate": "17",
//       "seat": {
//         "id": "fa485c34-3378-417a-8e09-22997b7ca3b5",
//         "flightDetail": {
//           "id": 4,
//           "aircraft": {
//             "id": "78e8dd2c-c4e3-4b75-954c-7c286a087a59",
//             "airline": "Korean Air",
//             "flightNumber": "KE85",
//             "aircraftBrand": "Airbus",
//             "aircraftModel": "A350",
//             "seatCapacity": 325,
//             "seats": []
//           },
//           "originAirport": {
//             "id": "d2ded7ec-d677-4f4c-8de7-f23cc15099ff",
//             "iataCode": "ICN",
//             "name": "Incheon International Airport",
//             "city": {
//               "id": "6340bee8-2d46-43f8-872c-a84ee94148a4",
//               "country": {
//                 "id": "270d8021-99d7-4770-9599-5b323f82e2b1",
//                 "name": "South Korea",
//                 "countryCode": "KR",
//                 "mobileCode": 82
//               },
//               "name": "Seoul"
//             },
//             "timeZone": "Asia/Seoul"
//           },
//           "destinationAirport": {
//             "id": "96df482a-877e-47aa-a68a-a0634b06f35c",
//             "iataCode": "CBR",
//             "name": "Canberra International Airport",
//             "city": {
//               "id": "bde3c37c-0420-4029-80a0-d643114d973a",
//               "country": {
//                 "id": "e3e9044c-e6a6-49de-960f-a412c7f2eaf8",
//                 "name": "Australia",
//                 "countryCode": "AU",
//                 "mobileCode": 61
//               },
//               "name": "Canberra"
//             },
//             "timeZone": "Australia/Sydney"
//           },
//           "departureTime": "2025-08-08T06:45:00",
//           "arrivalTime": "2025-08-08T14:30:00",
//           "isHoliday": false,
//           "flightStatus": "Scheduled",
//           "checkInCount": 1,
//           "seatsSold": 0,
//           "distance": 7800,
//           "numberOfCrew": 14,
//           "prediction": null,
//           "compensation": 1950,
//           "rebookingCompensation": 2925
//         },
//         "seatNumber": "16E",
//         "isAssigned": false
//       },
//       "terminal": "1"
//     }
//   ]
// }