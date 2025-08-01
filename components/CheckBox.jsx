import { color } from '@/styles/color';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomCheckbox() {
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.outerRow}>
        <View style={styles.innerRow}>
            <TouchableOpacity onPress={() => setChecked(!checked)}>
                <View style={styles.outerBox}>
                    {checked && <View style={styles.innerBox} />}
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>I acknowledge my details above are correct.</Text>
        </View>
        <View style={styles.innerRow}>
            <TouchableOpacity onPress={() => setChecked(!checked)}>
                <View style={styles.outerBox}>
                    {checked && <View style={styles.innerBox} />}
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>I have read and acknowledged the above dangerous goods declaration.</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    outerRow: {
        width: '90%',
    },
    innerRow: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 15
    },
    outerBox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: color.gray,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerBox: {
        width: 16,
        height: 16,
        backgroundColor: color.intermediate,
        borderRadius: 1,
    },
    text: {
        fontSize: 16
    }
})
