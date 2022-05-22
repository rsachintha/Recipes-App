import React,{useState} from "react";
import { ScrollView, StyleSheet,Text,View,Dimensions } from "react-native";
import RecipeHeader from "../components/RecipeHeader";
import { colors } from "../global/styles";
import { recipeData } from "../global/Data";
import { Icon } from "react-native-elements";
import { TabView,TabBar } from "react-native-tab-view";
import IngredientsScreen from "./RecipeTabs/IngredientsScreen";
import RecipeScreen from "./RecipeTabs/RecipeScreen";
import ReviewsScreen from "./RecipeTabs/ReviewsScreen";
import GalleryScreen from "./RecipeTabs/GalleryScreen";

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

const RecipeHomeScreen = ({navigation,route}) =>{

   const{id,recipe}=route.params

   const [routes] = useState([
       {key:'first',title:"Ingredients"},
       {key:'second',title:"Recipe"},
       {key:'third',title:"Reviews"},
       {key:'fourth',title:"Gallery"},
   ])

   const [index,setIndex] = useState(0)

   const renderTabBar = props =>(
       <TabBar
         {...props}
         indicatorStyle =  {{backgroundColor:colors.cardbackground}}
         tabStyle = {styles.tabStyle}
         scrollEnabled = {true}
         style = {styles.tab}
         labelStyle = {styles.tabLabel}
         contentContainerStyle = {styles.tabContainer}
       />
   )
    
   const UpdateRoute1 = () =>{
       return(
           <View>

           </View>
       )
   }

    return(
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <RecipeHeader id={id} navigation={navigation}/>

               <View style={styles.view2}>
                 <View style={styles.view3}>
                    <Text style={styles.text2}>{recipeData[id].recipeName}</Text>
                    <Text style={styles.text3}>{recipeData[id].foodType}</Text>
                    <View style={styles.view4}>
                      <Icon name="star" type="material-community" color={colors.grey3} size={15}/>
                      <Text style={styles.text4}>{recipeData[id].averageReview}</Text>
                      <Text style={styles.text5}>{recipeData[id].numberofReview}</Text>
                    </View>
                 </View>
                 <View style={styles.view5}>
                    <Text style={styles.text9}>Serving</Text>
                    <View style={styles.view7}>
                      <Text style={styles.text3}>{recipeData[id].serving}</Text>
                    </View>
                 </View>
                 <View style={styles.view8}>
                     <Text style={styles.text9}>Duration</Text>
                     <View style={styles.view9}>
                        <Text style={styles.text11}>{recipeData[id].duration}</Text>
                        <Text style={[{...styles.text8},colors.cardbackground]}>mins</Text>
                     </View>
                 </View>
               </View>
            </View>
            <View style={styles.view10}>
               <TabView 
               navigationState={{index,routes}}
               renderScene = {UpdateRoute1}
               onIndexChange = {setIndex}
               initialLayout = {initialLayout}
               renderTabBar = {renderTabBar}
               tabBarPosition = "top"
               />
            </View>
            {index === 0 &&
              <IngredientsScreen/>
            }
            {
                index === 1 &&
                <RecipeScreen/>
            }
            {
                index === 2 &&
                <ReviewsScreen/>
            }
            {
                index === 3 &&
                <GalleryScreen/>
            }
        </ScrollView>
    </View>
    )
}

export default RecipeHomeScreen
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:0
    },
    view1:{
        width:"100%",
        padding:3,
        alignItems:'center',
        justifyContent:'center'
    },
    text1:{
        color:"green",
        fontSize:14,
        fontWeight:'bold'
    },
    view2:{
        flexDirection:'row',
        flex:1,
        marginBottom:5,
        marginTop:8,
        marginHorizontal:10,
        justifyContent:'space-between'
    },
    view3:{
        flex:8
    },
    text2:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.grey1
    },
    text3:{
        fontSize:15,
        color:colors.grey3
    },
    view4:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5
    },
    text4:{
        fontSize:13,
        color:colors.grey3,
        marginLeft:2,
        
    },
    text5:{
        fontSize:13,
        color:colors.grey3,
        marginLeft:2,
        marginRight:5
    },
    text6:{
        fontSize:13,
        color:colors.grey3,
        marginLeft:2,
    },
    view5:{
        flex:3,
        alignItems:'center',
        marginTop:2,marginRight:10
    },
    view6:{
        fontSize:35,
        fontWeight:'bold',
        color:colors.grey1,
    },
    view7:{
        width:40,
        height:40,
        alignItems:'center',
        borderRadius:20,
        justifyContent:'space-around'
    },
    text7:{
        fontSize:14,
        fontWeight:'bold',
        color:colors.black,
        marginTop:5
    },
    text8:{
        fontSize:13,
        color:colors.cardbackground,
        marginBottom:5
    },
    view8:{
        flex:3,
        alignItems:'center',
        marginTop:2,marginRight:9
    },
    text9:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.grey1
    },
    view9:{
        width:40,
        height:40,
        backgroundColor:colors.buttons,
        alignItems:'center',
        borderRadius:20,
        justifyContent:'center'
    },
    text10:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.cardbackground,
        marginTop:5
    },
    text11:{
        fontSize:11,
        color:colors.cardbackground,
        marginTop:2,fontWeight:'bold'
    },
    view10:{
        elevation:10,
        backgroundColor:colors.pagebackground
    },
    view11:{
        backgroundColor:colors.buttons,
        height:50,
        alignContent:'center',
        marginBottom:0
    },
    view12:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text12:{
        padding:10,
        fontWeight:'bold',
        fontSize:18,
        color:colors.cardbackground
    },
    view13:{
        borderWidth:1,
        marginRight:10,
        borderColor:colors.cardbackground,
        borderRadius:6,
        paddingBottom:2
    },
    text13:{
        paddingHorizontal:3,
        fontWeight:'bold',
        fontSize:18,
        color:colors.cardbackground
    },
    tab:{
        paddingTop:0,
        backgroundColor:colors.buttons,
        justifyContent:'space-between',
        alignItems:'center'
    },
    tabContainer:{
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center'
    },
    tabLabel:{
        fontSize:10,
        fontWeight:'bold',
        color:colors.cardbackground
    },
    tabStyle:{
        width:SCREEN_WIDTH/4,
        maxHeight:45,
    }
    
})