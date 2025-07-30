import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonView from '../../../../components/ButtonView';
import LinkView from '../../../../components/LinkView';
import ModalView from '../../../../components/ModalView';

export default function Index() {
  const { id } = useLocalSearchParams();

  const [modalVisible, setModalVisible] = useState(false);

  return (
      <SafeAreaView style={{flex : 1}}>
        <View style={styles.container}>
            <Text>Trip Details Here</Text>
            <LinkView href="/">Go To Home</LinkView>
            <ButtonView onPress={() => setModalVisible(true)}>Click Me Modal {id}</ButtonView>
            <ModalView
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
            />
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
});