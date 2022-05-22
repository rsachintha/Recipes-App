import React, { useState } from "react";
import { View,Text,StyleSheet, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { colors } from "../../global/styles";

const ReviewsScreen =()=>{

   const [defaultRating,setdefaultRating] = useState(2)
   const [maxRating,setmaxRating] = useState([1,2,3,4,5])

   const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
   const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
   
   const CustomRatingBar = () =>{
       return(
           <View style={styles.CustomRatingBarStyle}>
                {
                    maxRating.map((item,key) =>{
                        return(
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={()=>setdefaultRating(item)}
                            >
                            <Image
                            style={styles.starImgStyle}
                            source={
                                item <= defaultRating
                                ? {uri: starImgFilled}
                                : {uri: starImgCorner}
                            }
                            />
                            </TouchableOpacity>
                        )
                    }
                    
                    )
                }
           </View>
       )
   }
   
   
   
   return(
       <SafeAreaView style={styles.container}>
           <Text style={[{...styles.textStyle}]}> Please Rate Us</Text>
           <CustomRatingBar/>
           <Text style={styles.textStyle}>
               {defaultRating + '/' + maxRating.length}
           </Text>
           <TouchableOpacity
           activeOpacity={0.7}
           style={styles.buttonStyle}
           onPress={() => alert(defaultRating)}
           >
           <Text style={{color:colors.cardbackground,fontWeight:'bold'}}>Get Selected Value</Text>
           </TouchableOpacity>
       </SafeAreaView>
    )

}
const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        margin:40,marginTop:20
    },
    textStyle:{
        textAlign:'center',
        fontSize:13,
        color:colors.grey3
    },
    CustomRatingBarStyle:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:30
    },
    starImgStyle:{
        width:40,
        height:40,
        resizeMode:'cover'
    },
    buttonStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        padding:15,marginHorizontal:30,
        backgroundColor:colors.buttons,borderRadius:15
    }
});
export default ReviewsScreen;

