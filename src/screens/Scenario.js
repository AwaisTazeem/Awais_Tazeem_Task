import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNFetchBlob from 'rn-fetch-blob';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

import CustomButton from '../components/CustomButton';

export default function Scenario({navigation}) {
  const handleDownload = async () => {
    try {
      let permissionResult;

      if (Platform.OS === 'android') {
        permissionResult = await request(
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        );
      } else if (Platform.OS === 'ios') {
        permissionResult = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      }

      if (permissionResult === RESULTS.GRANTED) {
        const fileUrl =
          'https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls';

        const fileName = 'example2.xls'; // Specify the filename here
        const downloadPath = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}`;

        const res = await RNFetchBlob.config({path: downloadPath}).fetch(
          'GET',
          fileUrl,
        );

        Alert.alert('Download Completed', `File saved at ${downloadPath}`);
      } else {
        Alert.alert(
          'Permission Denied',
          'Please allow storage permission to download the file.',
        );
      }
    } catch (error) {
      console.log('Download Error:', error);
      Alert.alert('Error', 'An error occurred during the download.');
    }
  };

  return (
    <LinearGradient
      colors={['#7166F9', '#C6E6FF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          marginHorizontal: 10,
          marginVertical: 10,

          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/images/BackIcon.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>

      <View style={styles.ButtonStyle}>
        <CustomButton title={'Download'} onPress={handleDownload} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  ButtonStyle: {
    alignItems: 'center',
    marginTop: '70%',
  },
});
