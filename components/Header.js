import React from "react";

import { View,Text,StyleSheet,Dimensions, Touchable } from "react-native"

import { colors,parameters } from "../global/styles";

import { Icon } from 'react-native-elements';

import { NavigationContainer,DrawerActions,DefaultTheme, DarkTheme,useTheme } from "@react-navigation/native";

export default function Header({title,type,navigation}){
     
    return(
        <View style ={styles.header}>
        <View style={{marginLeft:15,marginTop:51}}>
            <Icon
            type="material-community"
            name={type}
            color={colors.headerText}
            size={28}
            onPress={()=>(navigation.goBack())}
            />
      </View>
      <View>
          <Text style={styles.headerText}>{title}</Text>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
header:{
flexDirection:'row',
backgroundColor:colors.buttons,
height:parameters.headerHeight,
},
headerText:{
color:colors.headerText,
fontSize:22,
fontWeight:'bold',
paddingTop:52,
marginLeft:101
}
})