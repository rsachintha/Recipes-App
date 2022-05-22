import React,{useState,useRef} from "react";
import { NavigationContainer,DrawerActions,DefaultTheme, DarkTheme,useTheme } from "@react-navigation/native";
import { View,Text,StyleSheet,Dimensions,TextInput } from "react-native"
import { colors,parameters, title } from "../../global/styles";
import * as Animatable from 'react-native-animatable'
import { Icon ,Button, SocialIcon} from 'react-native-elements'
import  Header  from '../../components/Header';
import { Formik } from "formik";
import{getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import{initializeApp} from 'firebase/app'
import{firebaseConfig} from '../../../firebase-config';

export function SignInScreen({navigation}){

    const[email, setEmail] = React.useState('')
    const [password,setPassword]= React.useState('')

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(()=>{
            console.log("Account created !")
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() =>{
            console.log('Signed in !')
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error =>{
            console.log(error)
        })
    }
  
    const [passwordVisible, setPasswordVisible] = useState(true);

   const[textInput2Focused, setTextInput2Focused]=useState(false)

   const textInput1 = useRef(1)
   const textInput2 = useRef(2)

    return(
        <View style={styles.container}>
            
        <Header title="My Account" type="arrow-left" navigation={navigation}/>
        <View style={{marginLeft: 20, marginTop:35}}>
            <Text style={title}>Sign-In</Text>
        </View>
        <View style={{alignItems:'center',marginTop:30}}>
            <Text style={styles.text1}>Please enter your e-mail and password</Text>
            <Text style={styles.text1}>registered with your account</Text>
        </View>

        <Formik
            initialValues={{username:'',password:''}}
            onSubmit={(values)=>{
                 console.log(values)
            }}
            >
                { (props)=>
    <View>
         <View style={{marginTop:50}}>
            <View style={styles.TextInput2}>
            <Animatable.View animation={textInput2Focused?"":"fadeInLeft"}duration={400}>
                <Icon
                name="email"
                iconStyle={{color:colors.grey3}}
                type="material"
                style={{marginRight:7}}
                />
                </Animatable.View>
                <TextInput
                style={{width:'80%',marginRight:30}}
                placeholder="Email"
                ref={textInput1}
                onFocus={()=>{
                    setTextInput2Focused(false)
                }}
                onBlur={()=>{
                    setTextInput2Focused(true)
                }}
                onChangeText={(text)=>setEmail(text)}
                value={props.values.username}
                />
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
                onChangeText = {(text)=>setPassword(text)}
                value = {props.values.password}
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
        <View style={{marginTop:5}}>
              <Button 
              title="SIGN IN"
              buttonStyle={parameters.styledButton}
              titleStyle ={parameters.buttonTitle}
              onPress={handleCreateAccount}
              />
        </View>
    </View>    
           }    
            </Formik>


       
        <View style={{alignItems:"center", marginTop:25}}>
            <Text style={{...styles.text1, textDecorationLine:"underline"}}>Forgot Password ?</Text>
        </View>
        <View style={{alignItems:"center", marginTop:30,marginBottom:20}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>OR</Text>
        </View>
        <View style={{marginHorizontal:20, marginTop:5}}>
            <SocialIcon
            title="Sign In with Facebook"
            button
            type="facebook"
            style={styles.SocialIcon}
            onPress={()=>{}}
            />
        </View>
        <View style={{marginHorizontal:20, marginTop:15}}>
            <SocialIcon
            title="Sign In with Google"
            button
            type="google"
            style={styles.SocialIcon}
            onPress={()=>{}}
            />
        </View>

        <View style={{marginTop:29,marginLeft:35}}>
            <Text style={{...styles.text1,}}>New on Recipe Plaza ?</Text>
        </View>

<View style={{alignItems:"flex-end",marginHorizontal:30,marginTop:20}}>
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