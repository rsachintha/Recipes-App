import React from "react";
import{
    View,
    Image,
    Text
} from 'react-native';

import { colors, FONTS, SIZES } from "../global/styles";

const Viewers = ({viewersList}) => {
if(viewersList?.lenght == 0){
    return(
         <View
         style={{
             alignItems: 'center',
             justifyContent: 'center'
         }}
         >
          <Text
          style={{
             color: colors.lightGray2,
             fontSize:14
          }}
          >
              Be the first one to try this
          </Text>
         </View>
    )
} else if (viewersList?.lenght <=4){
    return(
         <View>
             {/*Profile*/}
             <View
             style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:  'flex-end',
                marginBottom: 10
             }}
             >
             {
                 viewersList?.map((item,index) => (
                            <View
                            key={index}
                            style={{
                                height:50,
                                width:50,
                                marginLeft: index == 0 ? 0 : -20
                            }}
                            >
                         <Image 
                         source={item.profilePic}
                         style={{
                             width:50,
                             height:50,
                             borderRadius:25
                         }}
                         />
                            </View>
                         ))
             }
             </View>

             {/*Text*/}
             <Text
             style={{
                 color: colors.lightGray2,
                 textAlign: 'right',
                 fontSize:14,
                 lineHeight: 18
             }}
             >
                 {viewersList?.lenght} people
             </Text>
             <Text
             style={{
                 color: colors.lightGray2,
                 textAlign: 'right',
                 fontSize:14,
                 lineHeight: 18
             }}
             >
                 Already try this !
             </Text>
         </View>
    )
} else {
    return(
     <View>
         {/*Profile*/}
         <View
         style={{
             flexDirection: 'row',
             alignItems: 'center',
             justifyContent: 'flex-end',
             marginBottom: 10
         }}
         >
          {
              viewersList?.map((item, index)=>{
                  if(index <=2){
                   return(
                      <View
                      key={index}
                      style={{
                          height: 50,
                          width: 50,
                          marginLeft: index == 0 ? 0 : -20
                      }}
                      >
                      <Image 
                      source={item.profilePic}
                      style={{
                          width: 50,
                          height: 50,
                          borderRadius: 25
                      }}
                      />
                      </View>
                   )
                  }
                  if(index == 3){
                      return(
                        <View
                        key={index}
                        style={{
                            height: 50,
                            width : 50,
                            alignItems: 'center',
                            justifyContent : 'center',
                            marginLeft : -20,
                            borderRadius : 25,
                            backgroundColor: colors.buttons
                        }}
                        >
                         <Text
                         style={{
                              color: colors.white,
                              fontSize:14
                         }}
                         >
                             {viewersList?.lenght - 3}+
                             </Text>   
                        </View>
                      )
                  }
                })
          }
         </View>
         {/*Text*/}
         <Text
             style={{
                 color: colors.lightGray2,
                 textAlign: 'right',
                 fontSize:14,
                 lineHeight: 18
             }}
             >
                 {viewersList?.lenght} people
             </Text>
             <Text
             style={{
                 color: colors.lightGray2,
                 textAlign: 'right',
                 fontSize:14,
                 lineHeight: 18
             }}
             >
                 Already try this !
             </Text>
     </View>
    )
}
    
}

export default Viewers;