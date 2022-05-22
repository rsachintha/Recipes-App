import React,{useState,useRef} from "react";
import { NavigationContainer,DrawerActions,DefaultTheme, DarkTheme } from "@react-navigation/native";
import { View,Text,StyleSheet,Dimensions,TextInput, Platform, TouchableOpacity, ImageBackground, ImageStore } from "react-native"
import { useTheme } from "react-native-paper";
import images from "../../src/global/images";
import * as Animatable from 'react-native-animatable'

import { Icon ,Button, SocialIcon} from 'react-native-elements'

import  Header  from '../../src/components/Header';
import { Caption, Title, TouchableRipple } from "react-native-paper";

export default function MyAccountScreen({navigation}){
    const {colors}=useTheme();
    return(
        <View style={styles.container}>
            <Header title="My Account" type="arrow-left" navigation={navigation}/>
            <View style={{margin:35}}>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{}}>
                   <View style={{
                       height:100,
                       width:100,
                       borderRadius:15,
                       justifyContent:'center',
                       alignItems:'center'
                   }}>
                       <ImageBackground
                       source={images.UserProfile2}
                       style={{height:110,width:110}}
                       imageStyle={{borderRadius:60}}
                       >
                       </ImageBackground>
                   </View>
                </TouchableOpacity>
                <Text style={{marginTop:16,fontSize:17,fontWeight:'bold'}}>John Mark</Text>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="location-on" color="#777777" size={20}/>
                    <Text style={{color:"#777777",marginLeft:20}}>Boston, USA</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="local-phone" color="#777777" size={20}/>
                    <Text style={{color:"#777777",marginLeft:20}}>+1 000 000</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20}/>
                    <Text style={{color:"#777777",marginLeft:20}}>johnmark@gmail.com</Text>
                </View>
            </View>
            <View style={styles.infoBoxWrapper}>
             <View style={[styles.infoBox,{
               borderRightColor:'#dddddd',
               borderRightWidth:1  
             }]}>
                 <Title>1</Title>
                 <Caption>Recipe</Caption>
             </View>
             <View style={styles.infoBox}>
                 <Title>0</Title>
                 <Caption>Collections</Caption>
             </View>
            </View>
            <View style={styles.menuWrapper}>
             <TouchableRipple onPress={()=>{navigation.navigate("BookmarkedRecipeScreen")}}>
                 <View style={styles.menuItem}>
                     <Icon  name="favorite-outline" color="#FF6347" size={25}/>
                     <Text style={styles.menuItemText}>Your Favorites</Text>
                 </View>
             </TouchableRipple>
             <TouchableRipple onPress={()=>{}}>
                 <View style={styles.menuItem}>
                     <Icon name="ios-share" color="#FF6347" size={25}/>
                     <Text style={styles.menuItemText}>Tell Your Friends</Text>
                 </View>
             </TouchableRipple>
             <TouchableRipple onPress={()=>{}}>
                 <View style={styles.menuItem}>
                     <Icon name="support" color="#FF6347" size={25}/>
                     <Text style={styles.menuItemText}>Support</Text>
                 </View>
             </TouchableRipple>
             <TouchableRipple onPress={()=>{navigation.navigate('SettingScreen')}}>
                 <View style={styles.menuItem}>
                     <Icon type="material-community" name="cog-outline" color="#FF6347" size={25}/>
                     <Text style={styles.menuItemText}>Settings</Text>
                 </View>
             </TouchableRipple>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    userInfoSection:{
        paddingHorizontal:10,
        marginBottom:10,
        paddingVertical:30
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
        //borderTopLeftRadius:20,
        //borderTopRightRadius:20,
        //shadowColor:'#000000',
        //shadowOffset:{width:0,height:0},
        //shadowRadius:5,
        //shadowOpacity:0.4,
    },
    caption:{
        fontSize:14,
        lineHeight:14,
        fontWeight:'500'
    },
    row:{
        flexDirection:'row',
        marginBottom:10
    },
    infoBoxWrapper:{
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        flexDirection:'row',
        height:100
    },
    infoBox:{
        width:'50%',
        alignItems:'center',
        justifyContent:'center'
    },
    menuWrapper:{
        marginTop:35,
        marginLeft:-25
    },
    menuItem:{
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:30
    },
    menuItemText:{
        fontSize:16,
        fontWeight:'600',
        color:'#777777',
        marginLeft:20,
        lineHeight:26
    },
    
})