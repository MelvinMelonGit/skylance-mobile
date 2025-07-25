import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

const placeholderImage = require('@/assets/images/splash-icon.png');

export default function CardView({children, onClick}) {
  return (
    <View style={styles.card}>
        <Image source={placeholderImage} style={styles.image} />
        <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 12,
    alignItems: 'center',
    borderRadius: 18,
    borderWidth: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderBottomWidth: 1,
  },
});