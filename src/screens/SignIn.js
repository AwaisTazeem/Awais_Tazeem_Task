import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import IconContainer from '../components/IconContainer';
import Title from '../components/Title';
import Emailinput from '../components/inputs/Emailinput';
import Password from '../components/inputs/Password';
import CheckBox from '../components/inputs/CheckBoxInput';
import Button from '../components/buttons/Button';
import ThirdPartySignIn from '../components/buttons/ThirdPartySignIn';

const SignIn = ({navigation}) => {
  const handleSignIn = () => {
    console.log('Sign In');
    navigation.navigate('SignUp');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['#7166F9', '#C6E6FF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <IconContainer />
          <Title title="SIGN IN" />
        </View>
        <View>
          <Emailinput />
          <Password />
        </View>
        <View style={{width: '80%', alignSelf: 'center'}}>
          <CheckBox />
        </View>
        <View>
          <Button title={'SIGN IN'} onPress={handleSignIn} />
          <TouchableOpacity
            style={{
              width: '50%',
              alignSelf: 'flex-end',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 18,
                fontStyle: 'normal',
                fontWeight: '400',
                fontFamily: 'Inter',
              }}>
              Forget Password!
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <ThirdPartySignIn
            title1={'Don’t have an account! '}
            title2={'Sign Up'}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
