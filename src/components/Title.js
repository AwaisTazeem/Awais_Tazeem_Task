import {View, Text} from 'react-native';
import React from 'react';

export default function ({title}) {
  return (
    <View>
      <Text
        style={{
          fontSize: 28,
          fontWeight: '700',
          color: '#FFF',
          fontStyle: 'normal',
          fontFamily: 'public-sans',
        }}>
        {title}
      </Text>
    </View>
  );
}
