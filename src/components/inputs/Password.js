import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';

export default function Password() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        height: 60,
        borderRadius: 10,
        margin: 10,
      }}>
      <Image
        source={require('../../assets/images/Password.png')}
        style={{
          // padding: 10,
          // margin: 5,
          // height: 25,
          // width: 25,
          marginHorizontal: 10,
          // resizeMode: 'stretch',
          // alignItems: 'center',
        }}
      />
      <TextInput
        style={{
          flex: 1,
          color: 'rgba(0, 0, 0, 0.5)',
          fontSize: 18,
          fontFamily: 'public-sans',
        }}
        placeholder="Enter Your Password"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        underlineColorAndroid="transparent"
      />
      <Image
        source={require('../../assets/images/PassEye.png')}
        style={{
          height: 25,
          width: 30,
          marginHorizontal: 10,
          resizeMode: 'stretch',
          alignItems: 'center',
        }}
      />
    </View>
  );
}
