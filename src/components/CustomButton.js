import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
      <Text style={styles.txtStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: 110,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    height: 40,
  },

  txtStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
