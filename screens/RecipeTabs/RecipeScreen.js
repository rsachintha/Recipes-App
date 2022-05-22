import React from "react";
import { NavigationContainer,DrawerActions,DefaultTheme, DarkTheme,useTheme } from "@react-navigation/native";
import{View,Text,StyleSheet} from 'react-native'
import { recipescreenData } from "../../global/Data";
import { colors } from "../../global/styles";

const RecipeScreen=()=>{
    return(
        <View style={styles.container}>
          <View>
             {recipescreenData.map((items)=>
             <View key = {items.id} style={styles.view1}>
                 <View style={styles.view2}>
                     <Text style={styles.text1}>{items.stepno}</Text>
                  <Text style={[{...styles.text1},{marginLeft:10}]}>{items.descriptionsteps}</Text>
                 </View>
                 
             </View>
             )
             
             }
          </View>
        </View>
    )
}
export default RecipeScreen

const styles = StyleSheet.create({
    container:{
    flex:1,
    marginTop:5
    },
    view1:{paddingHorizontal:5},
    view2:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1,
        padding:10,
        borderBottomColor:colors.grey5
    },
    text1:{
        color:colors.grey2,
        fontSize:15,
        fontWeight:'500'
    }
})