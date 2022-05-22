import React,{useState,useRef} from "react";

import { View,Text,StyleSheet,Dimensions,ImageBackground } from "react-native"

import { colors,parameters, title } from "../../global/styles";

import Header from "../../components/Header";
import * as Animatable from 'react-native-animatable'

import Swiper from "react-native-swiper";

import images from "../../../src/global/images";

import { Icon ,Button, SocialIcon} from 'react-native-elements'

export default function SignInWelcomeScreen({navigation}){
    return(
        <View style={{flex:1}}>
            <Header title="         Welcome"/>
            
            <View style={{flex:20,justifyContent:'center'}}>
             <Swiper autoplay={true}>
            <View style={styles.slide1}>
            <ImageBackground 
                    source={images.Firstbackground}
                    style={{height:"100%",width:"100%"}}
            >
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',paddingRight:190,paddingTop:380}}>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold',paddingRight:50}}>Cooking</Text>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold'}}>Experience</Text>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold',paddingLeft:18}}>Made Easy !</Text>
          </View></ImageBackground>
            
            </View>
            <View style={styles.slide2}>
            <ImageBackground 
                    source={images.Secondbackground}
                    style={{height:"100%",width:"100%"}}
            ><View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',paddingRight:190,paddingTop:380}}>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold',paddingRight:50}}>Cooking</Text>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold'}}>Experience</Text>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold',paddingLeft:18}}>Made Easy !</Text>
          </View>
          </ImageBackground>
            </View>
            <View style={styles.slide3}>
            <ImageBackground 
                    source={images.Thirdbackground}
                    style={{height:"100%",width:"100%"}}
            ><View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',paddingRight:190,paddingTop:380}}>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold',paddingRight:50}}>Cooking</Text>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold'}}>Experience</Text>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold',paddingLeft:18}}>Made Easy !</Text>
          </View>
          </ImageBackground>
            </View>
            <View style={styles.slide3}>
            <ImageBackground 
                    source={images.Fourthbackground}
                    style={{height:"100%",width:"100%"}}
            >
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',paddingRight:190,paddingTop:380}}>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold',paddingRight:50}}>Cooking</Text>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold'}}>Experience</Text>
            <Text style={{color:colors.white, fontSize:36,fontWeight:'bold',paddingLeft:18}}>Made Easy !</Text>
          </View>
          </ImageBackground>
            </View>
             </Swiper>
            </View>
            <View style={{flex:5.5}}>
            <View style={{marginHorizontal:20,marginTop:10}}>
                <Button
                title="SIGN IN"
                buttonStyle = {parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress = {()=>{
                  navigation.navigate("SignInScreen")
                }}
                />
            </View>
            <View style={{marginHorizontal:20,marginBottom:10}}>
    <Button
    title="Create an account"
    buttonStyle={styles.createButton}
    titleStyle={styles.createButtonTitle}
    onPress = {()=>{
        navigation.navigate("CreateAccountScreen")
      }}
    />
</View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6EB'
    },
    slide2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#97CAE5'
    },
    slide3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#92BBD9'
    },

    
    createButton:{
        backgroundColor: "white",
        alignContent: "center",
        justifyContent:"center",
        borderRadius:23,
        borderWidth:1,
        borderColor:"#2596be",
        height:40,
        paddingHorizontal:20,
        borderColor:colors.buttons,
        width:'85%',
        marginLeft:30,
        marginTop:20
    },

    createButtonTitle:{
        color:"#2596be",
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
})