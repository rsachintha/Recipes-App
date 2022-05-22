import React  from "react";
import{
    View,
    TouchableOpacity,
    Image,
    Text,
    Platform,
    StyleSheet
} from 'react-native';

import { BlurView } from "expo-blur";

import { icons } from "../global";
import { colors, SIZES } from "../global/styles";

const RecipeCardDetails=({recipeItem})=>{
    return(
        <View
        style={{
            flex:1
        }}
        >
        {/*Name & Bookmark*/}
        <View
        style={{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between'
        }}
        >
            <Text
            style={{
                width:'70%',
                color:"white",
                fontSize:16
            }}
            >
            {recipeItem.name}
            </Text>
            <Image
            source={recipeItem.isBookmark ? icons.bookmark : icons.bookmarkFilled}
            style={{
                width:20,
                height:20,
                marginRight:8,
                tintColor: colors.buttons
            }}
            />
        </View>
        {/*Duration & Serving*/}
        <Text
        style={{
            color:colors.buttons,
            fontSize:14
        }}
        >
            {recipeItem.duration} | {recipeItem.serving} Serving
        </Text>
        </View>
    )
}
const RecipeCardInfo = ({recipeItem}) => {
    if(Platform.OS === 'ios'){
        return(
            <BlurView
            blurType="dark"
            style={styles.RecipeCardContainer}
            >
            <RecipeCardDetails 
            recipeItem={recipeItem}
            />
            </BlurView>
           )
    }else{
        return(
            <View
            style={{
                ...styles.RecipeCardContainer,
                backgroundColor: colors.transparentGray,
                borderRadius:SIZES.radius
            }}
            >
                <RecipeCardDetails 
            recipeItem={recipeItem}
            />
            </View>
    
        )
    }
   
}

const TrendingCard = ({containerStyle, recipeItem, onPress})=>{
    return(
    <TouchableOpacity
    style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight : 20,
        borderRadius: SIZES.radius,
        ...containerStyle
    }}
    onPress={onPress}
    >
        {/*Background Image*/}
        <Image
        source={recipeItem.image}
        resizeMode='cover'
        style={{
            width: 250,
            height: 350,
            borderRadius : SIZES.radius
        }}
        />
        {/*Category*/}
        <View
        style={{
            position:'absolute',
            top: 20,
            left: 15,
            paddingHorizontal: SIZES.radius,
            backgroundColor: colors.transparentGray,
            borderRadius: SIZES.radius
        }}
        >
        <Text
        style={{
          color: colors.white,
          fontSize:14,
          fontWeight:"bold"
        }}
        >
            {recipeItem.category}
        </Text>
        </View>
        {/*Card Info*/}
        <RecipeCardInfo 
        recipeItem={recipeItem}
        />
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    RecipeCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 12
    }
})
export default TrendingCard;