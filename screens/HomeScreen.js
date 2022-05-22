import React, { useState } from "react";
import { NavigationContainer,DrawerActions,DefaultTheme, DarkTheme,useTheme } from "@react-navigation/native";
import { View,Text,StyleSheet,FlatList, TouchableOpacity,TextInput,ScrollView,Pressable,Image, StatusBar } from "react-native"
import { SafeAreaView } from "react-navigation";
import { colors,parameters,SIZES,FONTS } from "../global/styles";
import { filterData } from "../global/Data";
import { Icon } from 'react-native-elements';
import HomeHeader from "../components/HomeHeader";
import {TrendingCard,CategoryCard} from "../components"
import { icons,images,dummyData } from "../global";


const Home = ({ navigation }) => {

    function renderHeader(){
          
    
        const [indexCheck,setIndexCheck] = useState("0")
      
        return(
            
            <View style ={styles.container}>
                
                <HomeHeader navigation={navigation} />
            <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator = {false}
            >
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Categories</Text>
            {/*View All*/}
            <TouchableOpacity
            onPress={()=>{navigation.navigate('SearchScreen')}}
            >
                    <Text
                    style={{
                        color: colors.gray,
                        fontSize:14,
                        marginLeft:341,
                        marginTop:-20
                    }}
                    >
                        View All
                        </Text>
                </TouchableOpacity>  
          </View>
          <View style={{marginLeft:10}}>
           <FlatList
           horizontal={true}
           showsHorizontalScrollIndicator ={false}
           data={filterData}
           keyExtractor={(item)=>item.id}
           extraData={indexCheck}
           renderItem = {({item,index})=>(
           <Pressable
             onPress={()=>{setIndexCheck(item.id)}}
           >
               <View style={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
               <Image 
               style={{height:70,width:70}}
               source={item.image}
               />
               <View>
                   <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected}:{...styles.smallCardText}}>{item.name}</Text>
               </View>
               </View>
           </Pressable>
           )}
           />
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Trending Recipes</Text>
            <FlatList
             data={dummyData.trendingRecipes}
             horizontal
             showsHorizontalScrollIndicator={false}
             keyExtractor={item => `${item.id}`}
             renderItem={({item, index}) =>{
             return(
              <TrendingCard
              containerStyle={{
                  marginLeft: index == 0 ? SIZES.
                  padding : 0
              }}
              recipeItem={item}
              onPress={()=>navigation.navigate("Recipe",{recipe: item})}
              />
             )
            }}
            />  
          </View>
          </ScrollView>
          </View>
         
        )
    }
    
    
    
    function renderCategoryHeader(){
      
        return(
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
                marginHorizontal: SIZES.padding
            }}
            >

            {/*Section Title*/}
            <Text
            style={{
                flex: 1,
                ...FONTS.h2
            }}>
            Categories
            </Text>

            {/*View All*/}
            <TouchableOpacity>
                <Text
                style={{
                    color: colors.gray,
                    ...FONTS.body4,
                    marginRight:5
                }}
                >
                    View All
                    </Text>
            </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView
        style ={{
            flex: 1,
            backgroundColor: colors.white
        }}
        >
        <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
            <View style={{marginTop:-30}}>
             {/*Header*/}
             {renderHeader()}

            

             
             {/*Category Header*/}
             {renderCategoryHeader()}
            </View>
        }
        renderItem={({item}) => {
         return(
             <CategoryCard
             containerStyle={{
                 marginHorizontal : SIZES.padding
             }}
             categoryItem={item}
             onPress={()=>navigation.navigate("Recipe",{recipe: item})}
             />
         )
        }} 
        ListFooterComponent={
           <View
           style ={{
               marginBottom: 100
           }}
           />
        }
        />
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
            headerText:{
                color:colors.grey1,
                fontSize:22,
                fontWeight:'bold',
                paddingLeft:20,
                marginTop:2,

            },
            headerTextView:{
                backgroundColor:colors.grey5,
                paddingVertical:-9,
                
            },
    
            smallCard :{
              borderRadius:20,
              backgroundColor:colors.grey5,
              justifyContent:"center",
              alignItems:'center',
              padding:5,
              width: 100,
              margin:10,
              height:100 
            },
            smallCardSelected:{
                borderRadius:20,
                backgroundColor:colors.buttons,
                justifyContent:"center",
                alignItems:'center',
                padding:5,
                width: 100,
                margin:10,
                height:100   
            },
            smallCardText:{
                fontWeight:'bold',
                color:colors.grey2,
                 
             },
            smallCardTextSelected:{
               fontWeight:'bold',
               color:colors.cardbackground,
    
            }
    
    })