import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ThirdPartySignIn({title1, title2, onPress}) {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          color: '#FFF',
          fontSize: 20,
          fontStyle: 'normal',
          fontWeight: '700',
        }}>
        OR
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '50%',
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/Fb.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/Google.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/Insta.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,

          width: 'auto',
          alignSelf: 'center',
        }}>
        <Text style={{color: '#FFF', fontSize: 18, fontWeight: '400'}}>
          {title1}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: '#FFF', fontSize: 18, fontWeight: '600'}}>
            {title2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
