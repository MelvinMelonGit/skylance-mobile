import { color } from '@/styles/color';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomCheckbox({children}) {
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.outerRow}>
        <View style={styles.innerRow}>
            <TouchableOpacity onPress={() => setChecked(!checked)}>
                <View style={styles.outerBox}>
                    {checked && <View style={styles.innerBox} />}
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>{children}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    outerRow: {
        // width: '90%',
    },
    innerRow: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 15,
        alignItems: 'center'
    },
    outerBox: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: color.gray,
        borderRadius: 2
    },
    innerBox: {
        width: 20,
        height: 20,
        backgroundColor: color.intermediate,
        borderRadius: 1,
    },
    text: {
        fontSize: 16
    }
})
