import React, { useState } from "react";

import { View, Text, StyleSheet,StatusBar } from 'react-native'
import{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import{initializeApp} from 'firebase/app'
import{firebaseConfig} from './firebase-config';
import { SignInScreen } from "./src/screens/authScreens/SignInScreen";
import { colors } from "./src/global/styles";
import RootNavigator from "./src/navigation/RootNavigator";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


export default function App(){
  

  
  return(
    <View style={styles.container}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor={colors.statusbar}
      />
    <RootNavigator/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1}
})