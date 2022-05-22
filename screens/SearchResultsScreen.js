import React from "react";
import { StyleSheet,Text,View,Dimensions,FlatList } from "react-native";
import SearchResultCard from "../components/SearchResultCard";
import {TrendingCard,CategoryCard} from "../components"
import { recipeData } from "../global/Data";
import { colors } from "../global/styles";
import { productData } from "../global/Data";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SearchResultScreen = ({navigation,route}) =>{
    return(
        <View style={styles.container}>
            
            <View>
                <FlatList 
                style={{backgroundColor:colors.white}}
                data = {recipeData}
                keyExtractor={(item,index)=>index.toString()}
                renderItem = {({item,index})=>(
                    <SearchResultCard
                    screenwidth={SCREEN_WIDTH}
                    images={item.images}
                    averageReview={item.averageReview}
                    numberofReview={item.numberofReview}
                    recipeName={item.recipeName}
                    duration={item.duration}
                    serving={item.serving}
                    productData={item.productData}
                    onPressRecipeCard={()=>{navigation.navigate("RecipeHomeScreen",{id:index,recipe:item.recipeName})}}
                   />
                )}
                ListHeaderComponent={
                    <View>
            <Text style={styles.listHeader}>{recipeData.length} Result for {route.params.item}</Text>
            </View>
                }
                showsVerticalScrollIndicator = {false}
                />
            </View>
            
        </View>
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:0,
    },
    listHeader:{
        color:colors.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:30,
        fontWeight:"bold",
        paddingBottom:20,
        marginTop:20
    }
})