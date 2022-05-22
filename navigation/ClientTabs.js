import React from "react";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { colors } from "../global/styles";

import { Icon } from "react-native-elements"

import HomeScreen from '../screens/HomeScreen'

import SearchScreen from "../screens/SearchScreen";
import BookmarkedRecipeScreen from "../screens/BookmarkedRecipeScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import ClientStack from "./clientStack";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){

    return(
        <ClientTabs.Navigator
        tabBarOptions ={{
            activeTintColor : colors.buttons
        }}
        >
            <ClientTabs.Screen 
               name="HomeScreen"
               component={HomeScreen}
               options={
                   {
                       headerShown: false,
                       tabBarLabel : "Home",
                       tabBarIcon:({color,size})=>(
                           <Icon
                           name="home"
                           type="material"
                           color={color}
                           size={size}
                           />
                       )
                   }
               }
            />
            <ClientTabs.Screen 
               name="SearchScreen"
               component={ClientStack}
               options={
                   {
                       headerShown: false,
                       tabBarLabel : "Search",
                       tabBarIcon:({color,size})=>(
                           <Icon
                           name="search"
                           type="material"
                           color={color}
                           size={size}
                           />
                       )
                   }
               }
            />
            <ClientTabs.Screen 
               name="BookmarkedRecipeScreen"
               component={BookmarkedRecipeScreen}
               options={
                   {
                       headerShown: false,
                       tabBarLabel : "Collections",
                       tabBarIcon:({color,size})=>(
                           <Icon
                           name="bookmark"
                           type="material"
                           color={color}
                           size={size}
                           />
                       )
                   }
               }
            />
            <ClientTabs.Screen 
               name="MyAccount"
               component={MyAccountScreen}
               options={
                   {
                       headerShown: false,
                       tabBarLabel : "My Account",
                       tabBarIcon:({color,size})=>(
                           <Icon
                           name="person"
                           type="material"
                           color={color}
                           size={size}
                           />
                       )
                   }
               }
            />
            
        </ClientTabs.Navigator>
    )
}

