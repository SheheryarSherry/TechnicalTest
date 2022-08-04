import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

function Home({navigation}) {
  return (
    <View style={styles.main}>
      <Text
        style={{color: 'black'}}
        onPress={() => {
          navigation.navigate('GreatDesign');
        }}>
        Home
      </Text>
    </View>
  );
}

export default Home;
