import React from "react";

import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import { SignInScreen } from "../screens/authScreens/SignInScreen";

import HomeScreen from "../screens/HomeScreen";
import Recipe from "../screens/Recipe";
import RootClientTabs from "./ClientTabs";
import DrawerNavigator from "./DrawerNavigator";
import { CreateAccountScreen } from "../screens/authScreens/CreateAccountScreen";

import SearchComponent from "../components/SearchComponent";
import Details from "../components/Details";


const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen 
            name ="SignInWelcomeScreen"
            component = {SignInWelcomeScreen}
            options ={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}
            />
            <Auth.Screen 
            name ="SignInScreen"
            component = {SignInScreen}
            options ={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}
            />
            <Auth.Screen 
            name ="CreateAccountScreen"
            component = {CreateAccountScreen}
            options ={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}
            />
            
            <Auth.Screen 
            name ="DrawerNavigator"
            component = {DrawerNavigator}
            options ={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}
            />
           <Auth.Screen 
            name ="Recipe"
            component = {Recipe}
            options ={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}
            />
            <Auth.Screen 
            name ="SearchComponent"
            component = {SearchComponent}
            options ={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}
            />
            <Auth.Screen 
            name ="Details"
            component = {Details}
            options ={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            }}
            />              
        </Auth.Navigator>
    )
}