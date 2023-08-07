import {View, Text, Image} from 'react-native';
import React from 'react';

export default function IconContainer() {
  return (
    <View style={{alignSelf: 'center'}}>
      <Image
        source={require('../assets/images/BOXES.png')}
        style={{width: 220, height: 220}}
      />
    </View>
  );
}
