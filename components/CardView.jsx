import { color } from '@/styles/color';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function CardView({name, image}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginRight: 10,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: color.white,

    shadowColor: color.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 160,
    height: 160,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  text: {
    fontSize: 16,
    fontWeight: 300,
  }
})