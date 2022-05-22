import React,{useState,useContext,useEffect} from "react";

import{
    View,
    Text,
    Linking,
    Pressable,
    Alert,
    Switch,StyleSheet,
} from 'react-native';

import { DrawerContentScrollView,DrawerItemList,DrawerItem } from "@react-navigation/drawer";

import { Avatar,Button,Icon } from "react-native-elements";
import { colors } from "../global/styles";
import { images } from "../global";
import { EventRegister } from "react-native-event-listeners";

export default function DrawerContent(props){
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const[darkMode,setDarkMode]=useState(false);
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor:colors.buttons,marginBottom:5,paddingTop:20,marginTop:-50}}>
          <View style={{flexDirection:'row',alignItems:'center',paddingLeft:20,paddingVertical:15,marginBottom:-15,marginTop:20,paddingBottom:20}}>
              <Avatar
              rounded
              size={75}
              avatarStyle={styles.avatar}
              source={images.UserProfile2}
              />
              <View style={{marginLeft:15}}>
                <Text style={{fontWeight:'bold',color:colors.white,fontSize:18}}>John Mark</Text>  
                <Text style={{color:colors.white,fontSize:14}}>johnmark@gmail.com</Text>
              </View>

          </View>
          <View style={{flexDirection:"row",justifyContent:'space-evenly',marginRight:20,marginBottom:10}}>
          <View style={{flexDirection:'row',marginTop:10}}>
                  <View style={{marginLeft:10,alignItems:"center",justifyContent:"center"}}>
                     <Text style={{fontWeight:"bold",color:colors.white,fontSize:18}}>1</Text>
                     <Text style={{color:colors.white,fontSize:14}}>My Recipes</Text>
                  </View>
              </View>
              <View style={{flexDirection:'row',marginTop:10}}>
              <View style={{marginLeft:10,alignItems:"center",justifyContent:"center"}}>
                     <Text style={{fontWeight:"bold",color:colors.cardbackground,fontSize:18}}>0</Text>
                     <Text style={{color:colors.cardbackground,fontSize:14}}>My Collections</Text>
                  </View>
              </View>
          </View>
          </View>
          <DrawerItemList {...props} />
          
          <DrawerItem
          label= 'Help'
          icon ={({color,size})=>(
              <Icon
              type='material-community'
              name='lifebuoy'
              color={color}
              size={size}
              />
          )}
          />

        <View style={{borderTopWidth:1,borderTopColor:colors.grey5}}>
             <Text style={styles.preferences}>Preferences</Text>
             <View style={styles.switchText}>
                <Text style={styles.darkthemeText}>Dark Theme</Text>
                <View style={{paddingRight:10}}>
                  <Switch
                    value={darkMode}
                    onValueChange={(val)=>{
                     setDarkMode(val);
                     EventRegister.emit('changeThemeEvent',val);
                    }}
                  />
                </View>
             </View>
        </View>
              
        

          </DrawerContentScrollView>
          <DrawerItem
          style={{marginBottom:30}}
          label= 'Sign Out'
          icon ={({color,size})=>(
              <Icon
              type='material-community'
              name='logout-variant'
              color={color}
              size={size}
              />
          )}
          />
        </View>
    )
}




const styles=StyleSheet.create({
    container:{
        flex:1,
       
    },
    avatar:{
        borderWidth:4,
        borderColor:colors.white,

        
    },
    preferences:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:'bold'
    }
})