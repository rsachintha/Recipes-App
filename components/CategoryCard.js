import React from "react";
import{
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import { icons } from "../global";
import { colors, SIZES } from "../global/styles";

const CategoryCard = ({containerStyle, categoryItem, onPress}) =>
{
    return (
        <TouchableOpacity
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            marginTop: 10,
            borderRadius: SIZES.radius,
            backgroundColor: colors.gray2,
            ...containerStyle
        }}
        onPress={onPress}
        >{/*Image*/}
         <Image
         source={categoryItem.image}
         resizeMode='cover'
         style={{
             width: 100,
             height: 100,
             borderRadius: SIZES.radius
         }}
         />
         {/*Details*/}
         <View
         style={{
            width: '65%',
            paddingHorizontal: 20
        }}
         >
             {/*Name*/}
             <Text
             style={{
                 flex: 1,
                 fontSize:22
             }}
             >
                 {categoryItem.name}
             </Text>
           {/*Servings*/}
           <Text
           style={{
               color:colors.gray,
               fontSize:14
           }}
           >
           {categoryItem.duration} | {categoryItem.
           serving} Serving
           </Text>
             
         </View>
        </TouchableOpacity>
    )
}

export default CategoryCard;