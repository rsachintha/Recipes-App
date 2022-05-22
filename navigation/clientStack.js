import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultsScreen";
import RecipeHomeScreen from "../screens/RecipeHomeScreen";

const ClientSearch = createStackNavigator()
export default function ClientStack(){
    return(
        <ClientSearch.Navigator>
            <ClientSearch.Screen
            name="SearchScreen"
            component={SearchScreen}
            options ={
                ()=>({
                    headerShown:false
                })
            }
            />
            <ClientSearch.Screen
            name="SearchResultScreen"
            component={SearchResultScreen}
            options ={
                ()=>({
                    headerShown:false
                })
            }
            />
            <ClientSearch.Screen
            name="RecipeHomeScreen"
            component={RecipeHomeScreen}
            options ={
                ()=>({
                    headerShown:false
                })
            }
            />
        </ClientSearch.Navigator>
    )
}

const styles = StyleSheet.create({})