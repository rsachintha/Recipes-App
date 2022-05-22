import React from "react";
import { NavigationContainer,DrawerActions,DefaultTheme, DarkTheme,useTheme } from "@react-navigation/native";
import{View,Text,StyleSheet} from 'react-native'

export default function BookmarkedRecipeScreen(){
    const{colors} = useTheme();
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>My Bookmarked Recipes</Text>
        </View>
    )
}