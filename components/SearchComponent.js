import React ,{useState,useRef, useEffect}from "react";
import{View,Text,StyleSheet,TouchableWithoutFeedback,Modal,FlatList,TouchableOpacity,TextInput, Image,Keyboard, SafeAreaView,ActivityIndicator} from 'react-native'
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import { filterData } from "../global/Data";
import  filter  from "lodash/filter";
import { exp } from "react-native-reanimated";


const SearchComponent = ({navigation}) =>{
    const [recipes,setRecipes] = useState();
    const [searchQuery,setSearchQuery]=useState('');
    const [numberOfRecipes,setNumberOfRecipes]=useState('1')
    const[loading,setLoading]=useState(false);
    const apiId='8cb5c7fb'
    const apiKey=`79a52658efb09f02dedf768278fe37d4`;
    const apiUrl=`https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${numberOfRecipes}&calories=591-722&health=alcohol-free`;
    async function apiCall(){
       setLoading(true);
       let resp = await fetch(apiUrl); 
       let respJson = await resp.json();
       setRecipes(respJson.hits);
       setLoading(false);
       Keyboard.dismiss()
       setSearchQuery('')
    }
    useEffect(()=>{
        setLoading(true)
        apiCall()
    },[])
    return(
        <View style={styles.container}>
            <View style={{marginRight:340,marginBottom:0,backgroundColor:colors.cardbackground,borderRadius:20,width:30,height:30,alignItems:'center',justifyContent:'center'}}>
            <Icon
            type="material-community"
            name="arrow-left"
            color={colors.buttons}
            size={28}
            onPress={()=>(navigation.goBack())}
            />
      </View>

            
            <Text style={{fontSize:21,fontWeight:'800',width:'90%',color:colors.buttons,marginLeft:60,marginVertical:-30}}>
             Which Recipe Would You Like to Search ?
            </Text>
            <View style={{display:'flex',flexDirection:'row',marginTop:50}}>
               <TextInput placeholder="Search Recipe"
               style={styles.inputField}
              onChangeText={text => setSearchQuery(text)}
               />
            <TextInput 
             onChangeText={text => setNumberOfRecipes(text)}
             style={[styles.inputField,{width:'20%',fontSize:18,marginLeft:15,color:colors.buttons,fontWeight:'bold'}]}
            value={numberOfRecipes}
             keyboardType='number-pad'
            />
            </View>
            <TouchableOpacity style={styles.button}
            onPress={apiCall} 
            title='submit'>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            <SafeAreaView style={{flex:1}}>
                {loading ? <ActivityIndicator size='large' color="#008080"/>:
                <FlatList
                style={styles.recipe}
                data={recipes}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                 <View
                 style={styles.recipe}>
                     <Image style={styles.image}
                     source={{uri:`${item.recipe.image}`}}
                     />
                     <View style={{padding:20,flexDirection:'row'}}>
                         <Text style={styles.label}>{item.recipe.label}</Text>
                         <TouchableOpacity onPress={() => {navigation.navigate('Details',{recipe:item.recipe})}}>
                             <Text style={{marginLeft:50,fontSize:20,color:colors.buttons}}>
                                 Details
                             </Text>
                         </TouchableOpacity>
                     </View>
                 </View> 
                )}
            keyExtractor={(item, index)=>index.toString()}/>}
            </SafeAreaView>

        </View>
    )
}

export default SearchComponent;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginTop:60
    },
    inputField:{
         height:'120%',
         width:'65%',
         backgroundColor:'white',
         marginTop:10,
         paddingLeft:15
    },
    buttons:{
       flexDirection:'row'
    },
    button:{
        backgroundColor:colors.buttons,
        width:'90%',
        alignItems:'center',
        margin:15,
        height:35,
        borderRadius:15,
        justifyContent:'center',
        marginTop:40
    },
    buttonText:{
    color:"white",
    fontSize:20,
    fontWeight:'bold'
    },
    image:{
     width:'100%',
     height:200,
     borderRadius:20
    },
    label:{
      fontSize:15,
      width:'60%',
      color:colors.buttons,
      fontWeight:'700'
    },
    recipe:{
     shadowColor:'black',
     shadowOpacity:0.26,
     shadowOffset:{width:0,height:2},
     shadowRadius:8,
     elevation:5,
     borderRadius:20,
     backgroundColor:'white',
     margin:-4,
     marginBottom:40
     },
    text:{
        color:colors.grey3,
        fontSize:16
    },

    TextInput:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor:'#86939e',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        width:'91.5%',
        height:50,
        marginBottom:30,
    },
    SearchArea:{
        marginTop:10,
        width:'91.5%',
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:'row',
        alignItems:'center',
        marginTop:75,
        marginLeft:18
    },
    searchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey2
    },
    view1:{
        height:50,
        justifyContent:'center',
        paddingHorizontal:5,
    },
    view2:{
        flexDirection:'row',
        padding:5,
        alignItems:'center',
    },
    icon2:{
        fontSize:24,
        padding:5,
        color:colors.grey2
    },
    modal:{
        flex:1,
        paddingTop:90,
        alignItems:'center'
    }
})