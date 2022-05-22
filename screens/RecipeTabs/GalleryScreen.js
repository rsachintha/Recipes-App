import React from "react";
import { View,Text,StyleSheet, Image, ImageBackground } from "react-native";
import { gallerydata } from "../../global/Data";
import { colors } from "../../global/styles";
const GalleryScreen=()=>{
    return(
        <View style={styles.container}>
          <View>
             {gallerydata.map((items)=>
             <View key = {items.id} style={styles.view1}>
                 <View style={styles.view2}>
                     <ImageBackground 
                     source={items.image} 
                     style={{
                        height: 270,width:350,    
                    }}
                    imageStyle={styles.imageStyle}/>
                 </View>
                 
             </View>
             )
             
             }
          </View>
        </View>
    )
}
export default GalleryScreen

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
        borderBottomColor:colors.grey5,alignContent:'center',justifyContent:'center'
    },
    text1:{
        color:colors.grey2,
        fontSize:15,
        fontWeight:'500'
    },
    imageStyle:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
})