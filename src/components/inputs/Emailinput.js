import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import EmailIcon from '../../assets/icons/EmailIcon.svg';
export default function Emailinput() {
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
        source={require('../../assets/images/EmailIcon.png')}
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
        placeholder="Enter Your Email"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        underlineColorAndroid="transparent"
      />
    </View>
  );
}
