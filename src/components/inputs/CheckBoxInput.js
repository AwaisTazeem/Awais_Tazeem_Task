import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

export default function CheckBoxInput() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <CheckBox
        disabled={false}
        tintColors={{true: '#FFF', false: 'white'}}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
      <Text
        style={{
          color: '#FFF',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: '400',
          fontFamily: 'Inter',
        }}>
        I have accept term & conditions
      </Text>
    </View>
  );
}
