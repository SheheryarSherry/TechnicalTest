import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import {styles} from './style';
import {SCREEN1, SCREEN2} from '../../constants/navigation';

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.btnContainer}>
        <Button
          title={'PublicApi'}
          btnStyle={styles.btn}
          onPress={() => {
            navigation.navigate(SCREEN1);
          }}
        />
        <Button
          title={'Redux'}
          btnStyle={styles.btn}
          onPress={() => {
            navigation.navigate(SCREEN2);
          }}
        />
        <Button
          title={'Design'}
          btnStyle={styles.btn}
          onPress={() => {
            console.log('Btn pressed');
          }}
        />
      </View>
    </View>
  );
}

export default Home;
