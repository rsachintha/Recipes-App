import React,{useState,useRef} from "react";
import { NavigationContainer,DrawerActions,DefaultTheme, DarkTheme,useTheme } from "@react-navigation/native";
import { View,Text,StyleSheet,Dimensions,TextInput } from "react-native"

import { colors,parameters, title } from "../../global/styles";

import * as Animatable from 'react-native-animatable'

import { Icon ,Button, SocialIcon} from 'react-native-elements'

import  Header  from '../../components/Header';
 
export function CreateAccountScreen({navigation}){
  
   const [passwordVisible, setPasswordVisible] = useState(true);
   const[textInput2Focused, setTextInput2Focused]=useState(false)

   const textInput1 = useRef(1)
   const textInput2 = useRef(2)

    return(
        <View style={styles.container}>
        <Header title="My Account" type="arrow-left" navigation={navigation}/>
        <View style={{marginLeft: 20, marginTop:35}}>
            <Text style={title}>Sign-Up</Text>
        </View>
        <View style={{alignItems:'center',marginTop:30, marginRight:207}}>
            <Text style={styles.text1}>New on Recipe Plaza ?</Text>
        </View>
        <View style={{marginTop:40}}>
            <View>
            <View style={styles.TextInput2}>
            <Animatable.View animation={textInput2Focused?"":"fadeInLeft"}duration={400}>
                <Icon
                name="phone"
                iconStyle={{color:colors.grey3}}
                type="material"
                style={{marginRight:7}}
                />
                </Animatable.View>
                <TextInput
                style={{width:'80%',marginRight:30}}
                placeholder="Mobile Number"
                ref={textInput1}
                keyboardType='number-pad'
                />
            </View>
            </View>
            <View>
            <View style={styles.TextInput2}>
            <Animatable.View animation={textInput2Focused?"":"fadeInLeft"}duration={400}>
                <Icon
                name="person"
                iconStyle={{color:colors.grey3}}
                type="material"
                style={{marginRight:7}}
                />
                </Animatable.View>
                <TextInput
                style={{width:'80%',marginRight:30}}
                placeholder="First Name"
                ref={textInput1}
                />
            </View>
            </View>
            <View>
            <View style={styles.TextInput2}>
            <Animatable.View animation={textInput2Focused?"":"fadeInLeft"}duration={400}>
                <Icon
                name="person"
                iconStyle={{color:colors.grey3}}
                type="material"
                style={{marginRight:7}}
                />
                </Animatable.View>
                <TextInput
                style={{width:'80%',marginRight:30}}
                placeholder="Last Name"
                ref={textInput1}
                />
                </View>
            </View>
            <View>
            <View style={styles.TextInput2}>
            <Animatable.View animation={textInput2Focused?"":"fadeInLeft"}duration={400}>
                <Icon
                name="email"
                size={22}
                iconStyle={{color:colors.grey3}}
                type="material"
                style={{marginRight:7}}
                />
                </Animatable.View>
                <TextInput
                style={{width:'80%',marginRight:30}}
                placeholder="Email"
                ref={textInput1}
                />
                </View>
            </View>
            <View style={styles.TextInput2}>
            <Animatable.View animation={textInput2Focused?"":"fadeInLeft"}duration={400}>
                <Icon
                name="lock"
                iconStyle={{color:colors.grey3}}
                type="material"
                style={{marginRight:7}}
                />
                </Animatable.View>
            <TextInput
                style={{width:"80%"}}
                secureTextEntry={passwordVisible}
                placeholder="Password"
                ref={textInput2}
                onFocus={()=>{
                    setTextInput2Focused(false)
                }}
                onBlur={()=>{
                    setTextInput2Focused(true)
                }}
                />
            

            <Animatable.View animation={textInput2Focused?"":"fadeInLeft"}duration={400}>
            <Icon
                name={passwordVisible? "visibility-off" :"visibility"}
                iconStyle={{color:colors.grey3}}
                type="material"
                style={{marginRight:10}}
                onPress={() => setPasswordVisible(!passwordVisible)}
                />
            </Animatable.View>
            </View>
        </View>
        <View style={{alignItems:"center", marginTop:10}}>
            <Text style={{...styles.text1}}>By creating or logging into an account you are</Text>
            <Text style={{...styles.text1}}>agreeing with our <Text style={[{...styles.text1},{color:colors.buttons},{textDecorationLine:'underline'}]}>Terms & Conditions</Text> and</Text>
            <Text style={[{...styles.text1},{color:colors.buttons},{textDecorationLine:'underline'}]}>Privacy Statement</Text>
        </View>
        <View style={{marginTop:10}}>
              <Button 
              title="Create my account"
              buttonStyle={parameters.styledButton}
              titleStyle ={parameters.buttonTitle}
              onPress={()=>{navigation.navigate('DrawerNavigator')}}
              />
        </View>
        
        <View style={{alignItems:"center", marginTop:35,marginBottom:20}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>OR</Text>
        </View>
        <View style={{alignItems:'center',marginTop:10, marginRight:20}}>
            <Text style={styles.text1}>Already have an account with Recipe Plaza ?</Text>
        </View>


<View style={{alignItems:"flex-end",marginHorizontal:30,marginTop:35}}>
    <Button
    title="Sign-In"
    buttonStyle={styles.createButton}
    titleStyle={styles.createButtonTitle}
    onPress = {()=>{
        navigation.navigate("SignInScreen")
      }}
    />
</View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text1:{
        color:colors.grey3,
        fontSize: 16
    },

    TextInput1:{
       borderWidth:1,
       borderColor:"#86939e",
       marginHorizontal:45,
       borderRadius:90,
       marginBottom:20,
       paddingLeft:12,
       paddingVertical:5,
       paddingBottom:5,
       
    },

    TextInput2:{
        borderWidth:1,
        borderRadius:90,
        marginHorizontal: 45,
        borderColor:"#86939e",
        flexDirection:'row',
        justifyContent: 'space-between',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:7,
        paddingVertical:5,
        paddingBottom:5,
        marginBottom:20
    },

    SocialIcon :{
       borderRadius: 20,
       height:50 
    },

    createButton:{
        backgroundColor: "white",
        alignContent: "center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#2596be",
        height:40,
        paddingHorizontal:20,
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