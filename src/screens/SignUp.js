import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import IconContainer from '../components/IconContainer';
import Title from '../components/Title';
import Emailinput from '../components/inputs/Emailinput';
import Password from '../components/inputs/Password';
import Button from '../components/buttons/Button';
import ThirdPartySignIn from '../components/buttons/ThirdPartySignIn';
import Username from '../components/inputs/Username';

const SignUp = ({navigation}) => {
  const handleSignUp = () => {
    console.log('Sign Up');
    navigation.navigate('Scenario');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['#7166F9', '#C6E6FF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
              marginHorizontal: 5,
            }}>
            <Image
              source={require('../assets/images/BackIcon.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <IconContainer />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Title title="SIGN UP" />
        </View>

        <View>
          <Username />
          <Emailinput />
          <Password />
        </View>

        <View>
          <Button title={'SIGN UP'} onPress={handleSignUp} />
        </View>
        <View>
          <ThirdPartySignIn
            title1={'Already have an account! '}
            title2={'Sign In'}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
