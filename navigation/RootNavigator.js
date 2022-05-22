import React,{useEffect, useState} from "react";

import { NavigationContainer,DrawerActions,DefaultTheme, DarkTheme,useTheme } from "@react-navigation/native";

import AuthStack from "./authNavigators";
import { EventRegister } from "react-native-event-listeners";

export default function RootNavigator(){
    const{colors}=useTheme();
    const [darkApp, setDarkApp] = useState(false);
  const appTheme=darkApp?DarkTheme:DefaultTheme;
  useEffect(()=>{
      let eventListener= EventRegister.addEventListener(
          'changeThemeEvent',
          data => {
              setDarkApp(data)
          },
      );
      return()=>{
        EventRegister.removeEventListener(eventListener);
      };
  },[]);
    return(
        <NavigationContainer theme={appTheme}>
           <AuthStack/> 
        </NavigationContainer>
    )
}