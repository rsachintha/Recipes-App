import React, { useRef ,useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform,FlatList,StyleSheet
} from 'react-native';

import { BlurView } from "expo-blur";
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { SIZES,FONTS,colors} from "../../src/global/styles";
import BottomSheet from 'reanimated-bottom-sheet'
import { icons } from "../global";
import Animated from "react-native-reanimated";
import { Viewers } from "../../src/components";
import { Icon } from 'react-native-elements';

const HEADER_HEIGHT =350;

const RecipeCreatorCardDetail = ({selectedRecipe},{navigation})=>{
    return(
        <View
        style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }}
        >
         {/*Profile Photo*/}
         <View
         style={{
             width: 40,
             height: 40,
             marginLeft: 20
         }}
         >

             <Image
             source={selectedRecipe?.author?.profilePic}
             style={{
                 width: 40,
                 height: 40,
                 borderRadius: 20
             }}
             />
         </View>
         {/*Labels*/}
         <View
         style={{
             flex:1,
             marginHorizontal:20
         }}
         >
         <Text style={{color:colors.lightGray2, ...FONTS.
            body4}}>Recipe by :</Text>
         <Text style={{color: colors.white2, ...FONTS.h3}}>{selectedRecipe?.author?.name}</Text>
         </View>
         {/*Button*/}
         <TouchableOpacity
         style={{
             width:30,
             height: 30,
             alignItems:'center',
             justifyContent: 'center',
             marginRight: 20,
             borderRadius :5,
             borderWidth: 1,
             borderColor: colors.lightGreen1
         }}
         >
         <Image
         source={icons.rightArrow}
         style={{
             width: 15,
             height: 15,
             tintColor: colors.lightGreen1
         }}
         />
         </TouchableOpacity>
        </View>
    )
}

const RecipeCreatorCardInfo = ({selectedRecipe})=>{
    if(Platform.OS == 'ios'){
    return(
<BlurView
style={{
    flex: 1,
    borderRadius: SIZES.radius
}}
blurType="dark"
>
<RecipeCreatorCardDetail
  selectedRecipe={selectedRecipe}
/>
</BlurView>
    )
}else{
    return(
<View
style={{
    flex: 1,
    borderRadius: SIZES.radius,
    backgroundColor: colors.transparentBlack9
}}
>
<RecipeCreatorCardDetail
  selectedRecipe={selectedRecipe}
/>
</View>
    )
}
}
 
