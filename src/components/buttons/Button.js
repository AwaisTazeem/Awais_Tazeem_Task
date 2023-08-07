import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#FFDE77', '#FF9A0D']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          width: '90%',
          height: 60,
          alignSelf: 'center',
          borderRadius: 10,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Public-sans',
            fontSize: 20,
            fontStyle: 'normal',
            fontWeight: '700',
          }}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
