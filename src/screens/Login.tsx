import React, { useEffect } from 'react';
import icon from '../../assets/icon.png';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';

function Login(): JSX.Element {
  useEffect(()=>{
    GoogleSignin.configure({
      webClientId: '475195821478-pvpug5c0c4vliifjk6hsi60hvnmsd7nd.apps.googleusercontent.com',
    });
  },[])
  const  onGoogleButtonPress= async()=>{
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
        <Text style={styles.bechdeText}>BechDe</Text>
      </View>
      <View style={styles.bottomHalf}>
        <TouchableOpacity style={styles.button} onPress={onGoogleButtonPress}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue with Phone</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  icon: {
    width: 400,
    height: 300,
  },
  bechdeText: {
    fontWeight: 'bold', // Make the text bold
    fontSize: 24, // Apply a custom font size
  },
});

export default Login;
