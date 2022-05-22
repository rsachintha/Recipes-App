import React from "react";
import { View,Text, StyleSheet, Image } from "react-native";
import { colors,FONTS } from "../../global/styles";
import { ingredientsData } from "../../global/Data";
import { Icon } from "react-native-elements";
const IngredientsScreen = () => {
    return(
        <View style={styles.container}>
          <View>
             {ingredientsData.map((items)=>
             <View key = {items.id} style={styles.view1}>
                 <View style={styles.view2}>
                     <Image source={items.icon} style={{
                        height: 40,
                        width: 40
                    }}/>
                  <Text style={[{...styles.text1},{textAlign:'left'}]}>    {items.description}</Text>
                  <View
                style={{
                    marginLeft:140,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                <Text
                style={{
                     ...FONTS.body3
                }}
                >
                    {items.quantity}
                </Text>
                
                </View>
                 </View>
                 
             </View>
             )
             
             }
          </View>
        </View>
    )
}

export default IngredientsScreen

const styles = StyleSheet.create({
    container:{
    flex:1,
    marginTop:5
    },
    view1:{paddingHorizontal:15},
    view2:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        padding:10,
        borderBottomColor:colors.grey5
    },
    text1:{
        color:colors.grey2,
        fontSize:16,
        fontWeight:'bold'
    }
})