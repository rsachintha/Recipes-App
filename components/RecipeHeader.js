import React,{useState,useEffect} from 'react'
import { ImageBackground, StyleSheet,Text,View } from 'react-native'
import { colors } from '../global/styles'
import { recipeData } from '../global/Data'
import { Icon } from 'react-native-elements'

export default function RecipeHeader({navigation,id}){

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
        <View style={styles.container}>
          <ImageBackground
          style={styles.container}
          source={recipeData[id].images}
          imageStyle={styles.image}
          >
         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:45}}>
             <View style={{margin:10,width:40,height:40,backgroundColor:colors.cardbackground,alignItems:'center',justifyContent:'center',borderRadius:20}}>
               <Icon
                 name='arrow-left'
                 type='material-community'
                 color={colors.buttons}
                 size={25}
                 onPress={()=>navigation.goBack()}
               />
             </View>
             <View style={styles.view3}>
             <Icon
                 name={bookmarked && (index2 == counter) ? "bookmark-multiple":"bookmark-multiple-outline"}
                 type='material-community'
                 color={colors.buttons}
                 size={25}
                 onPress={bookmarkHander}
               />
             </View>
         </View>     
        </ImageBackground>  
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
      height:270,
      marginTop:0
  },
  image:{
      borderTopLeftRadius:5,
      borderTopRightRadius:5
  },
  view1:{
      flexDirection:'row',
      alignItems:'baseline',
      justifyContent:'space-between'
  },
  view2:{
   margin:10,
   width:40,
   height:40,
   backgroundColor:colors.cardbackground,
   alignItems:'center',
   justifyContent:'center',
   borderRadius:20
  },
  view3:{
      marginTop:8,
      margin:10,
      width:40,
      height:40,
      backgroundColor:colors.cardbackground,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20
  },
  view4:{
      marginTop:0,
      alignItems:'center',
      justifyContent:'center'
  }
})