const Recipe = ({navigation, route}) => {

const[selectedRecipe, setSelectedRecipe] = React.useState(null)

const scrollY = useRef(new Animated.Value(0)).current;


React.useEffect(()=>{
    let{ recipe } = route.params
    setSelectedRecipe(recipe)
},[])

function renderHeaderBar(){
    const index2 = 10
    const [bookmarked,setBookmarked]=useState(false)
    const [counter,setCounter]=useState(-2)
    const[visible,setVisible] = useState(false)

    const bookmarkHander=()=>{
        if(bookmarked == false)
        setVisible(true)

        setBookmarked(!bookmarked)
        setCounter(index2)
    }
    return(
        <View
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 90,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.padding,
            paddingBottom: 10
        }}
        >
         {/*Screen Overlay*/}
         <Animated.View
             style={{
             position: 'absolute',
             top: 0,
             left: 0,
             right: 0,
             bottom: 0,
             backgroundColor: colors.black,
             opacity: scrollY.interpolate({
                 inputRange: [HEADER_HEIGHT - 100,
                HEADER_HEIGHT - 70],
                outputRange: [0,1]
             })
             
         }}
         /> 
         {/*Header Bar Title*/}
         <Animated.View
         style={{
             position: 'absolute',
             top: 0,
             left: 0,
             right: 0,
             bottom: 0,
             alignItems: 'center',
             justifyContent: 'flex-end',
             paddingBottom: 10,
             opacity: scrollY.interpolate({
                 inputRange: [HEADER_HEIGHT - 100,
                HEADER_HEIGHT - 50],
                outputRange: [0,1]
             }),
             transform: [
                 {
                     translateY: scrollY.interpolate({
                       inputRange: [HEADER_HEIGHT - 100,
                    HEADER_HEIGHT - 50],
                      outputRange : [50, 0],
                      extrapolate:'clamp'
                     })
                 }
             ]
         }}
         >
         <Text style={{color:colors.lightGray2,
         ...FONTS.body4}}>Recipe by:</Text>
         <Text style={{color:colors.white2,
         ...FONTS.h3}}>{selectedRecipe?.author?.name}</Text>
         </Animated.View>

         {/*Back Button*/}
         <TouchableOpacity
         style={{
             alignItems: 'center',
             justifyContent: 'center',
             height: 35,
             width: 35,
             borderRadius: 20,
             borderWidth: 1,
             borderColor: colors.lightGray,
             backgroundColor: colors.transparentBlack5
         }}
         onPress={() => navigation.goBack()}
         >
         <Image 
         source={icons.back}
         style={{
             width: 15,
             height: 15,
             tintColor: colors.lightGray
         }}
         />
         </TouchableOpacity>

         {/*Bookmark*/}
         <TouchableOpacity
         style={{
             alignItems: 'center',
             justifyContent: 'center',
             height: 35,
             width: 35,
             borderRadius: 18,
             borderWidth: 1,
             borderColor: colors.lightGray,
             backgroundColor: colors.transparentBlack5
         }}
         onPress={()=> <Image source={require("../../src/assets/bookmark-filled.png")}/>}
         >
         <Icon
                 name={bookmarked && (index2 == counter) ? "bookmark-multiple":"bookmark-multiple-outline"}
                 type='material-community'
                 color={colors.buttons}
                 size={25}
                 onPress={bookmarkHander}
               />
         </TouchableOpacity>

        </View>
    )
}

