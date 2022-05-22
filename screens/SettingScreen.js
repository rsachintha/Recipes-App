import React,{useState,useRef} from "react";
import { NavigationContainer,DrawerActions,DefaultTheme, DarkTheme } from "@react-navigation/native";
import { View,Text,StyleSheet,Dimensions,TextInput, Platform, TouchableOpacity, ImageBackground, ImageStore } from "react-native"
import BottomSheet from 'reanimated-bottom-sheet'
import images from "../../src/global/images";
import * as Animatable from 'react-native-animatable'
import Animated from "react-native-reanimated";
import { Icon ,Button, SocialIcon, colors} from 'react-native-elements'
import { useTheme } from "react-native-paper";
import  Header  from '../../src/components/Header';
import * as ImagePicker from 'expo-image-picker';
export default function MyAccountScreen({navigation}){

    const [image, setImage] = useState(null);
    const choosePhotoFromLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      this.bs.current.snapTo(1)
    }
  };
  const takePhotoFromCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your camera!");
        return;}
    const result = await ImagePicker.launchCameraAsync();
console.log(result);

if (!result.cancelled) {
  setImage(result.uri);
  this.bs.current.snapTo(1)
}
};
   
   
    renderInner =()=>(
        <View style={styles.panel}>
            <View style={{alignItems:'center'}}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
          </View>
          <TouchableOpacity style={styles.panelButton} onPress ={takePhotoFromCamera}>
              <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
              <Text style={styles.panelButtonTitle}>Choose From Library</Text>
              
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.panelButton} 
          onPress={() => this.bs.current.snapTo(1)}>
              <Text style={styles.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
        
   );
        

    renderHeader =()=>(
       <View style ={styles.header}>
           <View style={styles.panelHeader}>
             <View style={styles.panelHandle}>

             </View>
           </View>
       </View>
   );

   bs = React.createRef();
   fall = new Animated.Value(1);

    return(
        <View style={styles.container}>
            <BottomSheet 
            ref={this.bs}
            snapPoints={[330,0]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
            />
            <Animated.View >
            <Header title="    Settings" type="arrow-left" navigation={navigation}/>
            <View style={{margin:35}}>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                   <View style={{
                       height:100,
                       width:100,
                       borderRadius:15,
                       justifyContent:'center',
                       alignItems:'center'
                   }}>
                       <ImageBackground
                       source={{uri:image}}
                       style={{height:110,width:110}}
                       imageStyle={{borderRadius:60}}
                       >
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="photo-camera" size={35} color="#fff" style={{
                            opacity:0.7,
                            alignItems:'center',
                            justifyContent:'center',
                            borderWidth:1,
                            borderColor:'#fff',
                            borderRadius:10
                        }}/>
                    </View>
                       </ImageBackground>
                   </View>
                </TouchableOpacity>
                <Text style={{marginTop:16,fontSize:17,fontWeight:'bold'}}>John Mark</Text>
            </View>
            <View style={styles.action}>
                <Icon name="person-outline" size={25}/>
                <TextInput 
                placeholder="First Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[styles.textInput,{color:colors.black}]}
                />
            </View>
            <View style={styles.action}>
                <Icon name="person-outline" size={25}/>
                <TextInput 
                placeholder="Last Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[styles.textInput,{color:colors.black}]}
                />
            </View>
            <View style={styles.action}>
                <Icon name="local-phone" size={25}/>
                <TextInput 
                placeholder="Phone Number"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[styles.textInput,{color:colors.black}]}
                />
            </View>
            <View style={styles.action}>
                <Icon name="email" size={25}/>
                <TextInput 
                placeholder="E-mail"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[styles.textInput,{color:colors.black}]}
                />
            </View>
            <View style={styles.action}>
                <Icon type="material-community" name="earth" size={25}/>
                <TextInput 
                placeholder="Country"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[styles.textInput,{color:colors.black}]}
                />
            </View>
            <View style={styles.action}>
                <Icon name="location-on" size={25}/>
                <TextInput 
                placeholder="City"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[styles.textInput,{color:colors.black}]}
                />
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
            </View>
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    commandButton:{
        padding:15,
        borderRadius:10,
        backgroundColor:'#FF6347',
        alignItems:'center',
        marginTop:30,
    },
    panel:{
        padding:20,
        backgroundColor:"#FFFFFF",
        paddingTop:20,
        //borderTopLeftRadius:20,
        //borderTopRightRadius:20,
        //shadowColor:'#000000',
        //shadowOffset:{width:0,height:0},
        //shadowRadius:5,
        //shadowOpacity:0.4,
    },
    header:{
        backgroundColor:"#FFFFFF",
        shadowColor:"#333333",
        shadowOffset:{width:-1,height:-3},
        shadowRadius:2,
        shadowOpacity:0.4,
        elevation:5,
        paddingTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    panelHeader:{
        alignItems:'center'
    },
    panelHandle:{
        width:40,
        height:8,
        borderRadius:4,
        backgroundColor:"#00000040",
        marginBottom:10
    },
    panelTitle:{
        fontSize:27,
        height:35
    },
    panelSubtitle:{
        fontSize:14,
        height:30,
        color:'gray',
        marginBottom:10
    },
    panelButton:{
        padding:13,
        borderRadius:10,
        backgroundColor:"#FF6347",
        alignItems:'center',
        marginVertical:7
    },
    panelButtonTitle:{
        fontSize:17,
        fontWeight:'bold',
        color:'white'
    },
    action:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2",
        paddingBottom:-5
    },
    actionError:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#FF0000',
        paddingBottom:5
    },
    textInput:{
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft:10,
        color:'#05375a'
    }
})