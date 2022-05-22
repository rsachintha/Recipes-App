import React from "react";
import { View, Text, StyleSheet } from "react-native";
import{Icon, withBadge} from 'react-native-elements';
import { colors,parameters } from "../global/styles";
import{DrawerNavigator} from'../navigation/DrawerNavigator'
import { NavigationContainer,DrawerActions,DefaultTheme, DarkTheme,useTheme } from "@react-navigation/native";


export default function HomeHeader({navigation}){
    
    const BadgeIcon = withBadge(0)(Icon)

    return(
        <View style={styles.header}>
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:15,paddingTop:32}}>
        <Icon 
        type="material-community"
        name="menu"
        color={colors.cardbackground}
        size={32}
        onPress={() => {
            navigation.toggleDrawer()
        }}
        />
        </View>
        <View style={{alignItems:'center',justifyContent:'center', paddingLeft:92,paddingTop:34}}>
            <Text style={{color:colors.cardbackground,fontSize:22,fontWeight:'bold'}}>Recipe Plaza</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center', paddingLeft:94,paddingTop:32,marginRight:45}}>
            <BadgeIcon 
            name='bookmark'
                size={32}
                color={colors.cardbackground}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        justifyContent:'space-between',
        marginTop:0,
        paddingTop:-10
    }
})

 