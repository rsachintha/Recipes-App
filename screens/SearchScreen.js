import React from "react";

import{View,Text,StyleSheet,FlatList,TouchableWithoutFeedback,TouchableOpacity,ImageBackground, Dimensions} from 'react-native'
import { Icon } from "react-native-elements";
import SearchComponent from "../components/SearchComponent";
import { filterData2 } from "../global/Data";
import { colors } from "../global/styles";

const SCREEN_WIDTH=Dimensions.get('window').width;

export default function SearchScreen({navigation}){

    return(
        <View style={{flex:1,marginBottom:10,marginTop:35}}>
            <View style={{marginTop:8,marginLeft:5}}>
                <TouchableOpacity
                style={{backgroundColor:colors.buttons,
                    width:'90%',
                    alignItems:'center',
                    margin:15,
                    height:35,
                    borderRadius:15,
                    justifyContent:'center',
                    marginTop:20,marginRight:30}}
                    title='submit'
                    onPress={()=>{navigation.navigate('SearchComponent')}}
                    >
                 
                <Text style={{color:"white",marginBottom:-28,
    fontSize:20,
    fontWeight:'bold'}}>Start Searching</Text><Icon name="search" type="material" color={colors.cardbackground} style={{marginLeft:240,paddingTop:5}}/>
                </TouchableOpacity>
            </View>
            <View style={{}}>
                <View>
              <FlatList
              style={{}}
              data={filterData2}
              keyExtractor={item=>item.id}
              renderItem={({item,index})=>(
                  <TouchableWithoutFeedback
                  onPress={()=>{
                        navigation.navigate("SearchResultScreen",{item:item.name})
                  }}
                  >
                      <View style={styles.imageView}>
                          <ImageBackground
                              style={styles.image}
                              source={item.image}
                              >
                              <View style={styles.textView}>
                                  <Text style={{color:colors.cardbackground,fontWeight:"bold"}}>{item.name}</Text>
                              </View>
                          </ImageBackground>
                      </View>
                  </TouchableWithoutFeedback>
              )}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              ListHeaderComponent={<Text style={styles.listHeader}>Top Categories</Text>}
              ListFooterComponent={<Footer/>}
              />
            </View>
        </View>
        </View>
    )
}

const Footer=()=>{
    return(
        <View style={{marginTop:2,marginBottom:20}}>
        <View style={{}}>
      <FlatList
      style={{marginBottom:10}}
      data={filterData2}
      keyExtractor={item=>item.id}
      renderItem={({item,index})=>(
          <TouchableWithoutFeedback
          onPress={()=>{
            navigation.navigate("SearchResultScreen",{item:item.name})
      }}
          >
              <View style={styles.imageView}>
                  <ImageBackground
                      style={styles.image}
                      source={item.image}
                      >
                      <View style={styles.textView}>
                          <Text style={{color:colors.cardbackground, fontWeight:"bold"}}>{item.name}</Text>
                      </View>
                  </ImageBackground>
              </View>
          </TouchableWithoutFeedback>
      )}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      ListHeaderComponent={<Text style={styles.listHeader}>More Categories</Text>}
      />
    </View>
</View>
    )
}

const styles=StyleSheet.create({

imageView:{
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    width:SCREEN_WIDTH*0.4475,
    height:SCREEN_WIDTH*0.4475,
    marginLeft:SCREEN_WIDTH*0.035,
    marginBottom:SCREEN_WIDTH*0.035
},

image:{
    height:SCREEN_WIDTH*0.4475,
    width:SCREEN_WIDTH*0.4475,
    borderRadius:10
},

listHeader:{
    fontSize:16,
    color:colors.grey2,
    paddingBottom:25,
    marginLeft:12,
    marginTop:10
},

textView:{
    height:SCREEN_WIDTH*0.4475,
    width:SCREEN_WIDTH*0.4475,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(52,52,52,0.3)'
}










})