function renderRecipeCardHeader(){
    return(
        <View
        style={{
            marginTop: -1000,
            paddingTop: 1000,
            alignItems:'center',
            overflow: 'hidden'
        }}
        >
     {/*Background Image*/}
     <Animated.Image 
     source={selectedRecipe?.image}
     resizeMode="contain"
     style={{
         height: HEADER_HEIGHT,
         width: "200%",
         transform: [
             {
                 translateY: scrollY.interpolate({
                     inputRange:[-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                     outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                 })
             },
             {
                 scale: scrollY.interpolate({
                     inputRange: [-HEADER_HEIGHT,0,
                    HEADER_HEIGHT],
                    outputRange: [2, 1, 0.75]
                 })
             }
         ]
     }}
     />

     {/*Recipe Creator Card*/}
     <Animated.View
     style={{
         position: "absolute",
         bottom: 10,
         left: 30,
         right: 30,
         height: 80,
         transform:
         [
             {
                 translateY: scrollY.interpolate({
                     inputRange:[0,170, 250],
                     outputRange: [0,0,100],
                     extrapolate: 'clamp'
                 })
             }
         ]
     }}
     >
     <RecipeCreatorCardInfo
     selectedRecipe={selectedRecipe}
     />
     </Animated.View>
        </View>
    )
}

function renderRecipeInfo(){
    return(
        <View
        style={{
            flexDirection: 'row',
            height: 130,
            width: SIZES.width,
            paddingHorizontal : 20,
            alignItems: 'center'
        }}
        >
        {/*Recipe*/}
        <View
        style={{
            flex: 1.5,
            justifyContent:'center'
        }}
        >
        <Text style={{...FONTS.h2}}>{selectedRecipe?.name}</Text>
        <Text
        style={{
            marginTop: 5,
            color: colors.lightGray2,
            ...FONTS.body4
        }}
        >
            {selectedRecipe?.duration} | 
            {selectedRecipe?.serving} Serving
        </Text>
        
        </View>

        {/*Viewers*/}
        <View
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
        >
        <Viewers 
         viewersList={selectedRecipe?.viewers}
        />
        </View>
        </View>
    )
}

function renderIngredientHeader(){
    return(
        <View
        style={{
            flexDirection:'row',
            paddingHorizontal: 30,
            marginTop: SIZES.radius,
            marginBottom: SIZES.padding
        }}
        >
        <Text
        style={{
            flex: 1,
            ...FONTS.h3
        }}
        >
            Ingredients
        </Text>

        <Text
        style={{
            color: colors.lightGray2,
            ...FONTS.body4
        }}
        >
           {selectedRecipe?.ingredients.lenght} items
        </Text>
        </View>
    )
}



function renderStepsInfo(){
    return(
        <View
        style={{
            flexDirection:'row',
            paddingHorizontal: 30,
            marginTop: SIZES.radius,
            marginBottom: SIZES.padding
        }}
        >
        
       </View>
    )

}

return (

    <View
        style={{
            flex: 1,
           backgroundColor: colors.white,
        }}
    >
        
        <FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={item=>`${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
            
            <View>
                {/*Header*/}
                {renderRecipeCardHeader()}

                {/*Info*/}
                {renderRecipeInfo()}

                {/*Ingredient Title*/}
                {renderIngredientHeader()}
                
                
            </View>
            
            
        }
       
        renderItem={({item})=>(
            <View
                style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                marginVertical: 5,
                marginBottom:20
                }}
            >
                {/*Icon*/}
                <View
                style={{
                    alignItems:'center',
                    justifyContent: 'center',
                    height: 50,
                    width: 50,
                    borderRadius: 5,
                    backgroundColor:colors.lightGray
                }}
                >
                    <Image
                    source={item.icon}
                    style={{
                        height: 40,
                        width: 40
                    }}
                    />
                </View>

                {/*Description*/}
                <View
                style={{
                    flex: 1,
                    paddingHorizontal: 20,
                    justifyContent: 'center'
                }}
                >
                <Text
                style={{
                   ...FONTS.body3
                }}
                >
                {item.description}
                </Text>
                </View>

                {/*Quantity*/}
                <View
                style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}
                >
                <Text
                style={{
                     ...FONTS.body3
                }}
                >
                    {item.quantity}
                </Text>
                
                </View>
                 
           
            </View>
            
            
        )}
        
        />
       
        
        {/*Header Bar*/}
        {renderHeaderBar()}
       {renderStepsHeader({navigation})}
      {/*Info*/}
      {renderStepsInfo()}
    </View>
    
    
)
 function renderStepsHeader({navigation}){
    renderInner =()=>(
        <View style={styles.panel}>
            <View>
   <TouchableOpacity 

 onPress={() => this.bs.current.snapTo(1)}>
     <Icon name='chevron-down' type='material-community'/>
 </TouchableOpacity>
 </View>
          <FlatList
        data={selectedRecipe?.steps}
        keyExtractor={item=>`${item.id}`}
        showsVerticalScrollIndicator={false}
        
        renderItem={({item})=>(
        <View 
            style={{
                flexDirection: 'row',
                paddingHorizontal: -10,
                marginVertical: 0,
                marginBottom:40
            }}
            >
                {/*Steps Number*/}
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                <Text style={{fontSize:15,alignItems:'center',fontWeight:"bold"}}
                >
               {item.stepno}
                </Text>
            </View>
            {/*Steps Description*/}
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',marginLeft:10
                }}
                >
                <Text style={{fontSize:15,alignItems:'center'}}
                >
               {item.descriptionsteps}
                </Text>
            </View>
            
           
        </View>
        
        )}
        
        />
        
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
        <View
        style={{
            flexDirection:'row',
            paddingHorizontal: -10,
            marginTop: SIZES.radius,
            marginBottom: -11
        }}
        ><BottomSheet 
        ref={this.bs}
        snapPoints={[330,0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
        />
            <TouchableOpacity
            style={{backgroundColor:colors.buttons,borderRadius:25,paddingHorizontal:60,marginLeft:125,
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 5,
                marginTop: 5,
                marginBottom: 9,}}
                onPress={() => this.bs.current.snapTo(0)}>
        <Text
        style={{
           alignItems:'center',
            color:colors.white,
            paddingVertical:-5,
            fontSize:17,
            fontWeight:'bold'
        }}
        >
            Start
        </Text>
       
        </TouchableOpacity>
       
        </View>
       
        
    )

}

}




export default Recipe;

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
        fontSize:13,
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